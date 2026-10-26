"""Hedcut v2: hi-res weighted Voronoi stippling with feature emphasis.
usage: python3 hedcut2.py <src.jpg> <out_prefix> [n_points]
"""
import sys, numpy as np, cv2
from scipy.spatial import cKDTree

src, outp = sys.argv[1], sys.argv[2]
N = int(sys.argv[3]) if len(sys.argv) > 3 else 22000
S = 2  # supersample
img0 = cv2.imread(src)
x0, y0, x1, y1 = 375, 285, 995, 875
img = img0[y0:y1, x0:x1].copy()
h0, w0 = img.shape[:2]

# --- segmentation with hints ---
mask = np.full((h0, w0), cv2.GC_PR_BGD, np.uint8)
mask[:, :6] = cv2.GC_BGD; mask[:, -6:] = cv2.GC_BGD; mask[:8, :] = cv2.GC_BGD
# probable FG: body ellipse
cv2.ellipse(mask, (w0 // 2 - 25, 240), (175, 210), 0, 0, 360, cv2.GC_PR_FGD, -1)   # head
cv2.rectangle(mask, (10, 380), (w0 - 40, h0 - 1), cv2.GC_PR_FGD, -1)               # shoulders
# definite FG: face core + shirt/chest
cv2.ellipse(mask, (w0 // 2 - 30, 210), (95, 130), 0, 0, 360, cv2.GC_FGD, -1)
cv2.rectangle(mask, (200, 380), (440, h0 - 1), cv2.GC_FGD, -1)
bgd = np.zeros((1, 65), np.float64); fgd = np.zeros((1, 65), np.float64)
cv2.grabCut(img, mask, None, bgd, fgd, 10, cv2.GC_INIT_WITH_MASK)
fg = np.where((mask == cv2.GC_FGD) | (mask == cv2.GC_PR_FGD), 1, 0).astype(np.uint8)
n, lab, stats, _ = cv2.connectedComponentsWithStats(fg)
if n > 1:
    big = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA]); fg = (lab == big).astype(np.uint8)
fg = cv2.morphologyEx(fg, cv2.MORPH_CLOSE, np.ones((15, 15), np.uint8))
fg = cv2.morphologyEx(fg, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
inv = (1 - fg).astype(np.uint8); n2, lab2, st2, _ = cv2.connectedComponentsWithStats(inv)
for i in range(1, n2):
    xx, yy, ww, hh, a = st2[i]
    if xx > 0 and yy > 0 and xx + ww < w0 and yy + hh < h0: fg[lab2 == i] = 1

# upsample everything
W, H = w0 * S, h0 * S
img = cv2.resize(img, (W, H), interpolation=cv2.INTER_CUBIC)
fgf = cv2.resize(fg.astype(np.float32), (W, H), interpolation=cv2.INTER_LINEAR)
soft = cv2.GaussianBlur(fgf, (0, 0), 2.5 * S)
cv2.imwrite(outp + "_mask.png", (soft * 255).astype(np.uint8))

# --- tone ---
L = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)[:, :, 0]
clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
L = clahe.apply(L).astype(np.float32) / 255.0
blur = cv2.GaussianBlur(L, (0, 0), 3 * S)
L = np.clip(L + 0.9 * (L - blur), 0, 1)       # unsharp: crisper features
L = cv2.bilateralFilter(L, 9, 0.06, 4 * S)
dark = 1.0 - L
t0 = 0.25
rho = np.clip((dark - t0) / (1 - t0), 0, 1) ** 1.95
# feature edges (thin)
g = (np.clip(L, 0, 1) * 255).astype(np.uint8)
e1 = cv2.Canny(cv2.GaussianBlur(g, (0, 0), 1.7 * S), 34, 90).astype(np.float32) / 255
e1 = cv2.GaussianBlur(e1, (0, 0), 0.9 * S)
# emphasise edges in face region more than clothes
yy, xx = np.mgrid[0:H, 0:W]
face_c = ((xx - (w0 // 2 - 30) * S) / (150 * S)) ** 2 + ((yy - 210 * S) / (190 * S)) ** 2
face_w = np.clip(1.4 - face_c, 0.35, 1.0)
rho = np.clip(rho + 0.95 * e1 * face_w, 0, 1)
# calm the clothing a little so the face leads
below = np.clip((yy / H - 0.55) / 0.15, 0, 1)
rho = rho * (1 - 0.42 * below)
# bottom dissolve
t = yy / H
fade = np.clip((1.0 - t) / 0.26, 0, 1) ** 1.5
rho = rho * soft * fade
rho = np.clip(rho, 0, 0.92)
cv2.imwrite(outp + "_density.png", (255 - rho / 0.92 * 255).astype(np.uint8))

# --- stippling on a 1/1 grid of the supersampled image, subsampled for speed ---
step = 1
ys, xs = np.mgrid[0:H:step, 0:W:step]
P = np.stack([xs.ravel() + 0.5, ys.ravel() + 0.5], 1)
w = rho[::step, ::step].ravel().astype(np.float64)
keep = w > 2e-3
P, w = P[keep], w[keep]
rng = np.random.default_rng(11)
idx = rng.choice(len(P), size=N, replace=False, p=w / w.sum())
pts = P[idx] + rng.uniform(-0.5, 0.5, (N, 2))
for it in range(40):
    _, a = cKDTree(pts).query(P, workers=-1)
    sw = np.bincount(a, weights=w, minlength=N)
    sx = np.bincount(a, weights=w * P[:, 0], minlength=N)
    sy = np.bincount(a, weights=w * P[:, 1], minlength=N)
    ok = sw > 0
    newp = pts.copy(); newp[ok, 0] = sx[ok] / sw[ok]; newp[ok, 1] = sy[ok] / sw[ok]
    shift = np.abs(newp - pts).mean(); pts = newp
    if shift < 0.03: break
print("iterations", it + 1, "shift", round(float(shift), 4))
local = cv2.GaussianBlur(rho, (0, 0), 2.0)[np.clip(pts[:, 1].astype(int), 0, H - 1), np.clip(pts[:, 0].astype(int), 0, W - 1)]
rmin, rmax = 0.75, 2.35
r = rmin + (rmax - rmin) * np.clip(local / 0.92, 0, 1) ** 0.8
np.save(outp + "_pts.npy", np.c_[pts, r])

# SVG in original (650-ish) coordinate space, 1 decimal
sc = 1.0 / S
parts = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w0} {h0}"><g fill="currentColor">']
for (x, y), rr in zip(pts, r):
    parts.append(f'<circle cx="{x*sc:.1f}" cy="{y*sc:.1f}" r="{rr*sc:.2f}"/>')
parts.append('</g></svg>')
open(outp + ".svg", "w").write("".join(parts))
canvas = np.full((H, W), 255, np.uint8)
for (x, y), rr in zip(pts, r):
    cv2.circle(canvas, (int(x * 16), int(y * 16)), max(1, int(rr * 16)), 18, -1, lineType=cv2.LINE_AA, shift=4)
cv2.imwrite(outp + "_preview.png", canvas)
print("viewBox", w0, h0, "points", len(pts))

# compact SVG: dots as zero-length round-capped strokes, bucketed by width
buckets = np.linspace(rmin, rmax, 6)
bi = np.clip(np.digitize(r, buckets) - 1, 0, 4)
paths = []
for b in range(5):
    sel = pts[bi == b] * sc
    if len(sel) == 0: continue
    width = (buckets[b] + buckets[b + 1]) * sc  # diameter in output units
    d = "".join(f"M{x:.1f} {y:.1f}h0" for x, y in sel)
    paths.append(f'<path d="{d}" stroke-width="{width:.2f}"/>')
svg2 = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w0} {h0}" fill="none" stroke="currentColor" stroke-linecap="round">'
        + "".join(paths) + "</svg>")
open(outp + "_compact.svg", "w").write(svg2)
print("compact bytes", len(svg2))

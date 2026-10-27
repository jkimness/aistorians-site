# usage: python3 scripts/covers.py <outdir>, then render the SVGs to PNG (any browser) and save as WebP
"""Brand-style generative covers (navy, coral, cream line art) for essays whose original art is missing."""
import math, random
W, H = 1920, 1080
NAVY_C, NAVY, NAVY_E = "#0f3357", "#0a2b4a", "#072038"
CORAL, CORAL_D, CREAM = "#ec8a6c", "#c9694f", "#f3eee4"

def bg(extra_defs=""):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
<defs><radialGradient id="g" cx="50%" cy="40%" r="75%"><stop offset="0" stop-color="{NAVY_C}"/><stop offset="0.55" stop-color="{NAVY}"/><stop offset="1" stop-color="{NAVY_E}"/></radialGradient>{extra_defs}</defs>
<rect width="{W}" height="{H}" fill="url(#g)"/>'''

def smooth(rng, k=4):
    ph = [rng.uniform(0, 2*math.pi) for _ in range(k)]
    amp = [rng.uniform(0.4, 1.0) / (i + 1) for i in range(k)]
    return lambda t: sum(a * math.sin((i + 2) * t + p) for i, (a, p) in enumerate(zip(amp, ph)))

def path_closed(pts):
    d = f"M{pts[0][0]:.1f},{pts[0][1]:.1f}" + "".join(f"L{x:.1f},{y:.1f}" for x, y in pts[1:]) + "Z"
    return d

# ---------- 1. tree rings: Create a Tradition ----------
def rings(seed=4):
    rng = random.Random(seed)
    cx, cy = 960, 455
    out = [bg()]
    # ring radii with year to year variation
    radii, r = [], 6.0
    for i in range(52):
        w = (9.5 - i * 0.07) * (0.55 + 0.9 * rng.random())
        r += max(2.2, w)
        radii.append(r)
    scale = 330 / radii[-1]
    radii = [x * scale for x in radii]
    shape = smooth(rng, 5)
    for i, rr in enumerate(radii):
        local = smooth(random.Random(seed * 100 + i), 3)
        pts = []
        for k in range(360):
            t = 2 * math.pi * k / 360
            f = 1 + 0.028 * shape(t) * (0.4 + rr / 330) + 0.01 * local(t)
            pts.append((cx + rr * f * math.cos(t) * 1.06, cy + rr * f * math.sin(t)))
        decade = (i + 1) % 10 == 0
        col, sw, op = (CREAM, 2.6, 0.95) if decade else (CORAL, 1.5, 0.55 + 0.4 * (i / len(radii)))
        out.append(f'<path d="{path_closed(pts)}" fill="none" stroke="{col}" stroke-width="{sw}" stroke-opacity="{op:.2f}" stroke-linejoin="round"/>')
    # bark
    pts = []
    bark = smooth(rng, 6)
    for k in range(720):
        t = 2 * math.pi * k / 720
        rr = radii[-1] * (1 + 0.028 * shape(t) * 1.4) + 14 + 4 * bark(t * 3) + rng.uniform(-1.2, 1.2)
        pts.append((cx + rr * math.cos(t) * 1.06, cy + rr * math.sin(t)))
    out.append(f'<path d="{path_closed(pts)}" fill="none" stroke="{CORAL}" stroke-width="7" stroke-linejoin="round"/>')
    # dendrochronology measuring line with ticks at decade rings
    ang = math.radians(-28)
    x0, y0 = cx, cy
    x1, y1 = cx + (radii[-1] + 70) * math.cos(ang) * 1.06, cy + (radii[-1] + 70) * math.sin(ang)
    out.append(f'<line x1="{x0}" y1="{y0}" x2="{x1:.1f}" y2="{y1:.1f}" stroke="{CREAM}" stroke-width="2"/>')
    for i, rr in enumerate(radii):
        if (i + 1) % 10 == 0:
            px, py = cx + rr * math.cos(ang) * 1.06 * (1 + 0.028 * shape(ang) * (0.4 + rr / 330)), cy + rr * math.sin(ang) * (1 + 0.028 * shape(ang) * (0.4 + rr / 330))
            nx, ny = -math.sin(ang), math.cos(ang)
            out.append(f'<line x1="{px - 11*nx:.1f}" y1="{py - 11*ny:.1f}" x2="{px + 11*nx:.1f}" y2="{py + 11*ny:.1f}" stroke="{CREAM}" stroke-width="2"/>')
    out.append(f'<circle cx="{x1:.1f}" cy="{y1:.1f}" r="7" fill="{CREAM}"/>')
    out.append(f'<circle cx="{cx}" cy="{cy}" r="4" fill="{CREAM}"/>')
    out.append("</svg>")
    return "\n".join(out)

# ---------- 2. strata and a core sample: We Are All Historians ----------
def strata(seed=11):
    rng = random.Random(seed)
    out = []
    core_x, core_w, top, bottom = 960, 132, 300, 860
    defs = f'<clipPath id="core"><rect x="{core_x - core_w/2}" y="{top}" width="{core_w}" height="{bottom - top}" rx="0"/></clipPath>'
    out.append(bg(defs))
    layers = []
    n = 30
    for k in range(n):
        base = 380 + k * (470 / n) + rng.uniform(-3, 3)
        f = smooth(random.Random(seed * 50 + k), 4)
        amp = 10 + 26 * (k / n)
        fold = 38 * (1 - k / n)
        pts = []
        for x in range(-20, W + 21, 12):
            t = x / W * 2 * math.pi
            y = base + amp * f(t) * 0.35 - fold * math.exp(-((x - 960) / 520) ** 2)
            pts.append((x, y))
        layers.append(pts)
    # faint fills between alternate layers for depth
    for k in range(0, n - 1, 2):
        a, b = layers[k], layers[k + 1]
        d = "M" + " L".join(f"{x:.1f},{y:.1f}" for x, y in a) + " L" + " L".join(f"{x:.1f},{y:.1f}" for x, y in reversed(b)) + "Z"
        out.append(f'<path d="{d}" fill="{CORAL}" fill-opacity="0.045"/>')
    for k, pts in enumerate(layers):
        d = "M" + " L".join(f"{x:.1f},{y:.1f}" for x, y in pts)
        op = 0.85 - 0.5 * (k / n)
        out.append(f'<path d="{d}" fill="none" stroke="{CORAL}" stroke-width="{1.7 if k % 6 else 3}" stroke-opacity="{op:.2f}"/>')
    # the core: the same layers, read in cream
    out.append(f'<g clip-path="url(#core)"><rect x="{core_x - core_w/2}" y="{top}" width="{core_w}" height="{bottom - top}" fill="{NAVY_E}" fill-opacity="0.85"/>')
    for k, pts in enumerate(layers):
        d = "M" + " L".join(f"{x:.1f},{y + 0:.1f}" for x, y in pts)
        out.append(f'<path d="{d}" fill="none" stroke="{CREAM}" stroke-width="{2 if k % 6 else 3.4}" stroke-opacity="0.95"/>')
    out.append("</g>")
    out.append(f'<rect x="{core_x - core_w/2}" y="{top}" width="{core_w}" height="{bottom - top}" fill="none" stroke="{CREAM}" stroke-width="3"/>')
    out.append(f'<ellipse cx="{core_x}" cy="{top}" rx="{core_w/2}" ry="12" fill="{NAVY}" stroke="{CREAM}" stroke-width="3"/>')
    # rising thread: what the machine takes from the record
    out.append(f'<line x1="{core_x}" y1="{top - 14}" x2="{core_x}" y2="150" stroke="{CREAM}" stroke-width="2" stroke-dasharray="2 10" stroke-linecap="round"/>')
    out.append(f'<path d="M{core_x},118 L{core_x+10},140 L{core_x},162 L{core_x-10},140 Z" fill="{CORAL}"/>')
    out.append("</svg>")
    return "\n".join(out)

# ---------- 3. the AI factory: Why Jensen Never Says Data Center ----------
def factory(seed=21):
    rng = random.Random(seed)
    out = [bg()]
    gy = 760  # ground
    x0, teeth, tw, th, body = 640, 6, 120, 92, 150
    # sawtooth roof outline and walls
    d = f"M{x0},{gy} L{x0},{gy - body}"
    for i in range(teeth):
        xs = x0 + i * tw
        d += f" L{xs + tw * 0.78},{gy - body - th} L{xs + tw * 0.78},{gy - body} L{xs + tw},{gy - body}"
    xe = x0 + teeth * tw
    d += f" L{xe},{gy}"
    out.append(f'<path d="{d}" fill="{NAVY_E}" fill-opacity="0.55" stroke="{CORAL}" stroke-width="3" stroke-linejoin="round"/>')
    # glowing roof glazing (the north light windows)
    for i in range(teeth):
        xs = x0 + i * tw + tw * 0.78
        out.append(f'<line x1="{xs:.1f}" y1="{gy - body - th + 8:.1f}" x2="{xs:.1f}" y2="{gy - body - 4:.1f}" stroke="{CREAM}" stroke-width="5" stroke-opacity="0.9"/>')
    # window grid
    for r in range(3):
        for c in range(teeth * 2):
            wx, wy = x0 + 18 + c * (tw / 2), gy - body + 22 + r * 40
            lit = rng.random() < 0.72
            out.append(f'<rect x="{wx:.1f}" y="{wy:.1f}" width="30" height="20" fill="{CREAM if lit else NAVY}" fill-opacity="{0.85 if lit else 1}" stroke="{CORAL}" stroke-width="1.2"/>')
    # chimney
    cx, cw, ctop = xe - 70, 46, 270
    out.append(f'<rect x="{cx}" y="{ctop}" width="{cw}" height="{gy - body - th - ctop + 40}" fill="{NAVY_E}" stroke="{CORAL}" stroke-width="3"/>')
    for k in range(5):
        yy = ctop + 30 + k * 60
        out.append(f'<line x1="{cx}" y1="{yy}" x2="{cx + cw}" y2="{yy}" stroke="{CORAL}" stroke-width="1.4" stroke-opacity="0.6"/>')
    # plume of tokens: a drifting stream that settles into an orderly grid
    sx, sy = cx + cw / 2, ctop - 10
    for i in range(170):
        t = i / 170
        x = sx - 700 * t ** 1.1 + 18 * math.sin(i * 0.7) * (1 - t) + rng.uniform(-5, 5) * (1 - t)
        y = sy - 100 * math.sin(t * math.pi * 0.85) - 30 * t + rng.uniform(-7, 7) * (1 - t)
        r = 7.5 * (1 - t) + 2.2
        col = CREAM if rng.random() < 0.6 - 0.3 * t else CORAL
        out.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r:.1f}" fill="{col}" fill-opacity="{0.95 - 0.35 * t:.2f}"/>')
    # settled grid at the far end of the plume
    gx0, gy0 = sx - 950, sy - 120
    for r in range(4):
        for c in range(9):
            out.append(f'<circle cx="{gx0 + c * 26:.1f}" cy="{gy0 + r * 26:.1f}" r="3.2" fill="{CORAL}" fill-opacity="0.75"/>')
    # ground
    out.append(f'<line x1="380" y1="{gy}" x2="1700" y2="{gy}" stroke="{CORAL}" stroke-width="3"/>')
    for k in range(18):
        xx = 400 + k * 74
        out.append(f'<line x1="{xx}" y1="{gy + 14}" x2="{xx + 30}" y2="{gy + 14}" stroke="{CORAL}" stroke-width="1.5" stroke-opacity="0.5"/>')
    out.append("</svg>")
    return "\n".join(out)

if __name__ == "__main__":
    import sys
    od = sys.argv[1]
    for name, fn in [("cover-tradition", rings), ("cover-historians", strata), ("cover-ai-factory", factory)]:
        open(f"{od}/{name}.svg", "w").write(fn())
        print("wrote", name)

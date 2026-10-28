# CLAUDE.md, aistorians.com v3

이 저장소를 여는 모든 Claude 세션은 이 파일과 BUILD_STATE.md 를 먼저 읽는다.

## 무엇
- aistorians.com 의 새 사이트. Astro 7 정적 사이트, 영어가 기본 주소, 한국어는 /ko 아래 짝 페이지.
- 한국어 공개 스위치: `site.config.json` 의 `koLive`. 지금은 false (영문만 공개, 2026-10-28). false 면 /ko 페이지는 만들어지지만 postbuild 가 지우고, 언어 토글, 한국어 짝 링크, hreflang ko, sitemap 의 /ko 가 모두 빠진다. 한국어 번역이 끝나면 true 로 바꾼다.
- 사이트의 1번 일: 제이킴(Jae Kim, 제이킴모건) 섭외. 글과 파사챗은 그 증거. (볼트 `Aistorians/00 Strategy/2026-10-20 aistorians.com 사이트 전략 v1.md`)
- 디자인 방향 (대표님 지시): WSJ 스타일에 모더니즘 한 방울. 신문 1면 문법(마스트헤드, 괘선, 키커, 단 구분) 위에 12단 그리드, 악센트 색 하나.
- 홈 헤드라인 (대표님 문장, 2026-10-27): "Know where the AI world is heading. Build your solution based on the future." 두 번째 문장은 악센트 색.
- 지금 상태와 남은 결정은 BUILD_STATE.md.

## 명령
- `npm install` 한 번
- `npm run dev` 로컬 미리보기 (http://localhost:4321)
- `npm run build` 정적 파일을 `dist/` 에 만든다. 이게 통과해야 배포한다.
- `node scripts/make-preview.mjs` claude.ai 아티팩트 미리보기용 사본을 `preview/` 에 만든다 (배포용 아님).
- 배포: main 에 푸시하면 GitHub Actions 가 GitHub Pages 로 올린다 (`.github/workflows/deploy.yml`, 저장소 jkimness/aistorians-site). 처음 이전은 DEPLOY.md.

## 구조
- 글: `src/content/essays/en/<slug>.md`, `src/content/essays/ko/<slug>.md`. 같은 파일 이름이면 한영 짝이다 (언어 토글과 hreflang 이 자동으로 이어진다).
- 데일리 띵크: `src/content/thoughts/en/<slug>.md`
- 글 스키마: `src/content.config.ts` (title, deck, date, lang, ep, cover, coverAlt, draft)
- 시리즈 개념은 없다 (대표님 2026-10-27). 모든 글은 날짜순, 최신 먼저. ai storians 회차만 `ep: N` 을 넣고, 제목 앞에 "ai storians ep.N" 으로만 보인다 (`src/components/EpTitle.astro`). 시즌 목차, 화 번호 라벨, 연재별 묶음은 만들지 않는다.
- 서비스: `/services`, `/ko/services`. AI Business Integration (옛 Advisory 내용), Advertising & Marketing, Speaker & Lectures. 강연 페이지 `/speaking` 은 따로 남는다. `/advisory` 는 없앴다.
- 문의 폼: `/contact`. 문의 종류(라디오)를 고르고, 강연을 고르면 행사 칸이 열린다 (CSS `:has`, 자바스크립트 없음).
- 페이지 카피: `src/i18n/copy.ts` (카피 v2 원문, 2026-10-20 대표님 OK). UI 낱말: `src/i18n/index.ts`
- 사이트 사실값 (채널 주소, 메일, Web3Forms 키): `src/site.ts`
- 디자인 토큰과 전체 스타일: `src/styles/global.css`, 글 페이지: `src/styles/essay.css`
- 페이지 틀: `src/components/pages/*.astro`, 주소 파일: `src/pages/`

## 주소 규칙 (바꾸지 않는다)
- 영문 글: `/ai-storians/<slug>` 그대로. 스퀘어스페이스 주소와 같다. 링크드인, 섭스택에 이미 걸려 있다.
- 한국어 글: `/ko/essays/<slug>`, slug 는 영문과 같게.
- 데일리 띵크: `/daily-thought/<slug>`
- 정식 호스트는 `https://www.aistorians.com` (지금 바깥 링크가 www 를 쓴다).
- 끝에 슬래시 없음 (`trailingSlash: 'never'`, `build.format: 'file'`).

## 디자인 규칙
- 색: 종이 #fcfcfa, 잉크 #14171c, 악센트 #b93a22 하나, 밤색(남색) #0b2a48 은 파사챗 띠와 바닥글에만. 커버 그림의 남색, 산호색과 맞춘 값이다.
- 서체: 제목과 본문 Newsreader + Noto Serif KR, 메뉴와 버튼 Pretendard, 날짜와 키커 JetBrains Mono. 한글은 기울이지 않는다.
- 둥근 알약 버튼, 테두리 카드, 그림자 금지. 구분은 괘선으로 한다.
- 제이킴 사진은 소개 페이지의 컬러 사진 한 장만 (`src/assets/jae-portrait.jpg`, 대표님 2026-10-27). 홈, 강연, 글 바이라인 어디에도 인물 사진이나 헤드컷을 넣지 않는다.
- 파사챗: 로고 `src/components/FireLogo.astro` (브랜드 키트 SVG), 키 비주얼 `src/assets/fireside-kv.webp` (볼트 FIRE Sidechat/Brand). 키 비주얼은 파사챗 페이지에만.
- 기본 공유 카드 `public/og-default.png` 는 글자만 있는 카드다. 바꾸려면 `scripts/og.mjs` 를 고치고 `node scripts/og.mjs`.
- 클라이언트 자바스크립트 없음. 모바일 메뉴는 details 요소, 읽기 진행 막대는 CSS 스크롤 애니메이션.

## 영문 먼저 (대표님 2026-10-27)
- 영문판 레이아웃과 카피를 먼저 끝내고, 확정된 영문에서 한국어를 번역한다. 두 번 일하지 않는다.
- 영문 확정 전에는 `copy.ts` 의 ko 블록과 한국어 UI 낱말을 고치지 않는다. 레이아웃과 구조 변경은 두 언어에 같이 들어가니 괜찮다.

## 글과 카피 규칙 (볼트 CLAUDE.md 와 같다)
- 에세이 본문은 발행본 그대로 (voice lock). 오타는 목록으로 보고만 하고 고치지 않는다.
- 사이트 카피: 대시, 가운뎃점, 낫표 금지. 한국어 랜딩과 버튼은 존댓말, 에세이는 독백체.
- 확인 안 된 수식어와 숫자 금지. 숫자는 실측된 것만.
- 파사챗 페이지에 모건 레터 링크와 종목 이야기 금지 (바닥글에서도 `Footer.astro` 가 파사챗 페이지일 때 모건 레터를 뺀다). 에세이 본문에 파사챗, LK 언급 금지. LK 공개 범위는 카이스트 학석박사, 빅테크 반도체 엔지니어까지.
- 새 카피는 `copy.ts` 에 `DRAFT` 주석을 달고 대표님 OK 를 받는다. OK 받은 줄은 `approved 날짜` 로 바꾼다.
- 그림을 새로 만들 때: 실제 기사, 게시물, 사람을 흉내 낸 가짜 스크린샷이나 사진은 만들지 않는다. 표지 그림은 `scripts/covers.py` 처럼 브랜드 색 선화로.

## 하지 않는 것
- DNS 의 기존 MX, TXT 레코드는 절대 건드리지 않는다 (jkim@aistorians.com 메일). 사이트 이전 때는 A 레코드와 www CNAME 만 바꾸고, 새 TXT 는 GitHub 도메인 인증 한 줄만 추가한다.
- 분석 스크립트, 쿠키 배너는 묻기 전에 넣지 않는다.
- 비밀값 커밋 금지.

## 세션 규칙
- 한 세션 한 일. 같은 문제를 두 번 고쳐도 안 되면 멈추고 BUILD_STATE.md 에 인계를 쓴다.
- 끝낼 때 BUILD_STATE.md 를 고치고 커밋한다.

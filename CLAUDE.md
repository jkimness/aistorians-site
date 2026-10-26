# CLAUDE.md, aistorians.com v3

이 저장소를 여는 모든 Claude 세션은 이 파일과 BUILD_STATE.md 를 먼저 읽는다.

## 무엇
- aistorians.com 의 새 사이트. Astro 7 정적 사이트, 영어가 기본 주소, 한국어는 /ko 아래 짝 페이지.
- 사이트의 1번 일: 제이킴(Jae Kim, 제이킴모건) 섭외. 글과 파사챗은 그 증거. (볼트 `Aistorians/00 Strategy/2026-10-20 aistorians.com 사이트 전략 v1.md`)
- 디자인 방향 (대표님 지시): WSJ 스타일에 모더니즘 한 방울. 신문 1면 문법(마스트헤드, 괘선, 키커, 단 구분, 헤드컷 초상) 위에 12단 그리드, 악센트 색 하나.
- 지금 상태와 남은 결정은 BUILD_STATE.md.

## 명령
- `npm install` 한 번
- `npm run dev` 로컬 미리보기 (http://localhost:4321)
- `npm run build` 정적 파일을 `dist/` 에 만든다. 이게 통과해야 배포한다.
- `node scripts/make-preview.mjs` claude.ai 아티팩트 미리보기용 사본을 `preview/` 에 만든다 (배포용 아님).

## 구조
- 글: `src/content/essays/en/<slug>.md`, `src/content/essays/ko/<slug>.md`. 같은 파일 이름이면 한영 짝이다 (언어 토글과 hreflang 이 자동으로 이어진다).
- 데일리 띵크: `src/content/thoughts/en/<slug>.md`
- 글 스키마: `src/content.config.ts` (title, deck, date, lang, series s1 / investing / standalone, chapter, cover, coverAlt, draft)
- 페이지 카피: `src/i18n/copy.ts` (카피 v2 원문, 2026-10-20 대표님 OK). UI 낱말: `src/i18n/index.ts`
- 사이트 사실값 (채널 주소, 메일, 폼 주소): `src/site.ts`
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
- 헤드컷 초상: `public/jae-hedcut.svg`. 사진이 바뀌면 `scripts/hedcut.py` 로 다시 만든다.
- 클라이언트 자바스크립트 없음. 모바일 메뉴는 details 요소, 읽기 진행 막대는 CSS 스크롤 애니메이션.

## 글과 카피 규칙 (볼트 CLAUDE.md 와 같다)
- 에세이 본문은 발행본 그대로 (voice lock). 오타는 목록으로 보고만 하고 고치지 않는다.
- 사이트 카피: 대시, 가운뎃점, 낫표 금지. 한국어 랜딩과 버튼은 존댓말, 에세이는 독백체.
- 확인 안 된 수식어와 숫자 금지. 숫자는 실측된 것만.
- 파사챗 페이지에 모건 레터 링크와 종목 이야기 금지. 에세이 본문에 파사챗, LK 언급 금지. LK 공개 범위는 카이스트 학석박사, 빅테크 반도체 엔지니어까지.
- 새 카피는 `copy.ts` 에 `DRAFT` 주석을 달고 대표님 OK 를 받는다.

## 하지 않는 것
- DNS 의 MX, TXT 레코드는 절대 건드리지 않는다 (jkim@aistorians.com 메일). 사이트 이전 때도 A 레코드와 www CNAME 만 바꾼다.
- 분석 스크립트, 쿠키 배너는 묻기 전에 넣지 않는다.
- 비밀값 커밋 금지.

## 세션 규칙
- 한 세션 한 일. 같은 문제를 두 번 고쳐도 안 되면 멈추고 BUILD_STATE.md 에 인계를 쓴다.
- 끝낼 때 BUILD_STATE.md 를 고치고 커밋한다.

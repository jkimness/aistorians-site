# POSTING.md, 글 올리는 법

AI 도움 없이도 올릴 수 있게 쓴 설명서다. Claude Code 에게는 "POSTING.md 대로 이 글 올려 줘" 라고 하면 된다.

## 1. 영문 에세이
1. 파일 만들기: `src/content/essays/en/<slug>.md`. slug 는 소문자 영어와 하이픈 (예: `own-the-road`). 주소가 된다: `/ai-storians/<slug>`.
2. 맨 위에 아래 머리말을 붙인다.

```
---
title: "Own the Road"
deck: "한 줄 요약. 검색 결과 설명으로도 쓰인다. 160자 안."
date: 2026-10-15
lang: en
series: s1            # s1 (ai storians), investing (AI 시대를 읽는 투자), standalone (연재 밖)
chapter: 7            # 연재 안 순서. standalone 이면 지운다
cover: "./images/own-the-road/01_slack_teams.webp"   # 없으면 이 줄을 지운다. 남색 숫자 커버가 자동으로 그려진다
coverAlt: ""
---
```

3. 머리말 아래에 본문을 붙인다. 줄바꿈은 그대로 살아난다. 소제목은 `## 제목`.
4. 그림: `src/content/essays/en/images/<slug>/` 에 넣고 본문에 `![](./images/<slug>/파일.webp)`. png, jpg 도 된다. 크기는 빌드가 알아서 줄인다.

## 2. 한국어 에세이
- 위와 같고 폴더만 `src/content/essays/ko/`, `lang: ko`. 주소는 `/ko/essays/<slug>`.
- 영문판과 같은 slug 로 만들면 두 글이 자동으로 짝이 된다 (글 안의 "Read in English" 링크, hreflang).
- 본문은 브런치 발행본 그대로. 고치지 않는다.

## 3. 데일리 띵크 (영문)
`src/content/thoughts/en/<slug>.md`

```
---
title: "What Google's legendary engineer taught me"
deck: "한 줄 요약"
date: 2026-08-29
lang: en
---
```

## 4. 확인하고 올리기
1. `npm run dev` 로 http://localhost:4321 에서 본다.
2. `npm run build` 가 오류 없이 끝나는지 본다.
3. 커밋하고 푸시하면 배포된다 (배포 설정 뒤부터).

## 5. 공개 전 숨기기
머리말에 `draft: true` 를 넣으면 사이트, RSS, sitemap 어디에도 나오지 않는다.

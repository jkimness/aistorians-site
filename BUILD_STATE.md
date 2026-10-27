# BUILD_STATE.md

마지막 갱신: 2026-10-27 저녁 (Cowork 세션, 대표님 피드백 2차 반영)

## 2026-10-27 피드백 2차 (반영 끝, 미리보기 Version 4)
- 헤드컷 초상, 무대 사진, 바이라인 동그라미 사진을 모두 뺐다. 제이킴 사진은 소개 페이지 컬러 사진 한 장 (IG 소개 01 사진 크롭, `src/assets/jae-portrait.jpg`). 스퀘어스페이스 원본 "251115-프로필15853_보정" 은 볼트에 없어서 못 찾았다. 다르면 볼트에 넣어 주시면 바꾼다.
- 모토 "Written by a human, on the record." 와 홈 부제를 뺐다. 홈 헤드라인은 대표님 문장: "Know where the AI world is heading. Build your solution based on the future." (둘째 문장 악센트 색, 데스크톱에서 문장마다 한 줄).
- 이력 3칸(Series, Career, Show)을 링크 3칸으로: YouTube @firesidechathq, Substack Morgan Letter, Threads @jkimmorgan. 유튜브 핸들은 채널 UCgN3d1yHYdS9qQOHDnDHViw 와 같음을 확인했다.
- What I do 를 Services 로: AI Business Integration (옛 Advisory 내용, "곧 열립니다" 삭제), Advertising & Marketing, Speaking & Lectures. 서비스 페이지 /services, /ko/services 새로 만들고 /advisory 는 없앴다. 메뉴: 글, 파사챗, 서비스, 강연, 소개. 머리 버튼은 Contact.
- 시리즈 개념 삭제: 홈의 시즌 1 목차, 글 페이지의 연재별 묶음, 화 번호 라벨, 커버 숫자를 모두 뺐다. 글 목록은 날짜순 하나. ai storians 회차는 제목에만 "ai storians ep.N". 투자 두 편과 Jensen 글은 표시 없음. 이전 글/다음 글도 날짜순.
- 파사챗 페이지: FIRE사이드챗 로고(브랜드 키트 SVG)와 키 비주얼(벽난로 일러스트, 글자 없는 원본)을 올렸다. "라이브" 는 유튜브 라이브 링크 (youtube.com/@firesidechathq/live) 로 해석해 버튼을 달았다. 홈 파사챗 띠에도 로고와 라이브 버튼. 파사챗 페이지 바닥글에서는 모건 레터 링크를 뺀다 (볼트 규칙).
- 문의 폼: 문의 종류 4개 (AI Business Integration, Advertising & Marketing, Speaking & Lectures, 기타). 강연을 고르면 행사 칸이 열린다. 이름, 이메일, 내용만 필수.
- 기본 공유 카드(og-default.png)를 헤드컷 없이 다시 그렸다 (글자만, scripts/og.mjs).

## DRAFT, 대표님 OK 필요 (copy.ts 에 DRAFT 표시)
1. 한국어 헤드라인: "AI 세상이 어디로 가는지 먼저 읽으세요. / 그 미래를 기준으로 솔루션을 만드세요." (바닥글 문구로도 씀)
2. Advertising & Marketing 카피 전부 (홈 카드, 서비스 페이지 소개, 문의 항목 3개, 버튼). 사실 근거는 승인된 이력 (에델만, 잭슨 도슨, 10년) 만 썼다.
3. AI Business Integration 한국어판 (승인된 영어 Advisory 카피의 번역)
4. 이름: Speaking & Lectures / 강연과 강의, 그리고 승인 문장에 lectures/강의 추가
5. 일반 마무리 문구: "Have a project or an event in mind?" / "준비 중인 프로젝트나 행사가 있으신가요?" (강연 페이지는 기존 승인 문구 그대로)
6. 문의 페이지 제목, 소개, 문의 종류 이름, "Tell me more / 문의 내용", 머리 버튼 "Contact / 문의하기"
7. 서비스 페이지 소개, 글 페이지 소개, 메타 설명, "Live on YouTube / 유튜브 라이브"


## 한 일 (2026-10-26)
- [x] 진단: 라이브 스퀘어스페이스 사이트와 v2 시안(코드 블록)은 둥근 버튼, 테두리 카드 3열, 네이비와 테라코타라서 흔한 랜딩 문법이었다.
- [x] 새 디자인: WSJ 신문 1면 문법 + 모더니즘 그리드. 마스트헤드 "ai storians", 모토 "Written by a human, on the record." (Content & Copy v1), 헤드컷 점묘 초상 (IG 소개 사진 01 로 알고리즘 생성).
- [x] Astro 7 로 전체 구축: 홈, 글(시즌 1 목차, AI 시대를 읽는 투자, 연재 밖 글), 에세이 페이지, 파사챗, 강연, 자문, 소개, 섭외 문의, 데일리 띵크, 404. 한영 모두 (40 페이지).
- [x] 실제 글 이전: 영문 11편 + 데일리 띵크 1편 (스퀘어스페이스 백업 JSON, 2026-10-19), 한국어 12편 (볼트 KR 발행 최종본). 본문은 손대지 않았다.
- [x] SEO 기본: 페이지별 title, description, canonical, hreflang 짝, Open Graph, JSON-LD (WebSite, Person, Article), sitemap, RSS 2개 (/rss.xml, /ko/rss.xml), robots.txt, 404.
- [x] 미리보기 아티팩트 (비공개): https://claude.ai/artifact/9c72pfWu5D6SDYetgBGcCQ

## 2026-10-27 대표님 답
- 스퀘어스페이스에서 이 사이트로 옮긴다. 도메인은 그대로 (등록처 스퀘어스페이스 유지, 레코드만 변경, 메일 그대로).
- 메뉴에 강연 넣는다 (이미 들어가 있음).
- 새로 쓴 카피 OK (copy.ts 에 approved 2026-10-27 표시).
- 빠진 그림은 "찾거나 만들어라": 커버가 없던 세 글에 브랜드 색(남색, 산호색, 크림색)으로 새 커버를 그렸다. 나이테 (Create a Tradition), 지층과 시추 코어 (We Are All Historians, KR 01화 포함), 톱니 지붕 공장과 토큰 연기 (Why Jensen). 원본 스크린샷과 본문 그림은 대표님 맥(Desktop, Downloads)에서 찾을 예정, 폴더 허락 대기.
- 호스팅: GitHub Pages (무료, DNS 는 A 4줄과 www CNAME 만). 배포 파일 준비 끝: .github/workflows/deploy.yml, public/CNAME, scripts/postbuild.mjs.
- 섭외 폼: Web3Forms 로 연결 (무료). Access Key 만 넣으면 켜진다 (src/site.ts). 감사 페이지 /contact-thanks, /ko/contact-thanks.
- 한국어 12편: 이전 날 한 번에 공개 (추천안대로).

## 남은 것
| # | 일 | 누가 |
|---|---|---|
| 1 | DEPLOY.md 1부: 코드 풀고 GitHub 저장소, Pages 배포 | 맥의 Claude Code (프롬프트 DEPLOY.md 에 있음) |
| 2 | DEPLOY.md 2부: 스퀘어스페이스 DNS 다섯 줄 | 대표님 (10분) |
| 3 | Web3Forms Access Key | 대표님 메일함 (1분) |
| 4 | 원본 그림 찾기 (스크린샷 6, tradition 2~5, Jensen 본문 2, 데일리 띵크 3) | Claude, 맥 폴더 허락 뒤 |
| 5 | 투자 글 slug 확정 (임시 money-arrives-first, marketplace-owners-win) | 영문판 생길 때 |
| 6 | 위 DRAFT 카피 OK | 대표님 |

## 빠진 그림 (볼트에 원본이 없어 이번에 못 넣음, 라이브 스퀘어스페이스에는 있다)
- 영문: be-a-messenger 스크린샷 3, create-a-tradition tradition-1~5 (커버 포함), own-the-road 02_common_rare (영문판), we-are-all-historians 스크린샷 (커버), why-jensen 3장 (커버 포함), 데일리 띵크 3장
- 한국어: we-are-all-historians 1, be-a-messenger 2, create-a-tradition 10 (원고에 [이미지] 자리만 있음). be-a-storyteller 는 원고에 그림 위치 표시가 없어 커버만 넣었다.
- 커버가 없는 글은 남색 바탕에 산호색 점 커버가 자동으로 그려진다 (숫자 없음). 지금은 모든 글에 커버가 있다.
- 해결: 대표님이 그림 파일을 볼트에 넣어 주시거나, Claude 네트워크 허용 목록에 images.squarespace-cdn.com 을 추가하면 받아서 넣는다.

## 원고에서 본 것 (고치지 않음, voice lock)
- KR 01화 본문: "적었다.To Elon" 줄바꿈이 붙어 있다 (브런치 수집 때 생긴 것으로 보임).
- KR 02화 부제: "메신저가 되야한다" (맞춤법은 "돼야 한다"). 제목 끝 마침표 "메신저가 되어라." 도 원본 그대로 두었다.
- KR 원고의 단독 번호 줄 ("1. 그런데, 이상한 일이 하나 더 있다") 은 브런치 소제목으로 보고 소제목 서식(##)으로만 바꿨다. 글자는 그대로다.

## 이전 순서 (1번 결정이 나면)
1. GitHub 저장소 만들고 푸시 (대표님 계정, Claude Code 로)
2. GitHub Actions 로 Pages 배포, github.io 주소에서 확인
3. 빠진 그림 채우기, 섭외 폼 서비스 연결
4. DNS: 스퀘어스페이스 도메인 설정에서 A 레코드 4개와 www CNAME 만 GitHub 값으로. MX, TXT 는 손대지 않는다. 바꾼 뒤 메일 테스트
5. 확인 뒤 스퀘어스페이스 웹사이트 요금제 자동 갱신 끄기 (도메인은 그대로, 2027-09-18 갱신 예정이었음)
6. 구글 서치 콘솔, 네이버 서치어드바이저 등록과 sitemap 제출
7. aistorians-publish 스킬의 "웹사이트" 칸을 스퀘어스페이스 화면 작업에서 이 저장소 마크다운 추가로 바꾼다

## 다음 세션은
DRAFT 카피 OK 를 받고 approved 로 바꾼 뒤, DEPLOY.md 1부부터. 끝나면 2부를 대표님과 함께.

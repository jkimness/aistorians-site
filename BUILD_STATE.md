# BUILD_STATE.md

마지막 갱신: 2026-10-31 (Site Desk, RSS 링크 수정## 2026-10-31 Site Desk (Grok Bot)
- Live check: all 20 sitemap pages return 200. aistorians.com sends you to www. rss.xml, sitemap-index.xml, robots.txt, canonical links and share images all return 200. No links to Squarespace are left on any page.
- Fixed and deployed: the essay links in /rss.xml ended with a slash and gave 404. Now they have no slash and all return 200.
- FAQ and definition draft: branch site-desk/faq-schema-2026-10-31 is pushed to GitHub but NOT merged. It adds a short definition and a few questions after five essays, plus FAQ data for search. The essay text does not change. It waits for your OK on the new copy and 5 lines of CSS.
- Still open (no change): Web3Forms key, GitHub domain check TXT record, Search Console and Naver sitemap, Korean translation, missing images, Squarespace plan cancel (you do this one).

)

## 2026-10-31 Site Desk, later the same night (Grok Bot)
- Merged and live: a short definition and a few questions now sit after five essays (We Are All Historians, Create a Tradition, Be a Host, Why Jensen, Be a Messenger). Each page also carries FAQ data for search that matches the visible text. Essay text did not change, except the next line.
- Be a Messenger: two FAQ answers at the end of the essay were reworded with your OK, so they only say what the essay says.
- Checks done: build passes, FAQ data matches the page on all five, every page, link and image works, no Squarespace links. Live: all five essays, home, rss.xml (all links 200), sitemap (20 pages), robots.txt return 200. Plain http also opens the site.
- Still open (no change): Web3Forms key, Search Console and Naver sitemap, GitHub domain check TXT record, Korean translation (including the new labels Definition and Questions), missing images, Squarespace plan cancel (you do this one).

## 2026-10-31 Site Desk, image rescue (Grok Bot)
- Saved everything from the old Squarespace site before the plan is canceled: 66 files (essay images, thumbnails, the original About portrait, 2 favicons) and the page data. The list is at /workspace/aistorians-site/rescued-assets/MANIFEST.md on my computer, not in this repo.
- Live now: 16 original images added back into their places (Be a Messenger 3, Create a Tradition 5, Own the Road 1, We Are All Historians 1, Why Jensen 3, Daily Thought 3). Essay text did not change.
- Added a small page at /be-a-messenger that sends readers to /ai-storians/be-a-messenger (the old Squarespace address). It is not in the sitemap.
- Covers and the About photo stay as they are, by your decision. The original About portrait was saved but is not used.
- Still missing: Korean manuscript images (We Are All Historians 1, Be a Messenger 2, Create a Tradition 10). They were never on Squarespace, so they need Brunch or your Mac. The English image gap in the list below is now closed.

## 2026-10-28 배포 (대표님: "이정도면 영문 홈페이지 바로 배포하자")
- 영문 카피 OK 로 보고 copy.ts 영문 DRAFT 를 approved 2026-10-28 로 바꿨다. 한국어는 그대로 보류.
- 영문만 공개: `site.config.json` 의 koLive 가 false. /ko 페이지, 언어 토글, 한국어로 읽기 링크, hreflang ko, sitemap 의 /ko 가 모두 빠진다. 공개 페이지 20개.
- 저장소 https://github.com/jkimness/aistorians-site (공개, 브랜치 main). GitHub Pages, Source 는 GitHub Actions, Custom domain www.aistorians.com. 첫 배포 성공.
- GitHub 상태 점검 (pages/health): www 는 아직 스퀘어스페이스를 가리킨다. 루트 도메인에 MX 가 있다 (메일, 그대로 둔다).
- 다음: DNS (대표님, DEPLOY.md 2부), DNS 가 바뀌면 Claude 가 HTTPS 강제를 켜고 확인.
- 스퀘어스페이스: 새 사이트가 열리는 것을 확인한 뒤 웹사이트 요금제만 해지한다 (자동 갱신 끄기). 도메인 aistorians.com 과 메일(구글 워크스페이스로 보임) 구독은 그대로 둔다. DNS 는 계속 스퀘어스페이스 도메인 설정에서 관리한다.


## 2026-10-27 피드백 2차 (반영 끝, 미리보기 Version 4)
- 헤드컷 초상, 무대 사진, 바이라인 동그라미 사진을 모두 뺐다. 제이킴 사진은 소개 페이지 컬러 사진 한 장 (IG 소개 01 사진 크롭, `src/assets/jae-portrait.jpg`). 스퀘어스페이스 원본 "251115-프로필15853_보정" 은 볼트에 없어서 못 찾았다. 다르면 볼트에 넣어 주시면 바꾼다.
- 모토 "Written by a human, on the record." 와 홈 부제를 뺐다. 홈 헤드라인은 대표님 문장: "Know where the AI world is heading. Build your solution based on the future." (둘째 문장 악센트 색, 데스크톱에서 문장마다 한 줄).
- 이력 3칸(Series, Career, Show)을 링크 3칸으로: YouTube @firesidechathq, Substack Morgan Letter, Threads @jkimmorgan. 유튜브 핸들은 채널 UCgN3d1yHYdS9qQOHDnDHViw 와 같음을 확인했다.
- What I do 를 Services 로: AI Business Integration (옛 Advisory 내용, "곧 열립니다" 삭제), Advertising & Marketing, Speaking & Lectures. 서비스 페이지 /services, /ko/services 새로 만들고 /advisory 는 없앴다. 메뉴: 글, 파사챗, 서비스, 강연, 소개. 머리 버튼은 Contact.
- 시리즈 개념 삭제: 홈의 시즌 1 목차, 글 페이지의 연재별 묶음, 화 번호 라벨, 커버 숫자를 모두 뺐다. 글 목록은 날짜순 하나. ai storians 회차는 제목에만 "ai storians ep.N". 투자 두 편과 Jensen 글은 표시 없음. 이전 글/다음 글도 날짜순.
- 파사챗 페이지: FIRE사이드챗 로고(브랜드 키트 SVG)와 키 비주얼(벽난로 일러스트, 글자 없는 원본)을 올렸다. "라이브" 는 유튜브 라이브 링크 (youtube.com/@firesidechathq/live) 로 해석해 버튼을 달았다. 홈 파사챗 띠에도 로고와 라이브 버튼. 파사챗 페이지 바닥글에서는 모건 레터 링크를 뺀다 (볼트 규칙).
- 문의 폼: 문의 종류 4개 (AI Business Integration, Advertising & Marketing, Speaking & Lectures, 기타). 강연을 고르면 행사 칸이 열린다. 이름, 이메일, 내용만 필수.
- 기본 공유 카드(og-default.png)를 헤드컷 없이 다시 그렸다 (글자만, scripts/og.mjs).

## 진행 방식: 영문 먼저 (대표님 2026-10-27)
- 영문 레이아웃과 카피를 먼저 확정하고, 그다음 한국어를 번역한다. 그때까지 한국어 카피는 손대지 않는다 (지금 한국어 화면은 옛 번역이라 무시해도 된다).
- 그래서 한국어 DRAFT 확인 요청 (헤드라인 번역 등) 은 보류. 번역 때 같이 고칠 것: 한국어 FAQ "예산 범위를 골라 주세요" (폼에 예산 칸이 없다), 한국어 마케팅 카드의 에델만 문장 (영문에서 뺐다).

## 2026-10-27 저녁 대표님 수정 + 영문 카피 전수 정리 (미리보기 Version 5)
- 대표님 지시: 마케팅 카드의 "Built on a decade of brand stories at Edelman and Jackson Dawson." 삭제 (서비스 페이지의 같은 문장도 삭제), Speaking & Lectures 를 Speaker & Lectures 로, 홈 히어로의 Read the essays 링크 삭제.
- 영문 카피 전수 정리 (에세이 본문 제외): 쉬운 말, 짧은 문장, 같은 행동에는 같은 버튼 이름 (Get in touch). 사실과 숫자는 그대로. 바뀐 줄은 copy.ts 에 DRAFT copy review 표시.
- 고친 사실 오류: 강연 FAQ "Share your budget range in the form" 인데 폼에 예산 칸이 없었다. "in your message" 로.

## 영문 DRAFT, 대표님 OK 필요
1. 버튼: Start a conversation 을 Get in touch 로 (홈, 서비스, 마무리)
2. AI Business Integration 카드와 소개: "Put AI to work in your business..." / "AI is changing how customers find, trust, and remember a company..."
3. Advertising & Marketing 카드, 소개, 항목 문구
4. 서비스 항목 이름 Research for going global (옛 Global go-to-market research), 그 밖의 서비스 문장 다듬기
5. 강연 FAQ 질문을 문장으로 (Where do you speak? 등), 소개 페이지 문단 다듬기, Why storians 의 "Drop the H." 삭제
6. 문의: Message, Send message, 완료 문구 "within two business days"
7. 뉴스레터 "New essays by email, once a week. Free.", 섹션 이름 Latest essays, 바닥글 Follow, 파사챗 소개 "co-hosted with a semiconductor engineer"


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
| 1 | DEPLOY.md 1부: GitHub 저장소, Pages 배포 | 끝 (2026-10-28) |
| 2 | DEPLOY.md 2부: 스퀘어스페이스 DNS 다섯 줄 (www CNAME 은 jkimness.github.io) | 대표님 (10분) |
| 2a | DNS 뒤 HTTPS 강제 켜기, 라이브 확인 | Claude |
| 2b | 스퀘어스페이스 웹사이트 요금제 해지 (도메인, 메일은 유지) | 대표님, 라이브 확인 뒤 |
| 3 | Web3Forms Access Key | 대표님 메일함 (1분) |
| 4 | 원본 그림 찾기 (스크린샷 6, tradition 2~5, Jensen 본문 2, 데일리 띵크 3) | Claude, 맥 폴더 허락 뒤 |
| 5 | 투자 글 slug 확정 (임시 money-arrives-first, marketplace-owners-win) | 영문판 생길 때 |
| 6 | 영문 카피 OK (2026-10-28 배포로 확정). 남은 레이아웃 손질은 라이브 보면서 | 대표님 |
| 7 | 확정된 영문으로 한국어 번역 | Claude, 6번 뒤 |

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
2026-10-28 인계: DNS 전환은 새 Claude Code 세션이 맥의 Aside 로 한다. 순서와 되돌리기는 볼트 `Aistorians/03 Site/2026-10-28 인계 aistorians.com DNS 전환.md`.
영문 피드백을 마저 받아 영문을 확정하고 (copy.ts DRAFT 를 approved 로), 한국어를 번역한다. 그다음 DEPLOY.md 1부, 2부.

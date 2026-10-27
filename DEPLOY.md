# DEPLOY.md, aistorians.com 이전 순서

도메인은 그대로다. aistorians.com 은 지금처럼 스퀘어스페이스에 등록된 채로 두고, 웹사이트를 가리키는 레코드만 바꾼다. 메일(jkim@aistorians.com)의 MX, TXT 레코드는 손대지 않는다. 기존 글 주소(/ai-storians/<slug>, /daily-thought/<slug>, /about)는 그대로 열린다.

## 0. 준비물
- GitHub 계정 (무료). GitHub Pages 무료 요금은 저장소가 공개여야 한다. 글은 어차피 공개라 괜찮고, 비밀값은 저장소에 두지 않는다.
- 맥에 Node 22.23.4 이상 (24 권장)과 Claude Code.

## 1부: 코드 풀고 GitHub 에 배포 (맥의 Claude Code 가 한다)
터미널에서 `cd ~/Projects && claude` 로 열고 아래를 그대로 붙여 넣는다.

```
볼트의 "Aistorians/03 Site/aistorians-v3-2026-10-27.zip" (경로: ~/Library/Mobile Documents/com~apple~CloudDocs/JK Obsidian/Aistorians/03 Site/) 을 ~/Projects 에 풀어서 ~/Projects/aistorians-v3 를 만들어 줘. 그 안의 CLAUDE.md, BUILD_STATE.md, DEPLOY.md 를 읽고 DEPLOY.md 1부를 순서대로 해 줘. DNS 는 절대 건드리지 마.
1. node -v 가 22.23.4 이상인지 확인 (아니면 설치 방법을 안내)
2. npm install, npm run build 가 통과하는지 확인
3. gh auth status 확인 (로그인이 필요하면 내가 직접 gh auth login 을 하도록 안내만)
4. 공개 저장소 aistorians-site 를 만들고 (이미 있으면 aistorians-web) main 을 푸시
5. 저장소 Pages 설정: Source 는 GitHub Actions, Custom domain 은 www.aistorians.com
6. Actions 의 Deploy to GitHub Pages 가 성공했는지 확인
7. curl -sI -H "Host: www.aistorians.com" http://185.199.108.153/ai-storians/own-the-road 가 200 인지 확인
8. 2부 표의 www CNAME 에 넣을 값 (내 GitHub 사용자 이름.github.io) 을 알려 주고 BUILD_STATE.md 를 고친 뒤 커밋, 푸시
```

## 2부: DNS 바꾸기 (대표님이 스퀘어스페이스 화면에서, 10분)
1. account.squarespace.com 로그인, Domains, aistorians.com, DNS, DNS Settings
2. 지금 화면 전체를 스크린샷으로 남긴다 (되돌릴 때 필요)
3. Squarespace Defaults 묶음만 빨간 휴지통으로 지운다. Google Workspace (MX) 묶음과 TXT 레코드는 그대로 둔다.
4. Custom Records 에서 Add Record 로 아래 다섯 줄을 넣는다.

| Type | Name | Data |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | (GitHub 사용자 이름).github.io |

선택: AAAA, @, 2606:50c0:8000::153 / 2606:50c0:8001::153 / 2606:50c0:8002::153 / 2606:50c0:8003::153

5. 저장. 보통 몇 분에서 몇 시간, 길면 24~48시간 걸린다 (스퀘어스페이스 안내).
6. GitHub 저장소 Settings, Pages 에서 DNS check 가 통과하면 Enforce HTTPS 를 켠다.
7. 확인: 시크릿 창에서 www.aistorians.com, aistorians.com (www 로 넘어가야 한다), 기존 글 주소 하나 (예: /ai-storians/own-the-road). jkim@aistorians.com 으로 메일 한 통 보내 받는지 확인.

되돌리기: 넣은 Custom Records 를 지우고 Squarespace Defaults 를 스크린샷대로 다시 넣으면 스퀘어스페이스 사이트로 돌아간다. 스퀘어스페이스 사이트는 그동안 그대로 살아 있다.

## 3부: 마무리
- GitHub 도메인 인증 (권장): GitHub 계정 Settings, Pages, Add a domain 에 aistorians.com 을 넣으면 TXT 레코드 하나를 보여 준다. 그 TXT 를 Custom Records 에 추가만 한다 (기존 TXT 는 그대로). 남이 이 도메인을 GitHub 에서 가로채지 못하게 막는다.
- 섭외 폼: web3forms.com 에서 jkim@aistorians.com 으로 Access Key 를 받아 src/site.ts 의 web3formsKey 에 넣고 푸시. 테스트 문의 한 건 보내 보기. 키가 비어 있는 동안 폼은 방문자의 메일 앱을 연다.
- 며칠 확인한 뒤 스퀘어스페이스 웹사이트 요금제의 자동 갱신을 끈다 (2027-09-18 갱신 예정이었음). 도메인은 따로 갱신되니 영향 없다. 스퀘어스페이스 도움말: 웹사이트 구독을 취소해도 도메인은 만료되지 않는다.
- 구글 서치 콘솔, 네이버 서치어드바이저에 https://www.aistorians.com/sitemap-index.xml 제출.
- aistorians-publish 스킬의 "웹사이트 EN" 칸을 이 저장소에 마크다운 한 파일 추가로 바꾼다 (POSTING.md).

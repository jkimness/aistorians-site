// Page copy. Source of truth: vault "03 Site/aistorians.com 카피 v2.md" (approved 2026-10-20)
// and "0 Aistorians Website - Content & Copy v1.md" (verified lines, marked v1).
// Lines approved by 대표님 on 2026-10-27 are marked 'approved 2026-10-27'.
// Lines written for the 2026-10-27 restructure (Services, no series, new headline) are marked DRAFT
// until 대표님 OKs them. Unmarked lines are the 2026-10-20 approved copy.
import type { Lang } from './index';

export const COPY = {
  en: {
    meta: {
      home: { title: 'Jae Kim, AI speaker and writer of ai storians', description: 'Know where the AI world is heading. Build your solution based on the future. AI business integration, advertising and marketing, and talks by Jae Kim.' }, // description DRAFT
      services: { title: 'Services, Jae Kim', description: 'AI business integration, advertising and marketing, and speaking. Three ways to work with Jae Kim.' }, // DRAFT
      speaking: { title: 'Speaking, Jae Kim', description: 'Talks on AI, records, trust, and judgment for teams, leaders, and client events. In Korean or English.' },
      contact: { title: 'Contact Jae Kim', description: 'AI business integration, advertising and marketing, speaking and lectures. Tell me what you have in mind.' }, // DRAFT
      about: { title: 'About Jae Kim', description: 'Writer of ai storians, former PR strategist at Edelman, co-host of FIRE사이드챗.' },
      writing: { title: 'Writing, ai storians', description: "Weekly essays on what AI means for the people who don't build it. In English and Korean, newest first." }, // DRAFT
      podcast: { title: 'FIRE사이드챗, the podcast', description: 'A Korean tech news show with an engineer. New episodes every Wednesday and Friday.' },
    },
    home: {
      kicker: 'Jae Kim',
      // approved 2026-10-27 (대표님 wording). The second sentence is set in the accent color.
      headline: ['Know where the AI world is heading.', 'Build your solution based on the future.'],
      primary: 'Start a conversation', // approved 2026-10-20 (was the advisory CTA)
      secondary: 'Read the essays',
      // approved 2026-10-27: links only
      links: [
        { key: 'youtube', label: 'YouTube', name: '@firesidechathq' },
        { key: 'morganLetter', label: 'Substack', name: 'Morgan Letter' },
        { key: 'threads', label: 'Threads', name: '@jkimmorgan' },
      ],
      servicesTitle: 'Services', // approved 2026-10-27 (was 'What I do')
      services: [
        // text: approved advisory lede (2026-10-20), now the AI Business Integration service
        { key: 'ai', title: 'AI Business Integration', text: 'AI is changing how a company is found, trusted, and remembered. I help leadership teams decide what their story is in the AI era, and then build the system that tells it.', link: 'See how it works' },
        // DRAFT
        { key: 'marketing', title: 'Advertising & Marketing', text: 'Advertising and partnership inquiries, and marketing consulting for brands. Built on a decade of brand stories at Edelman and Jackson Dawson.', link: 'See the details' },
        // approved speaking text (2026-10-20) with 'lectures' added: DRAFT
        { key: 'speaking', title: 'Speaking & Lectures', text: "Keynotes, lectures, and workshops on what AI changes, and what it never will. For teams, leaders, and clients who don't build AI but have to live with it.", link: 'See talks' },
      ],
      podcastTitle: 'FIRE사이드챗',
      podcastText: 'A Korean tech news show with an engineer. New episodes every Wednesday and Friday.',
      // DRAFT: the general call, now that services are more than speaking
      finalTitle: 'Have a project or an event in mind?',
      finalText: "Tell me what you need. I'll reply within two business days.",
      finalButton: 'Start a conversation',
    },
    newsletter: {
      lines: ['Information is cheap. Access is nearly free.', 'Interpretation is expensive. Trust is the most expensive.'],
      sub: 'One letter a week. Free.',
      button: 'Subscribe free',
    },
    services: {
      kicker: 'Jae Kim',
      title: 'Services',
      lede: 'Three ways to work together. Each one starts from the same question: where is the AI world heading, and what should you build for it?', // DRAFT
      ai: {
        id: 'ai-business-integration',
        title: 'AI Business Integration',
        // approved 2026-10-20 (the former Advisory page)
        lede: 'AI is changing how a company is found, trusted, and remembered. I help leadership teams decide what their story is in the AI era, and then build the system that tells it.',
        helpTitle: 'What I help with',
        help: [
          { title: 'Story strategy for the AI era', text: 'Positioning, narrative, and leadership messaging for a market where anything can be generated, and "who said it" matters more than ever.' },
          { title: 'AI content systems', text: 'Explainer videos, short-form channels, and production pipelines that a small team can actually run every week.' },
          { title: 'Global go-to-market research', text: 'Market, competitor, and channel research for brands going abroad, built so the team can decide, not just read.' },
        ],
        howTitle: 'How we work',
        how: [
          { title: 'First conversation', text: 'What you sell, who buys it, and what is in the way.' },
          { title: 'Research', text: 'Your market, your rivals, and how AI already describes you.' },
          { title: 'Build', text: 'The story, the content, and the system that keeps shipping it.' },
          { title: 'Review', text: "What moved, what didn't, and what to change next." },
        ],
        whoTitle: "Who it's for",
        who: "CEOs, founders, and marketing leads who don't build AI, but whose business already lives in its era.",
        note: 'Delivered with nesscre8tive × AI Storians. Selected work is available on request.',
        cta: 'Start a conversation',
      },
      marketing: {
        id: 'advertising-marketing',
        title: 'Advertising & Marketing',
        // DRAFT
        lede: 'Business inquiries, from advertising to brand partnerships. And marketing consulting for brands that need to be found and trusted in the AI era.',
        asksTitle: 'What you can ask about',
        asks: [
          { title: 'Advertising and sponsorship', text: 'Advertising and sponsored content inquiries. Tell me the brand, the audience, and the timing.' },
          { title: 'Brand partnerships', text: 'Collaborations, co-produced content, and events with brands that fit.' },
          { title: 'Marketing consulting', text: 'Positioning, campaigns, and content strategy, built on a decade of PR and brand work at Edelman and Jackson Dawson.' },
        ],
        cta: 'Send a business inquiry',
      },
      speaking: {
        id: 'speaking',
        title: 'Speaking & Lectures',
        lede: "Keynotes, lectures, and workshops on what AI changes, and what it never will. For teams, leaders, and clients who don't build AI but have to live with it.",
        talksTitle: 'Talks',
        more: 'See talks and formats',
        cta: 'Book Jae to speak',
      },
    },
    speaking: {
      kicker: 'Jae Kim',
      title: 'Speaking',
      lede: 'Most AI talks are either too technical or too vague. Mine start from one idea: AI learned everything it knows from human records, so the people who keep good records win. Your team leaves knowing what to do on Monday.',
      talksTitle: 'Talks',
      talks: [
        { n: 1, title: 'We Are All Historians of the AI Era', text: 'Why your records are now an asset, and how to start keeping better ones.', who: 'All staff, general audiences' },
        { n: 2, title: 'What AI Cannot Replace', text: 'The messenger, the host, the tradition, the storyteller. Four roles AI cannot fill, with the brands already winning with them.', who: 'Brand, marketing, and sales teams' },
        { n: 3, title: 'The One Who Can Say Stop', text: 'Judgment in the age of automation. What leaders still have to decide themselves.', who: 'Executives and leadership programs' },
        { n: 4, title: 'Money Arrives First', text: 'How money moves in every technology revolution, and what that tells us about this one. No stock picks.', who: 'Client events at financial firms' },
      ],
      forLabel: 'For',
      formatsTitle: 'Formats',
      formats: ['Keynote, 40 to 60 minutes', 'Workshop, 2 to 3 hours', 'Fireside chat, on stage with your host', 'In Korean or English'],
      bioTitle: 'Speaker bio',
      bio: 'Jae Kim writes ai storians, a weekly essay series on what AI means for the people who don\'t build it, in English and Korean. A former PR strategist at Edelman and communications strategist at Jackson Dawson, Jae spent a decade shaping stories for brands. Today Jae writes, speaks, and co-hosts FIRE사이드챗, a Korean tech news show.',
      faqTitle: 'Questions',
      faq: [
        { q: 'Where?', a: 'In person in Korea and the US, or online.' },
        { q: 'How far ahead?', a: "Four weeks is ideal. Ask anyway if it's sooner." },
        { q: 'Recording?', a: 'Yes, with notice.' },
        { q: 'Fees?', a: 'Share your budget range in the form.' },
      ],
      finalTitle: 'Planning an event?',
      finalText: "Tell me about your audience. I'll reply within two business days.",
      cta: 'Book Jae to speak',
    },
    contact: {
      kicker: 'Jae Kim',
      title: 'Contact', // DRAFT (was 'Book Jae')
      lede: 'Tell me what you have in mind. I read every message myself.', // DRAFT
      typeLabel: 'What is this about?', // DRAFT
      types: { ai: 'AI Business Integration', marketing: 'Advertising & Marketing', speaking: 'Speaking & Lectures', other: 'Something else' },
      speakingTitle: 'For speaking requests', // DRAFT
      fields: {
        org: 'Organization', event: 'Event name', date: 'Date', location: 'Location or online', audience: 'Audience size and who they are',
        language: 'Language', ko: 'Korean', en: 'English', name: 'Name', email: 'Email', phone: 'Phone',
        message: 'Tell me more', // DRAFT
      },
      optional: 'optional',
      button: 'Send request',
      done: "Thank you. Your request is in. You'll hear back soon.",
      direct: 'Prefer email?',
    },
    about: {
      kicker: 'ai storians',
      title: 'About Jae Kim',
      photoAlt: 'Jae Kim',
      paras: [
        'Jae Kim writes about AI and investing, and about the harder question underneath them: not just whether people survive the AI transition, but how they win it.',
        'Jae is the author of ai storians, a weekly essay series in English and Korean built on one idea. AI learned everything it knows from human records, so we are all historians of the AI era now.',
        'Before writing full time, Jae was a PR strategist at Edelman and a communications strategist at Jackson Dawson, shaping stories for brands for a decade.',
        'Jae also writes Morgan Letter, an investing letter in Korean, and co-hosts FIRE사이드챗, a Korean tech news show.',
      ],
      believeTitle: 'What I believe',
      beliefs: [
        { title: 'Human story', text: 'Perfection has no audience. Stories are born from flaws.' },
        { title: 'Trust', text: 'Anything can be generated now. So "who said it" is the last signature left on content.' },
        { title: 'Tradition', text: 'AI can make anything new. The one thing it cannot make is something old.' },
      ],
      whyTitle: 'Why "storians"?',
      why: [
        'Story plus historian. Drop the H. History was never the story of everyone. It was the story of whoever kept the records.',
        'Then AI arrived, and it changed one thing forever: the machines read everything. Every post, every review, every line of code. For the first time in history, ordinary records became the raw material of the most powerful technology on Earth.',
        'The pen is back in everyone\'s hands. The question is who will write.',
      ],
      findTitle: 'Where to find my work',
      ctaTitle: 'Want Jae at your event?',
      cta: 'Book Jae to speak',
    },
    writing: {
      kicker: 'ai storians',
      title: 'Writing',
      lede: "Weekly essays on what AI means for the people who don't build it. In English and Korean, newest first.", // DRAFT
    },
    podcast: {
      kicker: 'Podcast',
      title: 'FIRE사이드챗',
      lede: 'A Korean tech news show with an engineer. New episodes every Wednesday and Friday.',
      // approved 2026-10-27 (translated from strategy v1 3.5)
      about: 'A writer who reached financial independence and a semiconductor engineer talk about tech. Not a stock picking show. A tech news show.',
      hostsTitle: 'Hosts',
      hosts: [
        { name: 'Jae Kim', text: 'Writer of ai storians.' },
        // approved 2026-10-27, inside the agreed disclosure (KAIST BS, MS, PhD; big tech semiconductor engineer)
        { name: 'LK', text: 'KAIST BS, MS, and PhD. Semiconductor engineer at a big tech company.' },
      ],
      listen: 'Listen and watch',
      watchLatest: 'Watch the latest episode',
      live: 'Live', // approved 2026-10-27 ('라이브')
      liveNote: 'Live on YouTube', // DRAFT
      kvAlt: 'FIRE사이드챗 key visual: the two hosts, drawn as characters, in armchairs by a fireplace',
      inKorean: 'The show is in Korean.',
    },
  },
  ko: {
    meta: {
      home: { title: '제이킴모건, AI 강연과 ai storians 연재', description: 'AI 세상이 어디로 가는지 먼저 읽고, 그 미래를 기준으로 솔루션을 만듭니다. AI 비즈니스 통합, 광고와 마케팅, 강연과 강의.' }, // description DRAFT
      services: { title: '서비스, 제이킴모건', description: 'AI 비즈니스 통합, 광고와 마케팅, 강연과 강의. 제이킴모건과 함께 일하는 세 가지 방법.' }, // DRAFT
      speaking: { title: '강연, 제이킴모건', description: '임직원, 리더, 고객 행사를 위한 AI 강연. 기록, 신뢰, 판단. 한국어와 영어.' },
      contact: { title: '문의, 제이킴모건', description: 'AI 비즈니스 통합, 광고와 마케팅, 강연과 강의 문의. 어떤 일인지 알려 주세요.' }, // DRAFT
      about: { title: '제이킴모건 소개', description: 'ai storians 작가, 전 에델만 PR 전략가, FIRE사이드챗 공동 진행.' },
      writing: { title: '글, ai storians', description: 'AI 를 만들지 않는 사람들에게 AI 가 무슨 뜻인지 쓰는 에세이. 한국어와 영어, 최신 글부터.' }, // DRAFT
      podcast: { title: 'FIRE사이드챗', description: '반도체 엔지니어와 함께하는 테크 뉴스 토크쇼. 매주 수요일, 금요일 새 회차.' },
    },
    home: {
      kicker: '제이킴모건',
      // DRAFT 2026-10-27: Korean translation of 대표님 headline
      headline: ['AI 세상이 어디로 가는지 먼저 읽으세요.', '그 미래를 기준으로 솔루션을 만드세요.'],
      primary: '문의하기', // DRAFT
      secondary: '글 읽기',
      links: [
        { key: 'youtube', label: 'YouTube', name: '@firesidechathq' },
        { key: 'morganLetter', label: 'Substack', name: '모건 레터' },
        { key: 'threads', label: 'Threads', name: '@jkimmorgan' },
      ],
      servicesTitle: '서비스',
      services: [
        // DRAFT: Korean of the approved advisory lede
        { key: 'ai', title: 'AI 비즈니스 통합', text: 'AI 는 회사가 발견되고, 신뢰받고, 기억되는 방식을 바꾸고 있습니다. AI 시대에 우리 회사의 이야기가 무엇인지 리더와 함께 정하고, 그 이야기를 전하는 시스템까지 만듭니다.', link: '진행 방식 보기' },
        // DRAFT
        { key: 'marketing', title: '광고와 마케팅', text: '광고와 협업 같은 비즈니스 문의, 그리고 브랜드 마케팅 컨설팅. 에델만과 잭슨 도슨에서 10년 동안 브랜드의 이야기를 만든 경험으로 일합니다.', link: '자세히 보기' },
        // approved speaking text (2026-10-20) with 강의 added: DRAFT
        { key: 'speaking', title: '강연과 강의', text: 'AI 가 바꾸는 것과 끝내 바꾸지 못하는 것에 대한 키노트, 강의, 워크숍. AI 를 만들지는 않지만 AI 와 살아야 하는 임직원, 리더, 고객을 위한 강연입니다.', link: '강연 보기' },
      ],
      podcastTitle: 'FIRE사이드챗',
      podcastText: '반도체 엔지니어와 함께하는 테크 뉴스 토크쇼. 매주 수요일, 금요일 새 회차가 올라옵니다.',
      // DRAFT
      finalTitle: '준비 중인 프로젝트나 행사가 있으신가요?',
      finalText: '필요한 것을 알려 주세요. 영업일 이틀 안에 답장 드립니다.',
      finalButton: '문의하기',
    },
    newsletter: {
      lines: ['정보는 쌉니다. 액세스는 공짜에 가깝습니다.', '해석은 비쌉니다. 신뢰는 가장 비쌉니다.'],
      sub: '일주일에 한 편, 무료로 보내 드립니다.',
      button: '무료 구독',
    },
    services: {
      kicker: '제이킴모건',
      title: '서비스',
      lede: '함께 일하는 세 가지 방법. 모두 같은 질문에서 시작합니다. AI 세상은 어디로 가고 있고, 그 미래를 위해 무엇을 만들어야 하는가.', // DRAFT
      ai: {
        id: 'ai-business-integration',
        title: 'AI 비즈니스 통합',
        // DRAFT: Korean of the approved EN advisory copy below
        lede: 'AI 는 회사가 발견되고, 신뢰받고, 기억되는 방식을 바꾸고 있습니다. AI 시대에 우리 회사의 이야기가 무엇인지 리더와 함께 정하고, 그 이야기를 전하는 시스템까지 만듭니다.',
        helpTitle: '돕는 일',
        help: [
          { title: 'AI 시대의 스토리 전략', text: '무엇이든 생성되는 시장, "누가 말했는가"가 어느 때보다 중요한 시장을 위한 포지셔닝, 내러티브, 리더 메시지.' },
          { title: 'AI 콘텐츠 시스템', text: '설명 영상, 숏폼 채널, 그리고 작은 팀이 매주 실제로 돌릴 수 있는 제작 파이프라인.' },
          { title: '해외 진출 리서치', text: '해외로 나가는 브랜드를 위한 시장, 경쟁사, 채널 리서치. 읽고 끝나는 보고서가 아니라 팀이 결정할 수 있게 만듭니다.' },
        ],
        howTitle: '진행 방식',
        how: [
          { title: '첫 대화', text: '무엇을 팔고, 누가 사고, 무엇이 가로막고 있는지.' },
          { title: '리서치', text: '시장, 경쟁사, 그리고 AI 가 지금 우리 회사를 어떻게 설명하는지.' },
          { title: '구축', text: '이야기, 콘텐츠, 그리고 그것을 계속 내보내는 시스템.' },
          { title: '리뷰', text: '무엇이 움직였고 무엇이 그대로인지, 다음에 무엇을 바꿀지.' },
        ],
        whoTitle: '이런 분께',
        who: 'AI 를 만들지는 않지만, 이미 AI 시대에 사업을 하고 있는 대표, 창업자, 마케팅 리더.',
        note: 'nesscre8tive × AI Storians 와 함께 진행합니다. 사례는 요청하시면 보내 드립니다.',
        cta: '문의하기',
      },
      marketing: {
        id: 'advertising-marketing',
        title: '광고와 마케팅',
        // DRAFT
        lede: '광고부터 브랜드 협업까지, 비즈니스 문의를 받습니다. 그리고 AI 시대에 발견되고 신뢰받아야 하는 브랜드를 위해 마케팅 컨설팅을 합니다.',
        asksTitle: '문의할 수 있는 것',
        asks: [
          { title: '광고와 협찬', text: '광고, 협찬 콘텐츠 문의. 브랜드, 타깃, 시기를 알려 주세요.' },
          { title: '브랜드 협업', text: '결이 맞는 브랜드와의 협업, 공동 제작 콘텐츠, 행사.' },
          { title: '마케팅 컨설팅', text: '포지셔닝, 캠페인, 콘텐츠 전략. 에델만과 잭슨 도슨에서 10년 동안 PR 과 브랜드 일을 한 경험 위에서 돕습니다.' },
        ],
        cta: '비즈니스 문의하기',
      },
      speaking: {
        id: 'speaking',
        title: '강연과 강의',
        lede: 'AI 가 바꾸는 것과 끝내 바꾸지 못하는 것에 대한 키노트, 강의, 워크숍. AI 를 만들지는 않지만 AI 와 살아야 하는 임직원, 리더, 고객을 위한 강연입니다.',
        talksTitle: '강연 메뉴',
        more: '강연과 형식 보기',
        cta: '강연 섭외 문의',
      },
    },
    speaking: {
      kicker: '제이킴모건',
      title: '강연',
      lede: 'AI 강연은 대개 너무 기술적이거나, 너무 뜬구름입니다. 제 강연은 한 가지에서 시작합니다. AI 는 아는 모든 것을 사람의 기록에서 배웠습니다. 그래서 좋은 기록을 가진 사람이 이깁니다. 청중은 월요일에 무엇을 할지 들고 돌아갑니다.',
      talksTitle: '강연 메뉴',
      talks: [
        { n: 1, title: '우리 모두가 AI 시대의 역사학자다', text: '당신의 기록이 왜 자산이 되었는지, 그리고 더 좋은 기록을 어떻게 남기기 시작하는지.', who: '임직원 전체, 일반 청중' },
        { n: 2, title: 'AI 가 대체할 수 없는 것', text: '메신저, 호스트, 전통, 스토리텔러. AI 가 채우지 못하는 네 자리와, 그 자리로 이미 이기고 있는 브랜드들.', who: '브랜드, 마케팅, 영업 조직' },
        { n: 3, title: '자동화를 멈출 수 있는 사람', text: '자동화 시대의 판단. 리더가 여전히 스스로 정해야 하는 것.', who: '경영진, 리더십 과정' },
        { n: 4, title: '돈은 먼저 도착한다', text: '기술 혁명마다 돈이 어떻게 먼저 움직였는지, 그리고 이번에는 무엇을 말해 주는지. 종목 추천은 하지 않습니다.', who: '금융사 고객 행사, 자산가 모임' },
      ],
      forLabel: '청중',
      formatsTitle: '형식',
      formats: ['키노트 40~60분', '워크숍 2~3시간', '대담형 파이어사이드', '한국어 또는 영어'],
      bioTitle: '연사 소개',
      bio: '제이킴모건은 AI 를 만들지 않는 사람들에게 AI 가 무슨 뜻인지 쓰는 에세이 연재 ai storians 의 작가입니다. 에델만 PR 전략가, 잭슨 도슨 커뮤니케이션 전략가로 10년 동안 브랜드의 이야기를 만들었습니다. 지금은 글을 쓰고, 강연하고, 테크 뉴스 토크쇼 FIRE사이드챗을 함께 진행합니다.',
      faqTitle: '자주 묻는 것',
      faq: [
        { q: '어디서 하나요?', a: '한국과 미국 현장, 또는 온라인.' },
        { q: '얼마나 미리?', a: '4주 전이면 좋습니다. 더 급해도 일단 물어 주세요.' },
        { q: '녹화해도 되나요?', a: '미리 말씀해 주시면 됩니다.' },
        { q: '비용은?', a: '문의 폼에 예산 범위를 골라 주세요.' },
      ],
      finalTitle: '행사를 준비하고 계신가요?',
      finalText: '청중에 대해 알려 주세요. 영업일 이틀 안에 답장 드립니다.',
      cta: '강연 섭외 문의',
    },
    contact: {
      kicker: '제이킴모건',
      title: '문의', // DRAFT (was '섭외 문의')
      lede: '어떤 일인지 알려 주세요. 문의는 제가 직접 읽습니다.', // DRAFT
      typeLabel: '어떤 문의인가요?', // DRAFT
      types: { ai: 'AI 비즈니스 통합', marketing: '광고와 마케팅', speaking: '강연과 강의', other: '기타' },
      speakingTitle: '강연 문의라면', // DRAFT
      fields: {
        org: '기관', event: '행사 이름', date: '날짜', location: '장소 또는 온라인', audience: '청중 수와 성격',
        language: '언어', ko: '한국어', en: '영어', name: '이름', email: '이메일', phone: '전화',
        message: '문의 내용', // DRAFT
      },
      optional: '선택',
      button: '문의 보내기', // DRAFT (was '섭외 문의 보내기')
      done: '감사합니다. 문의가 잘 도착했습니다. 곧 답장 드리겠습니다.',
      direct: '메일이 편하신가요?',
    },
    about: {
      kicker: 'ai storians',
      title: '제이킴모건 소개',
      photoAlt: '제이킴모건',
      paras: [
        '제이킴모건은 AI 와 투자에 대해 씁니다. 그리고 그 아래 더 어려운 질문을 붙잡습니다. 사람이 AI 전환을 버텨 내는가가 아니라, 어떻게 이기는가.',
        '한국어와 영어로 매주 연재하는 에세이 ai storians 의 작가입니다. 연재는 한 가지 생각에서 시작했습니다. AI 는 아는 모든 것을 사람의 기록에서 배웠다. 그러니 이제 우리 모두가 AI 시대의 역사학자다.',
        '전업 작가가 되기 전, 에델만에서 PR 전략가로, 잭슨 도슨에서 커뮤니케이션 전략가로 10년 동안 브랜드의 이야기를 만들었습니다.',
        '한국어 투자 레터 모건 레터를 쓰고, 테크 뉴스 토크쇼 FIRE사이드챗을 함께 진행합니다.',
      ],
      believeTitle: 'AI 가 대체할 수 없는 것들',
      beliefs: [
        { title: '인간 서사', text: '완벽함에는 관객이 없다. 이야기는 결함에서 나온다.' },
        { title: '신뢰', text: '무엇이든 생성되는 시대. "누가 말했는가"는 콘텐츠에 남은 마지막 서명이다.' },
        { title: '전통', text: "AI는 무엇이든 새로 만들 수 있다. 하지만 '오래된 것'만은 만들지 못한다." },
      ],
      whyTitle: "왜 '스토리언즈'인가?",
      why: [
        'Story + Historian. 역사는 한 번도 모두의 이야기였던 적이 없다. 기록을 가진 자의 이야기였다.',
        '그리고 AI가 등장했고, 한 가지가 영원히 바뀌었다. 기계가 모든 것을 읽는다. 모든 포스트, 모든 리뷰, 모든 코드 한 줄까지. 역사상 처음으로, 보통 사람의 기록이 지구에서 가장 강력한 기술의 원재료가 됐다.',
        '펜은 다시 모두의 손에 돌아왔다. 문제는, 누가 쓸 것인가다.',
      ],
      findTitle: '다른 곳에서',
      ctaTitle: '행사에 제이킴모건을 모시고 싶으신가요?',
      cta: '강연 섭외 문의',
    },
    writing: {
      kicker: 'ai storians',
      title: '글',
      lede: 'AI 를 만들지 않는 사람들에게 AI 가 무슨 뜻인지 쓰는 에세이. 모든 글을 최신순으로 싣는다.', // DRAFT
    },
    podcast: {
      kicker: '파사챗',
      title: 'FIRE사이드챗',
      lede: '반도체 엔지니어와 함께하는 테크 뉴스 토크쇼. 매주 수요일, 금요일 새 회차가 올라옵니다.',
      about: '미국 주식으로 파이어한 작가와 반도체 엔지니어의 테크 이야기. 종목 추천 쇼가 아니라 테크 뉴스 쇼.',
      hostsTitle: '호스트',
      hosts: [
        { name: '제이킴모건', text: 'ai storians 작가.' },
        // approved 2026-10-27, 공개 범위 안 (카이스트 학석박사, 빅테크 반도체 엔지니어)
        { name: 'LK', text: '카이스트 학사, 석사, 박사. 빅테크 반도체 엔지니어.' },
      ],
      listen: '듣고 보기',
      watchLatest: '최신 회차 보기',
      live: '라이브',
      liveNote: '유튜브 라이브', // DRAFT
      kvAlt: 'FIRE사이드챗 키 비주얼. 벽난로 앞 안락의자에 앉은 두 호스트를 캐릭터로 그린 그림',
      inKorean: '',
    },
  },
} satisfies Record<Lang, unknown>;

export const copy = (lang: Lang) => COPY[lang];

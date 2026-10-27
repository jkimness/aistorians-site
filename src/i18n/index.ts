// Routes and UI strings for both languages.
// Copy rules: no dashes, no middle dots, no corner brackets. KR CTAs in 존댓말.
export type Lang = 'en' | 'ko';
export const LANGS: Lang[] = ['en', 'ko'];

export const ROUTES = {
  home: { en: '/', ko: '/ko' },
  writing: { en: '/ai-storians', ko: '/ko/essays' },
  podcast: { en: '/podcast', ko: '/ko/podcast' },
  services: { en: '/services', ko: '/ko/services' },
  speaking: { en: '/speaking', ko: '/ko/speaking' },
  about: { en: '/about', ko: '/ko/about' },
  contact: { en: '/contact', ko: '/ko/contact' },
  thoughts: { en: '/daily-thought', ko: '/daily-thought' },
} as const;
export type RouteKey = keyof typeof ROUTES;

export const essayPath = (lang: Lang, slug: string) =>
  lang === 'en' ? `/ai-storians/${slug}` : `/ko/essays/${slug}`;
export const thoughtPath = (slug: string) => `/daily-thought/${slug}`;

export const NAV: RouteKey[] = ['writing', 'podcast', 'services', 'speaking', 'about'];

export const UI = {
  en: {
    htmlLang: 'en',
    nav: { writing: 'Writing', podcast: 'Podcast', services: 'Services', speaking: 'Speaking', about: 'About', home: 'Home', contact: 'Contact', thoughts: 'Daily thought' },
    book: 'Contact', // DRAFT 2026-10-27 (header button, was 'Book Jae')
    langName: 'English',
    otherLangName: '한국어',
    est: 'Est. 2026',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    by: 'By',
    author: 'Jae Kim',
    // ai storians episodes carry the episode in the title only, e.g. "ai storians ep.1"
    ep: (n: number) => `ai storians ep.${n}`,
    minRead: (n: number) => `${n} min read`,
    latest: 'Latest essays', // DRAFT copy review
    allEssays: 'All essays',
    readOther: '한국어로 읽기',
    prev: 'Previous',
    next: 'Next',
    subscribe: 'Subscribe free',
    read: 'Read',
    // approved 2026-10-27 (대표님 headline)
    footerTagline: 'Know where the AI world is heading. Build your solution based on the future.',
    copyright: '© 2026 ai storians. All records kept.',
    colophon: 'Set in Newsreader, Noto Serif KR, Pretendard and JetBrains Mono.',
    elsewhere: 'Follow', // DRAFT copy review
    sections: 'Sections',
    notFoundTitle: 'This page has no past.',
    notFoundBody: "And around here, things with no past don't survive.",
    goHome: 'Go home',
    thoughtsTitle: 'Daily thought',
    thoughtsSub: 'Short notes between essays.',
    dateFmt: (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'Asia/Seoul' }),
  },
  ko: {
    htmlLang: 'ko',
    nav: { writing: '글', podcast: '파사챗', services: '서비스', speaking: '강연', about: '소개', home: '홈', contact: '문의', thoughts: '데일리 띵크' },
    book: '문의하기', // DRAFT 2026-10-27 (header button, was '섭외 문의')
    langName: '한국어',
    otherLangName: 'English',
    est: '2026년 창간',
    menu: '메뉴',
    close: '닫기',
    skip: '본문으로 건너뛰기',
    by: '글',
    author: '제이킴모건',
    ep: (n: number) => `ai storians ep.${n}`,
    minRead: (n: number) => `${n}분`,
    latest: '최근 글',
    allEssays: '전체 글',
    readOther: 'Read in English',
    prev: '이전 글',
    next: '다음 글',
    subscribe: '무료 구독',
    read: '읽기',
    // DRAFT 2026-10-27 (대표님 headline, Korean translation)
    footerTagline: 'AI 세상이 어디로 가는지 먼저 읽으세요. 그 미래를 기준으로 솔루션을 만드세요.',
    copyright: '© 2026 ai storians. 모든 기록은 보존된다.',
    colophon: '본문 서체 Noto Serif KR, Newsreader. 제목 밖 글자 Pretendard.',
    elsewhere: '다른 곳에서',
    sections: '섹션',
    notFoundTitle: '이 페이지에는 과거가 없다.',
    notFoundBody: '여기서 과거 없는 것은 살아남지 못한다.',
    goHome: '홈으로',
    thoughtsTitle: '데일리 띵크',
    thoughtsSub: '에세이 사이의 짧은 노트.',
    dateFmt: (d: Date) => {
      const p = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Seoul' }).formatToParts(d);
      const g = (t: string) => p.find((x) => x.type === t)?.value;
      return `${g('year')}.${g('month')}.${g('day')}`;
    },
  },
} as const;

export const otherLang = (l: Lang): Lang => (l === 'en' ? 'ko' : 'en');

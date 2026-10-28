// Site-wide facts. Change a URL here and it changes everywhere.
import siteConfig from '../site.config.json';

// English first (대표님 2026-10-27): Korean goes live after the translation. Flip koLive in site.config.json.
export const KO_LIVE: boolean = siteConfig.koLive;
export const SITE = {
  name: 'ai storians',
  url: 'https://www.aistorians.com',
  author: { en: 'Jae Kim', ko: '제이킴모건' },
  email: 'jkim@aistorians.com',
  founded: 2026,
  // Contact form: Web3Forms (free). Get the key at https://web3forms.com with
  // jkim@aistorians.com (the key arrives by email) and paste it here. The key is
  // public by design. While it is empty, the form falls back to the visitor's mail app.
  web3formsKey: '',
};

export const LINKS = {
  substack: 'https://aistorians.substack.com',
  brunch: 'https://brunch.co.kr/@jkimmorgan',
  threads: 'https://www.threads.com/@jkimmorgan',
  instagram: 'https://www.instagram.com/jkimmorgan/',
  x: 'https://x.com/jkimmorgan',
  morganLetter: 'https://jkimmorgan.substack.com',
  // FIRE사이드챗. Handle checked 2026-10-27: @firesidechathq = channel UCgN3d1yHYdS9qQOHDnDHViw
  youtube: 'https://www.youtube.com/@firesidechathq',
  youtubeLive: 'https://www.youtube.com/@firesidechathq/live',
  youtubeUploads: 'https://www.youtube.com/playlist?list=UUgN3d1yHYdS9qQOHDnDHViw',
  spotify: 'https://open.spotify.com/show/6IUQ4ifDncM3Vzqfiqe1iB',
  apple: 'https://podcasts.apple.com/kr/podcast/fire%EC%82%AC%EC%9D%B4%EB%93%9C%EC%B1%97/id6818580894',
};

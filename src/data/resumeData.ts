export interface ContactItem {
  icon: 'mail' | 'phone' | 'github' | 'location';
  label: string;
  href?: string;
}

export interface Job {
  period: [string, string];
  company: string;
  location?: string;
  title: string;
  highlights: string[];
}

export interface Project {
  tech: string[];
  name: string;
  link?: { url: string; label: string };
  screenshots?: string[];
  description: string;
}

export interface SkillGroup {
  title: string;
  tags: { label: string; primary?: boolean }[];
}

export interface LangItem {
  name: string;
  level: string;
}

export interface CertItem {
  title: string;
  meta: string;
}

export interface ArticleItem {
  title: string;
  url: string;
  meta: string;
}

function envUrlList(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(',')
    .map((url) => url.trim())
    .filter(Boolean);
}

const cityProbeScreenshots = envUrlList(import.meta.env.VITE_CITY_PROBE_SCREENSHOTS);

export const resumeData = {
  name: '郭珮語',
  titleEn: 'Frontend Engineer',
  titlePill: 'Nuxt · Vue.js · TypeScript',
  srTitle: '前端工程師履歷 — Nuxt 與 Vue 專長',
  contact: [
    {
      icon: 'mail' as const,
      label: 'hazelworks598@gmail.com',
      href: 'mailto:hazelworks598@gmail.com',
    },
    { icon: 'phone' as const, label: '0910-747-672' },
    {
      icon: 'github' as const,
      label: 'github.com/FeiFeiSeal',
      href: 'https://github.com/FeiFeiSeal',
    },
    { icon: 'location' as const, label: '台灣・台中市' },
  ],
  summary: [
    '擁有近四年前端開發實務經驗，主要使用 Vue 3、Nuxt 3 與 TypeScript，參與過企業內部系統、品牌官網及 SaaS 產品開發，從需求討論、技術評估、功能開發、測試驗收到正式上線皆有完整參與經驗。',
    '在加入前端領域之前曾擔任 PM，因此養成了從產品需求出發思考技術實作的習慣。開發過程中，我不只關注功能是否完成，也重視需求拆解是否清楚、與設計及後端的協作是否順暢，以及程式是否具備良好的可維護性。面對跨部門合作時，能快速理解不同角色的觀點，協助降低溝通成本，讓專案更有效率地推進。',
    '我喜歡研究技術背後的原理，也樂於嘗試新的開發方式。平時除了持續精進 Vue 生態系外，也積極將 AI 工具導入日常開發流程，使用 Cursor 等工具協助撰寫程式、分析問題與提升效率，同時審查 AI 產出的內容，確保符合專案規範與程式品質。',
    '個人開源專案 JOSUI 即是我實際運用 AI 協作完成的成果，從元件設計、開發到部署皆由我獨立完成。',
    '我相信好的前端工程師除了具備技術能力，更需要持續學習、樂於分享並願意接受回饋。我習慣透過 Code Review、技術研究及 Side Project 持續精進自己，也期待加入重視產品品質與團隊合作的環境，與夥伴共同打造具有價值的產品，同時持續提升自己的軟體工程能力。',
  ].join('\n\n'),
  jobs: [
    {
      period: ['2024.11', '2026.05'] as [string, string],
      company: '勝崨有限公司',
      location: '台中',
      title: '前端工程師',
      highlights: [
        '負責前端功能開發與專案交付，參與 SSR／CSR 架構評估、狀態管理設計與第三方套件導入，從功能實作到 API 串接皆能獨立完成；並與 SA、PM、Backend、UI/UX 團隊協作，完成需求對齊與功能落地，推進專案通過 UAT 並上線',
        '客戶企業系統：參與多家客戶 B 端企業內部系統開發，實作多步驟表單、角色權限、列表篩選與排序等功能模組，處理複雜資料流與狀態管理，能獨立完成需求開發與交付',
        '企業官網：負責企業官網開發與維護，使用 Nuxt SSR 優化 SEO 表現，並透過 Code Splitting、圖片 Lazy Loading 等方式改善頁面載入效能與使用體驗',
        '自有產品：參與核心 SaaS 產品的商業模式規劃與市場路線討論，負責前端架構維護與功能迭代，將產品需求轉化為穩定且易於使用的操作介面',
      ],
    },
    {
      period: ['2022.08', '2024.11'] as [string, string],
      company: '奇點無限股份有限公司',
      title: '前端工程師',
      location: '台中',
      highlights: [
        '轉職起步：在技術長帶領下參與客戶系統重構，負責前端功能開發並與後端工程師協作，逐步累積 codebase 維護、模組化改寫與 code review 經驗',
        '客戶企業系統：參與多家客戶內部系統開發；亦承接離職工程師的既有專案，釐清未處理完整的事項並繼續推進客戶下一期交付內容，並因應後端重構同步調整 API 串接邏輯，實作表單驗證、角色權限、資料表格與儀表板等模組',
        '企業官網與自有產品：獨立開發公司官網，並與技術長協作開發自有產品，採 Vue 生態與 RWD，確保跨裝置一致體驗',
        '元件庫建置：與前端工程師協作建置共用元件庫，統一設計規範與元件 API，提升開發一致性並縮短新專案初始化時間',
      ],
    },
    {
      period: ['2020.10', '2022.01'] as [string, string],
      company: '我瘋程式工作室',
      title: '專案經理（PM）',
      highlights: [
        '負責單一客戶網站專案的需求訪談、時程規劃與設計／開發協調，完成專案交付；深刻感受到技術能力的重要性後，主動投入自學並轉職前端',
      ],
    },
  ] satisfies Job[],
  projects: [
    {
      tech: ['React', 'Tailwind CSS', 'v3 / v4', 'shadcn/ui', 'Cloudflare'],
      name: 'JOSUI — shadcn UI 色彩主題預覽工具',
      link: { url: 'https://josui.space/', label: 'josui.space' },
      description:
        '個人發起的開源工具，起源於公司內部推動設計系統的實際需求——開發者與設計師之間難以對齊 shadcn 的色彩呈現，因而自行開發解決方案。支援即時預覽 component 在不同色彩主題下的呈現效果，並提供 HEX、RGBA、HSLA 三種色彩格式的即時轉換，調整完成後可直接複製 token 回自己的專案，降低設計與開發之間的溝通成本。後因 AI 工具快速完善設計系統領域、商業價值空間收窄而暫停迭代，目前部署於 Cloudflare，網域 josui.space。',
    },
    {
      tech: ['Nuxt 3', 'Vue 3', 'TypeScript', 'RWD'],
      name: 'FUKUKU 樂勁雲數位服務官網',
      link: { url: 'https://fukuku.com.tw/', label: 'fukuku.com.tw' },
      description:
        'AI 智慧瓦斯配送服務平台官網，與設計師合作開發，負責前端架構設計與視覺實作。採用 Nuxt 3 SSR 提升 SEO 表現，整合多種互動動畫與 RWD 設計，確保跨裝置完美呈現。實作包含產品介紹、服務模式展示、常見問題等模組，並優化載入效能與使用者體驗。',
    },
    {
      tech: [
        'Nuxt 3',
        'TypeScript',
        'Pinia',
        'Tailwind CSS',
        'i18n',
        'Leaflet / Protomaps / Google Map',
        'vue-good-table-next',
      ],
      name: '都市探針 City Probe · 學術研究管理平台',
      screenshots: cityProbeScreenshots.length > 0 ? cityProbeScreenshots : undefined,
      description:
        '配合大學學術研究開發的智慧城市市民參與平台。「都市探針」倡議以人本視角推動智慧城市建設，讓市民主導資訊提供、分析、套疊與加值四階段決策流程。前端負責登入認證、權限管理、數據視覺化儀表板等核心功能，使用 Pinia 管理複雜狀態，以 Tailwind CSS 與自訂元件實作表格、圖表、表單驗證等互動元件。',
    },
    {
      tech: ['Nuxt', 'Vue', 'Tailwind CSS', 'Animation'],
      name: '科技公司雙語形象官網',
      link: { url: 'https://www.nxinno.dev/en', label: 'nxinno.dev' },
      description:
        '科技公司雙語官網開發，負責前端架構與視覺呈現。實作多語系切換、平滑滾動效果、響應式排版，並優化圖片懶載入與 SEO 結構，提升網站載入速度與搜尋引擎可見度。',
    },
  ] satisfies Project[],
  skillGroups: [
    {
      title: '前端核心',
      tags: [
        { label: 'JavaScript ES6+', primary: true },
        { label: 'TypeScript', primary: true },
        { label: 'HTML5' },
        { label: 'CSS3 / SCSS' },
        { label: 'Tailwind CSS' },
      ],
    },
    {
      title: '框架與庫',
      tags: [
        { label: 'Nuxt 3', primary: true },
        { label: 'Vue 3', primary: true },
        { label: 'React' },
        { label: 'Vue Router' },
        { label: 'Pinia / Vuex' },
        { label: 'Composition API' },
      ],
    },
    {
      title: 'UI 與元件庫',
      tags: [
        { label: 'shadcn/ui', primary: true },
        { label: '元件庫建置' },
      ],
    },
    {
      title: 'API 與異步',
      tags: [{ label: 'RESTful API' }, { label: 'Axios' }],
    },
    {
      title: '工具與版本控制',
      tags: [
        { label: 'Git / GitHub' },
        { label: 'Vite' },
        { label: 'Webpack' },
        { label: 'npm' },
      ],
    },
    {
      title: '優化與品質',
      tags: [
        { label: 'RWD 響應式設計' },
        { label: 'Web Performance' },
        { label: 'SEO 最佳化' },
        { label: 'Code Splitting' },
      ],
    },
    {
      title: '動畫與互動',
      tags: [
        { label: 'Framer Motion' },
        { label: 'SVG Animation' },
        { label: 'CSS Animation' },
      ],
    },
  ] satisfies SkillGroup[],
  education: {
    school: '國立嘉義大學',
    period: '2010 — 2014',
    department: '史地學系 · 學士',
  },
  languages: [
    { name: '中文（繁體）', level: '母語' },
    { name: '英文', level: '' },
  ] satisfies LangItem[],
  certifications: [
    {
      title: 'AWS Certified Cloud Practitioner',
      meta: 'Amazon Web Services · 2025.05',
    },
  ] satisfies CertItem[],
  articles: [
    {
      title: '蓋一個自己的 Nuxt 3 UI Module',
      url: 'https://ithelp.ithome.com.tw/users/20140586/ironman/7555',
      meta: 'iThome 鐵人賽 · 2023',
    },
    {
      title: '前進切版之路！CSS 微體驗',
      url: 'https://ithelp.ithome.com.tw/users/20140586/ironman/4225',
      meta: 'iThome 鐵人賽 · 2021',
    },
  ] satisfies ArticleItem[],
};

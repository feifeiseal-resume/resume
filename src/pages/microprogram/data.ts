export interface DeckMeta {
  candidateName: string;
  candidateNameEn: string;
  role: string;
  company: string;
  interviewDate: string;
  presentationMinutes: number;
}

export const deckMeta: DeckMeta = {
  candidateName: '郭珮語',
  candidateNameEn: 'Hazel Kuo',
  role: 'Frontend Engineer',
  company: '微程式資訊股份有限公司',
  interviewDate: '2026.07.24',
  presentationMinutes: 20,
};

export const coverContent = {
  taglineLine1: 'Turning complex requirements',
  taglineLine2: 'into maintainable frontend experiences.',
  stack: 'Nuxt · Vue.js · TypeScript',
};

export const aboutContent = {
  title: "Hey, I'm Hazel.",
  /** 設定 VITE_INTERVIEW_PHOTO_URL 後顯示 About 頁照片 */
  photoUrl: import.meta.env.VITE_INTERVIEW_PHOTO_URL ?? '',
  photoAlt: '郭珮語 Hazel Kuo',
  paragraphs: [
    '我是郭珮語，以 Vue 3、Nuxt 3、TypeScript 為主力的前端工程師，有近四年實務經驗。',
    '參與過企業內部系統、官網與 SaaS 開發；習慣先理解需求與資料流，再落成可維護的前端結構。',
  ],
};

export const slideOutline: { id: string; label: string }[] = [
  { id: 'cover', label: '封面' },
  { id: 'about', label: '關於我' },
  { id: 'skills', label: '技術能力' },
  { id: 'timeline', label: '職涯歷程' },
  { id: 'josui-overview', label: 'JOSUI 專案' },
  { id: 'josui-technical', label: 'JOSUI 技術亮點' },
  { id: 'josui-ai', label: 'JOSUI AI 協作' },
  { id: 'cityprobe-overview', label: 'City Probe 專案' },
  { id: 'cityprobe-technical', label: 'City Probe 技術挑戰' },
  { id: 'nuxt-websites', label: 'Nuxt 官網' },
  { id: 'where-im-heading', label: '職涯方向' },
  { id: 'thanks', label: 'Thank You' },
];

export const aboutHighlights: string[] = [
  '近四年前端開發經驗，主要使用 Vue 3、Nuxt 3、TypeScript',
  '曾有 PM 經驗，習慣從需求、流程與使用情境理解問題',
  '參與過企業內部系統、品牌官網與 SaaS 產品開發',
  '獨立開發 JOSUI，實際使用 AI 協作完成前端工具型產品',
  '重視元件設計、可維護性與使用者體驗',
  '持續學習與分享：取得 AWS Certified Cloud Practitioner 認證，並撰寫 iThome 鐵人賽技術文章',
];

export interface AboutInfoItem {
  label: string;
  description: string;
  icon: 'briefcase' | 'map' | 'code';
}

export const aboutInfoItems: AboutInfoItem[] = [
  { label: '前端工程師', description: '', icon: 'briefcase' },
  { label: '台中', description: ' ', icon: 'map' },
  { label: '國立嘉義大學 史地學系', description: '', icon: 'code' },
];

export interface AboutCapability {
  title: string;
  description: string;
  icon: 'vue' | 'typescript' | 'building' | 'product' | 'maintain' | 'team';
}

export const aboutCapabilities: AboutCapability[] = [
  { title: 'Vue / Nuxt', description: '主力前端技術', icon: 'vue' },
  { title: 'TypeScript', description: '型別與資料結構', icon: 'typescript' },
  { title: '企業系統', description: '複雜資料與權限情境', icon: 'building' },
  { title: 'SaaS / 官網', description: '產品功能與品牌頁面', icon: 'product' },
  { title: '可維護性', description: '元件拆分與可擴充結構', icon: 'maintain' },
  { title: '團隊協作', description: '與 PM、設計、後端、SA 對齊', icon: 'team' },
];

export interface TimelineStep {
  period: string;
  company: string;
  role: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export const careerTimeline: TimelineStep[] = [
  {
    period: '2024.11 – 2026.05',
    company: '勝崨有限公司',
    role: '前端工程師',
    location: '台中',
    summary: '負責前端功能開發與專案交付，參與 SSR／CSR 架構評估、狀態管理設計與第三方套件導入，從功能實作到 API 串接皆能獨立完成',
    highlights: [
      '與 SA、PM、Backend、UI/UX 協作，推進需求對齊、UAT 與上線',
      '參與多家客戶企業內部系統開發，實作多步驟表單、角色權限、列表篩選與排序等功能模組，處理複雜資料流與狀態管理，能獨立完成需求開發與交付',
      '參與核心 SaaS 產品的商業模式規劃與市場路線討論，負責前端架構維護與功能迭代，將產品需求轉化為穩定且易於使用的操作介面',
    ],
    tags: ['Enterprise Systems', 'Nuxt Website', 'SaaS', 'UAT'],
  },
  {
    period: '2022.08 – 2024.11',
    company: '奇點無限股份有限公司',
    role: '前端工程師',
    location: '台中',
    summary: '在技術長帶領下參與客戶系統重構，累積既有 codebase 維護、模組化改寫與 Code Review 經驗。',
    highlights: [
      '參與企業內部系統開發，實作表單驗證、角色權限、資料表格與儀表板',
      '承接既有專案，釐清未完成事項並降低修改風險',
      '與前端同事協作建置共用元件庫，統一設計規範與元件 API',
    ],
    tags: ['Refactor', 'Legacy Code', 'Component Library', 'Code Review'],
  },
  {
    period: '2020.10 – 2022.01',
    company: '我瘋程式工作室',
    role: '專案經理 PM',
    location: '台中',
    summary: '負責網站專案的需求訪談、時程規劃與設計／開發協調，後續主動投入自學並轉職前端。',
    highlights: [
      '整理需求背景、溝通專案範圍與交付節奏',
      '理解技術能力對專案品質與溝通效率的重要性',
      '將需求理解與協作經驗延伸到前端開發工作中',
    ],
    tags: ['Requirement', 'Planning', 'Communication'],
  },
];

export type SkillLevel = 'core' | 'practical' | 'learning';

export const skillLevelLabel: Record<SkillLevel, string> = {
  core: '核心使用',
  practical: '實務使用',
  learning: '持續學習',
};

export interface SkillCategory {
  title: string;
  icon: 'frontend' | 'framework' | 'ui' | 'api' | 'tools' | 'quality' | 'motion';
  items: { label: string; level: SkillLevel }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: '前端核心',
    icon: 'frontend',
    items: [
      { label: 'JavaScript ES6+', level: 'core' },
      { label: 'TypeScript', level: 'core' },
      { label: 'HTML5', level: 'core' },
      { label: 'CSS3 / SCSS', level: 'core' },
      { label: 'Tailwind CSS', level: 'core' },
    ],
  },
  {
    title: '框架與庫',
    icon: 'framework',
    items: [
      { label: 'Nuxt 3', level: 'core' },
      { label: 'Vue 3', level: 'core' },
      { label: 'React', level: 'core' },
      { label: 'Vue Router', level: 'core' },
      { label: 'Pinia / Vuex', level: 'core' },
      { label: 'Composition API', level: 'core' },
    ],
  },
  {
    title: 'UI 與元件庫',
    icon: 'ui',
    items: [
      { label: 'shadcn/ui', level: 'core' },
      { label: '元件庫建置', level: 'core' },
    ],
  },
  {
    title: 'API 與異步',
    icon: 'api',
    items: [
      { label: 'RESTful API', level: 'core' },
      { label: 'Axios', level: 'core' },
    ],
  },
  {
    title: '工具與版本控制',
    icon: 'tools',
    items: [
      { label: 'Git / GitHub', level: 'core' },
      { label: 'Vite', level: 'core' },
      { label: 'Webpack', level: 'core' },
      { label: 'npm', level: 'core' },
    ],
  },
  {
    title: '優化與品質',
    icon: 'quality',
    items: [
      { label: 'RWD 響應式設計', level: 'core' },
      { label: 'Web Performance', level: 'core' },
      { label: 'SEO 最佳化', level: 'core' },
    ],
  },
  {
    title: '動畫與互動',
    icon: 'motion',
    items: [
      { label: 'Framer Motion', level: 'core' },
      { label: 'SVG Animation', level: 'core' },
      { label: 'CSS Animation', level: 'core' },
    ],
  },
];

export const skillPerspective = {
  statement: '我重視的不只是熟悉工具，而是能依照產品情境選擇合適的前端實作方式。',
  strengths: [
    '理解需求與資料流，轉化為可落地的前端方案',
    '重視程式碼品質與可維護性',
    '能在企業系統、官網與 SaaS 情境中切換開發思維',
    '持續學習新技術，並快速應用到實際專案',
  ],
};

export interface ProjectOverview {
  title: string;
  subtitle: string;
  url?: string;
  background: string;
  role: string[];
  features: string[];
  tech: string[];
}

export const josuiOverview: ProjectOverview = {
  title: 'JOSUI',
  subtitle: 'AI 協作完成的設計系統工具',
  url: 'https://josui.space',
  background:
    'JOSUI 是一個為 shadcn/ui 與 Tailwind CSS 設計的主題色彩 Playground。使用者可以在瀏覽器中即時調整 UI token、預覽元件效果，並將色彩設定複製回自己的專案。這個專案源自實務中設計與開發對齊色彩 token 成本較高的問題，因此做成可互動、可預覽、可輸出的前端工具。',
  role: [
    '個人發起與獨立開發',
    '產品問題定義與前端架構設計',
    'Theme Playground 開發與互動設計',
    '色彩 token 編輯與匯出',
    'Cloudflare 部署',
    '使用 AI 工具協助拆解、開發與除錯，並自行審查產出品質',
  ],
  features: [
    '即時主題色彩預覽',
    'CSS variables 動態更新',
    'Light / Dark theme 切換',
    'HEX / RGB / HSL 顯示與複製',
    'Tailwind v3 / v4 token 匯出',
    '響應式工具介面',
  ],
  tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Radix UI', 'shadcn/ui', 'colorjs.io', 'Cloudflare'],
};

export interface ProjectTechnical {
  challenges: string[];
  solutions: string[];
  flow: string[];
}

export const josuiTechnical: ProjectTechnical = {
  challenges: [
    '傳統調整 theme token 需要修改 CSS、重新編譯或刷新頁面',
    '設計師與工程師不容易即時確認 token 對整體 UI 的影響',
    'Tailwind v3 與 v4 的 theme 設定格式不同',
    '色彩格式需在 HEX、RGB、HSL 等格式間轉換',
  ],
  solutions: [
    '將主題色彩的真實來源放在 CSS custom properties',
    '透過 CSSOM 讀寫 :root 與 .dark 的 CSS variables',
    'React 只管理 UI 狀態，例如面板開關、目前 preset',
    '使用 colorjs.io 處理色彩轉換，並分別產生 Tailwind v3 / v4 token',
  ],
  flow: [
    'User adjusts color',
    'Color Picker / Theme Panel',
    'CSSOM updates CSS variables',
    'shadcn/ui components update immediately',
    'Copy Dialog exports Tailwind tokens',
  ],
};

export interface AiWorkflow {
  usage: string[];
  review: string[];
}

export const josuiAiWorkflow: AiWorkflow = {
  usage: [
    '釐清功能拆解與開發順序',
    '理解或比較第三方套件用法',
    '產生初版元件與互動邏輯',
    '協助 Debug 與整理錯誤方向',
    '補充 README、文件與面試說明',
    '檢查可能遺漏的邊界情境',
  ],
  review: [
    '回到需求確認功能是否真的解決問題',
    '檢查元件責任、命名、型別與資料流',
    '確認產出是否符合專案既有風格',
    '測試 Light / Dark、不同色彩格式、Copy 結果與 RWD',
    '移除不必要的抽象或過度設計',
    '將 AI 產出視為初稿，而不是最終答案',
  ],
};

export const cityProbeOverview: ProjectOverview = {
  title: '都市探針 City Probe',
  subtitle: '學術研究管理平台',
  background:
    'City Probe 是配合大學學術研究開發的智慧城市市民參與平台。前端負責登入認證、權限管理、數據視覺化儀表板等核心功能，並以 Tailwind CSS 與自訂元件實作表格、圖表、表單驗證等互動元件。',
  role: [
    '前端功能開發與 Nuxt 3 頁面／元件開發',
    'API 串接與狀態管理',
    '權限與使用者資料處理',
    '表格、表單、儀表板與地圖相關功能開發',
    '與後端及團隊協作排查問題',
  ],
  features: [
    '登入 / 註冊 / 忘記密碼',
    '使用者資料與權限控制',
    '資料表格、查詢、篩選',
    '儀表板與圖表',
    '地圖與空間資料呈現',
    '多語系介面',
    '後台版面與共用元件',
  ],
  tech: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'i18n', 'Leaflet / Protomaps / Google Map', 'vue-good-table-next'],
};

export const cityProbeTechnical: ProjectTechnical = {
  challenges: [
    '後台頁面多，功能包含登入、資料查詢、儀表板、地圖與個人資料維護',
    '使用者狀態、語系、主題等資訊需跨頁面共用',
    '表格查詢、篩選、分頁與 API 參數需要一致管理',
    '地圖套件與 SSR / CSR 行為需要特別處理',
    '多語系檔案與 UI 文案需要維持一致',
    '需要在既有專案結構中完成維護與功能迭代',
    '部分資料載入時間較長，需要設計 loading 狀態與配套回饋降低等待感',
  ],
  solutions: [
    '使用 Pinia 管理使用者、語系、主題設定等共用狀態',
    '將頁面、components、composables、stores 分層處理',
    '將地圖與瀏覽器限定套件設為 client-only，排除 SSR 執行',
    '使用 Nuxt plugins 管理表格、tooltip、日期選擇等瀏覽器端套件',
    '透過 i18n 與自動產生語系檔流程降低文案維護成本',
    '用 TypeScript 型別約束 API 資料與元件 props',
  ],
  flow: ['Nuxt Page', 'Feature Components', 'Composables', 'Pinia Stores', 'API / Runtime Config'],
};

export interface ComponentReuse {
  background: string;
  approach: string[];
  examples: string[];
}

export const componentReuse: ComponentReuse = {
  background:
    '在奇點無限與勝崨的專案中，企業系統與後台常會重複使用表格、表單、按鈕、Dialog、篩選器與分頁等 UI。若每個專案都重新實作，容易造成樣式與互動不一致，也會提高維護成本。',
  approach: [
    '整理高頻使用元件，定義一致的 Props 與 Emits',
    '區分純 UI 元件與業務元件',
    '將重複邏輯抽成 composable',
    '補充使用方式與範例，與團隊討論元件責任',
    '避免為了共用而過度抽象',
  ],
  examples: ['Button', 'Input', 'Select', 'Dialog', 'Table', 'Pagination', 'Form Field'],
};

export interface NuxtWebsiteCase {
  name: string;
  url?: string;
  summary: string;
  role: string[];
  focus: string[];
  tech: string[];
}

export const fukukuWebsite: NuxtWebsiteCase = {
  name: 'FUKUKU 樂勁雲數位服務官網',
  url: 'https://fukuku.com.tw',
  summary:
    'AI 智慧瓦斯配送服務平台官網，與設計師合作開發。我負責前端架構設計與視覺實作，使用 Nuxt 3 SSR 建立可維護、可被搜尋理解的品牌頁面。',
  role: [
    '與設計師合作將版面轉成 RWD 前端頁面',
    '負責前端架構、頁面元件與視覺實作',
    '實作產品介紹、服務模式展示與 FAQ 模組',
    '補齊實際資料長度、圖片比例與不同裝置情境',
  ],
  focus: [
    '使用 Nuxt SSR 與 SEO meta 改善內容可見度',
    '透過圖片 Lazy Loading 與 Code Splitting 降低載入負擔',
    '整理重複區塊成可維護的頁面元件',
    '讓品牌官網在不同解析度下維持穩定閱讀體驗',
  ],
  tech: ['Nuxt 3', 'Vue 3', 'SSR', 'SEO', 'RWD', 'Lazy Loading', 'Code Splitting'],
};

export interface ThinkingAspect {
  title: string;
  tag: string;
  description: string;
}

export const designThinking: { aspects: ThinkingAspect[]; flow: string[] } = {
  aspects: [
    { title: 'Component Responsibility', tag: '01', description: '每個元件是否只處理明確責任' },
    { title: 'Data Flow', tag: '02', description: '資料由哪裡取得、在哪裡修改、哪些畫面需要共用' },
    { title: 'Maintainability', tag: '03', description: '未來新增需求時，是否容易修改與閱讀' },
    { title: 'User Experience', tag: '04', description: 'Loading、錯誤、空資料、操作回饋是否完整' },
    { title: 'Performance', tag: '05', description: '是否存在不必要的重新計算、渲染與資源載入' },
  ],
  flow: ['需求', '使用情境', '資料結構', '元件責任', '狀態管理', '例外處理', '效能與維護'],
};

export interface CollaborationRole {
  role: string;
  items: string[];
}

export const collaborationRoles: CollaborationRole[] = [
  { role: 'PM / SA', items: ['確認需求背景', '釐清操作流程', '找出未定義的邊界條件'] },
  { role: 'UI / UX', items: ['確認元件狀態', '補齊 Loading、Empty、Error 狀態', '討論不同解析度的呈現方式'] },
  { role: 'Backend', items: ['確認 API 欄位', '討論錯誤格式', '釐清權限與資料狀態'] },
  { role: 'Frontend Team', items: ['Code Review', '元件拆分', '命名與程式碼一致性', '技術方案討論'] },
];

export const problemSolvingFlow: string[] = ['重現問題', '縮小範圍', '確認資料流', '找出根本原因', '修正', '驗證相關功能'];

export interface Motivation {
  reasons: string[];
  pitch: string;
  careerPlan: string[];
}

export const motivation: Motivation = {
  reasons: [
    '微程式職缺重視完整產品開發流程，與過去參與需求討論、技術評估、開發、UAT 到上線的經驗吻合',
    '職缺提到 AI 輔助開發與 AI 產出審查，與我在 JOSUI 中實際使用 AI 協作的經驗吻合',
    '職缺重視 Code Review、可維護性、測試與 CI 流程，這也是我下一階段想持續深化的工程能力',
    '希望加入重視團隊合作、知識分享與持續改善的環境',
  ],
  pitch:
    '過去的工作經驗讓我累積了 Vue、Nuxt、TypeScript、企業系統、前端工具化與跨角色協作能力。JOSUI 也讓我實際練習如何用 AI 協助開發，同時保留工程師對架構與品質的判斷。',
  careerPlan: [
    '短期：把 lint、type check、build、test 這些前端日常最直接相關的品質關卡補齊，讓 Vitest / Vue Test Utils 成為習慣而不是加分項',
    '中期：深化 Code Review 與可維護性判斷能力，並補上 Docker、CI 基礎流程的實際操作經驗',
    '長期：往前端系統設計方向累積，持續把 AI 工具用得更精準，同時保有工程師對架構與品質的最終判斷',
  ],
};

export interface CareerDirection {
  statement: string;
  stages: { id: string; title: string; subtitle: string; description: string; items: string[] }[];
  outcome: string;
}

export const careerDirection: CareerDirection = {
  statement:
    '我的核心仍然是前端。學習後端不是離開前端，而是希望更完整地理解產品如何運作。',
  stages: [
    {
      id: 'today',
      title: 'Frontend Expertise',
      subtitle: '穩定交付前端產品',
      description: '持續深化 Vue、Nuxt、TypeScript，將需求與資料流落成可維護的產品功能。',
      items: ['需求分析到上線的完整交付', '企業系統與產品實戰經驗'],
    },
    {
      id: 'next',
      title: 'Engineering Quality',
      subtitle: 'Strengthen Engineering Quality',
      description: '除了完成需求，也建立測試、自動化與部署的品質觀念。',
      items: ['測試、CI/CD 與部署基礎', 'AI 協作下的架構與品質判斷'],
    },
    {
      id: 'future',
      title: 'System Thinking',
      subtitle: '建立全端思維',
      description: '逐步理解 API、資料模型與系統架構，和不同角色一起討論更完整的技術方案。',
      items: ['API 契約、資料流與系統限制', '可維護、可擴充的產品解法'],
    },
  ],
  outcome: 'Product-minded Engineer with Full-stack Thinking',
};

export interface ContactItem {
  label: string;
  value: string;
}

export const contactItems: ContactItem[] = [
  { label: 'Email', value: 'hazelworks598@gmail.com' },
  { label: 'GitHub', value: 'github.com/FeiFeiSeal' },
  { label: 'Resume', value: 'my-resume.josui.space' },
];

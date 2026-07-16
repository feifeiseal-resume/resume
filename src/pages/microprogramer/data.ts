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

export const slideOutline: { id: string; label: string }[] = [
  { id: 'cover', label: '封面' },
  { id: 'about', label: '關於我' },
  { id: 'timeline', label: '職涯歷程' },
  { id: 'skills', label: '技術能力' },
  { id: 'workflow', label: '開發流程' },
  { id: 'josui-overview', label: 'JOSUI 專案' },
  { id: 'josui-technical', label: 'JOSUI 技術亮點' },
  { id: 'josui-ai', label: 'JOSUI AI 協作' },
  { id: 'cityprobe-overview', label: 'City Probe 專案' },
  { id: 'cityprobe-technical', label: 'City Probe 技術挑戰' },
  { id: 'components', label: '共用元件' },
  { id: 'thinking', label: '設計思維' },
  { id: 'collaboration', label: '團隊合作' },
  { id: 'motivation', label: '加入動機與規劃' },
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

export const aboutKeywords: string[] = [
  'Frontend Development',
  'Component Design',
  'Product Thinking',
  'AI-assisted Development',
  'Team Collaboration',
  'Maintainability',
];

export interface TimelineStep {
  period: string;
  title: string;
  description: string;
}

export const careerTimeline: TimelineStep[] = [
  { period: '2020–2022', title: 'PM 工作', description: '負責需求訪談、時程規劃與設計／開發協調' },
  { period: '2022', title: '轉職前端', description: '自學並進入前端工程領域' },
  { period: '2022–2024', title: '奇點無限', description: '參與客戶系統重構、企業系統、官網與元件庫建置' },
  { period: '2024–2026', title: '勝崨有限公司', description: '參與企業系統、Nuxt 官網與 SaaS 產品功能迭代' },
  { period: '持續進行', title: 'JOSUI', description: '獨立開發 AI 協作 side project，實作設計系統工具' },
  { period: '現在', title: '持續深化', description: 'Vue、Nuxt、TypeScript、AI 工具與前端工程品質' },
];

export type SkillLevel = 'core' | 'practical' | 'learning';

export const skillLevelLabel: Record<SkillLevel, string> = {
  core: '核心使用',
  practical: '實務使用',
  learning: '持續學習',
};

export interface SkillCategory {
  title: string;
  items: { label: string; level: SkillLevel }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: [
      { label: 'Vue 3', level: 'core' },
      { label: 'Nuxt 3', level: 'core' },
      { label: 'TypeScript', level: 'core' },
      { label: 'JavaScript', level: 'core' },
      { label: 'HTML / CSS / SCSS', level: 'core' },
      { label: 'Tailwind CSS', level: 'practical' },
      { label: 'Responsive Web Design', level: 'core' },
      { label: 'React（JOSUI 專案實務使用）', level: 'practical' },
    ],
  },
  {
    title: 'State & Data',
    items: [
      { label: 'Pinia', level: 'core' },
      { label: 'Composition API', level: 'core' },
      { label: 'RESTful API / Axios', level: 'core' },
      { label: '表單狀態管理', level: 'core' },
      { label: '權限與角色控制', level: 'practical' },
      { label: 'i18n 多語系', level: 'practical' },
    ],
  },
  {
    title: 'Engineering',
    items: [
      { label: 'Git / GitHub', level: 'core' },
      { label: 'Vite', level: 'core' },
      { label: 'Component Design', level: 'core' },
      { label: 'Code Review', level: 'practical' },
      { label: 'Debugging', level: 'core' },
      { label: 'Web Performance / SEO', level: 'practical' },
      { label: 'AI 輔助開發與審查', level: 'practical' },
    ],
  },
  {
    title: 'Currently Learning',
    items: [
      { label: 'Vitest / Vue Test Utils', level: 'learning' },
      { label: 'Docker / CI 基礎流程', level: 'learning' },
    ],
  },
];

export interface WorkflowStep {
  title: string;
  description: string;
}

export const workflowSteps: WorkflowStep[] = [
  { title: '需求理解', description: '確認使用情境與邊界條件' },
  { title: '功能拆解', description: '拆分畫面、狀態與資料流' },
  { title: '技術評估', description: '確認可行性、風險與工時' },
  { title: '元件規劃', description: '判斷共用元件與業務元件' },
  { title: 'API 契約', description: '與後端確認資料格式與錯誤處理' },
  { title: '功能開發', description: '依規劃實作元件與資料流' },
  { title: '測試除錯', description: '處理正常流程及例外狀況' },
  { title: 'Code Review', description: '與團隊確認實作方式與品質' },
  { title: 'UAT', description: '依據使用者回饋進行調整' },
  { title: '正式上線', description: '確認上線後行為正常' },
];

export interface ProjectOverview {
  title: string;
  subtitle: string;
  background: string;
  role: string[];
  features: string[];
  tech: string[];
}

export const josuiOverview: ProjectOverview = {
  title: 'JOSUI',
  subtitle: 'AI 協作完成的設計系統工具',
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
  ],
  review: [
    '回到需求確認功能是否真的解決問題',
    '檢查元件責任、命名、型別與資料流',
    '確認產出是否符合專案既有風格',
    '測試 Light / Dark、色彩格式、Copy 結果與 RWD',
    '將 AI 產出視為初稿，而不是最終答案',
  ],
};

export const cityProbeOverview: ProjectOverview = {
  title: 'City Probe',
  subtitle: 'Nuxt 3 企業管理後台',
  background:
    'City Probe 是智慧城市與學術研究相關的管理平台，前端需支援登入認證、權限管理、資料查詢、表格、圖表、地圖與多語系等後台常見需求。',
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
  ],
  tech: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Axios', 'i18n', 'Leaflet / Google Map'],
};

export const cityProbeTechnical: ProjectTechnical = {
  challenges: [
    '後台頁面多，功能包含登入、資料查詢、儀表板、地圖與個人資料維護',
    '使用者狀態、語系、主題等資訊需跨頁面共用',
    '表格查詢、篩選、分頁與 API 參數需要一致管理',
    '地圖套件與 SSR / CSR 行為需要特別處理',
  ],
  solutions: [
    '使用 Pinia 管理使用者、語系、主題設定等共用狀態',
    '將頁面、components、composables、stores 分層處理',
    '將地圖與瀏覽器限定套件設為 client-only，排除 SSR 執行',
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

export interface ContactItem {
  label: string;
  value: string;
}

export const contactItems: ContactItem[] = [
  { label: 'Email', value: 'hazelworks598@gmail.com' },
  { label: 'GitHub', value: 'github.com/FeiFeiSeal' },
  { label: 'JOSUI Demo', value: 'josui.space' },
];

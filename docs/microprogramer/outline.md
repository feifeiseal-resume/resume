# 微程式前端工程師面試｜個人簡報網站需求大綱

## 一、專案目標

請製作一個前端工程師面試用的個人簡報網站。

這個專案需要同時支援：

1. 面試當天使用瀏覽器進行全螢幕簡報
2. 使用瀏覽器列印功能匯出為 PDF
3. 網頁版與 PDF 版共用同一份內容
4. 可使用滑鼠、鍵盤或畫面按鈕切換頁面
5. 即使現場沒有網路，也能在本機正常展示

應徵公司：微程式資訊股份有限公司
應徵職位：前端工程師
面試日期：2026 年 7 月 24 日
簡報時間：約 20 分鐘

---

# 二、技術需求

## 核心技術

* React
* TypeScript
* Composition API
* CSS 或 SCSS
* 不使用過度複雜的第三方簡報套件
* 優先自行實作簡單的簡報切換邏輯

## 專案要求

* 使用 `<script setup lang="ts">`
* 元件需合理拆分
* 資料與畫面盡量分離
* 簡報內容可集中放在 TypeScript 資料檔
* 支援響應式畫面
* 支援 16:9 螢幕顯示
* 支援 A4 PDF 列印
* 不依賴後端 API
* 不依賴網路字型或外部 CDN
* `npm run dev` 可本機展示
* `npm run build` 可正常建置

---

# 三、網站操作方式

## 簡報模式

每一個主要章節視為一張 Slide。

支援以下操作：

* 鍵盤 `ArrowRight`：下一頁
* 鍵盤 `ArrowLeft`：上一頁
* 鍵盤 `Space`：下一頁
* 鍵盤 `Home`：第一頁
* 鍵盤 `End`：最後一頁
* 鍵盤 `F`：切換全螢幕
* 鍵盤 `P`：開啟列印
* 畫面左右按鈕切換頁面
* 顯示目前頁數，例如 `3 / 13`

## 頁面導覽

畫面可包含：

* 上一頁按鈕
* 下一頁按鈕
* 頁碼
* 簡單章節導覽
* 全螢幕按鈕
* 列印 PDF 按鈕

列印模式下需隱藏：

* 切換按鈕
* 頁碼控制器
* 導覽列
* 全螢幕按鈕
* 列印按鈕

---

# 四、視覺風格

整體風格：

* 專業
* 簡潔
* 現代
* 大量留白
* 偏產品簡報，而不是傳統履歷
* 不使用過多動畫
* 不使用花俏漸層
* 不使用過多裝飾元素

建議視覺方向：

* 白色或淺灰背景
* 深色文字
* 單一品牌強調色
* 大標題搭配簡潔資訊卡片
* 使用清楚的 Grid 排版
* 每頁只表達一個主要重點
* 圖片、流程圖、數字成果優先於長篇文字

字體以系統字型為主：

```css
font-family:
  Inter,
  "Noto Sans TC",
  "PingFang TC",
  "Microsoft JhengHei",
  Arial,
  sans-serif;
```

不可依賴 Google Fonts，以避免面試現場離線時無法載入。

---

# 五、簡報頁面架構

整份簡報預計約 15 頁，控制在 18～20 分鐘。

本次簡報主軸：

> 我是一位以 Vue 3、Nuxt 3、TypeScript 為主力的前端工程師，具備近四年前端實務經驗。過去參與企業系統、官網與 SaaS 產品開發，也透過 JOSUI side project 實際將 AI 協作導入前端工具開發流程。我的優勢不是只完成畫面，而是能從需求理解、技術拆解、元件設計、資料狀態、使用體驗與後續維護一起思考。

簡報案例排序：

1. **JOSUI**：先展示差異化，說明 AI 協作、設計系統、前端工具化與主題 token 處理能力。
2. **City Probe**：再展示 Vue / Nuxt 實務能力，說明企業管理後台中的權限、表格、地圖、資料狀態與多語系經驗。

---

## Slide 01｜封面

### 目的

讓面試官快速知道我是誰，以及我的核心定位。

### 內容

* Hazel Kuo / 郭珮語
* Frontend Engineer
* Vue 3 / Nuxt 3 / TypeScript
* 微程式前端工程師面試
* 2026.07.24

### 畫面建議

左側放姓名與職稱，右側可放簡單幾何圖形、程式碼視覺或個人形象區塊。

### 口頭重點

簡單問候並說明：

這份簡報是使用 Vue 3 製作的網頁，同時也支援列印為 PDF，因此面試展示與提交資料共用同一份內容。

---

## Slide 02｜About Me

### 標題

關於我

### 核心內容

* 近四年前端開發經驗
* 曾有 PM 經驗，習慣從需求、流程與使用情境理解問題
* 主要使用 Vue 3、Nuxt 3、TypeScript
* 參與過企業內部系統、品牌官網與 SaaS 產品開發
* 獨立開發 JOSUI，實際使用 AI 協作完成前端工具型產品
* 重視元件設計、可維護性與使用者體驗

### 關鍵字

* Frontend Development
* Component Design
* Product Thinking
* AI-assisted Development
* Team Collaboration
* Maintainability

### 口頭重點

說明自己不只是依照畫面切版，也會參與需求理解、功能規劃、API 溝通、測試驗收與正式上線。PM 經驗作為輔助，不要讓面試官覺得主軸偏離前端。

---

## Slide 03｜職涯歷程

### 標題

從 PM 到前端工程師

### 呈現方式

使用 Timeline。

### 內容方向

1. PM 工作：負責需求訪談、時程規劃與設計／開發協調
2. 轉職前端：自學並進入前端工程領域
3. 奇點無限：參與客戶系統重構、企業系統、官網與元件庫建置
4. 勝崨有限公司：參與企業系統、Nuxt 官網與 SaaS 產品功能迭代
5. JOSUI：獨立開發 AI 協作 side project，實作設計系統工具
6. 持續深化 Vue、Nuxt、TypeScript、AI 工具與前端工程品質

### 口頭重點

PM 經驗不是主軸，但可自然帶出自己在前端開發時更能理解需求背景、協作成本、使用情境與產品目標。

---

## Slide 04｜核心技術能力

### 標題

我的技術能力

### 分類

#### Frontend

* Vue 3
* Nuxt 3
* TypeScript
* JavaScript
* HTML
* CSS / SCSS
* Tailwind CSS
* Responsive Web Design

#### State and Data

* Pinia
* Composition API
* RESTful API
* Axios
* 表單狀態管理
* 權限與角色控制
* i18n 多語系

#### Engineering

* Git / GitHub
* Vite
* Component Design
* Code Review
* Debugging
* Web Performance
* SEO
* 共用元件設計
* AI 輔助開發工具使用與審查

#### Currently Learning

* React
* Next.js
* JavaScript 核心原理
* 前端系統設計
* Vitest / Vue Test Utils
* Docker / CI 基礎流程

### 注意事項

不要使用不精確的星等評分。

可使用：

* 核心使用
* 實務使用
* 持續學習

三種標籤呈現熟悉程度。

---

## Slide 05｜我的開發流程

### 標題

從需求到正式上線

### 流程

```text
需求理解
→ 功能拆解
→ 技術與風險評估
→ 畫面與元件規劃
→ API 契約確認
→ 功能開發
→ 測試與除錯
→ Code Review
→ UAT
→ 正式上線
```

### 補充內容

每個流程可搭配一句說明：

* 需求理解：確認使用情境與邊界條件
* 功能拆解：拆分畫面、狀態與資料流
* 技術評估：確認可行性、風險與工時
* 元件規劃：判斷共用元件與業務元件
* API 契約：與後端確認資料格式與錯誤處理
* 測試除錯：處理正常流程及例外狀況
* UAT：依據使用者回饋進行調整

### 口頭重點

強調在開始寫程式前，會先思考元件責任、資料流、風險與維護方式。

---

## Slide 06｜專案案例一：JOSUI

### 標題

JOSUI：AI 協作完成的設計系統工具

### 專案背景

JOSUI 是一個為 shadcn/ui 與 Tailwind CSS 設計的主題色彩 Playground。使用者可以在瀏覽器中即時調整 UI token、預覽元件效果，並將色彩設定複製回自己的專案。

這個專案源自實務中設計與開發對齊色彩 token 成本較高的問題，因此我將它做成可互動、可預覽、可輸出的前端工具。

### 我的角色

* 個人發起與獨立開發
* 產品問題定義
* 前端架構與互動設計
* Theme Playground 開發
* 色彩 token 編輯與匯出
* Cloudflare 部署
* 使用 AI 工具協助拆解、開發與除錯，並自行審查產出品質

### 核心功能

* 即時主題色彩預覽
* CSS variables 動態更新
* Light / Dark theme 切換
* 色彩格式 HEX / RGB / HSL 顯示與複製
* Tailwind v3 / v4 token 匯出
* shadcn/ui 元件狀態展示
* 響應式工具介面

### 技術

* React 19
* TypeScript
* Vite
* Tailwind CSS v4
* Radix UI
* shadcn/ui
* colorjs.io
* react-colorful
* Cloudflare

### 口頭重點

雖然 JOSUI 使用 React，但這頁要強調的不是轉向 React，而是我能用前端能力解決真實工作痛點，並將 AI 協作導入產品開發流程。也要說明 AI 是加速工具，最終架構、互動、型別、邊界情境與品質仍由我審查。

---

## Slide 07｜JOSUI：技術亮點

### 標題

如何讓主題色彩即時預覽與匯出

### 挑戰

* 傳統調整 theme token 需要修改 CSS、重新編譯或刷新頁面
* 設計師與工程師不容易即時確認 token 對整體 UI 的影響
* Tailwind v3 與 v4 的 theme 設定格式不同
* 色彩格式需在 HEX、RGB、HSL、OKLCH 等格式間轉換
* 工具型產品需要清楚的操作回饋與低摩擦的複製流程

### 解法

* 將主題色彩的真實來源放在 CSS custom properties
* 透過 CSSOM 讀寫 `:root` 與 `.dark` 的 CSS variables
* React 只管理 UI 狀態，例如面板開關、目前 preset、Dialog tab
* 使用 colorjs.io 處理色彩轉換
* 針對 Tailwind v3 / v4 分別產生可複製的 token 格式
* 使用 Toast / Dialog / Panel 提供明確操作回饋

### 可加入簡化架構圖

```text
User adjusts color
↓
Color Picker / Theme Panel
↓
CSSOM updates CSS variables
↓
shadcn/ui components update immediately
↓
Copy Dialog exports Tailwind tokens
```

### 口頭重點

主題色彩不放在 React state，而是回到 CSS variables 本身，讓所有使用 token 的元件即時反映變化。這個決策可以展現我理解瀏覽器、CSS 與前端框架之間的分工。

---

## Slide 08｜JOSUI：AI 協作流程

### 標題

我如何使用 AI，但不依賴 AI

### 使用 AI 的情境

* 釐清功能拆解與開發順序
* 理解或比較第三方套件用法
* 產生初版元件與互動邏輯
* 協助 Debug 與整理錯誤方向
* 補充 README、文件與面試說明
* 檢查可能遺漏的邊界情境

### 我的審查方式

* 回到需求確認功能是否真的解決問題
* 檢查元件責任、命名、型別與資料流
* 確認產出是否符合專案既有風格
* 測試 Light / Dark、不同色彩格式、Copy 結果與 RWD
* 移除不必要的抽象或過度設計
* 將 AI 產出視為初稿，而不是最終答案

### 呼應 JD

微程式 JD 提到 AI 產出審查、需求拆解、測試驗收與高品質交付。這一頁可以直接說明我已經在 side project 中練習這種工作方式。

### 口頭重點

AI 可以提升探索與產出速度，但前端工程師仍需要判斷架構是否合理、互動是否完整、程式是否可維護，以及結果是否真的符合使用者需求。

---

## Slide 09｜專案案例二：City Probe

### 標題

City Probe：Nuxt 3 企業管理後台

### 專案背景

City Probe 是智慧城市與學術研究相關的管理平台，前端需支援登入認證、權限管理、資料查詢、表格、圖表、地圖與多語系等後台常見需求。

### 我的角色

* 前端功能開發
* Nuxt 3 頁面與元件開發
* API 串接
* 狀態管理
* 權限與使用者資料處理
* 表格、表單、儀表板與地圖相關功能開發
* 與後端及團隊協作排查問題

### 核心功能

* 登入 / 註冊 / 忘記密碼
* 使用者資料與權限控制
* 資料表格、查詢、篩選
* 儀表板與圖表
* 地圖與空間資料呈現
* 多語系介面
* 後台版面與共用元件

### 技術

* Nuxt 3
* Vue 3
* TypeScript
* Pinia
* Tailwind CSS
* Axios
* i18n
* Leaflet / Protomaps / Google Map
* vue-chartjs
* vue-good-table-next

### 口頭重點

這個案例用來證明我不只有 side project，也有實際 Vue / Nuxt 企業系統經驗，能處理資料狀態、權限、表格、地圖、多語系與跨角色協作。

---

## Slide 10｜City Probe：技術挑戰與解法

### 標題

如何處理管理後台中的複雜資料與互動

### 挑戰

* 後台頁面多，功能包含登入、資料查詢、儀表板、地圖與個人資料維護
* 使用者狀態、語系、主題等資訊需跨頁面共用
* 表格查詢、篩選、分頁與 API 參數需要一致管理
* 地圖套件與 SSR / CSR 行為需要特別處理
* 多語系檔案與 UI 文案需要維持一致
* 需要在既有專案結構中完成維護與功能迭代

### 解法

* 使用 Pinia 管理使用者、語系、主題設定等共用狀態
* 將頁面、components、composables、stores 分層處理
* 將地圖與瀏覽器限定套件設為 client-only 或排除 SSR 執行
* 使用 Nuxt plugins 管理表格、tooltip、日期選擇等瀏覽器端套件
* 透過 i18n 與自動產生語系檔流程降低文案維護成本
* 用 TypeScript 型別約束 API 資料與元件 props

### 可加入簡化架構圖

```text
Nuxt Page
├─ Feature Components
├─ Global Components
├─ Composables
├─ Pinia Stores
├─ Plugins
└─ API / Runtime Config
```

### 口頭重點

說明自己在管理後台開發時，會先理解資料從哪裡來、哪些狀態要跨頁共用、哪些套件只能在瀏覽器端運作，以及功能未來是否容易維護。

---

## Slide 11｜共用元件與開發效率

### 標題

從單一功能到可重複使用的設計

### 背景

在奇點無限與勝崨的專案中，企業系統與後台常會重複使用表格、表單、按鈕、Dialog、篩選器與分頁等 UI。若每個專案都重新實作，容易造成樣式與互動不一致，也會提高維護成本。

### 我的做法

* 整理高頻使用元件
* 定義一致的 Props 與 Emits
* 區分純 UI 元件與業務元件
* 將重複邏輯抽成 composable
* 補充使用方式與範例
* 與團隊討論元件責任
* 避免為了共用而過度抽象

### 可展示元件範例

* Button
* Input
* Select
* Dialog
* Table
* Pagination
* Form Field

### 口頭重點

共用元件不是把所有東西包起來，而是在「常重複、規則穩定、責任清楚」的地方抽象，讓新功能更快落地，也降低後續維護成本。

---

## Slide 12｜我的前端設計思維

### 標題

我在寫程式前會先思考什麼

### 五個面向

#### 1. Component Responsibility

每個元件是否只處理明確責任。

#### 2. Data Flow

資料由哪裡取得、在哪裡修改、哪些畫面需要共用。

#### 3. Maintainability

未來新增需求時，是否容易修改與閱讀。

#### 4. User Experience

Loading、錯誤、空資料、操作回饋是否完整。

#### 5. Performance

是否存在不必要的重新計算、渲染與資源載入。

### 流程圖

```text
需求
↓
使用情境
↓
資料結構
↓
元件責任
↓
狀態管理
↓
例外處理
↓
效能與維護
```

---

## Slide 13｜團隊合作與問題處理

### 標題

前端開發不只是完成畫面

### 與不同角色合作

#### PM / SA

* 確認需求背景
* 釐清操作流程
* 找出未定義的邊界條件

#### UI / UX

* 確認元件狀態
* 補齊 Loading、Empty、Error 狀態
* 討論不同解析度的呈現方式

#### Backend

* 確認 API 欄位
* 討論錯誤格式
* 釐清權限與資料狀態

#### Frontend Team

* Code Review
* 元件拆分
* 命名與程式碼一致性
* 技術方案討論

### 問題處理方式

```text
重現問題
→ 縮小範圍
→ 確認資料流
→ 找出根本原因
→ 修正
→ 驗證相關功能
```

---

## Slide 14｜為什麼想加入微程式

### 標題

我期待的下一個階段

### 內容方向

* 微程式職缺重視完整產品開發流程，與我過去參與需求討論、技術評估、開發、UAT 到上線的經驗吻合
* 職缺提到 AI 輔助開發與 AI 產出審查，與我在 JOSUI 中實際使用 AI 協作的經驗吻合
* 職缺重視 Code Review、可維護性、測試與 CI 流程，這也是我下一階段想持續深化的工程能力
* 我希望加入重視團隊合作、知識分享與持續改善的環境
* 我能帶入 Vue / Nuxt / TypeScript、企業系統、前端工具化與跨角色溝通經驗

### 建議文案

我期待下一個階段不只是完成單一畫面，而是更深入參與產品與系統開發，從需求拆解、技術方案、功能開發到品質驗收都能持續累積。

過去的工作經驗讓我累積了 Vue、Nuxt、TypeScript、企業系統、前端工具化與跨角色協作能力。JOSUI 也讓我實際練習如何用 AI 協助開發，同時保留工程師對架構與品質的判斷。這些方向與微程式職缺提到的產品開發、AI 工具應用、Code Review 與高品質交付很接近。

### 注意事項

避免過度稱讚公司。

測試、Docker、CI 不要說成主要強項，可誠實表達目前具備基本概念，正在從前端日常最直接相關的 lint、type check、build、test 開始補強。

---

## Slide 15｜Thank You

### 內容

* Thank You
* Q&A
* Hazel Kuo / 郭珮語
* Frontend Engineer

可加入：

* Email
* GitHub
* 個人網站
* JOSUI Demo
* QR Code

聯絡資訊可使用履歷資料，不要自行建立假資料。

---

# 六、時間分配

| 頁面  | 主題        |   建議時間 |
| --- | --------- | -----: |
| 1   | 封面        | 0.5 分鐘 |
| 2   | 關於我       |   1 分鐘 |
| 3   | 職涯歷程      | 1.5 分鐘 |
| 4   | 技術能力      |   1 分鐘 |
| 5   | 開發流程      | 1.5 分鐘 |
| 6–8 | JOSUI 專案 |   5 分鐘 |
| 9–10 | City Probe 專案 |   4 分鐘 |
| 11  | 共用元件      | 1.5 分鐘 |
| 12  | 設計思維      | 1.5 分鐘 |
| 13  | 團隊合作      |   1 分鐘 |
| 14  | 加入微程式動機   |   1 分鐘 |
| 15  | Q&A       | 0.5 分鐘 |

總時間約 19 分鐘。

實際練習時應將內容控制在 17～18 分鐘，保留操作失誤或臨場停頓時間。

---

# 七、元件規劃

建議專案結構：

```text
src/
├─ assets/
│  ├─ images/
│  └─ styles/
│     ├─ base.css
│     ├─ presentation.css
│     └─ print.css
├─ components/
│  ├─ presentation/
│  │  ├─ PresentationShell.vue
│  │  ├─ SlidePage.vue
│  │  ├─ SlideNavigation.vue
│  │  ├─ SlideProgress.vue
│  │  └─ KeyboardController.vue
│  ├─ common/
│  │  ├─ SectionTitle.vue
│  │  ├─ SkillTag.vue
│  │  ├─ InfoCard.vue
│  │  ├─ TimelineItem.vue
│  │  ├─ FlowDiagram.vue
│  │  └─ ProjectCard.vue
│  └─ slides/
│     ├─ CoverSlide.vue
│     ├─ AboutSlide.vue
│     ├─ CareerTimelineSlide.vue
│     ├─ SkillsSlide.vue
│     ├─ WorkflowSlide.vue
│     ├─ JosuiOverviewSlide.vue
│     ├─ JosuiTechnicalSlide.vue
│     ├─ JosuiAiWorkflowSlide.vue
│     ├─ CityProbeOverviewSlide.vue
│     ├─ CityProbeChallengeSlide.vue
│     ├─ ComponentSystemSlide.vue
│     ├─ EngineeringThinkingSlide.vue
│     ├─ CollaborationSlide.vue
│     ├─ MotivationSlide.vue
│     └─ ThanksSlide.vue
├─ composables/
│  ├─ usePresentation.ts
│  ├─ useKeyboardNavigation.ts
│  └─ useFullscreen.ts
├─ data/
│  ├─ profile.ts
│  ├─ skills.ts
│  ├─ projects.ts
│  └─ slides.ts
├─ types/
│  └─ presentation.ts
├─ App.vue
└─ main.ts
```

---

# 八、資料型別建議

```ts
export interface SlideItem {
  id: string
  title: string
  component: Component
  section: string
}

export interface SkillItem {
  name: string
  category: "core" | "practical" | "learning"
}

export interface ProjectItem {
  title: string
  description: string
  role: string[]
  technologies: string[]
  features: string[]
  challenges: string[]
  solutions: string[]
  results: string[]
}
```

簡報內文優先存放於資料檔中，避免所有文字直接寫死在元件模板內。

但每張 Slide 若具有獨特版型，可以保留獨立元件。

---

# 九、列印 PDF 規格

## 基本設定

```css
@page {
  size: A4 landscape;
  margin: 0;
}
```

每一張 Slide 在 PDF 中需獨立成一頁。

```css
@media print {
  .slide {
    width: 297mm;
    height: 210mm;
    page-break-after: always;
    break-after: page;
  }

  .slide:last-child {
    page-break-after: auto;
  }

  .presentation-controls {
    display: none !important;
  }
}
```

## 列印注意事項

* 不可發生內容跨頁
* 不可截斷文字
* 背景需可正常列印
* 圖片需避免模糊
* 不可使用需要 Hover 才能看到的重要資訊
* PDF 中所有重要資訊都必須直接顯示
* 網頁動畫在列印模式中全部停用
* 連結可顯示為 QR Code 或簡短文字
* 每頁內容應保留安全邊界

## 列印前處理

點擊列印按鈕時執行：

```ts
window.print()
```

列印模式使用：

* A4
* 橫向
* 邊界：無
* 背景圖形：開啟
* 縮放比例：100%

---

# 十、螢幕版與 PDF 版差異

## 螢幕版

* 一次只顯示一張 Slide
* 可使用鍵盤切換
* 可有淡入動畫
* 可顯示頁碼與控制器
* 可進入全螢幕
* 可點擊網站或 GitHub 連結

## PDF 版

* 一次輸出全部 Slide
* 每張 Slide 獨立一頁
* 隱藏所有操作控制
* 關閉所有動畫
* 不依賴互動才能閱讀
* 保證文字與圖片完整顯示

---

# 十一、動畫規範

只使用簡單動畫：

* Fade in
* TranslateY 8～16px
* Duration 約 300～500ms

不可使用：

* 大量 Parallax
* 旋轉動畫
* 過度縮放
* 背景粒子動畫
* 長時間打字動畫
* 會影響簡報節奏的轉場

並支援：

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

列印模式必須關閉所有動畫。

---

# 十二、內容撰寫原則

每張 Slide 遵守以下原則：

1. 一頁只講一個核心主題
2. 標題需能直接表達該頁結論
3. 不放大段履歷文字
4. 每個區塊控制在 3～6 個重點
5. 優先使用流程圖、架構圖與案例
6. 不放無法證明的效能數字
7. 不使用過度主觀的技能百分比
8. 不將所有技術工具全部堆在同一頁
9. 畫面內容是提示，完整內容由口頭補充
10. PDF 即使沒有口頭解說，也能理解主要經歷

---

# 十三、第一階段開發任務

請先完成以下內容，不要一次加入所有複雜效果：

1. 建立 Vue 3、Vite、TypeScript 專案
2. 建立簡報 Shell
3. 建立 15 張 Slide 的基本元件
4. 完成上一頁與下一頁功能
5. 完成鍵盤操作
6. 完成頁碼顯示
7. 完成全螢幕功能
8. 完成列印按鈕
9. 完成基本 16:9 畫面樣式
10. 完成 A4 橫向列印樣式
11. 使用假資料建立每頁初版
12. 確認 `npm run build` 無 TypeScript 錯誤

第一階段先不要加入：

* 複雜動畫
* Dark Mode
* 背景特效
* 大量外部套件
* Canvas
* 3D 效果
* 自動播放

---

# 十四、驗收條件

完成後需符合：

* [ ] 可使用 `npm install` 安裝
* [ ] 可使用 `npm run dev` 啟動
* [ ] 可使用鍵盤切換簡報
* [ ] 可透過按鈕切換簡報
* [ ] 可顯示目前頁碼
* [ ] 可進入與離開全螢幕
* [ ] 可點擊按鈕開啟列印
* [ ] 網頁展示時一次只顯示一頁
* [ ] PDF 匯出時包含全部頁面
* [ ] PDF 每張 Slide 獨立一頁
* [ ] PDF 不顯示導覽與按鈕
* [ ] PDF 內容沒有超出頁面
* [ ] 離線環境可正常展示
* [ ] 不依賴外部 CDN
* [ ] TypeScript 無錯誤
* [ ] Build 成功
* [ ] Chrome 瀏覽器可正常操作
* [ ] 1366×768 與 1920×1080 畫面均可正常顯示

---

# 十五、請 Cursor 優先產出的內容

請先產出：

1. 完整的專案目錄
2. `package.json`
3. `App.vue`
4. `PresentationShell.vue`
5. `SlidePage.vue`
6. `SlideNavigation.vue`
7. `usePresentation.ts`
8. `useKeyboardNavigation.ts`
9. `useFullscreen.ts`
10. 基本的 15 張 Slide 元件
11. `presentation.css`
12. `print.css`
13. 簡單的範例資料
14. README

程式碼需保持簡潔，並在重要邏輯處加入少量繁體中文註解。

不要只提供程式碼片段，請建立可直接執行的完整專案。

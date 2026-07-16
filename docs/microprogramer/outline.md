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

> 我是一位以 Vue 3、Nuxt 3、TypeScript 為主力的前端工程師，具備近四年前端實務經驗。我的履歷核心不是單一作品，而是從 PM 背景、企業系統、Nuxt 官網、SaaS 產品、共用元件庫，到 JOSUI AI 協作 side project 所累積出的前端產品開發能力。

簡報敘事順序：

1. **先建立履歷定位**：近四年前端、Vue / Nuxt / TypeScript、PM 背景、企業系統與產品開發。
2. **再講兩個主案例**：JOSUI 展示差異化與 AI 協作，City Probe 展示 Vue / Nuxt 企業後台實務。
3. **最後補足履歷經驗**：Nuxt 官網 / SaaS / 元件庫 / 既有專案維護 / 團隊協作，讓整份簡報回到真實工作經歷。

---

## Slide 01｜封面

### 目的

讓面試官快速知道我是誰，以及我的核心定位。

### 內容

* Hazel Kuo / 郭珮語
* Frontend Engineer
* Nuxt · Vue.js · TypeScript
* 微程式前端工程師面試
* 2026.07.24

### 畫面建議

左側放姓名與職稱，右側可放一個簡潔的個人定位區塊，例如：

```text
Vue / Nuxt Frontend Engineer
Product-minded frontend development
AI-assisted workflow with engineering review
```

### 口頭重點

簡單問候並說明：

這份簡報是使用 React 製作的網頁，同時也支援列印為 PDF，因此面試展示與提交資料共用同一份內容。

---

## Slide 02｜About Me

### 標題

關於我

### 核心內容

* 近四年前端開發實務經驗
* 主力技術：Vue 3、Nuxt 3、TypeScript
* 參與過企業內部系統、品牌官網及 SaaS 產品開發
* 從需求討論、技術評估、功能開發、測試驗收到正式上線皆有參與經驗
* 曾任 PM，習慣從產品需求、使用流程與協作成本思考技術實作
* 使用 Cursor 等 AI 工具協助開發，同時審查 AI 產出的架構、型別、邏輯與邊界情境

### 關鍵字

* Vue / Nuxt Development
* TypeScript
* Product Thinking
* Component Design
* AI-assisted Development
* Maintainability

### 口頭重點

直接取自履歷 summary 的核心：我不是只會切畫面的前端，而是會從需求、資料狀態、元件結構、使用體驗與後續維護一起思考。

---

## Slide 03｜職涯歷程

### 標題

從 PM 到前端工程師

### 呈現方式

使用 Timeline，讓每一段工作經歷都對應一個能力累積。

### 內容方向

1. **我瘋程式工作室｜PM**
   * 需求訪談、時程規劃、設計／開發協調
   * 因理解技術能力的重要性，開始自學並轉職前端
2. **奇點無限｜前端工程師**
   * 參與客戶系統重構
   * 承接既有專案，釐清未完成事項並推進下一期交付
   * 累積 codebase 維護、模組化改寫、Code Review、元件庫建置經驗
3. **勝崨有限公司｜前端工程師**
   * 參與企業 B 端系統、Nuxt 企業官網、SaaS 產品功能迭代
   * 與 SA、PM、Backend、UI/UX 協作，推進功能通過 UAT 並上線
4. **JOSUI｜Side Project**
   * 個人發起的 shadcn/ui 色彩主題預覽工具
   * 實際運用 AI 協作完成元件設計、開發與部署

### 口頭重點

這頁不要只是列公司，而是說明每段經歷如何形成現在的前端工作方式：懂需求、能維護既有系統、能獨立交付，也願意用 side project 驗證新工具與新流程。

---

## Slide 04｜技術能力地圖

### 標題

我的技術能力

### 分類

#### 核心使用

* Vue 3
* Nuxt 3
* TypeScript
* JavaScript ES6+
* HTML5 / CSS3 / SCSS
* Tailwind CSS
* Pinia / Vuex
* Composition API
* RESTful API / Axios

#### 實務使用

* RWD 響應式設計
* SSR / CSR 架構評估
* SEO 最佳化
* Web Performance
* Code Splitting
* 圖片 Lazy Loading
* 表單驗證
* 角色權限
* 資料表格 / 篩選 / 排序
* i18n 多語系
* Git / GitHub
* Vite / Webpack / npm

#### 專案延伸

* React（JOSUI 專案實務使用）
* shadcn/ui
* Radix UI
* 色彩 token / 設計系統工具
* Cloudflare 部署
* AWS Certified Cloud Practitioner

#### 持續補強

* Vitest / Vue Test Utils
* Docker 基礎操作
* CI 流程中的 lint / type check / build / test

### 注意事項

不要使用星等評分。以「核心使用 / 實務使用 / 專案延伸 / 持續補強」呈現，避免把不熟的技術包裝成主強項。

---

## Slide 05｜我的開發流程

### 標題

我如何把需求落成可維護的前端功能

### 流程

```text
需求背景
→ 使用流程
→ 功能拆解
→ 技術與風險評估
→ 元件與資料流規劃
→ API 契約確認
→ 功能開發
→ 測試與除錯
→ Code Review / UAT
→ 正式上線與後續維護
```

### 連回履歷

* 勝崨：與 SA、PM、Backend、UI/UX 協作，完成需求對齊與功能落地
* 奇點無限：承接既有專案與後端重構，降低修改風險並維持功能穩定
* 企業系統：處理多步驟表單、角色權限、列表篩選、複雜資料流
* 官網專案：兼顧 RWD、SEO、載入效能與跨裝置體驗

### 口頭重點

這頁是把履歷中的工作方式濃縮成流程。重點不是把流程講得很理想，而是說明這些步驟來自實際工作經驗。

---

## Slide 06｜專案案例一：JOSUI

### 標題

JOSUI：AI 協作完成的設計系統工具

### 專案背景

JOSUI 是我個人發起的開源工具，起源於公司內部推動設計系統時遇到的問題：開發者與設計師之間不容易對齊 shadcn/ui 的色彩呈現。

我將這個痛點做成一個可即時調整、可預覽、可複製 token 的主題色彩 Playground，降低設計與開發之間反覆確認的成本。

### 我的角色

* 個人發起與獨立開發
* 產品問題定義
* 前端架構與互動設計
* Theme Playground 開發
* 色彩 token 編輯與匯出
* Cloudflare 部署
* 使用 AI 工具協助拆解、開發與除錯，並自行審查產出品質

### 核心功能

* 即時預覽 component 在不同色彩主題下的呈現
* 支援 HEX、RGBA、HSLA 色彩格式轉換與複製
* 調整完成後可直接複製 token 回專案
* Light / Dark theme 切換
* Tailwind v3 / v4 token 匯出
* shadcn/ui 元件狀態展示

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

雖然 JOSUI 使用 React，但這頁的重點不是把自己包裝成 React 工程師，而是呈現我能發現工作中的實際痛點，並用前端工具化方式解決問題。

---

## Slide 07｜JOSUI：技術亮點

### 標題

讓主題色彩即時預覽與匯出

### 挑戰

* 傳統調整 theme token 需要修改 CSS、重新編譯或刷新頁面
* 設計師與工程師不容易即時確認 token 對整體 UI 的影響
* Tailwind v3 與 v4 的 theme 設定格式不同
* 色彩格式需要在 HEX、RGB、HSL、OKLCH 等格式間轉換
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

微程式 JD 提到 AI 產出審查、需求拆解、測試驗收與高品質交付。這一頁可以直接說明我已經在 JOSUI 中練習這種工作方式。

### 口頭重點

AI 可以提升探索與產出速度，但前端工程師仍需要判斷架構是否合理、互動是否完整、程式是否可維護，以及結果是否真的符合使用者需求。

---

## Slide 09｜專案案例二：City Probe

### 標題

City Probe：Nuxt 3 企業管理後台

### 專案背景

City Probe 是配合大學學術研究開發的智慧城市市民參與平台。前端負責登入認證、權限管理、數據視覺化儀表板等核心功能，並以 Tailwind CSS 與自訂元件實作表格、圖表、表單驗證等互動元件。

### 我的角色

* 前端功能開發
* Nuxt 3 頁面與元件開發
* API 串接
* Pinia 狀態管理
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

管理後台中的資料狀態與互動複雜度

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

## Slide 11｜Nuxt 官網與產品開發經驗

### 標題

從內容展示到產品功能迭代

### 對應履歷

#### FUKUKU 樂勁雲數位服務官網

* AI 智慧瓦斯配送服務平台官網
* 與設計師合作開發
* 負責前端架構設計與視覺實作
* 使用 Nuxt 3 SSR 提升 SEO 表現
* 實作產品介紹、服務模式展示、FAQ 等模組
* 優化載入效能與使用者體驗

#### 科技公司雙語形象官網

* 多語系切換
* 平滑滾動效果
* 響應式排版
* 圖片懶載入與 SEO 結構

#### SaaS 產品功能迭代

* 參與核心 SaaS 產品的商業模式規劃與市場路線討論
* 負責前端架構維護與功能迭代
* 將產品需求轉化為穩定且易於使用的操作介面

### 口頭重點

這頁補足履歷中除了 JOSUI 和 City Probe 之外的實務面：我熟悉 Nuxt 官網、SEO、RWD、效能，也參與過 SaaS 產品討論與前端功能迭代。

---

## Slide 12｜既有專案維護與共用元件

### 標題

讓專案能被持續維護與擴充

### 對應履歷

#### 既有專案維護

* 承接離職工程師留下的既有專案
* 先釐清功能流程、API 串接、元件關係與未完成事項
* 因應後端重構同步調整 API 串接邏輯
* 維持表單、權限、資料表格、儀表板等功能穩定

#### 共用元件庫建置

* 與前端工程師協作建置共用元件庫
* 統一設計規範與元件 API
* 整理高頻使用元件：Button、Input、Select、Dialog、Table、Pagination、Form Field
* 提升開發一致性並縮短新專案初始化時間

### 口頭重點

這頁可以展現我不是只會從零開始做新功能，也能接手既有 codebase、降低修改風險，並透過元件化改善團隊開發效率。

---

## Slide 13｜團隊合作與工程品質

### 標題

前端開發不只是完成畫面

### 與不同角色合作

#### PM / SA

* 確認需求背景
* 釐清操作流程
* 找出未定義的邊界條件
* 評估功能拆解與交付風險

#### UI / UX

* 確認元件狀態
* 補齊 Loading、Empty、Error 狀態
* 討論不同解析度的呈現方式
* 確認互動細節與實際資料長度

#### Backend

* 確認 API 欄位
* 討論錯誤格式
* 釐清權限與資料狀態
* 配合 API 重構或資料格式調整

#### Frontend Team

* Code Review
* 元件拆分
* 命名與程式碼一致性
* 技術方案討論

### 測試與 CI 的說法

* 過去主要參與功能測試、UAT 驗收與手動驗證
* 單元測試、Docker、CI 目前不是主要強項
* 正在從前端日常最直接相關的 lint、type check、build、test 開始補強
* 面對 AI 產出的測試，會確認它是否真的覆蓋需求與邊界情境

### 口頭重點

誠實但積極。不要把測試、Docker、CI 說成已經很熟；重點放在我理解它們對品質流程的重要性，也願意補強並配合團隊標準。

---

## Slide 14｜為什麼想加入微程式

### 標題

我期待的下一個階段

### 內容方向

* 微程式職缺重視完整產品開發流程，與我過去參與需求討論、技術評估、開發、UAT 到上線的經驗吻合
* 職缺提到 AI 輔助開發與 AI 產出審查，與我在 JOSUI 中實際使用 AI 協作的經驗吻合
* 職缺重視 Code Review、可維護性、測試與 CI 流程，這也是我下一階段想持續深化的工程能力
* 我希望加入重視團隊合作、知識分享與持續改善的環境
* 我能帶入 Vue / Nuxt / TypeScript、企業系統、Nuxt 官網、SaaS 產品、前端工具化與跨角色溝通經驗

### 建議文案

我期待下一個階段不只是完成單一畫面，而是更深入參與產品與系統開發，從需求拆解、技術方案、功能開發到品質驗收都能持續累積。

過去的工作經驗讓我累積了 Vue、Nuxt、TypeScript、企業系統、Nuxt 官網、SaaS 產品、共用元件與跨角色協作能力。JOSUI 也讓我實際練習如何用 AI 協助開發，同時保留工程師對架構與品質的判斷。這些方向與微程式職缺提到的產品開發、AI 工具應用、Code Review 與高品質交付很接近。

### 注意事項

避免過度稱讚公司。重點放在「我過去做過什麼」和「這些經驗如何對應微程式正在找的人」。

---

## Slide 15｜Thank You

### 內容

* Thank You
* Q&A
* Hazel Kuo / 郭珮語
* Frontend Engineer

可加入：

* Email：hazelworks598@gmail.com
* GitHub：github.com/FeiFeiSeal
* JOSUI：josui.space
* 個人網站
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
| 9–10 | City Probe 專案 | 3.5 分鐘 |
| 11  | Nuxt 官網與 SaaS | 1.5 分鐘 |
| 12  | 維護與共用元件 | 1.5 分鐘 |
| 13  | 團隊合作與品質 | 1.5 分鐘 |
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
│     ├─ NuxtProductExperienceSlide.vue
│     ├─ MaintenanceComponentSlide.vue
│     ├─ CollaborationQualitySlide.vue
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

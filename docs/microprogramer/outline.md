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
* 主題色系延續履歷網站的藍靛與藍紫色
* 微程式品牌紅 `#e62327` 作為少量強調色
* 大標題搭配簡潔資訊卡片
* 使用清楚的 Grid 排版
* 每頁只表達一個主要重點
* 圖片、流程圖、數字成果優先於長篇文字

### 色彩規範

整體色系以目前履歷網站為基礎，不改成紅色主題。

#### 主色：履歷藍色系

* 深色背景：`#1c2f60`、`#141e48`、`#0c1230`
* 主要強調藍紫：`#8090e0`
* 深一階強調：`#6070c8`
* 淺色底：`#eaecfb`
* 輔助漸層可使用：`#72a8ec` → `#8090e0` → `#9e80dc`

#### 副強調色：微程式紅

* Microprogram accent：`#e62327`
* 用途：關鍵字、章節小標、重要數字、時間線節點、進度條局部、callout 左線、重點底線
* 使用比例：整體視覺中約 5%～10%，只作為點睛，不作為大面積背景
* 避免用途：整頁背景、大面積卡片、長段文字、主要漸層主色

#### 建議搭配

```css
:root {
  --color-primary-navy: #1c2f60;
  --color-primary-indigo: #141e48;
  --color-primary-deep: #0c1230;
  --color-accent-blue: #8090e0;
  --color-accent-blue-deep: #6070c8;
  --color-accent-blue-soft: #eaecfb;
  --color-company-red: #e62327;
}
```


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

整份簡報預計約 12 頁，控制在 15～17 分鐘。

本次簡報主軸：

> 我是一位以 Vue 3、Nuxt 3、TypeScript 為主力的前端工程師，具備近四年前端實務經驗。我的履歷核心不是單一作品，而是從 PM 背景、企業系統、Nuxt 官網、SaaS 產品、共用元件庫，到 JOSUI AI 協作 side project 所累積出的前端產品開發能力。

簡報敘事順序：

1. **先建立履歷定位**：近四年前端、Vue / Nuxt / TypeScript、PM 背景、企業系統與產品開發。
2. **再講兩個主案例**：JOSUI 展示差異化與 AI 協作，City Probe 展示 Vue / Nuxt 企業後台實務。
3. **最後補足履歷經驗**：Nuxt 官網 / SaaS / 元件庫 / 既有專案維護 / 團隊協作，讓整份簡報回到真實工作經歷。

敘事語氣參考 marimba.design/about：

* 短句、有節奏，先讓面試官認識「人」，再進入技術。
* 文案可以有溫度，但不能太生活化或像自由接案設計師頁面。
* About、職涯歷程、加入動機與收尾可使用較敘事的語氣。
* JOSUI、City Probe、工程品質頁仍需保持前端工程師的結構與具體性。
* 每頁主標題盡量像一句結論，而不是履歷欄位名稱。

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
Turning complex requirements
into maintainable frontend experiences.
```

### 口頭重點

此段作為進入 JOSUI 頁面的口頭開場，不放進主要版面設計，避免畫面文字過多。

建議說法：

> 接下來想介紹我的 side project，JOSUI。這個名字來自台語「足水」，意思是很漂亮。我很喜歡這個名字，因為它本身帶有 UI，也剛好呼應這個工具想做的事情：讓 shadcn/ui 的主題色彩調整更直覺、更漂亮，也降低設計和開發之間來回確認的成本。

簡單問候並說明：

這份簡報是使用 Vue 3 製作的網頁，同時也支援列印為 PDF，因此面試展示與提交資料共用同一份內容。
也能在 https://my-resume.josui.space/interview/microprogramer 上進行檢視

---

## Slide 02｜About Me

### 標題

Hey, I’m Hazel.

### 核心內容

這頁可以使用 `interview-prep.md` 的自我介紹內容，整理成簡報版短句。照片可放在這一頁，讓第二頁更像真正的 About。

### 照片區塊

此頁需預留個人照片區塊。

* 建議位置：左側或右側固定區塊，另一側放自我介紹文字
* 建議比例：直式 4:5 或 3:4
* 建議裁切：圓角矩形，不使用圓形大頭照
* 照片風格：乾淨、自然、偏專業但不要太制式
* 背景建議：白色、淺灰、柔和室內背景，避免太雜或太生活照
* 視覺搭配：照片周圍可用履歷藍色系外框或淡藍底，微程式紅 `#e62327` 僅作小型點綴
* PDF 注意：照片需清楚，不可被裁切到臉部或壓縮變形

#### 建議畫面文案

```text
我是郭珮語，目前是一名前端工程師，
主要使用 Vue 3、Nuxt 3 和 TypeScript，
累積將近四年的前端開發經驗。
```

```text
過去我參與過企業內部系統、品牌官網和 SaaS 產品開發，
工作內容包含前端功能開發、API 串接、RWD、狀態管理、
測試驗收到正式上線。
```

```text
我不只是接到畫面後開始實作，
也會參與需求釐清和技術討論，
先理解使用流程、資料狀態和實作風險，
再把需求轉成清楚、可維護的前端結構。
```

```text
近期也使用 Cursor 等 AI 工具協助理解程式、Debug 和整理文件，
但最後仍會由我檢查架構、型別、邏輯和邊界情境。
```

### 可視化重點

* 近四年前端實務經驗
* 企業系統 / 品牌官網 / SaaS 產品
* Vue 3 / Nuxt 3 / TypeScript
* 需求釐清 / 技術討論 / UAT / 上線
* AI-assisted，但不依賴 AI

### 過渡到下一頁

這一頁先說明我是什麼樣的前端工程師。下一頁會更具體地整理我目前常用的技術能力，以及這些能力在實務專案中對應到的開發情境。

### 口頭重點

這頁不要完整背 60 秒版本，而是用自然口吻講出主軸：我有前端實務經驗，也習慣從需求、使用流程、資料狀態和維護性思考功能。

---


## Slide 03｜技術能力地圖

### 標題

Core Skills & Technologies

### 分類

技能分類需跟履歷網站 `resumeData.skillGroups` 保持一致，讓簡報與履歷有同一套資訊架構。

#### 前端核心

* JavaScript ES6+
* TypeScript
* HTML5
* CSS3 / SCSS
* Tailwind CSS

#### 框架與庫

* Nuxt 3
* Vue 3
* React
* Vue Router
* Pinia / Vuex
* Composition API

#### UI 與元件庫

* shadcn/ui
* 元件庫建置

#### API 與異步

* RESTful API
* Axios

#### 工具與版本控制

* Git / GitHub
* Vite
* Webpack
* npm

#### 優化與品質

* RWD 響應式設計
* Web Performance
* SEO 最佳化

#### 動畫與互動

* Framer Motion
* SVG Animation
* CSS Animation

### 呈現方式

* 不使用星等或百分比
* 可用 tag / chip / grouped list 呈現
* 履歷中標記 primary 的技能可視覺上更突出，例如 Nuxt 3、Vue 3、TypeScript、JavaScript ES6+、shadcn/ui
* React 要放在「框架與庫」，但視覺權重低於 Vue / Nuxt，避免面試官誤以為主力是 React
* 測試、Docker、CI 不放在此頁主技能，留到 Slide 13 以補強方向說明

### 過渡句

畫面可放一句短句，銜接下一頁職涯歷程：

```text
These skills were shaped through products, teams, and code.
```

口頭補充：

這些技術能力不是只靠看文件累積的，而是在不同專案和團隊合作中慢慢養成的。接下來我用職涯時間線，說明這些能力是怎麼形成的。

### 注意事項

此頁重點是快速建立技術輪廓，不要塞過多解釋。詳細使用情境會在後面的 JOSUI、City Probe、Nuxt 官網與工程品質頁展開。

---


## Slide 04｜Career Journey

### 標題

Career Journey

### 呈現方式

使用 Timeline。內容需跟履歷網站 `resumeData.jobs` 保持一致，包含公司、期間、職稱與主要工作重點。每段不要塞滿完整履歷文字，畫面顯示摘要，口頭再補充脈絡。

### 內容方向

#### 勝崨有限公司｜前端工程師｜2024.11 – 2026.05｜台中

* 負責前端功能開發與專案交付，參與 SSR / CSR 架構評估、狀態管理設計與第三方套件導入
* 與 SA、PM、Backend、UI/UX 團隊協作，完成需求對齊與功能落地，推進專案通過 UAT 並上線
* 參與多家客戶 B 端企業內部系統開發，實作多步驟表單、角色權限、列表篩選與排序等功能模組
* 負責企業官網開發與維護，使用 Nuxt SSR、Code Splitting、圖片 Lazy Loading 改善 SEO、載入效能與使用體驗
* 參與核心 SaaS 產品的商業模式規劃與市場路線討論，負責前端架構維護與功能迭代

#### 奇點無限股份有限公司｜前端工程師｜2022.08 – 2024.11｜台中

* 在技術長帶領下參與客戶系統重構，逐步累積 codebase 維護、模組化改寫與 Code Review 經驗
* 參與多家客戶內部系統開發，實作表單驗證、角色權限、資料表格與儀表板等模組
* 承接離職工程師的既有專案，釐清未完成事項並推進客戶下一期交付內容
* 因應後端重構同步調整 API 串接邏輯，維持既有功能穩定
* 獨立開發公司官網，並與技術長協作開發自有產品
* 與前端工程師協作建置共用元件庫，統一設計規範與元件 API

#### 我瘋程式工作室｜專案經理 PM｜2020.10 – 2022.01

* 負責單一客戶網站專案的需求訪談、時程規劃與設計 / 開發協調
* 完成專案交付，並在過程中理解技術能力對專案品質與溝通效率的重要性
* 後續主動投入自學並轉職前端工程師

### 呈現重點

* 時間軸可由近期往過去呈現，與履歷順序一致
* 每段工作可用 2～3 個短句呈現，不需要把所有 bullet 全放上畫面
* 勝崨重點：企業系統、Nuxt 官網、SaaS、跨角色協作、UAT 上線
* 奇點無限重點：系統重構、既有專案維護、API 調整、元件庫建置
* PM 經驗重點：需求理解與協作背景，不要讓主軸偏離前端

### 過渡到下一頁

這些經歷讓我形成一套比較固定的前端開發流程。下一頁我會用一張流程圖，說明我通常如何從需求背景一路走到功能上線與後續維護。

### 口頭重點

這頁要跟 resume 一致，但講法不要像逐條念履歷。重點是讓面試官理解：我的前端能力是從企業系統、官網、SaaS、既有專案維護與跨角色協作中累積出來的。

---



## Slide 05｜JOSUI Overview

### 標題

Style shadcn UI beautifully

### 專案背景

JOSUI 是我個人發起的開源工具，起源於公司內部推動設計系統時遇到的問題：開發者與設計師之間不容易對齊 shadcn/ui 的色彩呈現。

此專案的版面設計有與設計師合作進行，我負責將設計方向轉換成可互動、可維護的前端介面。

我將這個痛點做成一個可即時調整、可預覽、可複製 token 的主題色彩 Playground，降低設計與開發之間反覆確認的成本。

### 我的角色

* 個人發起與獨立開發
* 產品問題定義
* 與設計師合作進行版面設計
* 前端架構與互動實作
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

可以先用命名故事開場：JOSUI 來自台語「足水」，意思是很漂亮，也剛好包含 `UI`。這能讓面試官快速記住專案名稱，再接到它想解決的 shadcn/ui 主題色彩問題。

雖然 JOSUI 使用 React，但這頁的重點不是把自己包裝成 React 工程師，而是呈現我能從設計系統的實際痛點出發，與設計師合作整理產品方向，再用前端工具化方式解決問題。

---

## Slide 06｜JOSUI Technical Highlights

### 標題

Real-time Theme Preview and Token Export

### 挑戰

* 傳統調整 theme token 需要修改 CSS、重新編譯或刷新頁面
* 設計師與工程師不容易即時確認 token 對整體 UI 的影響
* Tailwind v3 與 v4 的 theme 設定格式不同
* 色彩格式需要在 HEX、RGB/RGBA、HSL/HSLA 等格式間轉換
* 工具型產品需要清楚的操作回饋與低摩擦的複製流程

### 解法

* 將主題色彩的真實來源放在 CSS custom properties
* 透過 CSSOM 讀寫 `:root` 與 `.dark` 的 CSS variables
* React 只管理 UI 狀態，例如面板開關、目前 preset、Dialog tab
* 處理 HEX、RGB/RGBA、HSL/HSLA 等色彩格式轉換
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

## Slide 07｜JOSUI AI Workflow

### 標題

Using AI as a Workflow Partner

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

## Slide 08｜專案案例二：City Probe

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
* vue-good-table-next

### 口頭重點

這個案例用來證明我不只有 side project，也有實際 Vue / Nuxt 企業系統經驗，能處理資料狀態、權限、表格、地圖、多語系與跨角色協作。

---

## Slide 09｜City Probe：技術挑戰與解法

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

### 口頭重點

說明自己在管理後台開發時，會先理解資料從哪裡來、哪些狀態要跨頁共用、哪些套件只能在瀏覽器端運作，以及功能未來是否容易維護。

---

## Slide 10｜FUKUKU 樂勁雲數位服務官網

### 標題

FUKUKU 樂勁雲數位服務官網

### 定位

AI 智慧瓦斯配送服務平台官網，與設計師合作開發。我負責前端架構設計與視覺實作，使用 Nuxt 3 SSR 建立可維護、可被搜尋理解的品牌頁面。

### 對應履歷

#### FUKUKU 樂勁雲數位服務官網

* AI 智慧瓦斯配送服務平台官網
* 與設計師合作開發
* 負責前端架構設計與視覺實作
* 使用 Nuxt 3 SSR 提升 SEO 表現
* 實作產品介紹、服務模式展示、FAQ 等模組
* 優化載入效能與使用者體驗

### 經驗重點

* 將設計稿轉成跨裝置穩定呈現的 RWD 版面
* 使用 Nuxt SSR / SEO meta 改善內容可見度
* 透過圖片 Lazy Loading、Code Splitting 降低載入負擔
* 整理重複區塊成可維護的頁面元件
* 補齊實際資料長度、圖片比例與互動狀態等設計稿外情境

### 口頭重點

這頁快速帶過，不要講成第三個主案例。重點是補充：除了工具型 side project 和企業後台，我也有 FUKUKU 這類 Nuxt 官網、SEO、RWD 與效能優化經驗。

---



## Slide 11｜Where I'm Heading

### 標題

Where I'm Heading

### 定位

此頁回應面試中常見的「未來職涯規劃」問題。

重點不是說明想學哪些技術，而是讓面試官理解：

> 下一個階段，我希望成為什麼樣的工程師。

### 畫面內容建議

此頁以「從前端出發，建立更完整的產品與系統思維」為主軸，使用一條三階段成長路徑呈現，不再放入 Why Microprogram。

#### Today｜穩定交付前端產品

目標：持續累積前端開發的深度與產品實戰經驗，成為能獨立承擔功能開發的工程師。

重點：

* 持續深化 Vue、Nuxt、TypeScript 的實務能力
* 能獨立完成需求分析、功能開發、API 串接與上線
* 在團隊中穩定承接產品功能開發、既有系統維護與跨部門協作
* 持續累積企業系統、產品開發與使用者需求分析經驗

#### Next｜Strengthen Engineering Quality

目標：除了完成需求之外，也持續建立更完整的工程品質與開發流程觀念。

重點：

* 建立前端測試能力，例如 Vitest、Vue Test Utils
* 熟悉 CI/CD 流程中與前端相關的 lint、type check、build、test
* 補強 Docker 與部署流程的基礎知識
* 善用 AI 提升需求拆解、Debug、文件整理與測試案例發想效率，同時保有工程師對程式品質、架構設計與技術判斷的責任

可放一句強調：

```text
AI 是提升效率的工具，而工程判斷仍然由我負責。
```

#### Future｜Become a Product-minded Engineer with Full-stack Thinking

目標：以穩固的前端能力為基礎，逐步建立完整的系統思維與全端能力。

重點：

* 以前端能力為核心，逐步學習後端開發與系統設計
* 理解 API 設計、資料模型、系統架構與資料流之間的關係
* 不只完成畫面，而是能理解需求、資料、流程與系統整體運作方式
* 能與前後端共同討論 API 契約、系統限制與技術方案
* 希望未來能參與更完整的產品開發，而不只是負責單一功能

### 成長路徑

可放在畫面中央或底部：

```text
Frontend Expertise
        ↓
Engineering Quality
(Test / CI / AI Workflow)
        ↓
System Thinking
(API / Data Flow / Architecture)
        ↓
Product-minded Engineer
with Full-stack Thinking
```

### 建議文案

我希望下一個階段，不只是持續完成前端功能，而是能更深入參與產品與系統開發。

短期內，我會持續深化前端技術，建立更完整的工程品質觀念，包括測試、自動化流程與部署能力；中長期則希望逐步理解後端開發、資料模型與系統架構，建立更完整的系統思維。

對我而言，學習後端並不是為了放棄前端，而是希望從更完整的角度理解產品如何運作，讓自己能與不同角色更有效地合作，並設計出更容易維護、更容易擴充的系統。

我期待在微程式參與不同產業的產品與專案，累積更多產品情境與實務經驗，持續提升自己解決問題的能力，並朝著具備全端思維的工程師穩定成長。

### 口頭重點

* 我的核心仍然是前端工程師
* 下一步希望補強工程品質與開發流程
* 長期希望建立全端思維，而不是單純學會更多技術
* 學習後端，是希望能更完整地理解產品與系統，而不是改變職涯方向
* 我期待透過微程式的產品與專案經驗，持續累積跨領域的技術視野與解決問題的能力

---


## Slide 12｜Thank You

### 標題

Thank you.

### 目的

收尾需與第一頁呼應，讓簡報從同一個核心定位開始，也用同一個定位結束。

### 畫面內容

* Hazel Kuo / 郭珮語
* Frontend Engineer
* Nuxt · Vue.js · TypeScript
* Q&A

### 呼應第一頁的定位句

```text
Turning complex requirements
into maintainable frontend experiences.
```

### 簡報網址

```text
my-resume.josui.space/interview/microprogramer
```

可搭配 QR Code，方便面試官現場或面試後開啟網頁版簡報。

### 聯絡資訊

* Email：hazelworks598@gmail.com
* GitHub：github.com/FeiFeiSeal
* JOSUI：josui.space
* 個人網站

### 口頭重點

可以用第一頁的定位句收束：今天的簡報從「把複雜需求轉成可維護的前端體驗」開始，最後也回到這個方向。謝謝面試官的時間，接著進入 Q&A。

---


# 六、時間分配

| 頁面  | 主題        |   建議時間 |
| --- | --------- | -----: |
| 1   | 封面        | 0.5 分鐘 |
| 2   | 關於我       |   1 分鐘 |
| 3   | 技術能力      |   1 分鐘 |
| 4   | 職涯歷程      | 1.5 分鐘 |
| 5–7 | JOSUI 專案 |   5 分鐘 |
| 8–9 | City Probe 專案 | 3.5 分鐘 |
| 10  | FUKUKU / Nuxt 官網 | 1.5 分鐘 |
| 11  | 未來職涯規劃   | 1.5 分鐘 |
| 12  | Q&A       | 0.5 分鐘 |

總時間約 16 分鐘。

實際練習時應將內容控制在 15～16 分鐘，保留操作失誤、現場提問或臨場停頓時間。

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
│     ├─ SkillsSlide.vue
│     ├─ CareerTimelineSlide.vue
│     ├─ JosuiOverviewSlide.vue
│     ├─ JosuiTechnicalSlide.vue
│     ├─ JosuiAiWorkflowSlide.vue
│     ├─ CityProbeOverviewSlide.vue
│     ├─ CityProbeChallengeSlide.vue
│     ├─ NuxtWebsitesSlide.vue
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
11. 敘事頁可使用短句與較有人味的語氣，但技術案例頁仍要具體、可驗證

---

# 十三、第一階段開發任務

請先完成以下內容，不要一次加入所有複雜效果：

1. 建立 Vue 3、Vite、TypeScript 專案
2. 建立簡報 Shell
3. 建立 12 張 Slide 的基本元件
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
10. 基本的 12 張 Slide 元件
11. `presentation.css`
12. `print.css`
13. 簡單的範例資料
14. README

程式碼需保持簡潔，並在重要邏輯處加入少量繁體中文註解。

不要只提供程式碼片段，請建立可直接執行的完整專案。

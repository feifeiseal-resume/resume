# Hazel Resume

個人履歷網站，使用 React + Vite 建置的靜態 SPA。

## 本機開發

```bash
npm install
cp .env.example .env   # 依需求修改環境變數
npm run dev
```

開發伺服器預設為 `http://localhost:5173`。修改 `.env` 後需重啟 dev server。

## 環境變數

複製 `.env.example` 為 `.env`，可用變數如下：

| 變數 | 說明 |
|------|------|
| `VITE_AVATAR_URL` | 履歷大頭照 URL |
| `VITE_CITY_PROBE_SCREENSHOTS` | 都市探針專案截圖，多張 URL 以逗號分隔 |
| `VITE_OG_IMAGE_URL` | Open Graph / Twitter 分享預覽圖 URL |

範例：

```env
VITE_AVATAR_URL=https://assets.josui.space/avatar.png
VITE_CITY_PROBE_SCREENSHOTS=https://assets.josui.space/city-probe-1.png,https://assets.josui.space/city-probe-2.png
VITE_OG_IMAGE_URL=https://assets.josui.space/resume-og.jpeg
```

> Vite 會在 **build 時** 將 `VITE_` 前綴的變數寫入前端程式碼，並非執行時讀取。這些 URL 會出現在打包後的 JS 中，不屬於機密資料。

`.env` 已列入 `.gitignore`，請勿 commit 本機設定。

## 建置

```bash
npm run build
```

產出目錄為 `dist/`，可直接部署至任何靜態主機。

本機預覽建置結果：

```bash
npm run preview
```

## 部署

### Cloudflare Pages（建議）

1. 將 repo 連結至 [Cloudflare Pages](https://pages.cloudflare.com/)
2. 建置設定：

   | 項目 | 值 |
   |------|-----|
   | Framework preset | None |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node.js version | 20 或以上 |

3. 至 **Settings → Environment variables** 新增：
   - `VITE_AVATAR_URL`
   - `VITE_CITY_PROBE_SCREENSHOTS`
   - `VITE_OG_IMAGE_URL`

4. Production 與 Preview 環境皆需設定（若 Preview 也要顯示圖片）
5. 儲存後重新部署（Redeploy）

自訂網域可在 **Custom domains** 設定。

### GitHub Actions + GitHub Pages

若使用 GitHub Pages 部署，可在 repo 的 **Settings → Secrets and variables → Actions → Variables** 設定上述環境變數，並建立 workflow：

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci
      - run: npm run build
        env:
          VITE_AVATAR_URL: ${{ vars.VITE_AVATAR_URL }}
          VITE_CITY_PROBE_SCREENSHOTS: ${{ vars.VITE_CITY_PROBE_SCREENSHOTS }}
          VITE_OG_IMAGE_URL: ${{ vars.VITE_OG_IMAGE_URL }}

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

並在 **Settings → Pages** 將 Source 設為 **GitHub Actions**。

若部署至 `https://<user>.github.io/<repo>/` 子路徑，需在 `vite.config.ts` 設定 `base: '/<repo>/'`。

### 手動部署

```bash
npm ci
npm run build
# 將 dist/ 內容上傳至靜態主機（S3、Nginx、Cloudflare R2 等）
```

## 靜態資源

- `public/robots.txt` — 禁止搜尋引擎與 AI 爬蟲索引
- 大頭照、專案截圖等動態資源建議放在 CDN（例如 `assets.josui.space`），透過 `.env` 設定 URL

## 專案結構

```
src/
├── components/     # Resume、ScreenshotLightbox、Carousel
├── data/           # 履歷內容（resumeData.ts）
└── styles/         # CSS
public/             # 靜態檔案（robots.txt 等）
dist/               # 建置產出（勿 commit）
```

## 常見問題

**修改 `.env` 後線上沒更新？**  
環境變數只在 build 時生效，需在部署平台更新變數後重新觸發部署。

**「檢視截圖」按鈕沒出現？**  
確認 `VITE_CITY_PROBE_SCREENSHOTS` 已設定且至少有一個有效 URL。

**圖片載入失敗？**  
確認 CDN 允許跨域存取，且 URL 可在瀏覽器直接開啟。

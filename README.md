# RoomList Website — Vercel Version

這是 RoomList 官方網站的 Vercel 部署版本，已整理為標準 Next.js 專案。

## 本機執行

需要 Node.js 22。

```bash
npm install
npm run dev
```

開啟 <http://localhost:3000> 即可預覽。

## 部署到 Vercel

### 方法一：透過 GitHub（建議）

1. 將解壓縮後的所有檔案上傳到新的 GitHub Repository。
2. 登入 Vercel，選擇 **Add New → Project**。
3. 匯入剛建立的 GitHub Repository。
4. Framework Preset 選擇 **Next.js**（通常會自動判斷）。
5. 不需要設定環境變數，直接按下 **Deploy**。

Vercel 會自動提供正式網址，網站也會用該網址產生社群分享圖片連結。

### 方法二：使用 Vercel CLI

```bash
npm install
npx vercel
```

首次部署依畫面登入並接受預設設定即可；正式發布可執行：

```bash
npx vercel --prod
```

## 建置檢查

```bash
npm run build
npm run lint
```

網站包含首頁與 `/privacy` 隱私權政策頁，不需要資料庫或額外環境變數。

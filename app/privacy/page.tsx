import type { Metadata } from "next";
import Link from "next/link";
import { BackToTop } from "../BackToTop";

export const metadata: Metadata = {
  title: "隱私權政策｜RoomList",
  description: "RoomList 如何處理、儲存與保護使用者資料。",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <nav className="nav wrap" aria-label="隱私權頁面導覽">
        <Link className="brand" href="/" aria-label="返回 RoomList 首頁"><img src="/logo-lockup.svg" alt="RoomList" /></Link>
        <Link className="nav-cta" href="/">返回首頁</Link>
      </nav>
      <header className="legal-hero">
        <div className="wrap"><h1>隱私權政策</h1><p>你的清單屬於你。RoomList 以本機儲存為核心，不建立使用者資料庫。</p><span>生效日期：2026 年 7 月 12 日</span></div>
      </header>
      <article className="legal-content wrap">
        <p className="legal-lead">RoomList 是將多個電商網站的家居商品整理成空間採購清單的 Chrome 擴充功能。本政策說明 RoomList 如何處理使用者資料。</p>
        <section><span>01</span><div><h2>處理的資料</h2><ul><li>支援商品頁上的商品名稱、圖片、價格、貨號、來源網站及網址。</li><li>使用者建立的清單名稱、空間分類、商品數量及清單內容。</li><li>使用者自行填寫的預設收件 Email。</li><li>擴充功能啟用狀態及隱私同意紀錄。</li></ul></div></section>
        <section><span>02</span><div><h2>使用目的</h2><p>上述資料只用於建立、顯示、管理、備份、列印及分享使用者的空間採購清單，不用於廣告、追蹤、使用者側寫或其他未揭露用途。</p></div></section>
        <section><span>03</span><div><h2>儲存與傳輸</h2><p>資料透過 <code>chrome.storage.local</code> 儲存在使用者目前的 Chrome 瀏覽器設定檔中。RoomList 沒有開發者後端伺服器，不會將清單、瀏覽內容或 Email 傳送給 RoomList 開發者或出售給第三方。</p><p>當使用者主動選擇 Email 寄送時，RoomList 會以 <code>mailto:</code> 開啟使用者裝置上的預設郵件程式並帶入清單內容；是否寄出及收件對象由使用者確認。商品連結與圖片仍由原電商網站提供並受該網站政策約束。</p></div></section>
        <section><span>04</span><div><h2>資料保留與刪除</h2><p>資料會保留在本機，直到使用者在 RoomList 中刪除項目、清除擴充功能資料，或解除安裝擴充功能。使用者可在 Chrome 的擴充功能設定中清除 RoomList 的網站或擴充功能資料。</p></div></section>
        <section><span>05</span><div><h2>權限用途</h2><p><code>storage</code> 權限用於保存清單、設定及隱私同意紀錄。對列出的支援電商網站之存取，只用於在那些頁面顯示 RoomList 介面及擷取使用者要加入清單的商品資料。</p></div></section>
        <section><span>06</span><div><h2>資料使用限制</h2><p>RoomList 對使用者資料的使用遵循 Chrome Web Store User Data Policy，包括 Limited Use 規定。資料不會被轉售、不會用於個人化廣告，也不會允許人工閱讀，除非使用者為取得支援而明確提供特定資料，或法律另有要求。</p></div></section>
        <section><span>07</span><div><h2>政策變更與聯絡</h2><p>若資料處理方式有實質變更，RoomList 會先在擴充功能介面中明確揭露，並在需要時重新取得同意。隱私相關問題可透過 Chrome Web Store 商品頁所列的開發者支援管道聯絡。</p></div></section>
      </article>
      <footer><div className="wrap footer-grid"><Link className="brand footer-brand" href="/"><img src="/logo-lockup.svg" alt="RoomList" /></Link><p>獨立開發的開源工具，與支援的電商品牌皆無隸屬、合作、贊助或授權關係。</p><div><Link href="/">返回首頁</Link><a href="https://github.com/chienchitung/room-wishlist-extension" target="_blank" rel="noreferrer">GitHub</a></div></div></footer>
      <BackToTop />
    </main>
  );
}

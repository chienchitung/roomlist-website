import { BackToTop } from "./BackToTop";
import { HeroArtwork } from "./HeroArtwork";

const GithubIcon = () => <svg className="github-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943" /></svg>;

const FeatureIcon = ({ type }: { type: "collect" | "room" | "budget" | "share" }) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {type === "collect" && <><rect x="2.5" y="3" width="14" height="14" rx="3.5" fill="currentColor" opacity=".18" /><rect x="6" y="6.5" width="15.5" height="14.5" rx="3.5" fill="currentColor" /><circle cx="9" cy="9.5" r="1" fill="#f4f0e7" opacity=".9" /><circle cx="12" cy="9.5" r="1" fill="#f4f0e7" opacity=".9" /><path d="M14 13.1c1.4-1.8 4.2-.8 4.2 1.4 0 1.9-1.6 3.2-4.2 4.8-2.6-1.6-4.2-2.9-4.2-4.8 0-2.2 2.8-3.2 4.2-1.4Z" fill="#d7aa63" /></>}
      {type === "room" && <><rect x="3" y="3" width="18" height="18" rx="5" fill="currentColor" /><path d="M6.5 6.5h4.1v4.1H6.5Zm6.9 0h4.1v4.1h-4.1Zm-6.9 6.9h4.1v4.1H6.5Z" fill="#f4f0e7" /><path d="M13.4 13.4h4.1v4.1h-4.1Z" fill="#d7aa63" /></>}
      {type === "budget" && <><circle cx="10.5" cy="11.5" r="8.5" fill="currentColor" opacity=".2" /><path d="M10.5 3a8.5 8.5 0 1 0 8.5 8.5h-8.5Z" fill="currentColor" /><path d="M12.5 3.2A8.5 8.5 0 0 1 18.8 9h-6.3Z" fill="#d7aa63" /><rect x="15" y="14" width="6" height="2.2" rx="1.1" fill="#d7aa63" /><rect x="15" y="17.8" width="4" height="2.2" rx="1.1" fill="currentColor" /></>}
      {type === "share" && <><path d="M5 2.5h9l5 5V21.5H5Z" fill="currentColor" /><path d="M14 2.5v5h5" fill="#d7aa63" /><rect x="8" y="11" width="8" height="1.8" rx=".9" fill="#f4f0e7" /><rect x="8" y="14.5" width="6" height="1.8" rx=".9" fill="#f4f0e7" /><circle cx="17.5" cy="17.5" r="4" fill="#d7aa63" /><circle cx="17.5" cy="16.2" r="1.2" fill="#203c31" /><path d="M15.4 19.6c.4-1.3 1.1-2 2.1-2s1.8.7 2.1 2" fill="#203c31" /></>}
    </svg>
  );
};

const features = [
  { icon: "collect" as const, title: "跨站收藏", text: "在支援的電商商品頁，一鍵加入共用清單，不必再開十幾個分頁比對。" },
  { icon: "room" as const, title: "依空間分類", text: "客廳、臥室、書房或自訂空間，讓每一件家具都有清楚的歸屬。" },
  { icon: "budget" as const, title: "即時掌握預算", text: "自動計算各空間小計與總額，保留商品來源、價格與原始連結。" },
  { icon: "share" as const, title: "匯出與分享", text: "整理完成後匯出 PDF，或透過 Email 分享清單，和家人或設計師一起討論。" },
];

const stores = ["IKEA", "PChome 24h", "momo", "宜得利家居", "特力屋", "MR.LIVING", "hoi! 好好生活", "淘寶・天貓", "蝦皮購物", "酷澎"];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="主要導覽">
        <a className="brand" href="#top" aria-label="RoomList 首頁"><img src="/logo-lockup.svg" alt="RoomList" /></a>
        <div className="nav-links">
          <a href="#features">功能</a>
          <a href="#how">使用方式</a>
          <a href="#support">支援網站</a>
          <a href="#faq">常見問題</a>
        </div>
        <a className="nav-cta" href="https://github.com/chienchitung/room-wishlist-extension" target="_blank" rel="noreferrer"><GithubIcon /> GitHub 開源專案</a>
      </nav>

      <section id="top" className="hero">
        <div className="wrap hero-home-grid">
          <div className="hero-home-copy">
            <p className="hero-kicker">免費的 Chrome 家居採購工具</p>
            <h1><span className="hero-title-line">把不同網站的家具，</span><span className="hero-title-line">收進同一份採購清單</span></h1>
            <p className="hero-home-lead">逛 IKEA、宜得利、特力屋等網站時，一鍵收藏商品；再依客廳、臥室等空間分類，自動加總預算。</p>
            <div className="hero-home-actions">
              <a className="button primary" href="https://github.com/chienchitung/room-wishlist-extension/releases" target="_blank" rel="noreferrer">取得 RoomList</a>
              <a className="hero-secondary" href="#how">先看怎麼使用</a>
            </div>
            <div className="hero-proof" aria-label="產品特色">
              <span>免費開源</span><span>資料留在瀏覽器</span><span>支援 10 個購物網站</span>
            </div>
          </div>
          <div className="hero-product-shot"><HeroArtwork /></div>
        </div>
      </section>

      <section id="features" className="section cream">
        <div className="wrap">
          <div className="section-heading feature-heading"><h2>一份清單，<br />裝進整個家的想法</h2><p className="feature-lead">從第一次收藏到最後下單，RoomList 把分散的選擇串成同一條採購流程，讓每個空間的商品、來源與預算都清楚可追蹤。</p></div>
          <div className="feature-grid">{features.map((f) => <article key={f.title}><div className="feature-icon"><FeatureIcon type={f.icon} /></div><h3>{f.title}</h3><p>{f.text}</p></article>)}</div>
        </div>
      </section>

      <section id="how" className="section dark">
        <div className="wrap how-grid">
          <div className="demo-frame"><img src="/roomlist-demo.gif" alt="RoomList 跨電商收藏與整理操作示範" /><span className="demo-label">LIVE DEMO</span></div>
          <div className="how-copy"><h2>看到喜歡的，<br />三步收進清單</h2>
            <ol>
              <li><b>1</b><div><strong>逛你熟悉的電商網站</strong><p>在支援的商品頁瀏覽家具與家飾。</p></div></li>
              <li><b>2</b><div><strong>加入並選擇空間</strong><p>點擊 RoomList 按鈕，將商品放進客廳、臥室或其他空間。</p></div></li>
              <li><b>3</b><div><strong>整理、計算、分享</strong><p>調整數量、查看預算，再匯出一份完整的 PDF 採購清單。</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section id="support" className="section support">
        <div className="wrap support-grid"><div><h2>跨網站收藏，<br />不被單一平台綁住</h2><p className="support-copy">RoomList 支援台灣常用家居與綜合電商。商品會保留來源標籤與連結，回頭比價或下單更容易。</p><a className="text-link dark-link" href="https://github.com/chienchitung/room-wishlist-extension#支援網站" target="_blank" rel="noreferrer">查看完整支援說明</a></div>
          <div className="store-cloud">{stores.map((store) => <span key={store} className="active">{store}</span>)}</div></div>
      </section>

      <section className="cta-section"><div className="cta-orb" /><div className="wrap cta-inner"><h2>下一個空間，<br />從一份好清單開始。</h2><p>免費、開源，資料保存在你的瀏覽器裡。</p><a className="button gold-button" href="https://github.com/chienchitung/room-wishlist-extension" target="_blank" rel="noreferrer">在 GitHub 查看專案</a></div></section>

      <section id="faq" className="section faq-section">
        <div className="wrap faq-layout">
          <div className="faq-intro"><h2>開始使用前，<br />你可能想知道</h2><p>關於安裝、支援網站、資料保存與商品價格的常見問題。</p></div>
          <div className="faq-content">
            <details open><summary>RoomList 要怎麼安裝？</summary><div><p>目前可從 GitHub 下載專案，在 Chrome 擴充功能頁開啟「開發人員模式」，再選擇「載入未封裝項目」。安裝完成後，前往支援的商品頁即可使用。</p></div></details>
            <details><summary>所有支援網站都能從列表頁加入商品嗎？</summary><div><p>IKEA、PChome 24h、momo、宜得利、特力屋、MR.LIVING 與 hoi! 好好生活支援商品頁及列表／分類頁。淘寶、天貓、蝦皮與酷澎目前支援從單一商品頁加入。</p></div></details>
            <details><summary>商品資料會上傳到伺服器嗎？</summary><div><p>不會。清單與設定使用 Chrome 的本機儲存空間，RoomList 沒有開發者後端伺服器。完整說明可查看隱私權政策頁面。</p></div></details>
            <details><summary>電商改版後，按鈕無法使用怎麼辦？</summary><div><p>如果網站原本的收藏按鈕暫時無法辨識，可以改用商品頁右下角的「加入採購清單」按鈕。</p></div></details>
            <details><summary>清單中的價格會自動跟著活動價更新嗎？</summary><div><p>電商活動價、即時折扣與庫存可能隨時變動，RoomList 適合用來整理與估算；實際價格仍以結帳頁顯示為準。</p></div></details>
            <details><summary>可以和家人或設計師分享嗎？</summary><div><p>可以。你可以匯出 PDF 採購清單，或用 Email 帶入清單內容，再由你確認收件人與是否寄出。</p></div></details>
          </div>
        </div>
      </section>

      <footer><div className="wrap footer-grid"><a className="brand footer-brand" href="#top"><img src="/logo-lockup.svg" alt="RoomList" /></a><p>獨立開發的開源工具，與支援的電商品牌皆無隸屬、合作、贊助或授權關係。</p><div><a href="/privacy">隱私權政策</a><a href="https://github.com/chienchitung/room-wishlist-extension" target="_blank" rel="noreferrer">GitHub</a></div></div></footer>
      <BackToTop />
    </main>
  );
}

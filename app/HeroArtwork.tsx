export function HeroArtwork() {
  return (
    <svg className="hero-artwork" viewBox="552 107 652 503" role="img" aria-labelledby="hero-title hero-desc" preserveAspectRatio="xMidYMid meet">
      <title id="hero-title">RoomList 跨電商空間採購清單</title>
      <desc id="hero-desc">把不同網站的家居商品收藏到同一份清單，依空間分類並統計預算。</desc>
      <defs>
        <linearGradient id="hero-background" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#20382c" />
          <stop offset="1" stopColor="#45624e" />
        </linearGradient>
        <filter id="hero-shadow" x="-30%" y="-30%" width="170%" height="175%">
          <feDropShadow dx="0" dy="24" stdDeviation="25" floodColor="#15231a" floodOpacity=".38" />
        </filter>
      </defs>

      <rect width="1280" height="720" fill="url(#hero-background)" />
      <circle cx="1162" cy="72" r="275" fill="#d9a56d" opacity=".13" />
      <circle cx="54" cy="728" r="270" fill="#fff" opacity=".045" />
      <path d="M930 0h350v230L1080 114Z" fill="#fff" opacity=".026" />

      <g transform="translate(72 65) scale(.62)">
        <rect width="128" height="128" rx="28" fill="#fff" />
        <rect x="8" y="9" width="112" height="110" rx="25" fill="none" stroke="#c6a668" strokeWidth="3" />
        <path d="M15 19 35 35h85M35 35v59M15 108l20-14h12M94 94h26" fill="none" stroke="#c6a668" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <g transform="translate(-7.8 -12.64) scale(1.12)">
          <path d="M38 52h6l6 32h39L96 59H47" fill="none" stroke="#464a47" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="57" cy="92" r="5.2" fill="#464a47" /><circle cx="84" cy="92" r="5.2" fill="#464a47" />
          <path d="M52 58h18l10 10-10 10H52a4 4 0 0 1-4-4V62a4 4 0 0 1 4-4Z" fill="#b8bbb7" />
          <path d="M60 49h23l12 12-12 12H60a5 5 0 0 1-5-5V54a5 5 0 0 1 5-5Z" fill="#5b605c" />
          <path d="M69 55.5c-4-4.3-10.1-1.1-10.1 4.1 0 4.5 3.9 7.6 10.1 11.7 6.2-4.1 10.1-7.2 10.1-11.7 0-5.2-6.1-8.4-10.1-4.1Z" fill="#fff" />
        </g>
      </g>

      <text x="170" y="109" fontFamily="Avenir Next, PingFang TC, system-ui, sans-serif" fontSize="43" fontWeight="700" fill="#fff">RoomList</text>
      <text x="170" y="141" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="18" fontWeight="500" fill="#dce6df">跨電商空間採購清單</text>
      <text x="72" y="268" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="53" fontWeight="700" fill="#fff">收藏喜歡的家具</text>
      <text x="72" y="337" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="53" fontWeight="700" fill="#fff">一次整理每個空間</text>
      <text x="72" y="397" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="20" fontWeight="500" fill="#dce6df">跨網站收藏・空間分類・預算加總・PDF 匯出</text>

      <g className="hero-art-panel" transform="translate(552 107)">
        <rect width="652" height="503" rx="28" fill="#fff" />
        <rect width="652" height="82" rx="28" fill="#f7f8f7" />
        <path d="M0 50h652v32H0Z" fill="#f7f8f7" />
        <text x="34" y="39" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="21" fontWeight="700" fill="#25382c">我的採購清單</text>
        <text x="34" y="64" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="12" fill="#6e746f">4 項商品・NT$15,747</text>
        <circle cx="594" cy="41" r="18" fill="#fff" stroke="#dfdfdf" />
        <path d="M586 41h16M594 33v16" stroke="#45624e" strokeWidth="2" strokeLinecap="round" />

        <g transform="translate(30 105)">
          <rect width="82" height="32" rx="16" fill="#45624e" /><text x="27" y="21" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#fff">全部</text>
          <rect x="92" width="82" height="32" rx="16" fill="#f1f3f1" /><text x="119" y="21" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#484848">客廳</text>
          <rect x="184" width="82" height="32" rx="16" fill="#f1f3f1" /><text x="211" y="21" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#484848">臥室</text>
        </g>

        <g transform="translate(30 169)">
          <rect width="58" height="58" rx="11" fill="#e7ece8" /><path d="M14 40 28 24l9 9 7-8v20H14Z" fill="#8db49a" /><circle cx="42" cy="18" r="4.5" fill="#d9a56d" />
          <text x="78" y="21" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="15" fontWeight="700" fill="#25382c">客廳家具商品</text>
          <text x="78" y="45" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="11" fill="#747a75">來源網站・客廳・數量 1</text>
          <text x="574" y="30" textAnchor="end" fontFamily="Avenir Next, system-ui, sans-serif" fontSize="16" fontWeight="700" fill="#25382c">NT$5,618</text>
          <line y1="82" x2="592" y2="82" stroke="#e5e7e5" />
        </g>

        <g transform="translate(30 273)">
          <rect width="58" height="58" rx="11" fill="#f2eee8" /><path d="M13 41h31V25l-9-8-9 10-6-5Z" fill="#c6a668" opacity=".82" />
          <text x="78" y="21" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="15" fontWeight="700" fill="#25382c">臥室家居商品</text>
          <text x="78" y="45" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="11" fill="#747a75">來源網站・臥室・數量 2</text>
          <text x="574" y="30" textAnchor="end" fontFamily="Avenir Next, system-ui, sans-serif" fontSize="16" fontWeight="700" fill="#25382c">NT$8,139</text>
          <line y1="82" x2="592" y2="82" stroke="#e5e7e5" />
        </g>

        <g transform="translate(30 391)">
          <text y="20" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="13" fill="#747a75">總金額</text>
          <text x="592" y="25" textAnchor="end" fontFamily="Avenir Next, system-ui, sans-serif" fontSize="27" fontWeight="700" fill="#25382c">NT$15,747</text>
          <rect y="42" width="592" height="48" rx="24" fill="#45624e" />
          <text x="296" y="73" textAnchor="middle" fontFamily="PingFang TC, system-ui, sans-serif" fontSize="15" fontWeight="700" fill="#fff">匯出 PDF 採購清單</text>
        </g>
      </g>
    </svg>
  );
}

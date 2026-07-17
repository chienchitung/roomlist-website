import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://roomlist-space-shopping.jack0703123.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RoomList｜跨電商空間採購清單",
  description: "把不同電商的家具收藏，依空間整理、掌握預算並匯出分享。免費、開源、資料只保存在你的瀏覽器。",
  icons: { icon: "/icon128.png", shortcut: "/icon128.png" },
  openGraph: { title: "RoomList｜跨電商空間採購清單", description: "收藏家具・整理空間・掌握預算", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "RoomList｜跨電商空間採購清單", description: "收藏家具・整理空間・掌握預算", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}

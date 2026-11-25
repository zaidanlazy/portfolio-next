import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaidan Maulana Alghifari | Portofolio",
  description:
    "Portofolio Zaidan, lulusan SMKN 1 Bontang jurusan RPL, mencari peluang magang & entry-level di bidang software/web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="font-body bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XPMI — Strategic Intelligence for High-Stakes Decisions",
  description:
    "Before you make the decision, stress-test it. XPMI analyzes business reality, simulates failure, models futures, and turns uncertainty into executable decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abel&family=Inter:wght@400;500;600&family=Vazirmatn:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

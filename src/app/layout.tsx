import type { Metadata } from "next";

import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "plusbeauxjours",
  description:
    "Freelancer specializing in Fullstack development using React, React-Native, Flutter, Django, Langchain, NestJS, and NodeJS. Available for projects in Korean.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GaId = "G-0MM0HSWRKW";
  return (
    <html>
      <head>
        <GoogleAnalytics GaId={GaId} />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        <script src="https://cdn.websitepolicies.io/lib/cconsent/cconsent.min.js" defer />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2931981606209596"
        />
      </head>
      <body className="bg-bgColor">
        <main
          className="w-full max-w-[1160px] mx-auto antialiased"
          style={{ minHeight: "calc(100vh - 520px)" }}>
          {children}
        </main>
      </body>
    </html>
  );
}

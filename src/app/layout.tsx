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
        <GoogleAnalytics GA_MEASUREMENT_ID={GaId} />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        <script src="https://cdn.websitepolicies.io/lib/cconsent/cconsent.min.js" defer />
      </head>
      <body>
        <main
          className="w-full max-w-[1160px] mx-auto antialiased"
          style={{ minHeight: "calc(100vh - 520px)" }}>
          {children}
        </main>
      </body>
    </html>
  );
}

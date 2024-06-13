"use client";

import { useEffect } from "react";

import Script from "next/script";
import { usePathname } from "next/navigation";

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname();
  const gaPageView = (GA_MEASUREMENT_ID: string, url: string) => {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  };

  useEffect(() => {
    const url = pathname;
    gaPageView(GA_MEASUREMENT_ID, url);
  }, [pathname, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());        
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
}
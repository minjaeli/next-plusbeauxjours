"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

export default function GoogleAnalytics({ GaId }: { GaId: string }) {
  const pathname = usePathname();

  const gaPageView = (GaId: string, url: string) => {
    window.gtag("config", GaId, {
      page_path: url,
    });
  };

  useEffect(() => {
    const url = pathname;
    gaPageView(GaId, url);
  }, [pathname, GaId]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());        
            gtag('config', '${GaId}', {
                page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

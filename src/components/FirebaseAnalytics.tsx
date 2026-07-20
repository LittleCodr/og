"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/lib/firebase";

export default function FirebaseAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && analytics) {
      // Reconstruct URL for page_view event
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      
      (logEvent as any)(analytics, "page_view", {
        page_path: url,
        page_title: document.title || pathname,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

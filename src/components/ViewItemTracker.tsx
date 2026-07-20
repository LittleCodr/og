"use client";

import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/lib/firebase";

export default function ViewItemTracker({ product }: { product: any }) {
  useEffect(() => {
    if (analytics && product) {
      (logEvent as any)(analytics, "view_item", {
        currency: "INR",
        value: product.price,
        items: [
          {
            item_id: product.id,
            item_name: product.title,
            price: product.price,
            quantity: 1,
          },
        ],
      });
    }
  }, [product]);

  return null;
}

"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

export default function AddToCartPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem({
        id: product.id,
        slug: product.slug,
        title: product.title,
        price: product.price,
        image: product.image,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  if (product.soldOut) {
    return (
      <button type="button" disabled className="btn" style={{ opacity: 0.6, cursor: "not-allowed" }}>
        Sold Out
      </button>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}>
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          style={{ padding: "10px 16px", border: 0, background: "none", fontSize: 18 }}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span style={{ minWidth: 24, textAlign: "center" }}>{qty}</span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          style={{ padding: "10px 16px", border: 0, background: "none", fontSize: 18 }}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        style={{
          flex: 1,
          padding: "14px 24px",
          background: "var(--base-color)",
          color: "#fff",
          border: 0,
          borderRadius: 8,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {added ? "Added to cart ✓" : "Add to cart"}
      </button>
    </div>
  );
}

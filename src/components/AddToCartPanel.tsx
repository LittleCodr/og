"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
        <motion.button
          type="button"
          whileHover={{ scale: 1.1, backgroundColor: "var(--extra-medium-gray)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          style={{ padding: "10px 16px", border: 0, background: "none", fontSize: 18, borderRadius: "8px 0 0 8px", cursor: "pointer" }}
          aria-label="Decrease quantity"
        >
          −
        </motion.button>
        <span style={{ minWidth: 24, textAlign: "center" }}>{qty}</span>
        <motion.button
          type="button"
          whileHover={{ scale: 1.1, backgroundColor: "var(--extra-medium-gray)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setQty((q) => q + 1)}
          style={{ padding: "10px 16px", border: 0, background: "none", fontSize: 18, borderRadius: "0 8px 8px 0", cursor: "pointer" }}
          aria-label="Increase quantity"
        >
          +
        </motion.button>
      </div>

      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
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
      </motion.button>
    </div>
  );
}

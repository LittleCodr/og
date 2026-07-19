"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, setQty, removeItem, totalPrice } = useCart();

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ padding: "40px 0", minHeight: "50vh" }}>
        <div className="container">
          <h1 style={{ fontSize: 28, fontWeight: 500, marginBottom: 24 }}>Your Cart</h1>

          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ color: "var(--body-text-color)", marginBottom: 20 }}>Your cart is empty.</p>
              <Link
                href="/"
                style={{
                  display: "inline-block",
                  padding: "12px 28px",
                  background: "var(--base-color)",
                  color: "#fff",
                  borderRadius: 8,
                  fontWeight: 600,
                }}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
              <div style={{ flex: "2 1 500px" }}>
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                      transition={{ duration: 0.3 }}
                      style={{
                        display: "flex",
                      gap: 16,
                      alignItems: "center",
                      padding: "16px 0",
                      borderBottom: "1px solid var(--extra-medium-gray)",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: 84, height: 84, objectFit: "cover", borderRadius: 8 }}
                    />
                    <div style={{ flex: 1 }}>
                      <Link href={`/products/${item.slug}`} style={{ fontWeight: 500 }}>
                        {item.title}
                      </Link>
                      <p style={{ color: "var(--body-text-color)", marginTop: 4 }}>₹ {item.price}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}>
                      <motion.button
                        type="button"
                        whileHover={{ backgroundColor: "var(--extra-medium-gray)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setQty(item.id, item.qty - 1)}
                        style={{ padding: "6px 12px", border: 0, background: "none", borderRadius: "8px 0 0 8px" }}
                      >
                        −
                      </motion.button>
                      <span style={{ minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                      <motion.button
                        type="button"
                        whileHover={{ backgroundColor: "var(--extra-medium-gray)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setQty(item.id, item.qty + 1)}
                        style={{ padding: "6px 12px", border: 0, background: "none", borderRadius: "0 8px 8px 0" }}
                      >
                        +
                      </motion.button>
                    </div>
                    <span style={{ minWidth: 70, textAlign: "right", fontWeight: 600 }}>
                      ₹ {item.price * item.qty}
                    </span>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove"
                      style={{ border: 0, background: "none", color: "var(--red)", cursor: "pointer" }}
                    >
                      Remove
                    </motion.button>
                  </motion.div>
                ))}
                </AnimatePresence>
              </div>

              <div style={{ flex: "1 1 260px" }}>
                <div style={{ border: "1px solid var(--extra-medium-gray)", borderRadius: 12, padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                    <span>Subtotal</span>
                    <span style={{ fontWeight: 600 }}>₹ {totalPrice}</span>
                  </div>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => alert("Checkout coming soon!")}
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: "var(--base-color)",
                      color: "#fff",
                      border: 0,
                      borderRadius: 8,
                      fontWeight: 600,
                      cursor: "pointer"
                    }}
                  >
                    Checkout
                  </motion.button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

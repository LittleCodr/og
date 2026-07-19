"use client";

import Link from "next/link";
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
                {items.map((item) => (
                  <div
                    key={item.id}
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
                      <button
                        type="button"
                        onClick={() => setQty(item.id, item.qty - 1)}
                        style={{ padding: "6px 12px", border: 0, background: "none" }}
                      >
                        −
                      </button>
                      <span style={{ minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(item.id, item.qty + 1)}
                        style={{ padding: "6px 12px", border: 0, background: "none" }}
                      >
                        +
                      </button>
                    </div>
                    <span style={{ minWidth: 70, textAlign: "right", fontWeight: 600 }}>
                      ₹ {item.price * item.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove"
                      style={{ border: 0, background: "none", color: "var(--red)", cursor: "pointer" }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div style={{ flex: "1 1 260px" }}>
                <div style={{ border: "1px solid var(--extra-medium-gray)", borderRadius: 12, padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                    <span>Subtotal</span>
                    <span style={{ fontWeight: 600 }}>₹ {totalPrice}</span>
                  </div>
                  <button
                    type="button"
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: "var(--base-color)",
                      color: "#fff",
                      border: 0,
                      borderRadius: 8,
                      fontWeight: 600,
                    }}
                  >
                    Checkout
                  </button>
                  <p style={{ fontSize: 12, color: "var(--body-text-color)", marginTop: 12 }}>
                    This is a demo storefront — checkout is not connected to a payment provider.
                  </p>
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

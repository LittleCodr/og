"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";
import Link from "next/link";

function StatusContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const { clearCart } = useCart();
  const router = useRouter();

  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading");

  useEffect(() => {
    if (!orderId) {
      setStatus("failed");
      return;
    }

    async function verifyPayment() {
      try {
        const res = await fetch("/api/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ order_id: orderId }),
        });
        const data = await res.json();

        if (data.success) {
          setStatus("success");
          clearCart();
        } else {
          setStatus("failed");
        }
      } catch (error) {
        setStatus("failed");
      }
    }

    verifyPayment();
  }, [orderId, clearCart]);

  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      {status === "loading" && (
        <>
          <h1 style={{ fontSize: 28, marginBottom: 16 }}>Verifying Payment...</h1>
          <p style={{ color: "var(--body-text-color)" }}>Please wait while we confirm your order.</p>
        </>
      )}

      {status === "success" && (
        <>
          <div style={{ fontSize: 64, color: "var(--green)", marginBottom: 16 }}>✓</div>
          <h1 style={{ fontSize: 32, marginBottom: 16, color: "var(--heading-color)" }}>Payment Successful!</h1>
          <p style={{ color: "var(--body-text-color)", marginBottom: 32 }}>
            Thank you for your order. Your order ID is <strong>{orderId}</strong>.
          </p>
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
        </>
      )}

      {status === "failed" && (
        <>
          <div style={{ fontSize: 64, color: "var(--red)", marginBottom: 16 }}>✗</div>
          <h1 style={{ fontSize: 32, marginBottom: 16, color: "var(--heading-color)" }}>Payment Failed</h1>
          <p style={{ color: "var(--body-text-color)", marginBottom: 32 }}>
            We could not verify your payment. Please try again or contact support.
          </p>
          <Link
            href="/cart"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              background: "var(--base-color)",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 600,
            }}
          >
            Return to Cart
          </Link>
        </>
      )}
    </div>
  );
}

export default function CheckoutStatusPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "60vh" }}>
        <Suspense fallback={<div style={{ textAlign: "center", padding: "80px 20px" }}>Loading...</div>}>
          <StatusContent />
        </Suspense>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

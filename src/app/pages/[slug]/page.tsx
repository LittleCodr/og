import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";
import { humanizeSlug } from "@/data/products";

const content: Record<string, { title: string; body: string[] }> = {
  "about-us": {
    title: "About Us",
    body: [
      "OG Beauty designs fragrance, skincare, and wellness products that combine performance with purity — the OG Luxury perfume line included.",
      "Every product is developed to deliver results you can see and feel, at a price that respects the customer.",
    ],
  },
  contact: {
    title: "Contact Us",
    body: [
      "Have a question about an order or a product? Reach out and our team will get back to you as soon as possible.",
      "Email: support@ogbeauty.in",
    ],
  },
  "term-and-conditions": {
    title: "Terms & Conditions",
    body: [
      "By using this site and placing an order, you agree to our terms of sale, including pricing, availability, and shipping timelines as shown at checkout.",
    ],
  },
  "coupon-terms-condition": {
    title: "Coupon Terms & Conditions",
    body: [
      "Coupons and discount codes are valid for a limited time and cannot be combined unless explicitly stated. OG Beauty reserves the right to modify or withdraw an offer at any time.",
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    body: [
      "We collect only the information needed to process your order and improve your shopping experience, and we never sell your personal data to third parties.",
    ],
  },
  "return-refund-policy": {
    title: "Return & Refund Policy",
    body: [
      "If you're not satisfied with your order, reach out within 7 days of delivery and our team will help with a return or refund in line with product condition guidelines.",
    ],
  },
  "shipping-policy": {
    title: "Shipping Policy",
    body: [
      "Orders are typically dispatched within 1–2 business days and delivered across India within 4–7 business days depending on location.",
    ],
  },
  "crazy-deals": {
    title: "Crazy Deals",
    body: ["Limited-time bundle offers on OG Luxury fragrances. Check back often — deals rotate regularly."],
  },
};

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = content[slug] ?? { title: humanizeSlug(slug), body: ["Content for this page is coming soon."] };

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ padding: "60px 0", minHeight: "50vh" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: 32, fontWeight: 500, marginBottom: 24, color: "var(--heading-color)" }}>
            {entry.title}
          </h1>
          {entry.body.map((p, i) => (
            <p key={i} style={{ color: "var(--body-text-color)", lineHeight: 1.8, marginBottom: 16 }}>
              {p}
            </p>
          ))}
        </div>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

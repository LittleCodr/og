import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";

export default function AboutUsPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ padding: "60px 0", minHeight: "50vh" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: 32, fontWeight: 500, marginBottom: 24, color: "var(--heading-color)" }}>
            About Us
          </h1>
          <p style={{ color: "var(--body-text-color)", lineHeight: 1.8, marginBottom: 16 }}>
            Presenting OG Beauty, your one-stop destination for high-quality beauty and personal care products at prices that won't break the bank. We're dedicated to helping you look and feel your best without emptying your wallet.
          </p>
          <p style={{ color: "var(--body-text-color)", lineHeight: 1.8, marginBottom: 16 }}>
            At OG Beauty, we believe that everyone deserves to pamper themselves, and our mission is to make quality beauty and personal care accessible to all. Our extensive range of products OG Beauty, OG Luxury, OG Science, OG Ayurveda and OG Naturals all carefully curated to provide you with effective solutions for your self-care needs at the lowest prices guaranteed.
          </p>
        </div>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

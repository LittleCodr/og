import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";

export default function NewsPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ padding: "60px 0", minHeight: "50vh" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: 32, fontWeight: 500, marginBottom: 16 }}>News</h1>
          <p style={{ color: "var(--body-text-color)" }}>New articles and launch announcements coming soon.</p>
        </div>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

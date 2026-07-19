import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";
import ProductGrid from "@/components/ProductGrid";
import { allProducts, humanizeSlug } from "@/data/products";

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = humanizeSlug(slug);

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ padding: "20px 0", minHeight: "50vh" }}>
        <ProductGrid tabs={[{ id: slug, title, products: allProducts }]} />
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

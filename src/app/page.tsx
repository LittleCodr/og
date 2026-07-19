import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HomeBanners from "@/components/HomeBanners";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";
import { allProducts, newLaunchProducts } from "@/data/products";
import { bannersBeforeProducts, bannersAfterProducts } from "@/data/banners";

export default function Home() {
  const bestSellers = allProducts.filter((p) => p.rating && p.rating >= 4.9).slice(0, 6);

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="MainContent" className="content-for-layout">
        <HomeBanners banners={bannersBeforeProducts} />
        
        <div style={{ padding: "40px 0" }}>
          <ProductGrid 
            tabs={[
              { id: "new-launch", title: "New Launch", products: newLaunchProducts },
              { id: "best-sellers", title: "Best Sellers", products: bestSellers },
            ]} 
          />
        </div>

        <HomeBanners banners={bannersAfterProducts} />
      </main>
      <Newsletter />
      <Footer />
      <MobileStickyNav />
    </>
  );
}

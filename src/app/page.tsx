import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HomeBanners from "@/components/HomeBanners";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";
import { newLaunchProducts } from "@/data/products";
import { bannersBeforeProducts, bannersAfterProducts } from "@/data/banners";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="MainContent" className="content-for-layout">
        <HomeBanners banners={bannersBeforeProducts} />
        <ProductGrid id="New_Launch" title="New Launch" products={newLaunchProducts} />
        <HomeBanners banners={bannersAfterProducts} />
      </main>
      <Newsletter />
      <Footer />
      <MobileStickyNav />
    </>
  );
}

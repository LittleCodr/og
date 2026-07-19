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
        <div className="visually-hidden" style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", border: 0 }}>
          <h1>OG Luxury Perfumes</h1>
          <h2>Ashish Chanchlani Perfumes</h2>
          <h2>Official OG Luxury Perfumes</h2>
          <p>Discover India's strongest Extrait De Parfum with 40% concentration, crafted for extreme longevity and projection.</p>
        </div>

        <HomeBanners banners={bannersBeforeProducts} />
        
        <div style={{ padding: "40px 0" }}>
          <div className="visually-hidden" style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", border: 0 }}>
            <h2>OG Luxury Extrait De Parfum</h2>
            <h2>OG Luxury Gift Sets</h2>
            <h2>Best Long Lasting Perfumes</h2>
          </div>
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

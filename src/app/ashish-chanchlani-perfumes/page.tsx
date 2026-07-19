import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";
import ProductGrid from "@/components/ProductGrid";
import { allProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Ashish Chanchlani Perfumes | OG Luxury Fragrance Brand",
  description: "Shop the official Ashish Chanchlani perfume brand. Discover premium, long-lasting OG luxury perfumes and extrait de parfum crafted for maximum projection.",
  keywords: "ashish chanchlani perfume, ashish chanchlani perfumes, ashish chanchlani fragrance, ashish chanchlani fragrance brand, ashish chanchlani perfume brand, ashish perfume, ashish perfume brand, ashish luxury perfume, ashish chanchlani luxury perfume, ashish chanchlani og perfume, ashish og luxury, ashish og beauty, ashish chanchlani og beauty",
};

export default function AshishChanchlaniPage() {
  const products = allProducts.slice(0, 8); // Display top products

  return (
    <>
      <Header />
      <main style={{ padding: "60px 0", minHeight: "60vh" }}>
        <div className="container" style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          
          <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>Ashish Chanchlani Perfumes</h1>
          <h2 style={{ fontSize: 24, fontWeight: 500, color: "var(--body-text-color)", marginBottom: 24 }}>
            The Official Ashish Chanchlani Fragrance Brand
          </h2>
          
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--body-text-color)", marginBottom: 48, maxWidth: 800, margin: "0 auto 48px" }}>
            Welcome to the official <strong>Ashish Chanchlani luxury perfume</strong> collection by OG Beauty. 
            Crafted for those who demand the best, our <strong>Ashish Chanchlani fragrance</strong> line features India's strongest 
            Extrait De Parfum with an unmatched 40% oil concentration. Whether you're looking for the signature 
            <strong>Ashish perfume brand</strong> experience or long-lasting <strong>OG luxury</strong> scents, you'll find the ultimate 
            expression of elegance and power right here.
          </p>

          <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 32 }}>Explore the Collection</h2>
        </div>

        <ProductGrid 
          tabs={[
            { id: "ashish-collection", title: "Ashish Chanchlani OG Perfumes", products: products },
          ]} 
        />
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

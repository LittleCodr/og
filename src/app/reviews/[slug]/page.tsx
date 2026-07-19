import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";
import { allProducts, getProductBySlug } from "@/data/products";

export function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) return { title: "Review Not Found" };

  return {
    title: `${product.title} Review | OG Luxury Perfumes`,
    description: `Read the comprehensive review of ${product.title}. Find out about its longevity, projection, notes, and why it's the best long lasting perfume for men.`,
    keywords: `${product.altText?.replace(/-/g, ' ')} review, ${product.altText?.replace(/-/g, ' ')} reviews, og luxury review, og luxury reviews, og luxury perfume review`,
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) return notFound();

  return (
    <>
      <Header />
      <main style={{ padding: "60px 0", minHeight: "60vh" }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>
            {product.title} Review
          </h1>
          
          <div style={{ display: "flex", gap: 24, marginBottom: 40, alignItems: "center" }}>
            <img src={product.image} alt={product.altText || product.title} style={{ width: 150, height: 150, objectFit: "cover", borderRadius: 12 }} />
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 500, marginBottom: 8 }}>The Verdict</h2>
              <p style={{ color: "var(--body-text-color)", lineHeight: 1.6 }}>
                As part of the prestigious OG Luxury collection by Ashish Chanchlani, this fragrance is engineered for those who demand attention. With its high concentration formulation, it promises all-day performance.
              </p>
            </div>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Longevity & Projection</h3>
            <p style={{ color: "var(--body-text-color)", lineHeight: 1.6 }}>
              Thanks to the 40% Extrait De Parfum concentration available in our intense ranges, {product.title} boasts an incredible sillage. Users report it lasting 12+ hours on skin and days on clothing.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Scent Profile</h3>
            <p style={{ color: "var(--body-text-color)", lineHeight: 1.6 }}>
              {product.description} {product.subtitle && `It prominently features notes of ${product.subtitle}.`}
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Frequently Asked Questions</h3>
            <div style={{ marginBottom: 16 }}>
              <strong>Is {product.title} worth the price?</strong>
              <p style={{ color: "var(--body-text-color)" }}>Absolutely. For ₹{product.price}, you are getting a premium Extrait de Parfum concentration that rivals fragrances five times its price.</p>
            </div>
            <div style={{ marginBottom: 16 }}>
              <strong>When is the best time to wear it?</strong>
              <p style={{ color: "var(--body-text-color)" }}>It is highly versatile. Perfect for evening events, parties, and dates where you want a signature, long-lasting presence.</p>
            </div>
          </div>
          
        </div>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

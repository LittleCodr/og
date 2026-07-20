import { notFound } from "next/navigation";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";
import ProductGrid from "@/components/ProductGrid";
import { allProducts, getProductBySlug } from "@/data/products";
import AddToCartPanel from "@/components/AddToCartPanel";
import ViewItemTracker from "@/components/ViewItemTracker";

import { Metadata } from "next";

export function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} Perfume | OG Luxury Extrait De Parfum`,
    description: `Buy OG Luxury ${product.title} perfume online. ${product.description} Experience the best long lasting perfume for men.`,
    keywords: `buy og luxury perfume, buy ${product.title} perfume, order og perfume, ${product.altText?.replace(/-/g, ' ')}, premium perfume, best perfume for men, 40% perfume concentration`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  const related = allProducts.filter((p) => p.id !== product.id).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: `https://ogluxuryperfumes.in${product.image}`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "OG Luxury",
    },
    offers: {
      "@type": "Offer",
      url: `https://ogluxuryperfumes.in/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      availability: product.soldOut ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "OG Beauty",
      },
    },
  };

  if (product.rating && product.reviews) {
    (jsonLd as any).aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ViewItemTracker product={product} />
      <AnnouncementBar />
      <Header />
      <main style={{ padding: "40px 0" }}>
        <div className="container">
          <div className="row" style={{ gap: 32 }}>
            <div style={{ flex: "1 1 420px", maxWidth: 480 }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1 / 1",
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "var(--very-light-gray)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div style={{ flex: "1 1 360px" }}>
              <h1 style={{ fontSize: 28, fontWeight: 500, color: "var(--heading-color)", marginBottom: 8 }}>
                {product.title}
              </h1>
              {product.subtitle && (
                <p style={{ color: "var(--body-text-color)", marginBottom: 16 }}>{product.subtitle}</p>
              )}

              {(product.rating || product.reviews) && (
                <p style={{ marginBottom: 16, color: "var(--body-text-color)" }}>
                  {product.rating && <span>★ {product.rating.toFixed(1)}</span>}
                  {product.reviews && <span> &nbsp;({product.reviews} reviews)</span>}
                </p>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 24, fontWeight: 600 }}>₹ {product.price}</span>
                {product.compareAtPrice && (
                  <span style={{ textDecoration: "line-through", color: "var(--body-text-color)" }}>
                    ₹ {product.compareAtPrice}
                  </span>
                )}
                {product.discountLabel && (
                  <span
                    className="badge discount"
                    style={{
                      backgroundColor: "var(--sale-label-bg-color)",
                      color: "var(--sale-label-color)",
                      padding: "2px 8px",
                    }}
                  >
                    {product.discountLabel}
                  </span>
                )}
              </div>

              <p style={{ color: "var(--body-text-color)", lineHeight: 1.7, marginBottom: 28 }}>
                {product.description}
              </p>

              <AddToCartPanel product={product} />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <ProductGrid tabs={[{ id: "related", title: "You may also like", products: related }]} />
        </div>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

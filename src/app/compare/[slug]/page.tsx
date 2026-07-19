import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";
import { humanizeSlug } from "@/data/products";

const competitors = [
  "bella-vita",
  "villain",
  "beardo",
  "wild-stone",
  "the-man-company",
  "denver",
  "skinn",
];

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!competitors.includes(slug)) return { title: "Comparison Not Found" };

  const competitorName = humanizeSlug(slug);

  return {
    title: `OG Luxury vs ${competitorName} | Which Perfume is Better?`,
    description: `Compare OG Luxury Perfumes against ${competitorName}. See why India's first 40% Extrait de Parfum by Ashish Chanchlani offers better longevity and projection.`,
    keywords: `og luxury vs ${slug.replace(/-/g, ' ')}, og luxury perfume vs ${slug.replace(/-/g, ' ')}, best perfume for men, long lasting perfume`,
  };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!competitors.includes(slug)) return notFound();

  const competitorName = humanizeSlug(slug);

  return (
    <>
      <Header />
      <main style={{ padding: "60px 0", minHeight: "60vh" }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, textAlign: "center" }}>
            OG Luxury vs {competitorName}
          </h1>
          <p style={{ textAlign: "center", color: "var(--body-text-color)", marginBottom: 48 }}>
            An in-depth look at how Ashish Chanchlani's OG Luxury perfumes stack up against the competition.
          </p>
          
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 40 }}>
            <thead>
              <tr style={{ backgroundColor: "var(--very-light-gray)", borderBottom: "2px solid var(--extra-medium-gray)" }}>
                <th style={{ padding: "16px", textAlign: "left" }}>Feature</th>
                <th style={{ padding: "16px", textAlign: "left", color: "var(--base-color)" }}>OG Luxury</th>
                <th style={{ padding: "16px", textAlign: "left" }}>{competitorName}</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--extra-medium-gray)" }}>
                <td style={{ padding: "16px", fontWeight: 500 }}>Perfume Concentration</td>
                <td style={{ padding: "16px" }}>Up to 40% (Extrait De Parfum)</td>
                <td style={{ padding: "16px" }}>Standard EDP / EDT (10-20%)</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--extra-medium-gray)" }}>
                <td style={{ padding: "16px", fontWeight: 500 }}>Longevity</td>
                <td style={{ padding: "16px" }}>12+ Hours on Skin, Days on Clothes</td>
                <td style={{ padding: "16px" }}>Moderate</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--extra-medium-gray)" }}>
                <td style={{ padding: "16px", fontWeight: 500 }}>Sillage & Projection</td>
                <td style={{ padding: "16px" }}>Intense & Room-filling</td>
                <td style={{ padding: "16px" }}>Varies by variant</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--extra-medium-gray)" }}>
                <td style={{ padding: "16px", fontWeight: 500 }}>Endorsed By</td>
                <td style={{ padding: "16px" }}>Ashish Chanchlani</td>
                <td style={{ padding: "16px" }}>Brand Specific</td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>The Verdict</h2>
            <p style={{ color: "var(--body-text-color)", lineHeight: 1.8 }}>
              While <strong>{competitorName}</strong> makes great fragrances for the mass market, <strong>OG Luxury</strong> is designed for those who want uncompromising strength. With India's first 40% concentration formula, OG Luxury delivers a premium, long-lasting scent that doesn't fade away after a few hours. If longevity and projection are your top priorities, OG Luxury is the clear winner.
            </p>
          </div>

        </div>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

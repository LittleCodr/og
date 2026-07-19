import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  title,
  products,
  id,
}: {
  title: string;
  products: Product[];
  id?: string;
}) {
  return (
    <section className="section-bg" style={{ padding: "54px 0 30px" }}>
      <div className="container">
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            margin: "0 auto 50px",
            maxWidth: 300,
            padding: 0,
          }}
        >
          <li
            id={id}
            style={{
              padding: "0 0 12px",
              width: "100%",
              textAlign: "center",
              lineHeight: 1,
              borderBottom: "3px solid var(--base-color)",
            }}
          >
            <span style={{ color: "var(--base-color)", fontSize: 16, fontWeight: 600 }}>{title}</span>
          </li>
        </ul>

        <div className="feature-pro_tab-slider">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 shop-minimalist">
            {products.map((p) => (
              <div className="col" key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

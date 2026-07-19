"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export type TabCategory = {
  id: string;
  title: string;
  products: Product[];
};

export default function ProductGrid({ tabs }: { tabs: TabCategory[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeProducts = tabs.find((t) => t.id === activeTab)?.products || [];

  return (
    <section className="section-bg" style={{ padding: "54px 0 30px" }}>
      <div className="container">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            margin: "0 auto 50px",
            maxWidth: 600,
            padding: 0,
            borderBottom: "2px solid var(--extra-medium-gray)",
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <li
                key={tab.id}
                id={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "0 0 12px",
                  cursor: "pointer",
                  position: "relative",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              >
                <span
                  style={{
                    color: isActive ? "var(--base-color)" : "var(--body-text-color)",
                    fontSize: 16,
                    fontWeight: 600,
                    transition: "color 0.3s ease",
                  }}
                >
                  {tab.title}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 3,
                      backgroundColor: "var(--base-color)",
                    }}
                  />
                )}
              </li>
            );
          })}
        </motion.ul>

        <div className="feature-pro_tab-slider" style={{ minHeight: 400 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 shop-minimalist"
            >
              {activeProducts.map((p, index) => (
                <motion.div
                  className="col"
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

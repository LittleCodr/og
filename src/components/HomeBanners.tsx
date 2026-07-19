"use client";

import type { Banner } from "@/data/banners";
import { motion } from "framer-motion";

export default function HomeBanners({ banners }: { banners: Banner[] }) {
  return (
    <>
      {banners.map((b, i) => (
        <motion.div 
          key={b.image + i} 
          className="w-100 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: "20px" }}
        >
          <a href={b.href}>
            <div className="desktop-image d-md-block d-none">
              <img src={b.image} alt={b.altText || "banner image"} style={{ width: "100%" }} />
            </div>
            <div className="mobile-image d-md-none">
              <img src={b.image} alt={b.altText || "banner image"} style={{ width: "100%" }} />
            </div>
          </a>
        </motion.div>
      ))}
    </>
  );
}

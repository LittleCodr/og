"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{
          width: 40,
          height: 40,
          border: "4px solid var(--extra-medium-gray)",
          borderTop: "4px solid var(--base-color)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

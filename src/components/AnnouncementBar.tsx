"use client";

import { useEffect, useState } from "react";

const messages = [
  "Flat ₹15 Off On Prepaid Orders Above ₹499",
  "Free Gift With Every Order🎁",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % messages.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mini-header overflow-visible" style={{ backgroundColor: "#000000" }}>
      <div className="container">
        <div className="swiper-wrapper align-items-center" style={{ display: "block" }}>
          {messages.map((m, i) => (
            <div
              key={m}
              className="swiper-slide text-center alt-font text-widget"
              style={{ display: i === index ? "block" : "none" }}
            >
              <p style={{ color: "#ffffff", fontSize: 14, fontWeight: 500, margin: "10px 0" }}>{m}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

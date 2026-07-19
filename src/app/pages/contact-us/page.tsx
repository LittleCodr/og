"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function ContactUsPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ padding: "60px 0", minHeight: "50vh" }}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: 32, fontWeight: 500, marginBottom: 40, textAlign: "center", color: "var(--heading-color)" }}
          >
            Let's get in touch
          </motion.h1>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ display: "flex", flexWrap: "wrap", gap: 40, maxWidth: 1000, margin: "0 auto" }}
          >
            {/* Contact Info */}
            <div style={{ flex: "1 1 300px" }}>
              <motion.div variants={itemVariants} style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Office location</h3>
                <p style={{ color: "var(--body-text-color)", lineHeight: 1.6 }}>
                  Block 7 & 8, Garden View, Sindhu Bhawan Marg, Cafe Flambe, Bodakdev, Ahmedabad, Gujarat - 380054, India
                </p>
              </motion.div>
              <motion.div variants={itemVariants} style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Call us directly</h3>
                <p style={{ color: "var(--body-text-color)", lineHeight: 1.6 }}>
                  Phone: 9512304672<br />
                  <span style={{ fontSize: 14 }}>(Mon-Sat from 11 am to 7 pm)</span>
                </p>
              </motion.div>
              <motion.div variants={itemVariants} style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Sent a message</h3>
                <p style={{ color: "var(--body-text-color)", lineHeight: 1.6 }}>
                  hi@ogbeauty.in
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} style={{ display: "flex", gap: 16, marginTop: 40 }}>
                <div style={{ flex: 1, textAlign: "center", padding: 16, border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>Free shipping</div>
                  <div style={{ fontSize: 13, color: "var(--body-text-color)" }}>Standard shipping</div>
                </div>
                <div style={{ flex: 1, textAlign: "center", padding: 16, border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>Special discounts</div>
                  <div style={{ fontSize: 13, color: "var(--body-text-color)" }}>Guaranteed saving</div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} style={{ display: "flex", gap: 16, marginTop: 16 }}>
                <div style={{ flex: 1, textAlign: "center", padding: 16, border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>Buyers protection</div>
                  <div style={{ fontSize: 13, color: "var(--body-text-color)" }}>Secure payment</div>
                </div>
                <div style={{ flex: 1, textAlign: "center", padding: 16, border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>Customer service</div>
                  <div style={{ fontSize: 13, color: "var(--body-text-color)" }}>Give us feedback</div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} style={{ flex: "2 1 400px" }}>
              <h2 style={{ fontSize: 24, fontWeight: 500, marginBottom: 24 }}>Let's talk with us!</h2>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input
                  type="text"
                  placeholder="What's your good name?"
                  required
                  style={{ padding: "14px 16px", border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}
                />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  style={{ padding: "14px 16px", border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}
                />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  style={{ padding: "14px 16px", border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}
                />
                <textarea
                  placeholder="Enter your message"
                  required
                  rows={4}
                  style={{ padding: "14px 16px", border: "1px solid var(--extra-medium-gray)", borderRadius: 8, resize: "vertical" }}
                />
                <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--body-text-color)", marginTop: 8 }}>
                  <input type="checkbox" required />
                  I agree with the terms & conditions
                </label>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  style={{
                    padding: "16px 24px",
                    background: "var(--base-color)",
                    color: "#fff",
                    border: 0,
                    borderRadius: 8,
                    fontWeight: 600,
                    marginTop: 8,
                    cursor: "pointer"
                  }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";

export default function ReturnAndRefundPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ padding: "60px 0", minHeight: "50vh" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h1 style={{ fontSize: 32, fontWeight: 500, marginBottom: 40, textAlign: "center", color: "var(--heading-color)" }}>
            Return & Refund Policy
          </h1>
          <div style={{ color: "var(--body-text-color)", lineHeight: 1.8, fontSize: 15 }}>
            <p style={{ marginBottom: 24 }}>
              At OG Beauty, we strive to give you the very best shopping experience possible. However, considering that opened or damaged products cannot be reused and cosmetic/skincare products have to be in an accurate condition, we cannot accept the exchange or return of any products once sold or delivered.
            </p>
            
            <ul style={{ paddingLeft: 20, marginBottom: 24, display: "flex", flexDirection: "column", gap: 12 }}>
              <li>OG Beauty Private Limited is not responsible for any damage caused after delivery.</li>
              <li>In case of a damaged product issue (at the time of delivery) with the product, we exchange the product. All you need to do is give us a call or email us within 24 hours of delivery. You can reach us at hi@ogbeauty.in</li>
              <li>
                Exchange of products will only be considered if the product received is in damaged condition and subject to the following terms:
                <ul style={{ paddingLeft: 20, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, listStyleType: "circle" }}>
                  <li>Compulsory unboxing video is required to verify any damage claim.</li>
                  <li>Claims must be raised within 48 business hours from the time of delivery. Failing to do so will result in the rejection of the Claim.</li>
                  <li>Exchange requests will be subject to checking and vetting by OG Beauty Private Limited.</li>
                  <li>The Refund for COD orders will be given in OG Beauty Store credit.</li>
                  <li>Damages due to the user's mishandling by any means will not be covered under this Policy.</li>
                  <li>Once your return request has been accepted, the process will be completed within 7-21 business days.</li>
                  <li>For prepaid orders, approved refunds will be credited back to the original payment method used at the time of purchase. The refund may take 5-7 business days to reflect in your account after it has been processed.</li>
                  <li>For COD orders, refunds will be provided as OG Beauty Store Credit.</li>
                </ul>
              </li>
            </ul>

            <p style={{ marginBottom: 32, fontWeight: 500 }}>
              OG Beauty PVT. LTD reserves all rights for Replacement/Returns/Refunds
            </p>

            <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 32, marginBottom: 12, color: "var(--heading-color)" }}>RETURN POLICY</h3>
            <p style={{ marginBottom: 16 }}>
              All products once purchased are non-refundable. In general, an item maybe eligible for return within 48 hours from the date of Product Delivery if it fulfills any of the following conditions:
            </p>
            <ul style={{ paddingLeft: 20, marginBottom: 24, display: "flex", flexDirection: "column", gap: 8, listStyleType: "disc" }}>
              <li>Sold in a physically damaged condition.</li>
              <li>Has missing parts or accessories</li>
            </ul>

            <p style={{ marginTop: 40, fontWeight: 500 }}>
              Worldwide Copyright © OG Beauty PRIVATE LIMITED. (brand owners OG Beauty Private Limited). All worldwide rights reserved.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

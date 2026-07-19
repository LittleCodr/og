import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";

export default function LoginPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ padding: "60px 0", minHeight: "50vh" }}>
        <div className="container" style={{ maxWidth: 380 }}>
          <h1 style={{ fontSize: 26, fontWeight: 500, marginBottom: 24, textAlign: "center" }}>
            Welcome to OG Beauty
          </h1>
          <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              required
              style={{ padding: "12px 14px", border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              style={{ padding: "12px 14px", border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}
            />
            <button
              type="submit"
              style={{
                padding: "12px 14px",
                background: "var(--base-color)",
                color: "#fff",
                border: 0,
                borderRadius: 8,
                fontWeight: 600,
              }}
            >
              Log in
            </button>
          </form>
          <p style={{ textAlign: "center", color: "var(--body-text-color)", marginTop: 16, fontSize: 14 }}>
            This is a demo storefront — account sign-in is not connected to a backend.
          </p>
        </div>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

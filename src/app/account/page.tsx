"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";

export default function AccountPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/account/login");
    } else if (user) {
      const fetchProfile = async () => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      };
      fetchProfile();
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  if (loading || !user) {
    return (
      <>
        <AnnouncementBar />
        <Header />
        <main style={{ padding: "80px 0", minHeight: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 40, height: 40, border: "3px solid var(--extra-medium-gray)", borderTopColor: "var(--base-color)", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </main>
        <Footer />
        <MobileStickyNav />
      </>
    );
  }

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ padding: "60px 0", minHeight: "50vh" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 40, flexWrap: "wrap" }}>
            
            <div style={{ flex: "1 1 250px", border: "1px solid var(--extra-medium-gray)", borderRadius: 12, padding: 24, textAlign: "center" }}>
              {profile?.photoURL || user.photoURL ? (
                <img 
                  src={profile?.photoURL || user.photoURL} 
                  alt="Profile" 
                  style={{ width: 100, height: 100, borderRadius: "50%", margin: "0 auto 16px", objectFit: "cover" }} 
                />
              ) : (
                <div style={{ width: 100, height: 100, borderRadius: "50%", margin: "0 auto 16px", background: "var(--extra-medium-gray)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 600, color: "var(--body-text-color)" }}>
                  {(profile?.displayName || user.email || "U")[0].toUpperCase()}
                </div>
              )}
              <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>{profile?.displayName || "OG User"}</h2>
              <p style={{ color: "var(--body-text-color)", fontSize: 14, marginBottom: 24 }}>{user.email}</p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#fff",
                  color: "var(--red)",
                  border: "1px solid var(--red)",
                  borderRadius: 8,
                  fontWeight: 500,
                  cursor: "pointer"
                }}
              >
                Log out
              </motion.button>
            </div>

            <div style={{ flex: "2 1 400px" }}>
              <h2 style={{ fontSize: 24, fontWeight: 500, marginBottom: 24 }}>My Account</h2>
              <div style={{ border: "1px solid var(--extra-medium-gray)", borderRadius: 12, padding: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Order History</h3>
                <p style={{ color: "var(--body-text-color)", fontSize: 14 }}>You haven't placed any orders yet.</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push("/")}
                  style={{
                    padding: "10px 20px",
                    background: "var(--base-color)",
                    color: "#fff",
                    border: 0,
                    borderRadius: 8,
                    fontWeight: 500,
                    marginTop: 20,
                    cursor: "pointer"
                  }}
                >
                  Start Shopping
                </motion.button>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

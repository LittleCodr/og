"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyNav from "@/components/MobileStickyNav";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/account");
    }
  }, [user, router]);

  const saveUserToFirestore = async (uid: string, email: string, displayName: string | null, photoURL: string | null) => {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid,
        email,
        displayName: displayName || email.split("@")[0],
        photoURL: photoURL || "",
        createdAt: new Date().toISOString()
      });
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        await saveUserToFirestore(userCred.user.uid, userCred.user.email!, name, null);
      }
      router.push("/account");
    } catch (err: any) {
      setError(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await saveUserToFirestore(result.user.uid, result.user.email!, result.user.displayName, result.user.photoURL);
      router.push("/account");
    } catch (err: any) {
      setError(err.message || "Google Sign-In failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main style={{ padding: "80px 0", minHeight: "60vh" }}>
        <div className="container" style={{ maxWidth: 420 }}>
          <div style={{ border: "1px solid var(--extra-medium-gray)", borderRadius: 12, padding: 32 }}>
            <h1 style={{ fontSize: 26, fontWeight: 500, marginBottom: 24, textAlign: "center" }}>
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            
            {error && (
              <div style={{ padding: 12, backgroundColor: "#fee2e2", color: "#dc2626", borderRadius: 8, marginBottom: 20, fontSize: 14 }}>
                {error}
              </div>
            )}

            <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={handleEmailAuth}>
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{ padding: "14px", border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}
                />
              )}
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ padding: "14px", border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ padding: "14px", border: "1px solid var(--extra-medium-gray)", borderRadius: 8 }}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                style={{
                  padding: "14px",
                  background: "var(--base-color)",
                  color: "#fff",
                  border: 0,
                  borderRadius: 8,
                  fontWeight: 600,
                  marginTop: 8,
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1
                }}
              >
                {loading ? "Processing..." : (isLogin ? "Log in" : "Sign up")}
              </motion.button>
            </form>

            <div style={{ margin: "24px 0", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ flex: 1, height: 1, backgroundColor: "var(--extra-medium-gray)" }} />
              <span style={{ fontSize: 14, color: "var(--body-text-color)" }}>OR</span>
              <div style={{ flex: 1, height: 1, backgroundColor: "var(--extra-medium-gray)" }} />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleSignIn}
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px",
                background: "#fff",
                color: "#000",
                border: "1px solid var(--extra-medium-gray)",
                borderRadius: 8,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                cursor: loading ? "not-allowed" : "pointer"
              }}
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: 20, height: 20 }} />
              Continue with Google
            </motion.button>

            <p style={{ textAlign: "center", color: "var(--body-text-color)", marginTop: 24, fontSize: 14 }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button" 
                onClick={() => setIsLogin(!isLogin)}
                style={{ background: "none", border: 0, color: "var(--base-color)", fontWeight: 600, cursor: "pointer", padding: 0 }}
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}

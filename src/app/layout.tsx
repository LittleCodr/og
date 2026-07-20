import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const themeStylesheets = [
  "/theme/css/theme-vars.css",
  "/theme/css/critical.min.css",
  "/theme/css/font-awesome-icon.min.css",
  "/theme/css/bootstrap-icons.min.css",
  "/theme/css/feather-icon.min.css",
  "/theme/css/theme-vendor.min.css",
  "/theme/css/base.min.css",
  "/theme/css/responsive.min.css",
  "/theme/css/custom.css",
  "/theme/css/dynamic.css",
  "/theme/css/newsletter.min.css",
  "/theme/css/footer.min.css",
];

export const metadata: Metadata = {
  title: "OG Luxury Perfumes | Official Website | Ashish Chanchlani",
  description: "Shop OG Luxury Perfumes by Ashish Chanchlani. Explore Extrait De Parfum, Eau De Parfum, gift sets, premium fragrances and official collections.",
  keywords: "og luxury, og luxury perfume, og luxury perfumes, og luxury perfumes india, og luxury official, og luxury official website, og luxury official store, og luxury perfume official, og luxury online, buy og luxury perfume, og perfume, og perfumes, og luxury fragrances, og beauty perfume, og beauty perfumes, og beauty luxury, og beauty official, ashish chanchlani perfume, ashish chanchlani perfumes, ashish chanchlani fragrance, ashish chanchlani fragrance brand, ashish chanchlani perfume brand, ashish perfume, ashish perfume brand, ashish luxury perfume, ashish chanchlani luxury perfume, ashish chanchlani og perfume, ashish og luxury, ashish og beauty, ashish chanchlani og beauty, og beauty, og beauty fragrance, og beauty perfume india, og beauty products, long lasting perfume, best perfume for men, premium perfume, luxury perfume india, perfume gift set, perfume combo, perfume combo for men, gift perfume, travel perfume, 40% perfume concentration, extrait de parfum india",
};

import { Suspense } from "react";
import { AuthProvider } from "@/context/AuthContext";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        {themeStylesheets.map((href) => (
          <link key={href} href={href} rel="stylesheet" type="text/css" />
        ))}
      </head>
      <body>
        <Suspense fallback={null}>
          <FirebaseAnalytics />
        </Suspense>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

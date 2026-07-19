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
  title: "OG Beauty – Premium Fragrance, Skincare & Wellness",
  description: "OWN THE ORIGINAL. Premium fragrance, skincare & wellness by OG Beauty.",
};

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
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

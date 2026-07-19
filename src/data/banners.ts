export type Banner = {
  image: string;
  href: string;
  altText?: string;
};

// Exact order scraped from ogbeauty.in homepage: two banners before the
// "New Launch" product slider, then eight banners after it.
export const bannersBeforeProducts: Banner[] = [
  {
    image: "/images/OG_Luxury_Web_banner_Wild_Fire_5__jpg.jpg",
    href: "/products/og-luxury-wild-fire-india-s-first-perfume-with-a-discovery-set-inside-4-3ml-100-ml",
    altText: "og-luxury-wild-fire",
  },
  {
    image: "/images/WhatsApp_Image_2026-06-22_at_3.30.56_PM.jpg",
    href: "/products/og-luxury-wild-fire-india-s-first-perfume-with-a-discovery-set-inside-4-3ml-100-ml",
    altText: "ashish-chanchlani-og-luxury",
  },
];

export const bannersAfterProducts: Banner[] = [
  {
    image: "/images/Banner_1.jpg",
    href: "/products/og-luxury-extrait-de-parfum-intense-india-s-strongest-perfume-with-40-concentration-100-ml",
    altText: "og-luxury-smokey-intense",
  },
  {
    image: "/images/OG_Luxury_Homepage_banner_2.jpg",
    href: "/products/og-luxury-extrait-de-parfum-intense-india-s-strongest-perfume-with-40-concentration-100-ml",
    altText: "og-luxury-smokey-intense-perfume",
  },
  {
    image: "/images/Smokey_website_banner_1440x700_V2.png",
    href: "/products/og-luxury-extrait-de-parfum-smokey-intense-india-s-strongest-perfume-with-40-concentration-100-ml",
    altText: "og-luxury-smokey",
  },
  {
    image: "/images/OG_Luxury_Homepage_banner_3.jpg",
    href: "/products/og-luxury-extrait-de-parfum-intense-india-s-strongest-perfume-with-40-concentration-100-ml",
    altText: "og-luxury-extrait-de-parfum",
  },
  {
    image: "/images/OG_Power_Intense_Web_Banner.jpg_1.jpg",
    href: "/products/og-luxury-power-intense-extrait-de-parfum-combo-pack-of-4-40-ml",
    altText: "og-luxury-power-intense",
  },
  {
    image: "/images/OG_Luxury_Homepage_banner_4.1.jpg",
    href: "/products/og-luxury-royal-oud-intense-extrait-de-parfum",
    altText: "og-luxury-royal-oud",
  },
  {
    image: "/images/OG_Luxury_Homepage_Banner_jpg.jpg",
    href: "/products/og-luxury-ekaki-extrait-de-parfum-100-ml",
    altText: "og-luxury-ekaki",
  },
  {
    image: "/images/OG_Luxury_Homepage_banner5.jpg",
    href: "/products/og-luxury-intense-flame-signature-oud-combo-extrait-de-parfum-pack-of-4-20ml-each",
    altText: "og-luxury-gift-set",
  },
];

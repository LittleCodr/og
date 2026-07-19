export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  discountLabel?: string;
  image: string;
  rating?: number;
  reviews?: number;
  soldOut?: boolean;
  altText?: string;
};

export const allProducts: Product[] = [
  {
    id: "1",
    slug: "og-luxury-wild-fire-india-s-first-perfume-with-a-discovery-set-inside-4-3ml-100-ml",
    title: "OG LUXURY Wild Fire - India's First Perfume with a Discovery Set Inside (4*3ml), 100 ml",
    subtitle: "Cardamom, Toffee & Amberwood",
    description:
      "A bold, smoky-sweet fragrance built around cardamom, toffee, and amberwood. Comes with a 4x3ml discovery set so you can share the scent before committing to the full bottle.",
    price: 799,
    compareAtPrice: 999,
    discountLabel: "20% OFF",
    image: "/images/Wild_Fire_A_1500x1500_jpg.jpg",
    altText: "og-luxury-wild-fire",
    rating: 5.0,
    reviews: 42,
  },
  {
    id: "2",
    slug: "og-luxury-thunder-wave-india-s-first-perfume-with-a-discovery-set-inside-4-3ml-100-ml",
    title: "OG LUXURY Thunder Wave - India's First Perfume with a Discovery Set Inside (4*3ml), 100 ml",
    subtitle: "Citron, Orange, Lemon, Mint, Apricot, Basil, May Rose & Ambrette",
    description:
      "A bright citrus-forward fragrance layered with mint, apricot, basil, and a soft floral heart of May Rose and Ambrette. Ships with a 4x3ml discovery set.",
    price: 899,
    compareAtPrice: 999,
    discountLabel: "10% OFF",
    image: "/images/OG_Thunder_Wave_Perfume_Listing_Images_2.jpg",
    altText: "og-luxury-thunder-wave",
    rating: 5.0,
    reviews: 32,
  },
  {
    id: "3",
    slug: "og-luxury-power-intense-extrait-de-parfum-combo-pack-of-4-40-ml",
    title: "OG Luxury Power Intense Extrait De Parfum Combo, Pack of 4, 40 ml",
    description:
      "Four intense extrait de parfum blends in one combo, each carrying a high oil concentration for all-day projection and longevity.",
    price: 499,
    compareAtPrice: 699,
    discountLabel: "29% OFF",
    image: "/images/OG_PowerIntenseListingimage_3.jpg",
    altText: "ashish-chanchlani-og-luxury-power-intense",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "4",
    slug: "og-luxury-black-boss-eau-de-parfum-100ml",
    title: "OG Luxury Black Boss Eau De Parfum, 100ml",
    description: "A confident, deep eau de parfum built for everyday wear with lasting sillage.",
    price: 599,
    compareAtPrice: 750,
    discountLabel: "20% OFF",
    image: "/images/Black_Boss_Listing_image_1.jpg",
    altText: "og-luxury-black-boss",
  },
  {
    id: "5",
    slug: "og-luxury-aqua-king-eau-de-parfum-100ml",
    title: "OG Luxury Aqua King Eau De Parfum, 100ml",
    description: "A fresh, aquatic eau de parfum with clean, oceanic top notes.",
    price: 699,
    compareAtPrice: 750,
    image: "/images/OG_AquaKingListingimage_3.jpg",
    altText: "og-luxury-aqua-king",
    soldOut: true,
  },
  {
    id: "6",
    slug: "og-luxury-alpha-duo-combo-perfume-long-lasting-premium-nobel-man-dark-lord-eau-de-parfum-eau-de-parfum-40-ml-pack-of-2",
    title: "OG LUXURY Alpha Duo Combo Perfume Long Lasting Premium Noble Man & Dark Lord Eau de Parfum - 40 ml Pack of 2",
    description: "Two contrasting signature scents, Noble Man and Dark Lord, bundled as a 40ml pack of two.",
    price: 399,
    compareAtPrice: 499,
    discountLabel: "20% OFF",
    image: "/images/OG_Alpha_Duo_Listing_image_1__jpg.png",
    altText: "og-luxury-alpha-duo-noble-man-dark-lord",
  },
  {
    id: "7",
    slug: "og-luxury-royal-oud-intense-extrait-de-parfum",
    title: "Og Luxury Royal Oud Intense Extrait De Parfum",
    subtitle: "21% perfume oil concentration",
    description:
      "A premium, long-lasting oud fragrance with a 21% perfume oil concentration for exceptional depth and staying power.",
    price: 599,
    image: "/images/royaloud1.png",
    altText: "og-luxury-royal-oud",
  },
  {
    id: "8",
    slug: "og-luxury-extrait-de-parfum-intense-india-s-strongest-perfume-with-40-concentration-100-ml",
    title: "Og Luxury Extrait De Parfum Intense - Smokey",
    subtitle: "40% concentration, 100 ml",
    description:
      "India's strongest extrait de parfum with a 40% oil concentration, built for maximum longevity and projection.",
    price: 549,
    image: "/images/OG_Smokey_1_1_jpg.jpg",
    altText: "og-luxury-smokey",
  },
  {
    id: "9",
    slug: "og-luxury-ekaki-extrait-de-parfum-100-ml",
    title: "Og Luxury Ekaki Extrait De Parfum",
    subtitle: "21% perfume oil concentration, 100 ml",
    description: "A premium, long-lasting fragrance with a 21% perfume oil concentration.",
    price: 599,
    image: "/images/Gallant_jpg.jpg",
    altText: "og-luxury-ekaki",
  },
  {
    id: "10",
    slug: "og-luxury-extrait-de-parfum-gallant-intense-india-s-strongest-perfume-with-40-concentration-100-ml",
    title: "Og Luxury Extrait De Parfum Gallant Intense",
    subtitle: "40% concentration, 100 ml",
    description: "A strong, gallant-styled extrait de parfum with a 40% oil concentration.",
    price: 549,
    image: "/images/Gallant_jpg.jpg",
    altText: "og-luxury-gallant",
  },
  {
    id: "11",
    slug: "og-luxury-extrait-de-parfum-smokey-intense-india-s-strongest-perfume-with-40-concentration-100-ml",
    title: "Og Luxury Extrait De Parfum Smokey Intense",
    subtitle: "40% concentration, 100 ml",
    description: "A deep, smokey extrait de parfum with a 40% oil concentration.",
    price: 549,
    image: "/images/OG_Smokey_1_1_jpg.jpg",
    altText: "og-luxury-smokey-intense",
  },
  {
    id: "12",
    slug: "og-luxury-intense-flame-signature-oud-combo-extrait-de-parfum-pack-of-4-20ml-each",
    title: "Og Luxury Intense Flame Signature Oud Combo Extrait De Parfum, Pack of 4, 20ml Each",
    description: "Four signature oud extrait de parfum blends, 20ml each, in one combo pack.",
    price: 999,
    image: "/images/OG_pack_of_4.jpg",
    altText: "og-luxury-gift-set-perfume-combo",
  },
];

export const newLaunchProducts = allProducts.slice(0, 6);

export const navLinks = [
  { label: "Luxury", href: "/collections/og-luxury" },
  { label: "Best Sellers", href: "/collections/best-sellers" },
  { label: "New Arrival", href: "/collections/new-launch-1" },
  { label: "Discovery Range", href: "/collections/discovery-range" },
  { label: "Combos", href: "/collections/combo" },
  { label: "Crazy Deals", href: "/pages/crazy-deals" },
];

export function getProductBySlug(slug: string) {
  return allProducts.find((p) => p.slug === slug);
}

export function humanizeSlug(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

import { MetadataRoute } from 'next';
import { allProducts } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ogbeauty.in';

  const productRoutes = allProducts.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const reviewRoutes = allProducts.map((product) => ({
    url: `${baseUrl}/reviews/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const compareRoutes = [
    "bella-vita", "villain", "beardo", "wild-stone", "the-man-company", "denver", "skinn",
  ].map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/ashish-chanchlani-perfumes`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/account/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...productRoutes,
    ...reviewRoutes,
    ...compareRoutes,
  ];
}

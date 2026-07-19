import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/account/', '/cart/'],
    },
    sitemap: 'https://ogbeauty.in/sitemap.xml',
  };
}

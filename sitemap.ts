import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://luxuryintimateshop.ro';
  const routes = ['', '/shop', '/about', '/contact', '/cart'];
  const locales = ['ro','en','de'];

  const urls = locales.flatMap((l) =>
    routes.map((r) => ({
      url: `${base}/${l}${r}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: r === '' ? 1 : 0.7
    }))
  );

  return urls;
}

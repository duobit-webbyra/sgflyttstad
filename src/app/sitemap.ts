import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  return [
    {
      url: url + '/',
      priority: 1.0,
    },
    {
      url: url + '/tjanster',
      priority: 0.8,
    },
    {
      url: url + '/om-oss',
      priority: 0.8,
    },
    {
      url: url + '/kontakt',
      priority: 0.8,
    },
    {
      url: url + '/offert',
      priority: 0.8,
    },
  ];
}

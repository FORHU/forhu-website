import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://forhu.ai',
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://forhu.ai/scl',
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://forhu.ai/research',
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://forhu.ai/philosophy',
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://forhu.ai/projects',
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://forhu.ai/about',
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://forhu.ai/news',
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://forhu.ai/contact',
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://detroyt.example.com'
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/journey`, lastModified: new Date() },
    { url: `${base}/work`, lastModified: new Date() },
    { url: `${base}/gallery`, lastModified: new Date() },
    { url: `${base}/shop`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() }
  ]
}

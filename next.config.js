/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'i.ytimg.com',
      'res.cloudinary.com',
      'i.scdn.co',
      'scontent.cdninstagram.com'
    ]
  },
  async rewrites() {
    return [
      {
        source: '/assets/brandcontent/detroytlogo/IMG_2651.png',
        destination: '/Assets/Brand Content/DeTroyt Logo/IMG_2651.PNG'
      }
    ]
  }
}

module.exports = nextConfig

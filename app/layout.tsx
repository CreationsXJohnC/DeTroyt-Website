import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://detroyt.example.com'),
  title: 'DeTroyt | Troy Gardner',
  description: 'Professional audio engineer, DJ, artist, and music producer.',
  openGraph: {
    title: 'DeTroyt | Troy Gardner',
    description: 'Professional audio engineer, DJ, artist, and music producer.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeTroyt | Troy Gardner'
  }
}



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://w.soundcloud.com" />
        <link rel="preconnect" href="https://api-m.paypal.com" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

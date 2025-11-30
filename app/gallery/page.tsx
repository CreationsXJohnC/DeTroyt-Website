import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Lightbox } from '../../components/Lightbox'
import fs from 'fs'
import path from 'path'

function getGalleryItems() {
  const dir = path.join(process.cwd(), 'public', 'assets', 'gallery')
  try {
    const files = fs.readdirSync(dir)
    const imgs = files
      .filter(f => /\.(png|jpe?g|webp)$/i.test(f))
      .map(f => ({ src: `/assets/gallery/${f}`, alt: f.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ') }))
    return imgs.sort(() => Math.random() - 0.5)
  } catch {
    return []
  }
}

export default function GalleryPage() {
  const items = getGalleryItems()
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundImage: "url('/assets/brandcontent/gallery-bg.jpg?v=1')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <section className="section" style={{ paddingTop: 135, paddingBottom: 0 }}>
        <div className="container">
          <h1 style={{ fontSize: 48, marginBottom: 0 }}>Gallery</h1>
          <Lightbox items={items} />
        </div>
      </section>
      <Footer>
        <div style={{ marginBottom: 12 }}>
          <iframe
            title="SoundCloud"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/officialdetroyt&color=%2312f2f2&auto_play=false&visual=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false"
          ></iframe>
        </div>
      </Footer>
    </main>
  )
}

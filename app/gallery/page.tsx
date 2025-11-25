import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Lightbox } from '../../components/Lightbox'

const items = [
  { src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop', alt: 'Studio' },
  { src: 'https://images.unsplash.com/photo-1461783436728-0a007597b1f0?q=80&w=1200&auto=format&fit=crop', alt: 'Concert' },
  { src: 'https://images.unsplash.com/photo-1514525253161-9f2e074c6f37?q=80&w=1200&auto=format&fit=crop', alt: 'DJ Decks' }
]

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <section className="section">
        <div className="container">
          <h1>Gallery</h1>
          <Lightbox items={items} />
          <div style={{ marginTop: 24 }}>
            <iframe title="SoundCloud" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/platform/sama-dee-all-night&color=%2312f2f2&auto_play=false"></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

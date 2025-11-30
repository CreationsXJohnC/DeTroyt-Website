import styles from './page.module.css'
import HeroBackground from '../components/HeroBackground'
import MetalKnobButton from '../components/MetalKnobButton'
import SocialBar from '../components/SocialBar'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function HomePage() {
  return (
    <main style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <img src="/assets/brandcontent/home-bg.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.overlay} style={{ paddingTop: 96 }}>
          <img className={styles.logoHoverHide} src="/assets/brandcontent/detroytlogo/IMG_2651.PNG" alt="DeTroyt logo" style={{ display: 'block', width: 'min(90vw, 895px)', height: 'auto', margin: '0 auto' }} />

          <div className={`muted ${styles.subtitle}`} style={{ marginTop: 16, color: '#fff' }}>DeTroyt is a Professional Audio Engineer, DJ, Artist, and Producer based out of Washington, DC.</div>
          <div className={styles.ctaWrap} style={{ paddingTop: 32 }}>
            <div style={{ display: 'flex', gap: 44 }}>
              <MetalKnobButton href="/contact" label="Book" glowColor="#ff3b3b" />
              <MetalKnobButton href="/gallery" label="Experience" glowColor="#ff3b3b" />
            </div>
            <SocialBar />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

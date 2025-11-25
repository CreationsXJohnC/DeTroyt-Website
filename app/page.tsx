import Image from 'next/image'
import styles from './page.module.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section className={styles.hero}>
        <Image className={styles.bg} src="https://images.unsplash.com/photo-1518991791750-44e0f2f9f75e?q=80&w=2000&auto=format&fit=crop" alt="DeTroyt" fill priority sizes="100vw" />
        <div className={styles.overlay}>
          <div className={styles.logoImg}>
            <Image
              src="/assets/brandcontent/detroytlogo/IMG_2651.PNG"
              alt="DeTroyt logo"
              width={420}
              height={180}
              priority
              sizes="(max-width: 768px) 60vw, 420px"
            />
          </div>
          <div className="muted">Audio Engineer • DJ • Artist • Producer</div>
          <div className={styles.ctaWrap}>
            <Link className="btn" href="/contact">Book</Link>
            <Link className="btn" href="/gallery">Experience</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

import styles from './Navbar.module.css'
import KnobButton from './KnobButton'

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <KnobButton href="/" label="Home" color="#12f2f2" />
      <KnobButton href="/journey" label="Journey" color="#a855f7" />
      <KnobButton href="/work" label="Work" color="#f59e0b" />
      <KnobButton href="/gallery" label="Gallery" color="#84cc16" />
      <KnobButton href="/shop" label="Shop" color="#fb7185" />
      <KnobButton href="/contact" label="Contact" color="#12f2f2" />
    </nav>
  )
}

import Link from 'next/link'
import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} href="/">Home</Link>
      <Link className={styles.link} href="/journey">Journey</Link>
      <Link className={styles.link} href="/work">Work</Link>
      <Link className={styles.link} href="/gallery">Gallery</Link>
      <Link className={styles.link} href="/shop">Shop</Link>
      <Link className={styles.link} href="/contact">Contact</Link>
    </nav>
  )
}

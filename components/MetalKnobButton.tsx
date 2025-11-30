import Link from 'next/link'
import styles from './MetalKnobButton.module.css'

export default function MetalKnobButton({ href, label, glowColor }: { href: string; label: string; glowColor: string }) {
  return (
    <Link href={href} className={styles.wrap} style={{ ['--glow' as any]: glowColor }}>
      <div className={styles.knob}>
        <div className={styles.labelIn}>{label}</div>
      </div>
    </Link>
  )
}

import Link from 'next/link'
import styles from './KnobButton.module.css'

export default function KnobButton({ href, label, color }: { href: string; label: string; color: string }) {
  return (
    <Link href={href} className={styles.wrap} style={{ ['--knob-color' as any]: color }}>
      <div className={styles.knob} />
      <div className={styles.label}>{label}</div>
    </Link>
  )
}


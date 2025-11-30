"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './KnobButton.module.css'

export default function KnobButton({ href, label, color }: { href: string; label: string; color: string }) {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link href={href} className={`${styles.wrap} ${active ? styles.active : ''}`} style={{ ['--knob-color' as any]: color }}>
      <div className={styles.knob} />
      <div className={styles.label}>{label}</div>
    </Link>
  )
}

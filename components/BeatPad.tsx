"use client"
import { useRef, useState } from 'react'
import Link from 'next/link'
import styles from './BeatPad.module.css'

export default function BeatPad({ items }: { items: { label: string; color: string }[] }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [cursor, setCursor] = useState<{ x: number; y: number; show: boolean }>({ x: 0, y: 0, show: false })

  const onMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect()
    const x = rect ? e.clientX - rect.left : e.clientX
    const y = rect ? e.clientY - rect.top : e.clientY
    setCursor({ x, y, show: true })
  }
  const onLeave = () => setCursor(c => ({ ...c, show: false }))

  const cursorSrc = '/assets/ui/hand-cursor.png'

  return (
    <div ref={wrapRef} className={`${styles.container} ${cursor.show ? styles.cursorNone : ''}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {cursor.show && (
        <img
          src={cursorSrc}
          onError={(e) => ((e.currentTarget.src = '/assets/ui/pointer-xl.png'))}
          alt="cursor"
          className={styles.cursorImg}
          style={{ left: cursor.x, top: cursor.y }}
        />
      )}
      <div className={styles.grid}>
        {items.map((it, i) => (
          <Link key={i} href={`/contact?service=${encodeURIComponent(it.label)}`} className={styles.pad} style={{ ['--pad-color' as any]: it.color }}>
            <div className={styles.label}>{it.label}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

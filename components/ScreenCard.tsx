"use client"
import { useRef, useState } from 'react'
import styles from './ScreenCard.module.css'
import DigitalClock from './DigitalClock'

type Tab = { label: string; content: React.ReactNode; titleOverride?: string }

export default function ScreenCard({ title, subtitle, linkHref, tabs, children, showClock }: { title?: string; subtitle?: string; linkHref?: string; tabs?: Tab[]; children?: React.ReactNode; showClock?: boolean }) {
  const [active, setActive] = useState(0)
  const headerLabel = tabs && tabs.length > 0
    ? (tabs[active].titleOverride ?? title ?? tabs[active].label)
    : (title ?? '')
  const lcdRef = useRef<HTMLDivElement>(null)
  const [cursor, setCursor] = useState<{ x: number; y: number; show: boolean }>({ x: 0, y: 0, show: false })
  const onMove = (e: React.MouseEvent) => {
    const rect = lcdRef.current?.getBoundingClientRect()
    const x = rect ? e.clientX - rect.left : e.clientX
    const y = rect ? e.clientY - rect.top : e.clientY
    setCursor({ x, y, show: true })
  }
  const onLeave = () => setCursor(c => ({ ...c, show: false }))
  const cursorSrc = '/assets/ui/pointer-xl.png'
  return (
    <div className={styles.bezel}>
      <div ref={lcdRef} className={`${styles.lcd} ${styles.corners} ${cursor.show ? styles.cursorNone : ''}`} onMouseMove={onMove} onMouseLeave={onLeave}>
        {cursor.show && (
          <img
            src={cursorSrc}
            alt="cursor"
            className={styles.cursorImg}
            style={{ left: cursor.x, top: cursor.y }}
          />
        )}
        <div className={styles.header}>
          <div className={styles.titleHeader}>{headerLabel}</div>
          <div className={styles.headerRight}>
            {showClock && <div className={styles.clock}><DigitalClock /></div>}
            {subtitle && (
              linkHref ? (
                <a href={linkHref} target="_blank" rel="noopener noreferrer" className={`${styles.chip} ${styles.chipBtn}`}>{subtitle}</a>
              ) : (
                <div className={styles.chip}>{subtitle}</div>
              )
            )}
          </div>
        </div>
        <div className={styles.content}>{tabs && tabs.length > 0 ? tabs[active].content : children}</div>
        {tabs && tabs.length > 0 && (
          <div className={styles.tabs}>
            {tabs.map((t, i) => (
              <button key={i} className={`${styles.tab} ${i === active ? styles.tabActive : ''}`} onClick={() => setActive(i)}>{t.label}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

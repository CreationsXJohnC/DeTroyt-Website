"use client"
import { useState } from 'react'
import styles from './ScreenCard.module.css'

type Tab = { label: string; content: React.ReactNode }

export default function ScreenCard({ title, subtitle, linkHref, tabs, children }: { title?: string; subtitle?: string; linkHref?: string; tabs?: Tab[]; children?: React.ReactNode }) {
  const [active, setActive] = useState(0)
  const headerLabel = title || (tabs && tabs.length > 0 ? tabs[active].label : '')
  return (
    <div className={styles.bezel}>
      <div className={`${styles.lcd} ${styles.corners}`}>
        <div className={styles.header}>
          <div className={styles.titleHeader}>{headerLabel}</div>
          {subtitle && (
            linkHref ? (
              <a href={linkHref} target="_blank" rel="noopener noreferrer" className={`${styles.chip} ${styles.chipBtn}`}>{subtitle}</a>
            ) : (
              <div className={styles.chip}>{subtitle}</div>
            )
          )}
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

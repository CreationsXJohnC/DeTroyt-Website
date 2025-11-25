'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './Lightbox.module.css'

type Item = { src: string; alt: string }

export function Lightbox({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
        {items.map((it, i) => (
          <button key={i} onClick={() => setOpenIndex(i)} style={{ border: '1px solid #1c1c21', borderRadius: 12, overflow: 'hidden', padding: 0, background: 'transparent' }}>
            <Image src={it.src} alt={it.alt} width={600} height={800} loading="lazy" />
          </button>
        ))}
      </div>
      {openIndex !== null && (
        <div className={styles.overlay} onClick={() => setOpenIndex(null)}>
          <button className={`btn ${styles.close}`} onClick={() => setOpenIndex(null)}>Close</button>
          <div className={styles.content}>
            <Image src={items[openIndex].src} alt={items[openIndex].alt} width={1200} height={800} />
          </div>
        </div>
      )}
    </div>
  )
}
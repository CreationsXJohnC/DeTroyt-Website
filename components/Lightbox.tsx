'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './Lightbox.module.css'
import FaderBar from './FaderBar'

type Item = { src: string; alt: string }

export function Lightbox({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div>
      <div ref={ref} className={styles.scrollWrap}>
        <div className={styles.strip}>
          {items.map((it, i) => (
            <button key={i} className={styles.item} onClick={() => setOpenIndex(i)}>
              <Image src={it.src} alt={it.alt} width={1200} height={800} loading="lazy" className={styles.imgStrip} />
            </button>
          ))}
        </div>
      </div>
      <FaderBar target={ref} />
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

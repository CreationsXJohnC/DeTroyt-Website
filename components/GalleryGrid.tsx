import Image from 'next/image'
import styles from './GalleryGrid.module.css'

type Item = { src: string; alt: string }

export function GalleryGrid({ items }: { items: Item[] }) {
  return (
    <div className={styles.grid}>
      {items.map((it, i) => (
        <div key={i} className={styles.item}>
          <Image src={it.src} alt={it.alt} width={600} height={800} loading="lazy" />
        </div>
      ))}
    </div>
  )
}
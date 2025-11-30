'use client'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../app/page.module.css'
import logoPng from '../Assets/Brand Content/DeTroyt Logo/IMG_2651.PNG'

export function BrandLogo() {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className={styles.logoImg}>
        <Image src="/assets/brandcontent/detroytlogo/logo-fallback.svg" alt="DeTroyt logo" width={420} height={180} priority />
      </div>
    )
  }
  return (
    <div className={styles.logoImg}>
      <Image
        src={logoPng}
        alt="DeTroyt logo"
        width={420}
        height={180}
        priority
        sizes="(max-width: 768px) 60vw, 420px"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

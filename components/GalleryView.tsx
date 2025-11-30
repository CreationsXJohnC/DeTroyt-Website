"use client"
import { useEffect, useRef, useState } from 'react'
import styles from './GalleryView.module.css'
import { Lightbox } from './Lightbox'

type Item = { src: string; alt: string }

export default function GalleryView({ items, videoSrc }: { items: Item[]; videoSrc?: string }) {
  const [mode, setMode] = useState<'photo' | 'video'>('photo')
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeControl, setActiveControl] = useState<'play' | 'stop' | null>(null)

  const play = () => { const v = videoRef.current; if (v) v.play() }
  const stop = () => { const v = videoRef.current; if (v) { v.pause(); v.currentTime = 0 } }

  useEffect(() => {
    if (mode === 'photo') setActiveControl(null)
  }, [mode])

  return (
    <div>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Gallery</h1>
        <div className={styles.subheader}>
          <button className={`${styles.modeBtn} ${mode === 'photo' ? 'active ' + styles.modeBtn + ' ' + styles.active : ''}`} onClick={() => setMode('photo')}>Photo</button>
          {' / '}
          <button className={`${styles.modeBtn} ${mode === 'video' ? 'active ' + styles.modeBtn + ' ' + styles.active : ''}`} onClick={() => setMode('video')}>Video</button>
        </div>
      </div>

      <div className={styles.area}>
        {mode === 'photo' ? (
          <div className={styles.galleryBlock}>
            <Lightbox items={items} />
          </div>
        ) : (
          <div className={styles.videoWrap}>
            <video ref={videoRef} className={styles.video} src={videoSrc || ''} controls={false} preload="metadata" />
            <div className={styles.controls}>
            <button className={`${styles.ctrlBtn} ${styles.play} ${activeControl === 'play' ? styles.playActive : ''}`} onClick={() => { setActiveControl('play'); play() }} aria-label="Play/Pause">
              <span className={`${styles.icon} ${styles.playIcon}`} />
              <span className={styles.slash}>/</span>
              <span className={`${styles.icon}`} style={{ width: 16, height: 16, background: 'linear-gradient(to right, #fff 0 5px, transparent 5px 9px, #fff 9px 14px, transparent 14px 100%)' }} />
            </button>
            <button className={`${styles.ctrlBtn} ${styles.stop} ${activeControl === 'stop' ? styles.stopActive : ''}`} onClick={() => { setActiveControl('stop'); stop() }} aria-label="Stop">
              <span className={`${styles.icon} ${styles.stopIcon}`} />
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

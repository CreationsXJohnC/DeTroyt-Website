"use client"
import { useEffect, useRef, useState } from 'react'
import styles from './FaderBar.module.css'

export default function FaderBar({ target }: { target: React.RefObject<HTMLDivElement> }) {
  const rangeRef = useRef<HTMLInputElement>(null)
  const knobRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [maxScroll, setMaxScroll] = useState(0)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    const el = target.current
    if (!el) return
    const update = () => setMaxScroll(el.scrollWidth - el.clientWidth)
    update()
    const onScroll = () => {
      if (!rangeRef.current || !knobRef.current) return
      const value = maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0
      rangeRef.current.value = String(value)
      const trackW = knobRef.current.parentElement!.clientWidth
      const knobW = knobRef.current.getBoundingClientRect().width
      const x = (value / 100) * (trackW - knobW)
      knobRef.current.style.left = `${x}px`
    }
    el.addEventListener('scroll', onScroll)
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
    }
  }, [target, maxScroll])

  const handleInput = () => {
    const el = target.current
    if (!el || !rangeRef.current || !knobRef.current) return
    const value = Number(rangeRef.current.value)
    const newScroll = (value / 100) * maxScroll
    el.scrollTo({ left: newScroll, behavior: 'smooth' })
    const trackW = knobRef.current.parentElement!.clientWidth
    const knobW = knobRef.current.getBoundingClientRect().width
    const x = (value / 100) * (trackW - knobW)
    knobRef.current.style.left = `${x}px`
  }

  const setByPageX = (pageX: number) => {
    const track = trackRef.current
    const el = target.current
    if (!track || !el || !knobRef.current || !rangeRef.current) return
    const rect = track.getBoundingClientRect()
    const knobW = knobRef.current.getBoundingClientRect().width
    let pos = pageX - rect.left - knobW / 2
    if (pos < 0) pos = 0
    if (pos > rect.width - knobW) pos = rect.width - knobW
    const value = (pos / (rect.width - knobW)) * 100
    rangeRef.current.value = String(value)
    const newScroll = (value / 100) * (el.scrollWidth - el.clientWidth)
    setMaxScroll(el.scrollWidth - el.clientWidth)
    el.scrollTo({ left: newScroll, behavior: 'auto' })
    knobRef.current.style.left = `${pos}px`
  }

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true)
    const move = (ev: MouseEvent) => setByPageX(ev.pageX)
    const moveTouch = (ev: TouchEvent) => {
      const t = ev.touches[0]
      if (t) setByPageX(t.pageX)
    }
    const end = () => {
      setDragging(false)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('touchmove', moveTouch)
      window.removeEventListener('mouseup', end)
      window.removeEventListener('touchend', end)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('touchmove', moveTouch, { passive: false })
    window.addEventListener('mouseup', end)
    window.addEventListener('touchend', end)
    if ('pageX' in e) setByPageX((e as React.MouseEvent).pageX)
    else {
      const t = (e as React.TouchEvent).touches[0]
      if (t) setByPageX(t.pageX)
    }
  }

  return (
    <div className={styles.wrap}>
      <div ref={trackRef} className={styles.track}>
        <div
          ref={knobRef}
          className={`${styles.knob} ${dragging ? styles.dragging : ''}`}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          <img className={styles.img} src="/assets/ui/fader-knob.png" alt="Knob" />
        </div>
        <input ref={rangeRef} className={styles.range} type="range" min="0" max="100" step="1" onInput={handleInput} />
      </div>
    </div>
  )
}

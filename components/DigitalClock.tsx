"use client"
import { useEffect, useState } from 'react'

export default function DigitalClock() {
  const [time, setTime] = useState<string>('')
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true }).format(now))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return <span>{time}</span>
}


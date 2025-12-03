"use client"
import { useEffect, useState } from 'react'
import ScreenCard from './ScreenCard'
import screenStyles from './ScreenCard.module.css'

type TabData = { label: string; lines: string[]; list?: string[] }
type Data = { title: string; subtitle?: string; resumeHref?: string; tabs: TabData[] }

export default function JourneyDataScreen() {
  const [data, setData] = useState<Data | null>(null)
  useEffect(() => {
    const load = async () => {
      const res = await fetch('/data/journey-tabs.json', { cache: 'no-store' })
      const json = await res.json()
      setData(json)
    }
    load()
  }, [])

  if (!data) return null

  const tabs = data.tabs.map(t => ({
    label: t.label,
    content: (
      <div>
        <div className={screenStyles.sub1}>{t.lines[0]}</div>
        <div className={screenStyles.sub2} style={{ marginTop: 0 }}>{t.lines[1]}</div>
        {t.list && (
          <ul className={screenStyles.subList}>
            {t.list.map((li, i) => <li key={i}>{li}</li>)}
          </ul>
        )}
      </div>
    )
  }))

  return (
    <ScreenCard title={data.title} subtitle={data.subtitle} linkHref={data.resumeHref} tabs={tabs} />
  )
}


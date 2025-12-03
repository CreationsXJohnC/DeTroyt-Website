"use client"
import { useState } from 'react'
import styles from './MixerBoard.module.css'

export default function MixerBoard() {
  const [channels, setChannels] = useState(Array.from({ length: 9 }, () => ({ sel: false, cue: false, on: true, level: 60 })))
  const [fx, setFx] = useState([false, false, false, false])
  const [masterOn, setMasterOn] = useState(true)
  const toggle = (i: number, key: 'sel' | 'cue' | 'on') => {
    const next = [...channels]
    next[i][key] = !next[i][key]
    setChannels(next)
  }
  const setLevel = (i: number, y: number) => {
    const next = [...channels]
    next[i].level = Math.max(0, Math.min(100, y))
    setChannels(next)
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <div className={`${styles.lcd} ${styles.lcdTall}`}><div className={styles.lcdTitle}>Collaborations/Clientele</div><div className={styles.lcdGrid} /></div>
        <div className={`${styles.lcd} ${styles.lcdTall}`}><div className={styles.lcdTitle}>Gigs & Events</div><div className={styles.lcdGrid} /></div>
        <div className={styles.ioPanel}>
          <div className={styles.ioTitle}>I/O Panel</div>
          <div className={styles.ioTop}>
            <div className={styles.ioSection}>
              <div className={`${styles.jackRCA} ${styles.white}`} />
              <div className={`${styles.jackRCA} ${styles.red}`} />
              <div className={styles.jackLabel}>REC L/R</div>
            </div>
            <div className={styles.ioSection}>
              <div className={styles.jackTRS} />
              <div className={styles.jackTRS} />
              <div className={styles.jackLabel}>PHONES</div>
            </div>
            <div className={styles.ioBar}>MAIN OUT</div>
          </div>
          <div className={styles.ioBottom}>
            <div className={styles.jackXLR} />
            <div className={styles.jackXLR} />
            <div className={styles.jackXLR} />
            <div className={styles.jackXLR} />
            <div className={styles.jackLabel}>MIC/LINE 1–4</div>
          </div>
        </div>
      </div>
      <div className={styles.panel}>
        {channels.map((ch, i) => (
          <div key={i} className={styles.strip}>
            <div className={styles.btnRow}>
              <button className={`${styles.btn} ${ch.sel ? styles.active : ''}`} onClick={() => toggle(i,'sel')}>SEL</button>
              <button className={`${styles.btn} ${ch.cue ? styles.active : ''}`} onClick={() => toggle(i,'cue')}>CUE</button>
            </div>
            <div className={styles.faderSlot} onMouseDown={e => {
              const rect = (e.target as HTMLElement).getBoundingClientRect()
              const y = ((e.clientY - rect.top) / rect.height)
              setLevel(i, Math.round((1 - y) * 100))
            }}>
              <div className={styles.faderThumb} style={{ bottom: `${ch.level}%` }} />
            </div>
            <div className={styles.meter} />
            <div className={styles.label}>CH {i+1}</div>
          </div>
        ))}
        <div className={styles.master}>
          <div className={styles.faderSlot} onMouseDown={e => {
            const rect = (e.target as HTMLElement).getBoundingClientRect()
            const y = ((e.clientY - rect.top) / rect.height)
            setLevel(0, Math.round((1 - y) * 100))
          }}>
            <div className={styles.faderThumb} style={{ bottom: `50%` }} />
          </div>
          <div className={styles.label}>MAIN</div>
          <div className={styles.mainBtnCol}>
            <button className={`${styles.btn} ${masterOn ? styles.active : ''}`} onClick={()=>setMasterOn(true)}>ON</button>
            <button className={`${styles.btn} ${!masterOn ? styles.active : ''}`} onClick={()=>setMasterOn(false)}>OFF</button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.bank}>
          {fx.map((k, idx) => (
            <button key={idx} className={`${styles.bankBtn} ${k ? styles.active : ''}`} onClick={() => {
              const next = [...fx]; next[idx] = !next[idx]; setFx(next)
            }}>FX {idx+1}</button>
          ))}
        </div>
      </div>
      <div className={styles.knobRow}>
        {Array.from({length:4}).map((_,i)=>(
          <div key={i} className={`${styles.knob} ${fx[i] ? styles.active : ''}`} onClick={()=>{
            const next=[...fx]; next[i]=!next[i]; setFx(next)
          }} />
        ))}
      </div>
    </div>
  )
}

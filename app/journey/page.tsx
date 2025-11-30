import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import BeatPad from '../../components/BeatPad'

const timeline = [
  { role: 'Audio Engineer', org: 'Freelance', dates: '2018–Present', achievements: ['Live sound', 'Playback', 'Touring'] },
  { role: 'DJ', org: 'DeTroyt', dates: '2015–Present', achievements: ['Events', 'Clubs', 'Festivals'] }
]

export default function JourneyPage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundImage: "url('/assets/brandcontent/journey-bg.jpg?v=1')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <section className="section" style={{ paddingTop: 135 }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 48 }}>Journey</h1>
          <div className="grid grid-2">
            {timeline.map((t, i) => (
              <div key={i} className="card">
                <div>{t.role}</div>
                <div className="muted">{t.org} • {t.dates}</div>
                <ul>
                  {t.achievements.map((a, j) => <li key={j}>{a}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 6 }}>
            <a className="btn" href="/resume.pdf" download>Download Resume</a>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 8, paddingBottom: 0 }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 42, textAlign: 'center' }}>Professional Services</h2>
          <BeatPad
            items={[
              { label: 'Live Sound', color: '#ff4d6d' },
              { label: 'Production', color: '#ffd166' },
              { label: 'Playback', color: '#06d6a0' },
              { label: 'Mix & Master', color: '#4cc9f0' },
              { label: 'DJ Sets', color: '#c77dff' },
              { label: 'Consulting', color: '#f77f00' },
            ]}
          />
        </div>
      </section>
      <Footer />
    </main>
  )
}

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

const timeline = [
  { role: 'Audio Engineer', org: 'Freelance', dates: '2018–Present', achievements: ['Live sound', 'Playback', 'Touring'] },
  { role: 'DJ', org: 'DeTroyt', dates: '2015–Present', achievements: ['Events', 'Clubs', 'Festivals'] }
]

export default function JourneyPage() {
  return (
    <main>
      <Navbar />
      <section className="section">
        <div className="container">
          <h1>Journey</h1>
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
          <div style={{ marginTop: 24 }}>
            <a className="btn" href="/resume.pdf" download>Download Resume</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Professional Services</h2>
          <div className="grid grid-3">
            <div className="card">Live Sound</div>
            <div className="card">Production</div>
            <div className="card">Playback</div>
            <div className="card">Mixing & Mastering</div>
            <div className="card">DJ Sets</div>
            <div className="card">Consulting</div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
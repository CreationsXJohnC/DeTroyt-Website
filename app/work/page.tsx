import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

const collaborations = [
  { name: 'Artist A', role: 'Playback', year: '2024' },
  { name: 'Brand B', role: 'Live Sound', year: '2023' }
]
const gigs = [
  { name: 'Festival X', location: 'LA', year: '2024' },
  { name: 'Club Y', location: 'NYC', year: '2023' }
]
const certifications = [
  { title: 'Audio Tech Cert', issuer: 'Org Z', year: '2022' }
]

export default function WorkPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundImage: "url('/assets/brandcontent/work-bg.jpg?v=1')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <section className="section" style={{ paddingTop: 135 }}>
        <div className="container">
          <h1 style={{ fontSize: 48 }}>Professional Work Scope</h1>
          <h2>Collaborations</h2>
          <div className="grid grid-2">
            {collaborations.map((c, i) => (
              <div key={i} className="card">
                <div>{c.name}</div>
                <div className="muted">{c.role} • {c.year}</div>
              </div>
            ))}
          </div>
          <h2 style={{ marginTop: 32 }}>Gigs & Events</h2>
          <div className="grid grid-2">
            {gigs.map((g, i) => (
              <div key={i} className="card">
                <div>{g.name}</div>
                <div className="muted">{g.location} • {g.year}</div>
              </div>
            ))}
          </div>
          <h2 style={{ marginTop: 32 }}>Certifications</h2>
          <div className="grid grid-2">
            {certifications.map((c, i) => (
              <div key={i} className="card">
                <div>{c.title}</div>
                <div className="muted">{c.issuer} • {c.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

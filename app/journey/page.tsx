import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import BeatPad from '../../components/BeatPad'
import ScreenCard from '../../components/ScreenCard'
import screenStyles from '../../components/ScreenCard.module.css'
/* removed JourneyDataScreen integration */

const timeline = [
  { role: 'Audio Engineer', org: 'Freelance', dates: '2018–Present', achievements: ['Live sound', 'Playback', 'Touring'] },
  { role: 'DJ', org: 'DeTroyt', dates: '2015–Present', achievements: ['Events', 'Clubs', 'Festivals'] }
]

export default function JourneyPage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundImage: "url('/assets/brandcontent/journey-bg.jpg?v=1')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <section className="section" style={{ paddingTop: 135, paddingBottom: 20 }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 48, textAlign: 'center' }}>Journey</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: -24 }}>
            <ScreenCard title="Troy M. Gardner" subtitle="Download Resume" linkHref="/DeTroyt-resume.pdf" showClock
              tabs={[
                { label: '🏠', content: (
                  <div>
                    <div className={screenStyles.sub2}>mr.troymgardner@gmail.com • (313) 409 8769 • @OﬃcialDeTroyt</div>
                    <div className={screenStyles.sub1} style={{ marginTop: 8 }}>
                      Amicable audio engineer willing to tour and work with venues to ensure the best possible auditory experience. Extensive experience in setting up, installing & maintaining a variety of audio equipment. Proficient in loudspeakers, amplifiers, RF coordination, digital consoles & more. Comfortable using digital & multimedia recording, as well as sound applications including Pro-Tools & Ableton Live 12. Detail-oriented & friendly with a calm & professional demeanor.
                    </div>
                  </div>
                ) },
                { label: 'Collabs', titleOverride: 'Collaborations', content: (
                  <div>
                    <div className={screenStyles.sub1}>Artist • Musician • Enterprise</div>
                    <ul className={screenStyles.subList} style={{ fontSize: 'clamp(16px, 3vw, 22px)' }}>
                      <li>Erykah Badu</li>
                      <li>The Alchemist</li>
                      <li>Isiah Falls</li>
                    </ul>
                  </div>
                ) },
                { label: 'G&E', titleOverride: 'Gigs & Events', content: (
                  <div>
                    <ul className={screenStyles.subList} style={{ fontSize: 'clamp(12px, 2.2vw, 22px)', marginTop: 0 }}>
                      <li>Abi & Alan Luv Iz… August 2025</li>
                      <li>LVRS Paradise July 2025</li>
                      <li>LVRS ONLY Tour June 2024</li>
                      <li>DeathFest (Death Metal Festival) May 2024</li>
                    </ul>
                  </div>
                ) },
                { label: 'Certs', titleOverride: 'Certifications & Skills', content: (
                  <div className={screenStyles.sub1}>
                    Operating Digital Consoles <br/>
                    • Avid - (S6L, Profile, SC48) <br/>
                    • DigiCo - (SD Series, Quantum) <br/>
                    • Midas - (Pro Series, M32) <br/>
                    • SoundCraf - (Vi Series) <br/>
                    • Allen & Heath - (SC, SQ, DLive) <br/>
                    • Yamaha - (CL, QL, Rivage) <br/>
                    <br/>
                    Touring (Domestic & International) <br/>
                    • 150-2500 Capacity Venue run <br/>
                    <br/>
                    Festivals (FOH/Monitors/Playback) <br/>
                    • Local & Domestic US <br/>
                    <br/>
                    Eﬀective Communication <br/>
                    Signal Flow <br/>
                    Patching & Routing <br/>
                    Mix & Mastering <br/>
                    <br/>
                    Programming & Arranging <br/>
                    • Ableton Live 12 <br/>
                    • Pro Tools <br/>
                    • Logic Pro X <br/>
                    • Reaper
                  </div>
                ) },
                {
                  label: 'EX-1', titleOverride: 'Professional Experience',
                  content: (
                    <div>
                      <div className={screenStyles.sub1}>A2 | FOH Technician/Multitrack Recording Engineer</div>
                      <div className={screenStyles.sub2} style={{ marginTop: 0 }}>Abi & Alan Luv Iz… (Erykah Badu & The Alchemist) Aug 2025</div>
                      <ul className={screenStyles.subList}>
                        <li>Set up and operate front-of-house sound systems, ensuring optimal audio quality for live performances</li>
                        <li>Perform system checks, line checks, and soundchecks to confirm proper functionality of all audio inputs and outputs</li>
                        <li>Troubleshoot and resolve technical issues in real time during live shows</li>
                        <li>Maintain and calibrate PA systems, amplifiers, consoles, and outboard gear</li>
                        <li>Set up and configure recording systems for live shows and studio sessions, including preamps, converters, and DAWs</li>
                        <li>Maintain detailed session documentation, labeling, and track organization for post-production use</li>
                      </ul>
                    </div>
                  )
                },
                { label: 'EX-2', titleOverride: 'Professional Experience', content: (
                  <div>
                    <div className={screenStyles.sub1}>A1 | FOH/MON Engineer</div>
                    <div className={screenStyles.sub2} style={{ marginTop: 0 }}>The Fillmore Silver Spring; Silver Spring Maryland, MD Aug 2022 - Current</div>
                    <ul className={screenStyles.subList}>
                      <li>Collaborate closely with artists and bands to understand their sound preferences and provide a tailored audio experience for each performance.</li>
                      <li>Troubleshoot and resolve technical issues promptly to minimize disruptions before and during events.</li>
                      <li>Provide valuable sound engineering consultation to artists and event organizers as needed.</li>
                      <li>Maintain the PA & all connected system equipment to ensure audio reaches desired zones.</li>
                    </ul>
                  </div>
                ) },
                { label: 'EX-3', titleOverride: 'Professional Experience', content: (
                  <div>
                    <div className={screenStyles.sub1}>A2 | Playback/Monitor Engineer</div>
                    <div className={screenStyles.sub2} style={{ marginTop: 0 }}>LVRS ONLY Tour 2024/LVRS Paradise 2025 (Isiah Falls) ; June 2024 - September 2025</div>
                    <ul className={screenStyles.subList}>
                      <li>Managed and operated playback systems for live performances, including multitrack stems, timecode, and MIDI triggers.</li>
                      <li>Synchronized audio playback with lighting, video, and automation cues using timecode and show control protocols.</li>
                      <li>Conducted daily system checks and redundancy tests to ensure flawless performance and quick recovery in case of failure.</li>
                      <li>Maintain clear, low-latency communication with stage crew and artists to quickly address on-stage monitoring needs.</li>
                    </ul>
                  </div>
                ) },
                { label: 'EX-4', titleOverride: 'Professional Experience', content: (
                  <div>
                    <div className={screenStyles.sub1}>A2 | Monitor Engineer</div>
                    <div className={screenStyles.sub2} style={{ marginTop: 0 }}>DeathFest (Death Metal Festival) ; Baltimore, MD May 2024</div>
                    <ul className={screenStyles.subList}>
                      <li>Set up and manage all stage monitoring systems, including wedges, sidefills, and in-ear monitors (IEMs).</li>
                      <li>Dial in monitor mixes for multiple bands with varying setups, ofen on tight schedules and minimal line checks.</li>
                      <li>Maintain and troubleshoot monitor console, RF systems, and stage patching throughout the event.</li>
                      <li>Work closely with band members during soundcheck and changeovers to ensure clear, customized stage mixes.</li>
                    </ul>
                  </div>
                ) },
                { label: 'EX-5', titleOverride: 'Professional Experience', content: (
                  <div>
                    <div className={screenStyles.sub1}>A1 | FOH Engineer</div>
                    <div className={screenStyles.sub2} style={{ marginTop: 0 }}>White House (Vice President Kamala Harris); Washington, DC Aug 2023</div>
                    <ul className={screenStyles.subList}>
                      <li>Ensured seamless audio support in a protocol-driven environment with strict standards for reliability, clarity, and technical precision.</li>
                      <li>Supported high-profile, nationally significant events with apenKon to detail, operational discretion, and adherence to formal production requirements.</li>
                      <li>Provided monitor mixing from front of house using networked digital consoles to deliver clear, consistent audio to performers and speakers.</li>
                    </ul>
                  </div>
                ) },
              ]}
            />
          </div>
          
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, marginTop: -12 }}>
          <h2 style={{ fontSize: 42, textAlign: 'center', marginTop: 0, marginBottom: 8 }}>Professional Services</h2>
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

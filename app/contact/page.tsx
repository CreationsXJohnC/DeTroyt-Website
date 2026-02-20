import { Suspense } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundImage: "url('/assets/brandcontent/contact-bg.jpg?v=1')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <section className="section" style={{ paddingTop: 135 }}>
        <div className="container">
          <h1 style={{ fontSize: 48, textAlign: 'center' }}>Contact & Booking</h1>
          <Suspense fallback={<div>Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
      <Footer />
    </main>
  )
}

"use client"
import { type FormEvent } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const form = e.currentTarget
  const formData = new FormData(form)
  const res = await fetch('/api/contact', { method: 'POST', body: formData })
  if (res.ok) {
    form.reset()
    alert('Message sent')
  } else {
    alert('There was an error sending your message')
  }
}

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundImage: "url('/assets/brandcontent/contact-bg.jpg?v=1')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container">
          <h1 style={{ fontSize: 48 }}>Contact & Booking</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-2">
              <input name="name" placeholder="Name" required />
              <input name="email" placeholder="Email" type="email" required />
              <input name="phone" placeholder="Phone" />
              <input name="service" placeholder="Service" />
              <input name="date" placeholder="Date" type="date" />
              <input name="budget" placeholder="Budget" />
            </div>
            <div style={{ marginTop: 12 }}>
              <textarea name="message" placeholder="Message" rows={6} required />
            </div>
            <div style={{ marginTop: 12 }}>
              <button className="btn" type="submit">Send</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}

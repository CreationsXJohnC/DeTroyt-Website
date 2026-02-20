"use client"
import { type FormEvent, useState, useRef } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ContactForm() {
  const searchParams = useSearchParams()
  const presetService = searchParams.get('service') || ''
  const [submitted, setSubmitted] = useState(false)
  const dateRef = useRef<HTMLInputElement>(null)
  const [pressing, setPressing] = useState(false)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const res = await fetch('/api/contact', { method: 'POST', body: formData })
    if (res.ok) {
      form.reset()
      setSubmitted(true)
      alert('Message sent')
    } else {
      setSubmitted(false)
      alert('There was an error sending your message')
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 720,
        margin: '0 auto',
        borderRadius: 12,
        padding: 24,
        fontFamily: "'CodeProbe','CodersCrux', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
      }}
    >
      <div className="grid">
        <input name="name" placeholder="Name" required style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #dddddd', background: '#ffffff', color: '#000000', fontFamily: "'CodeProbe','CodersCrux', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial", fontSize: 'clamp(13px, 2.2vw, 18px)' }} />
        <input name="email" placeholder="Email" type="email" required style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #dddddd', background: '#ffffff', color: '#000000', fontFamily: "'CodeProbe','CodersCrux', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial", fontSize: 'clamp(13px, 2.2vw, 18px)' }} />
        <input name="phone" placeholder="Phone" style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #dddddd', background: '#ffffff', color: '#000000', fontFamily: "'CodeProbe','CodersCrux', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial", fontSize: 'clamp(13px, 2.2vw, 18px)' }} />
        <input name="service" placeholder="Service" defaultValue={presetService} style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #dddddd', background: '#ffffff', color: '#000000', fontFamily: "'CodeProbe','CodersCrux', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial", fontSize: 'clamp(13px, 2.2vw, 18px)' }} />
        <div
          style={{ width: '100%' }}
          onClick={() => {
            const el = dateRef.current
            if (el) {
              // showPicker is supported on some browsers; fallback to focus
              if ((el as any).showPicker) { (el as any).showPicker() } else { el.focus() }
            }
          }}
        >
          <input
            ref={dateRef}
            name="date"
            placeholder="Date"
            type="date"
            style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #dddddd', background: '#ffffff', color: '#000000', fontFamily: "'CodeProbe','CodersCrux', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial", fontSize: 'clamp(13px, 2.2vw, 18px)' }}
          />
        </div>
        <input name="budget" placeholder="Budget" style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #dddddd', background: '#ffffff', color: '#000000', fontFamily: "'CodeProbe','CodersCrux', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial", fontSize: 'clamp(13px, 2.2vw, 18px)' }} />
      </div>
      <div style={{ marginTop: 24 }}>
        <textarea name="message" placeholder="Message" rows={6} required style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #dddddd', background: '#ffffff', color: '#000000', fontFamily: "'CodeProbe','CodersCrux', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial", fontSize: 'clamp(13px, 2.2vw, 18px)' }} />
      </div>
      <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
        <button
          className="btn"
          type="submit"
          style={{
            fontFamily: "'CodeProbe','CodersCrux', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
            textTransform: 'uppercase',
            border: '2px solid #ffffff',
            boxShadow: pressing ? '0 0 18px 5px rgba(18,242,242,.6)' : '0 0 12px 3px rgba(18,242,242,.35)',
            transition: 'box-shadow .15s ease, transform .15s ease',
            fontSize: 'clamp(12px, 2vw, 16px)'
          }}
          onMouseDown={() => setPressing(true)}
          onMouseUp={() => setPressing(false)}
          onMouseLeave={() => setPressing(false)}
          onTouchStart={() => setPressing(true)}
          onTouchEnd={() => setPressing(false)}
        >
          {submitted ? 'Submitted' : 'Submit'}
        </button>
      </div>
    </form>
  )
}

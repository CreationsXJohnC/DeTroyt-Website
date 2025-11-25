import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const form = await req.formData()
  const payload = {
    name: String(form.get('name') || ''),
    email: String(form.get('email') || ''),
    phone: String(form.get('phone') || ''),
    service: String(form.get('service') || ''),
    date: String(form.get('date') || ''),
    budget: String(form.get('budget') || ''),
    message: String(form.get('message') || '')
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || 'mr.troymgardner@gmail.com'
  const apiKey = process.env.SENDGRID_API_KEY

  if (apiKey) {
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: toEmail }] }],
        from: { email: 'noreply@detroyt.site' },
        subject: 'New booking inquiry',
        content: [{ type: 'text/plain', value: JSON.stringify(payload, null, 2) }]
      })
    })
    const ok = res.ok
    return NextResponse.json({ ok })
  }

  return NextResponse.json({ ok: true })
}
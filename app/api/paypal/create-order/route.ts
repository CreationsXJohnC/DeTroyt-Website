import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const clientId = process.env.PAYPAL_CLIENT_ID
  const secret = process.env.PAYPAL_SECRET
  if (!clientId || !secret) return NextResponse.json({ error: 'PayPal not configured' }, { status: 400 })
  const form = await req.formData()
  const productId = String(form.get('productId') || '')
  const amount = productId === 'p1' ? '25.00' : productId === 'p2' ? '10.00' : '0.00'
  const basic = Buffer.from(`${clientId}:${secret}`).toString('base64')
  const tokenRes = await fetch('https://api-m.paypal.com/v1/oauth2/token', {
    method: 'POST',
    headers: { Authorization: `Basic ${basic}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'grant_type=client_credentials'
  })
  const tokenJson = await tokenRes.json()
  const accessToken = tokenJson.access_token
  const orderRes = await fetch('https://api-m.paypal.com/v2/checkout/orders', {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ intent: 'CAPTURE', purchase_units: [{ amount: { currency_code: 'USD', value: amount } }] })
  })
  const order = await orderRes.json()
  return NextResponse.json(order)
}
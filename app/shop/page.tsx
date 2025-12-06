import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

const products = [
  { id: 'p1', name: 'Logo Tee', type: 'physical', price: 25 },
  { id: 'p2', name: 'DJ Set Audio Pack', type: 'digital', price: 10 }
]

function PayButton({ productId, price }: { productId: string; price: number }) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  if (!clientId) return <div className="muted">Configure PayPal to enable purchase</div>
  return (
    <form method="post" action="/api/paypal/create-order">
      <input type="hidden" name="productId" value={productId} />
      <button className="btn" type="submit">Buy ${price}</button>
    </form>
  )
}

export default function ShopPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundImage: "url('/assets/brandcontent/shop-bg.jpg?v=1')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0, flex: 1, display: 'grid', placeItems: 'center' }}>
        <div className="container" style={{ display: 'grid', placeItems: 'center' }}>
          <h1 style={{ fontSize: 48, textAlign: 'center', textShadow: '0 0 10px rgba(0,0,0,.9), 0 0 18px rgba(0,0,0,.7)' }}>Shop Coming Soon!</h1>
        </div>
      </section>
      <Footer />
    </main>
  )
}

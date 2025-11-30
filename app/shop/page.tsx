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
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundImage: "url('/assets/brandcontent/shop-bg.jpg?v=1')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <section className="section">
        <div className="container">
          <h1>Shop</h1>
          <div className="grid grid-2">
            {products.map(p => (
              <div key={p.id} className="card">
                <div>{p.name}</div>
                <div className="muted">{p.type} • ${p.price}</div>
                <div style={{ marginTop: 12 }}><PayButton productId={p.id} price={p.price} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

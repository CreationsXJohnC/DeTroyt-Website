export function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <footer className="section" style={{ position: 'relative', zIndex: 1, background: 'transparent', marginTop: 'auto', padding: '12px 0' }}>
      <div className="container">
        {children}
        <div className="muted" style={{ textAlign: 'center', color: '#fff', margin: 0, lineHeight: 1.2 }}>© 2025 DeTroyt • Troy Gardner</div>
      </div>
    </footer>
  )
}

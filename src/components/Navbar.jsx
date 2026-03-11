import { useState, useEffect } from 'react'
import { useCarrito } from '../context/CarritoContext'

export default function Navbar() {
  const { cantidad, setAbierto } = useCarrito()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0d0d0b]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <span
          className="font-display text-2xl font-light tracking-[0.15em] uppercase text-white cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Hair<span style={{ color: '#c9a55a' }}>texture</span>
        </span>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-10">
          {[['Servicios', 'servicios'], ['Productos', 'productos'], ['Contacto', 'footer']].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative group py-1 text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300"
            >
              {label}
              <span
                className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: '#c9a55a' }}
              />
            </button>
          ))}
        </nav>

        {/* Cart */}
        <button
          onClick={() => setAbierto(true)}
          className="relative p-2 text-white transition-colors duration-300"
          style={{ '--hover-color': '#c9a55a' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c9a55a'}
          onMouseLeave={e => e.currentTarget.style.color = 'white'}
          aria-label="Abrir carrito"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
          </svg>
          {cantidad > 0 && (
            <span
              className="absolute -top-1 -right-1 w-4 h-4 text-[9px] rounded-full flex items-center justify-center font-bold"
              style={{ background: '#c9a55a', color: '#0d0d0b' }}
            >
              {cantidad}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}

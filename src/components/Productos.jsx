import { useState } from 'react'
import { productos } from '../data/productos'
import ProductoCard from './ProductoCard'

const GOLD = '#c9a55a'
const categorias = ['Todos', ...new Set(productos.map((p) => p.categoria))]

export default function Productos() {
  const [filtro, setFiltro] = useState('Todos')
  const filtrados = filtro === 'Todos' ? productos : productos.filter((p) => p.categoria === filtro)

  return (
    <section id="productos" className="py-28" style={{ background: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Section header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-4 gap-6"
          style={{ borderBottom: '1px solid #e5e3de' }}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: GOLD }} />
              <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
                Líneas Profesionales
              </span>
            </div>
            <h2
              className="font-display font-light text-[#0d0d0b]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Nuestros Productos
            </h2>
          </div>
          <p className="hidden md:block text-sm leading-relaxed max-w-xs text-right" style={{ color: '#8a8a88' }}>
            Selección de las mejores marcas en tratamiento, hidratación y styling capilar profesional.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 py-8">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className="text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300"
              style={
                filtro === cat
                  ? { background: '#0d0d0b', color: '#fafaf8' }
                  : { background: 'transparent', color: '#8a8a88', border: '1px solid #d5d3ce' }
              }
              onMouseEnter={e => {
                if (filtro !== cat) {
                  e.currentTarget.style.borderColor = '#0d0d0b'
                  e.currentTarget.style.color = '#0d0d0b'
                }
              }}
              onMouseLeave={e => {
                if (filtro !== cat) {
                  e.currentTarget.style.borderColor = '#d5d3ce'
                  e.currentTarget.style.color = '#8a8a88'
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtrados.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </section>
  )
}

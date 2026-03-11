import { useCarrito } from '../context/CarritoContext'

const GOLD = '#c9a55a'
const BLACK = '#0d0d0b'

export default function ProductoCard({ producto }) {
  const { agregar, setAbierto } = useCarrito()

  const handleAgregar = () => {
    agregar(producto)
    setAbierto(true)
  }

  return (
    <article
      className="group flex flex-col transition-all duration-500"
      style={{ background: '#f4f3f0', border: '1px solid transparent' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(201,165,90,0.25)'
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(13,13,11,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'transparent'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Visual area — dark gradient from data */}
      <div
        className="relative h-56 flex items-center justify-center overflow-hidden"
        style={{ background: producto.bg }}
      >
        <span className="text-5xl group-hover:scale-110 transition-transform duration-500 ease-out">
          {producto.emoji}
        </span>

        {/* Category pill — on hover */}
        <span
          className="absolute top-3 left-3 text-[9px] tracking-[0.25em] uppercase px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: GOLD, background: 'rgba(13,13,11,0.7)', backdropFilter: 'blur(4px)' }}
        >
          {producto.categoria}
        </span>

        {/* Gold top accent bar — slides in on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ background: GOLD }}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-light text-[#0d0d0b] text-xl mb-1 leading-tight">
          {producto.nombre}
        </h3>
        <p className="text-[13px] leading-relaxed mb-5 flex-1" style={{ color: '#8a8a88' }}>
          {producto.descripcion}
        </p>

        <div
          className="flex items-center justify-between mt-auto pt-4"
          style={{ borderTop: '1px solid #e5e3de' }}
        >
          <span className="font-display text-2xl font-light text-[#0d0d0b]">
            ${producto.precio.toFixed(2)}
          </span>
          <button
            onClick={handleAgregar}
            className="text-[10px] tracking-[0.25em] uppercase px-4 py-2.5 transition-colors duration-300"
            style={{ background: BLACK, color: '#fafaf8' }}
            onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = BLACK }}
            onMouseLeave={e => { e.currentTarget.style.background = BLACK; e.currentTarget.style.color = '#fafaf8' }}
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  )
}

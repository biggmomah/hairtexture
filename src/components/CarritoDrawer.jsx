import { useCarrito } from '../context/CarritoContext'

const GOLD = '#c9a55a'
const BLACK = '#0d0d0b'

export default function CarritoDrawer() {
  const { items, abierto, setAbierto, eliminar, cambiarCantidad, total } = useCarrito()

  return (
    <>
      {/* Overlay */}
      {abierto && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm"
          style={{ background: 'rgba(13,13,11,0.6)' }}
          onClick={() => setAbierto(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[22rem] z-50 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          abierto ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: '#fafaf8', boxShadow: '-8px 0 60px rgba(13,13,11,0.3)' }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-7 py-6"
          style={{ borderBottom: '1px solid #e5e3de' }}
        >
          <div>
            <h2 className="font-display font-light text-[#0d0d0b] text-2xl tracking-wide">
              Mi Carrito
            </h2>
            {items.length > 0 && (
              <p className="text-[10px] tracking-[0.2em] uppercase mt-0.5" style={{ color: '#8a8a88' }}>
                {items.length} {items.length === 1 ? 'artículo' : 'artículos'}
              </p>
            )}
          </div>
          <button
            onClick={() => setAbierto(false)}
            className="w-8 h-8 flex items-center justify-center transition-colors duration-200"
            style={{ color: '#8a8a88' }}
            onMouseEnter={e => e.currentTarget.style.color = BLACK}
            onMouseLeave={e => e.currentTarget.style.color = '#8a8a88'}
            aria-label="Cerrar carrito"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-7 py-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-5">
              <div
                className="w-16 h-16 flex items-center justify-center text-2xl"
                style={{ border: `1px solid ${GOLD}30` }}
              >
                🧴
              </div>
              <div>
                <p className="font-display font-light text-[#0d0d0b] text-xl mb-1">
                  Carrito vacío
                </p>
                <p className="text-xs" style={{ color: '#8a8a88' }}>
                  Aún no hay productos seleccionados.
                </p>
              </div>
              <button
                onClick={() => setAbierto(false)}
                className="text-[10px] tracking-[0.3em] uppercase transition-colors duration-200 pb-0.5"
                style={{ color: GOLD, borderBottom: `1px solid ${GOLD}40` }}
                onMouseEnter={e => e.currentTarget.style.color = BLACK}
                onMouseLeave={e => e.currentTarget.style.color = GOLD}
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <ul style={{ borderTop: '1px solid #e5e3de' }}>
              {items.map((item) => (
                <li
                  key={item.id}
                  className="py-5 flex gap-4"
                  style={{ borderBottom: '1px solid #e5e3de' }}
                >
                  {/* Thumbnail */}
                  <div
                    className="w-16 h-16 flex-shrink-0 flex items-center justify-center text-xl"
                    style={{ background: item.bg }}
                  >
                    {item.emoji}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-light text-[#0d0d0b] text-lg leading-tight truncate">
                      {item.nombre}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#8a8a88' }}>
                      ${item.precio.toFixed(2)} c/u
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}
                        className="w-6 h-6 flex items-center justify-center text-sm transition-colors"
                        style={{ border: '1px solid #d5d3ce', color: '#8a8a88' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = BLACK; e.currentTarget.style.color = BLACK }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#d5d3ce'; e.currentTarget.style.color = '#8a8a88' }}
                      >−</button>
                      <span className="text-sm text-[#0d0d0b] w-4 text-center tabular-nums">
                        {item.cantidad}
                      </span>
                      <button
                        onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}
                        className="w-6 h-6 flex items-center justify-center text-sm transition-colors"
                        style={{ border: '1px solid #d5d3ce', color: '#8a8a88' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = BLACK; e.currentTarget.style.color = BLACK }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#d5d3ce'; e.currentTarget.style.color = '#8a8a88' }}
                      >+</button>
                    </div>
                  </div>

                  {/* Subtotal + remove */}
                  <div className="flex flex-col items-end justify-between shrink-0">
                    <button
                      onClick={() => eliminar(item.id)}
                      className="transition-colors duration-200"
                      style={{ color: '#d5d3ce' }}
                      onMouseEnter={e => e.currentTarget.style.color = GOLD}
                      onMouseLeave={e => e.currentTarget.style.color = '#d5d3ce'}
                      aria-label="Eliminar"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <span className="font-display font-light text-[#0d0d0b] text-lg">
                      ${(item.precio * item.cantidad).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer totals */}
        {items.length > 0 && (
          <div
            className="px-7 py-6 space-y-3"
            style={{ borderTop: '1px solid #e5e3de', background: '#f0eeea' }}
          >
            <div className="flex items-center justify-between text-xs tracking-wide" style={{ color: '#8a8a88' }}>
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-xs tracking-wide">
              <span style={{ color: '#8a8a88' }}>Envío</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-emerald-600">Gratis</span>
            </div>
            <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #e5e3de' }}>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#0d0d0b]">Total</span>
              <span className="font-display font-light text-[#0d0d0b] text-2xl">
                ${total.toFixed(2)}
              </span>
            </div>
            <button
              className="w-full text-[10px] tracking-[0.3em] uppercase py-4 mt-2 transition-colors duration-300 font-medium"
              style={{ background: GOLD, color: BLACK }}
              onMouseEnter={e => e.currentTarget.style.background = '#b8922a'}
              onMouseLeave={e => e.currentTarget.style.background = GOLD}
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </>
  )
}

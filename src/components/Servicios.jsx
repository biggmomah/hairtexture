import { servicios } from '../data/servicios'

const GOLD = '#c9a55a'
const BLACK = '#0d0d0b'

export default function Servicios() {
  return (
    <section id="servicios" style={{ background: BLACK }} className="py-28">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-4 gap-6"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: GOLD }} />
              <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>Lo que ofrecemos</span>
            </div>
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Nuestros Servicios
            </h2>
          </div>
          <p className="hidden md:block text-sm leading-relaxed max-w-xs text-right" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Distribución, asesoramiento y capacitación para profesionales del cabello en todo el país.
          </p>
        </div>

        {/* Services list */}
        <div>
          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              className="group grid grid-cols-[4rem_1fr] md:grid-cols-[4rem_1fr_auto] items-start gap-6 md:gap-10 py-10 px-4 -mx-4 cursor-default transition-colors duration-300"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {/* Index number */}
              <span
                className="font-display text-4xl font-light tabular-nums leading-none pt-1 select-none transition-colors duration-500"
                style={{ color: 'rgba(201,165,90,0.12)' }}
                ref={el => {
                  if (!el) return
                  el.closest('.group') && el.closest('.group').addEventListener('mouseenter', () => {
                    el.style.color = 'rgba(201,165,90,0.3)'
                  }, { once: false })
                  el.closest('.group') && el.closest('.group').addEventListener('mouseleave', () => {
                    el.style.color = 'rgba(201,165,90,0.12)'
                  }, { once: false })
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Name + description */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lg">{servicio.emoji}</span>
                  <h3 className="font-display font-light text-white text-2xl tracking-wide">
                    {servicio.nombre}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {servicio.descripcion}
                </p>
              </div>

              {/* Duration / price / CTA */}
              <div className="col-start-2 md:col-start-auto flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2 pt-1">
                <span
                  className="text-[9px] tracking-[0.3em] uppercase px-3 py-1 whitespace-nowrap"
                  style={{ color: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {servicio.duracion}
                </span>
                {servicio.precio ? (
                  <span className="font-display font-light text-white text-3xl">
                    ${servicio.precio.toFixed(2)}
                  </span>
                ) : (
                  <span className="font-display font-light text-3xl" style={{ color: GOLD }}>
                    Consultar
                  </span>
                )}
                <button
                  className="text-[9px] tracking-[0.3em] uppercase transition-colors duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap"
                  style={{ color: GOLD }}
                  onMouseEnter={e => e.currentTarget.style.color = 'white'}
                  onMouseLeave={e => e.currentTarget.style.color = GOLD}
                >
                  Consultar →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

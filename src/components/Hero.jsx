export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0d0d0b' }}>
      {/* Subtle gold glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(201,165,90,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Ghost letter watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-[-2vw] top-1/2 -translate-y-1/2 font-display font-light leading-none"
        style={{ fontSize: '32vw', color: 'rgba(201,165,90,0.035)' }}
      >
        H
      </span>

      {/* Thin gold horizontal rule */}
      <div
        className="absolute inset-x-0 top-1/2 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201,165,90,0.12) 40%, rgba(201,165,90,0.12) 60%, transparent 100%)' }}
      />

      {/* Vertical gold accent */}
      <div
        className="absolute left-8 top-24 bottom-24 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,165,90,0.35), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-20 w-full">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10 anim-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-10 h-px" style={{ background: '#c9a55a' }} />
            <span className="text-[10px] tracking-[0.45em] uppercase" style={{ color: '#c9a55a' }}>
              Distribución Profesional · Pompeya, Buenos Aires
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-light leading-[0.88] text-white mb-12 anim-fade-up"
            style={{ fontSize: 'clamp(4rem, 11vw, 10rem)', animationDelay: '0.25s' }}
          >
            El cabello<br />
            en manos de{' '}
            <em className="not-italic" style={{ color: '#c9a55a' }}>expertos</em>
          </h1>

          {/* Body + CTAs */}
          <div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 anim-fade-up"
            style={{ animationDelay: '0.45s' }}
          >
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Especialistas en productos capilares profesionales. Distribución mayorista
              a peluquerías, institutos y profesionales del sector.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => scrollTo('productos')}
                className="px-8 py-3.5 text-[10px] tracking-[0.3em] uppercase transition-all duration-300 font-medium"
                style={{ background: '#c9a55a', color: '#0d0d0b' }}
                onMouseEnter={e => e.currentTarget.style.background = '#b8922a'}
                onMouseLeave={e => e.currentTarget.style.background = '#c9a55a'}
              >
                Ver Productos
              </button>
              <button
                onClick={() => scrollTo('servicios')}
                className="px-8 py-3.5 text-[10px] tracking-[0.3em] uppercase transition-all duration-300 text-white"
                style={{ border: '1px solid rgba(255,255,255,0.18)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a55a'; e.currentTarget.style.color = '#c9a55a' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'white' }}
              >
                Nuestros Servicios
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-10 flex flex-col items-center gap-3 anim-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-px h-14" style={{ background: 'linear-gradient(to bottom, rgba(201,165,90,0.6), transparent)' }} />
        <span
          className="text-[9px] tracking-[0.35em] uppercase"
          style={{ writingMode: 'vertical-rl', color: 'rgba(255,255,255,0.28)' }}
        >
          Scroll
        </span>
      </div>
    </section>
  )
}

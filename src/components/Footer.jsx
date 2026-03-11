const GOLD = '#c9a55a'

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer id="footer" style={{ background: '#080807', color: '#5a5a58' }}>
      {/* Top band */}
      <div
        className="px-8 py-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span className="font-display font-light text-3xl tracking-[0.15em] uppercase">
          <span className="text-white">Hair</span>
          <span style={{ color: GOLD }}>texture</span>
        </span>
        <p className="text-sm leading-relaxed max-w-sm">
          Distribuidores profesionales de productos capilares. Especialistas en hair care para el sector profesional.
        </p>
        <div className="flex gap-6">
          {['Instagram', 'Facebook', 'WhatsApp'].map((red) => (
            <a
              key={red}
              href="#"
              className="text-[10px] tracking-[0.25em] uppercase transition-colors duration-300"
              onMouseEnter={e => e.currentTarget.style.color = GOLD}
              onMouseLeave={e => e.currentTarget.style.color = '#5a5a58'}
            >
              {red}
            </a>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Navigation */}
        <div>
          <h4 className="text-[10px] tracking-[0.35em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Navegación
          </h4>
          <ul className="space-y-3">
            {[
              ['Inicio', null],
              ['Servicios', 'servicios'],
              ['Productos', 'productos'],
              ['Contacto', 'footer'],
            ].map(([label, id]) => (
              <li key={label}>
                <button
                  onClick={() => id ? scrollTo(id) : window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-sm transition-colors duration-300"
                  onMouseEnter={e => e.currentTarget.style.color = GOLD}
                  onMouseLeave={e => e.currentTarget.style.color = '#5a5a58'}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div id="contacto">
          <h4 className="text-[10px] tracking-[0.35em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Contacto
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <span className="text-[10px] tracking-widest uppercase block mb-1" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Dirección
              </span>
              Av. Saenz 1259, Pompeya — Buenos Aires
            </li>
            <li>
              <span className="text-[10px] tracking-widest uppercase block mb-1" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Teléfono
              </span>
              <a
                href="tel:+5411XXXXXXXX"
                className="transition-colors duration-300"
                onMouseEnter={e => e.currentTarget.style.color = GOLD}
                onMouseLeave={e => e.currentTarget.style.color = '#5a5a58'}
              >
                +54 11 XXXX-XXXX
              </a>
            </li>
            <li>
              <span className="text-[10px] tracking-widest uppercase block mb-1" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Email
              </span>
              <a
                href="mailto:ventas@hairtexture.com.ar"
                className="transition-colors duration-300"
                onMouseEnter={e => e.currentTarget.style.color = GOLD}
                onMouseLeave={e => e.currentTarget.style.color = '#5a5a58'}
              >
                ventas@hairtexture.com.ar
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-[10px] tracking-[0.35em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Atención
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              ['Lunes – Viernes', '8:00 – 18:00', false],
              ['Sábados', '9:00 – 13:00', false],
              ['Domingos', 'Cerrado', true],
            ].map(([dia, hora, cerrado]) => (
              <li
                key={dia}
                className="flex justify-between pb-3"
                style={{ borderBottom: cerrado ? 'none' : '1px solid rgba(255,255,255,0.05)' }}
              >
                <span>{dia}</span>
                <span style={{ color: cerrado ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.55)' }}>
                  {hora}
                </span>
              </li>
            ))}
          </ul>

          {/* Gold divider accent */}
          <div className="mt-8 w-8 h-px" style={{ background: GOLD }} />
          <p className="mt-3 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Retiro en local y despacho a todo el país.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] tracking-wide"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.18)' }}
      >
        <span>© {new Date().getFullYear()} Hairtexture. Todos los derechos reservados.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/40 transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white/40 transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  )
}

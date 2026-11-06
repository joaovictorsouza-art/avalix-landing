type IconProps = { className?: string }

const STAR_PATH = 'M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z'

export function Star({ className = 'h-5 w-5', apagada = false }: IconProps & { apagada?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} ${apagada ? 'fill-apagada' : 'fill-estrela'}`}>
      <path d={STAR_PATH} />
    </svg>
  )
}

/** Fileira de estrelas: `cheias` amarelas e o restante apagadas. */
export function Stars({ cheias = 5, total = 5, className }: { cheias?: number; total?: number; className?: string }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <Star key={i} className={className} apagada={i >= cheias} />
      ))}
    </span>
  )
}

export function Check({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

export function Chat({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.4A8.4 8.4 0 1 1 21 11.5z" />
    </svg>
  )
}

export function Instagram({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" />
    </svg>
  )
}

export function Search({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </svg>
  )
}

/** Ondas de aproximação (NFC). `animado` pulsa as ondas. */
export function Nfc({ className = 'h-24 w-24', animado = false }: IconProps & { animado?: boolean }) {
  const onda = animado ? 'motion-safe:animate-wave origin-[30%_50%]' : ''
  return (
    <svg role="img" aria-label="Símbolo de aproximação" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" className={className}>
      <path className={onda} d="M6 8.5a5 5 0 0 1 0 7" />
      <path className={onda} style={{ animationDelay: '0.4s' }} d="M9.5 6a9 9 0 0 1 0 12" />
      <path className={onda} style={{ animationDelay: '0.8s' }} d="M13 3.5a13 13 0 0 1 0 17" />
    </svg>
  )
}


/** Ícones de linha dos serviços, das etapas e dos nichos. */
const ICONES = {
  google: (
    <>
      <path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" />
    </>
  ),
  anuncios: (
    <>
      <path d="M4 10v4a1 1 0 0 0 1 1h3l9 4.5v-15L8 9H5a1 1 0 0 0-1 1z" />
      <path d="M8 15l1.5 5h2.5l-1.3-4" />
      <path d="M20 10v4" />
    </>
  ),
  site: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M6.5 6.5h.01M9.5 6.5h.01" />
    </>
  ),
  ia: (
    <>
      <path d="M11 3l1.9 5.6L18.5 10.5l-5.6 1.9L11 18l-1.9-5.6L3.5 10.5l5.6-1.9z" />
      <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
    </>
  ),
  diagnostico: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
      <path d="M8 11.5l2 2 3.5-4" />
    </>
  ),
  implantacao: (
    <>
      <path d="M4 20h16" />
      <path d="M6 20V9l6-5 6 5v11" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  gestao: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8.5 15.5l2.2 2.2 4.8-4.7" />
    </>
  ),
  reuniao: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  barbearia: (
    <>
      <circle cx="6" cy="6.5" r="2.5" />
      <circle cx="6" cy="17.5" r="2.5" />
      <path d="M8 8l12 10M8 16L20 6" />
    </>
  ),
  restaurante: (
    <>
      <path d="M7 3v7a2.5 2.5 0 0 1-5 0V3M4.5 3v18" transform="translate(2 0)" />
      <path d="M17 21v-7h-2.5V7c0-2.5 1.2-4 2.5-4z" />
    </>
  ),
  clinica: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  loja: (
    <>
      <path d="M5 8h14l1 13H4z" />
      <path d="M9 11V6.5a3 3 0 0 1 6 0V11" />
    </>
  ),
  servicos: (
    <path d="M14.5 6.5a4 4 0 0 1 5-1l-3 3 1.5 1.5 3-3a4 4 0 0 1-5.5 5L8 20a2 2 0 0 1-3-3l7.5-7.5a4 4 0 0 1 2-3z" />
  ),
}

export function Icone({ tipo, className = 'h-10 w-10' }: IconProps & { tipo: keyof typeof ICONES }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {ICONES[tipo]}
    </svg>
  )
}

type IconProps = { className?: string }

const STAR_PATH = 'M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z'

export function Star({ className = 'h-5 w-5', apagada = false }: IconProps & { apagada?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} ${apagada ? 'fill-[#C9D2DF]' : 'fill-star'}`}>
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

export function IconePasso({ tipo, className = 'h-14 w-14' }: IconProps & { tipo: 'celular' | 'avaliacao' | 'grafico' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {tipo === 'celular' && (
        <>
          <rect x="6" y="2.5" width="10" height="19" rx="2.5" />
          <path d="M18.5 9a4 4 0 0 1 0 6" />
          <path d="M20.8 7a7 7 0 0 1 0 10" />
        </>
      )}
      {tipo === 'avaliacao' && (
        <>
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M7 12l2.2 2.2L13 10.5" />
          <path d="M15.5 12H17" />
        </>
      )}
      {tipo === 'grafico' && (
        <>
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M15 7h6v6" />
        </>
      )}
    </svg>
  )
}

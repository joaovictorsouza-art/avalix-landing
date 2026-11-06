import { useId } from 'react'

/** Símbolo da Nexus (fita em N). Cópia em arquivo: public/nexus-simbolo.svg */
export function Simbolo({ className = 'h-8 w-auto' }: { className?: string }) {
  const id = useId()
  return (
    <svg aria-hidden="true" viewBox="40 60 690 365" className={className}>
      <defs>
        <linearGradient id={`${id}a`} gradientUnits="userSpaceOnUse" x1="120" y1="180" x2="620" y2="400">
          <stop offset="0" stopColor="#A888F5" />
          <stop offset=".24" stopColor="#E6DDF0" />
          <stop offset=".6" stopColor="#A888F5" />
          <stop offset="1" stopColor="#6532EF" />
        </linearGradient>
        <linearGradient id={`${id}b`} gradientUnits="userSpaceOnUse" x1="210" y1="180" x2="90" y2="410">
          <stop offset="0" stopColor="#5526DE" />
          <stop offset="1" stopColor="#8A5CF5" />
        </linearGradient>
        <linearGradient id={`${id}c`} gradientUnits="userSpaceOnUse" x1="300" y1="225" x2="190" y2="400">
          <stop offset="0" stopColor="#14082F" />
          <stop offset="1" stopColor="#5B35B8" />
        </linearGradient>
        <linearGradient id={`${id}d`} gradientUnits="userSpaceOnUse" x1="470" y1="170" x2="710" y2="110">
          <stop offset="0" stopColor="#14082F" />
          <stop offset=".55" stopColor="#351886" />
          <stop offset="1" stopColor="#7A50E8" />
        </linearGradient>
        <linearGradient id={`${id}e`} gradientUnits="userSpaceOnUse" x1="710" y1="190" x2="600" y2="400">
          <stop offset="0" stopColor="#8A5CF5" />
          <stop offset="1" stopColor="#6532EF" />
        </linearGradient>
      </defs>
      <path fill={`url(#${id}d)`} d="M448 158 545 90Q592 62 642 73 702 88 715 150 717 172 705 195L590 292 448 176Z" />
      <path fill={`url(#${id}c)`} d="M262 205 172 405Q195 400 215 385L350 275 300 230Z" />
      <path fill={`url(#${id}b)`} d="M128 185Q175 155 252 190L172 405Q150 418 120 415 75 410 52 365Z" />
      <path fill={`url(#${id}e)`} d="M590 292 712 178 642 350Q615 405 560 412Z" />
      <path fill={`url(#${id}a)`} d="M128 185Q175 155 240 180 270 192 300 218L490 372Q530 410 565 412 610 410 640 355L590 292 355 105Q310 70 255 70 160 72 128 185Z" />
    </svg>
  )
}

/** Logo completo: a cor do nome vem do texto ao redor. */
export default function Logo({ tamanho = 'md' }: { tamanho?: 'sm' | 'md' }) {
  const simbolo = tamanho === 'md' ? 'h-8 w-auto' : 'h-[22px] w-auto'
  const texto = tamanho === 'md' ? 'text-[28px]' : 'text-lg'

  return (
    <span className="flex items-center gap-2.5">
      <Simbolo className={simbolo} />
      <span className={`font-display font-bold leading-none tracking-[-0.03em] ${texto}`}>nexus</span>
    </span>
  )
}

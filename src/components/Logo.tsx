import { Check } from './Icons'

type Props = {
  tamanho?: 'sm' | 'md'
  /** "claro" = quadrado azul com check branco (fundo escuro); "escuro" = quadrado navy com check azul (fundo claro) */
  variante?: 'claro' | 'escuro'
}

export default function Logo({ tamanho = 'md', variante = 'claro' }: Props) {
  const box = tamanho === 'md' ? 'h-9 w-9 rounded-[9px]' : 'h-[26px] w-[26px] rounded-[7px]'
  const icon = tamanho === 'md' ? 'h-5 w-5' : 'h-3.5 w-3.5'
  const texto = tamanho === 'md' ? 'text-[22px]' : 'text-base'
  const cores = variante === 'claro' ? 'bg-accent text-white' : 'bg-navy text-accent'

  return (
    <span className="flex items-center gap-2.5">
      <span className={`flex items-center justify-center ${box} ${cores}`}>
        <Check className={icon} />
      </span>
      <span className={`font-display font-extrabold tracking-[-0.03em] ${texto}`}>Avalix</span>
    </span>
  )
}

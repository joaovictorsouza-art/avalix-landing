type Props = {
  rotulo: string
  titulo: string
  /** "claro" = fundo claro; "escuro" = fundo preto ou roxo */
  fundo?: 'claro' | 'escuro'
  tamanho?: 'lg' | 'xl'
}

/** Abertura das seções: destaque espaçado, título e sublinhado do design system. */
export default function Cabecalho({ rotulo, titulo, fundo = 'claro', tamanho = 'lg' }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <p className={`destaque ${fundo === 'claro' ? 'text-roxo' : 'text-lavanda'}`}>{rotulo}</p>
      <h2 className={`${tamanho === 'xl' ? 'titulo-xl' : 'titulo-lg'} max-w-[20ch]`}>{titulo}</h2>
      <div className="sublinhado" />
    </div>
  )
}

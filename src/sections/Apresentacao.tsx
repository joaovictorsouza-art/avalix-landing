import { apresentacao } from '../content'

/** O símbolo se desfaz em peças soltas: é o problema que a Nexus resolve. */
export default function Apresentacao() {
  return (
    <section data-estacao="espalhado" data-alfa="0.42" data-campo-visivel className="relative flex min-h-[100svh] items-center px-4 py-24 text-white sm:px-6">
      <div className="container-site">
        <div className="flex max-w-[860px] flex-col gap-7">
          <p className="destaque rv text-lavanda">{apresentacao.rotulo}</p>
          <h2 className="titulo-xl rv">{apresentacao.titulo}</h2>
          <div className="sublinhado rv" />
          <p className="rv max-w-[56ch] text-[18px] leading-[1.6] text-lavanda md:text-[21px]">{apresentacao.texto}</p>
          <ul aria-label="Para quem é" className="rv flex list-none flex-wrap gap-2 p-0">
            {apresentacao.paraQuem.map((nicho) => (
              <li key={nicho} className="rounded-full border border-lavanda/25 bg-preto/60 px-4 py-2 text-[15px] font-medium">
                {nicho}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

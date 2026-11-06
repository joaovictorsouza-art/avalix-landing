import { duvidas } from '../content'
import Cabecalho from '../components/Cabecalho'

export default function Duvidas() {
  return (
    <section id="duvidas" className="scroll-mt-4 bg-white px-4 py-20 sm:px-6 lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Cabecalho rotulo={duvidas.rotulo} titulo={duvidas.titulo} />

        <div className="flex flex-col gap-2.5">
          {duvidas.itens.map((item) => (
            <details key={item.pergunta} className="group rounded-[18px] bg-nevoa px-6">
              <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                {item.pergunta}
                <span aria-hidden="true" className="shrink-0 text-2xl font-medium leading-none text-roxo group-open:hidden">
                  +
                </span>
                <span aria-hidden="true" className="hidden shrink-0 text-2xl font-medium leading-none text-roxo group-open:inline">
                  −
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-tinta-suave">{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

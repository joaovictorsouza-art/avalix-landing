import { duvidas } from '../content'

export default function Duvidas() {
  return (
    <section id="duvidas" className="relative scroll-mt-16 bg-nevoa px-4 py-20 sm:px-6 lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col gap-5">
          <p className="destaque rv text-roxo">{duvidas.rotulo}</p>
          <h2 className="titulo-lg rv max-w-[16ch]">{duvidas.titulo}</h2>
          <div className="sublinhado rv" />
        </div>

        <div className="rv flex flex-col gap-2.5">
          {duvidas.itens.map((item) => (
            <details key={item.pergunta} className="group rounded-[18px] bg-white px-6">
              <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                {item.pergunta}
                <span aria-hidden="true" className="shrink-0 text-2xl font-medium leading-none text-roxo transition-transform duration-200 group-open:rotate-45">
                  +
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

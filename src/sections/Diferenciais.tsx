import { diferenciais as d } from '../content'
import { Check } from '../components/Icons'

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="relative scroll-mt-16 bg-nevoa px-4 py-20 sm:px-6 lg:py-32">
      <div className="container-site flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <p className="destaque rv text-roxo">{d.rotulo}</p>
          <h2 className="titulo-lg rv max-w-[20ch]">{d.titulo}</h2>
          <div className="sublinhado rv" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ul className="flex list-none flex-col gap-6 p-0">
            {d.itens.map((item) => (
              <li key={item.titulo} className="rv flex gap-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-roxo" />
                <div>
                  <h3 className="font-display text-xl font-semibold">{item.titulo}</h3>
                  <p className="mt-1 leading-relaxed text-tinta-suave">{item.texto}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="rv grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-card bg-white p-6">
              <h3 className="font-display text-lg font-semibold">{d.separado.titulo}</h3>
              <ul className="flex flex-1 list-none flex-col gap-2 p-0 text-tinta-suave">
                {d.separado.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-[15px] leading-normal text-tinta-suave">{d.separado.resumo}</p>
            </div>
            <div className="flex flex-col gap-4 rounded-card bg-preto p-6 text-white shadow-brilho">
              <h3 className="font-display text-lg font-semibold">{d.nexus.titulo}</h3>
              <ul className="flex flex-1 list-none flex-col gap-2 p-0 font-medium">
                {d.nexus.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-[15px] leading-normal text-lavanda">{d.nexus.resumo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

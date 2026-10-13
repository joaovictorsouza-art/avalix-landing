import { problema } from '../content'
import { Search, Stars } from '../components/Icons'

export default function Problema() {
  const { concorrente, voce } = problema

  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:py-40">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-7">
          <h2 className="titulo-lg">{problema.titulo}</h2>
          <p className="max-w-[46ch] text-[19px] leading-relaxed md:text-xl">{problema.texto}</p>
        </div>

        {/* Exemplo ilustrativo de resultado de busca */}
        <div className="flex flex-col gap-3.5 rounded-[28px] bg-mist p-5 sm:p-7">
          <div className="flex min-h-[52px] items-center gap-3 rounded-full bg-white px-5 text-[17px] text-ink-soft">
            <Search />
            {problema.busca}
          </div>

          <div className="flex flex-col gap-2 rounded-[18px] bg-white px-6 py-5">
            <div className="flex flex-wrap justify-between gap-3">
              <span className="text-[19px] font-bold">{concorrente.nome}</span>
              <span className="text-[15px] font-bold text-accent-dark">{concorrente.selo}</span>
            </div>
            <div className="flex items-center gap-2 text-base text-ink-soft">
              <span className="font-bold text-navy">{concorrente.nota}</span>
              <Stars cheias={concorrente.estrelas} className="h-4 w-4" />
              <span>({concorrente.total})</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-[18px] bg-white px-6 py-5 opacity-75">
            <span className="text-[19px] font-bold">{voce.nome}</span>
            <div className="flex items-center gap-2 text-base text-ink-soft">
              <span className="font-bold text-navy">{voce.nota}</span>
              <Stars cheias={voce.estrelas} className="h-4 w-4" />
              <span>({voce.total})</span>
            </div>
          </div>

          <p className="px-1 text-sm text-ink-soft">{problema.legenda}</p>
        </div>
      </div>
    </section>
  )
}

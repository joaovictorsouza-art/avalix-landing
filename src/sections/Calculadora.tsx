import { useState } from 'react'
import { calculadora as c } from '../content'

/** "Faça a conta": estimativa de avaliações por mês a partir do movimento da loja. */
export default function Calculadora() {
  const [clientes, setClientes] = useState(c.clientesPadrao)
  const [taxa, setTaxa] = useState(c.taxaPadrao)

  const porMes = Math.round((clientes * c.diasAbertosNoMes) / taxa)
  const seisMeses = porMes * 6

  return (
    <section id="conta" className="scroll-mt-4 bg-mist px-4 py-24 sm:px-6 lg:py-40">
      <div className="container-site grid items-stretch gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-9">
          <h2 className="titulo-lg">{c.titulo}</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="clientes" className="text-[19px] font-semibold">
              {c.rotuloClientes} <span className="font-display font-extrabold">{clientes}</span>
            </label>
            <input
              id="clientes"
              type="range"
              min={c.clientesMin}
              max={c.clientesMax}
              step={c.clientesPasso}
              value={clientes}
              onChange={(e) => setClientes(Number(e.target.value))}
              className="h-11 w-full cursor-pointer accent-accent-strong"
            />
          </div>

          <div className="flex flex-col gap-3">
            <p id="taxa-label" className="text-[19px] font-semibold">
              {c.rotuloTaxa}
            </p>
            <div role="group" aria-labelledby="taxa-label" className="flex flex-wrap gap-2.5">
              {c.taxas.map((t) => {
                const ativo = t === taxa
                return (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={ativo}
                    onClick={() => setTaxa(t)}
                    className={`btn min-h-12 px-5 text-base ${ativo ? 'bg-navy text-white' : 'bg-white font-semibold text-navy'}`}
                  >
                    1 em cada {t}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div aria-live="polite" className="flex flex-col justify-between gap-8 rounded-[28px] bg-navy px-8 py-10 text-white sm:px-10 sm:py-12">
          <div className="flex flex-col gap-1.5">
            <span className="font-display text-[80px] font-extrabold leading-[0.9] tracking-[-0.05em] lg:text-[140px]">{porMes}</span>
            <span className="text-[22px] font-semibold">{c.resultado}</span>
          </div>
          <p className="text-[20px] leading-[1.4] text-ink-muted md:text-[22px]">
            Em 6 meses, são <strong className="font-bold text-white">{seisMeses} avaliações</strong> a mais no seu Google.
          </p>
          <p className="text-[15px] leading-normal text-ink-faint">
            Estimativa: {clientes} clientes por dia, {c.diasAbertosNoMes} dias abertos no mês, 1 em cada {taxa} avaliando.
          </p>
        </div>
      </div>
    </section>
  )
}

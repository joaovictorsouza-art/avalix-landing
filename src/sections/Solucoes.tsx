import { linkWhatsApp, solucoes, type Solucao } from '../content'
import { Check, Icone } from '../components/Icons'

function Painel({ solucao, i }: { solucao: Solucao; i: number }) {
  return (
    <article data-estacao={solucao.forma} data-campo-visivel className={`painel ${i % 2 ? 'painel-inverso' : ''}`}>
      <div className="painel-grade container-site">
        <div data-ancora className="painel-ancora">
          <Icone tipo={solucao.icone} className="so-sem-campo h-32 w-32 text-lilas" />
        </div>

        <div className="painel-texto rv">
          <p className="destaque text-lilas">
            <span aria-hidden="true">0{i + 1} · </span>
            {solucao.rotulo}
          </p>
          <h3 className="font-display text-[28px] font-bold leading-[1.12] tracking-[-0.025em] md:text-[40px]">{solucao.titulo}</h3>
          <p className="leading-relaxed text-lavanda">{solucao.texto}</p>
          <ul className="flex list-none flex-col gap-2.5 p-0">
            {solucao.itens.map((item) => (
              <li key={item} className="flex gap-3 leading-snug">
                <Check className="mt-1 h-4 w-4 shrink-0 text-lilas" />
                {item}
              </li>
            ))}
          </ul>
          {solucao.nota && <p className="border-l-2 border-lilas pl-4 text-[15px] font-medium leading-normal">{solucao.nota}</p>}
          <a href={linkWhatsApp(solucao.mensagemWhatsApp)} target="_blank" rel="noopener noreferrer" className="btn-contorno min-h-12 w-fit !px-4 text-white sm:!px-6">
            {solucao.botao} <span aria-hidden="true">›</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Solucoes() {
  return (
    <section id="solucoes" aria-label={solucoes.rotulo} className="scroll-mt-16 text-white">
      {solucoes.itens.map((s, i) => (
        <Painel key={s.forma} solucao={s} i={i} />
      ))}
    </section>
  )
}

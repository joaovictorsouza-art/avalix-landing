import { linkWhatsApp, precos } from '../content'
import { Chat } from '../components/Icons'

export default function Precos() {
  return (
    <section id="precos" className="relative scroll-mt-16 bg-preto px-4 py-20 text-white sm:px-6 lg:py-32">
      <div className="container-site flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <p className="destaque rv text-lavanda">{precos.rotulo}</p>
          <h2 className="titulo-lg rv max-w-[20ch]">{precos.titulo}</h2>
          <div className="sublinhado rv" />
        </div>

        <div className="grupos-precos">
          {precos.grupos.map((grupo) => (
            <div key={grupo.nome} className="grupo-precos rv">
              <h3 className="destaque text-lilas">{grupo.nome}</h3>
              <ul className="lista-precos">
                {grupo.itens.map((item) => (
                  <li key={item.nome} className="linha-preco">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold leading-snug">{item.nome}</h4>
                      <p className="mt-1 max-w-[62ch] text-[15px] leading-snug text-tinta-fraca">{item.descricao}</p>
                    </div>
                    <p className="preco-valor">
                      {item.antes && <small>{item.antes} </small>}
                      <span>{item.preco}</span>
                      {item.depois && <small> {item.depois}</small>}
                    </p>
                    <a
                      href={linkWhatsApp(item.mensagemWhatsApp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${precos.botao}: ${item.nome}`}
                      className="link-preco"
                    >
                      {precos.botao} <span aria-hidden="true">›</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rv flex flex-wrap items-center justify-between gap-x-10 gap-y-6 rounded-card border border-lilas/40 bg-roxo-escuro/50 p-7 sm:p-10">
          <div className="flex flex-[1_1_380px] flex-col gap-3">
            <h3 className="font-display text-[26px] font-bold tracking-[-0.02em] md:text-[32px]">{precos.proposta.titulo}</h3>
            <p className="max-w-[52ch] leading-relaxed text-lavanda">{precos.proposta.texto}</p>
          </div>
          <a
            href={linkWhatsApp(precos.proposta.mensagemWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn min-h-[58px] w-full bg-white px-6 text-preto sm:w-auto sm:text-lg"
          >
            <Chat />
            {precos.proposta.botao}
          </a>
        </div>
      </div>
    </section>
  )
}

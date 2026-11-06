import { linkWhatsApp, pacotes, reais } from '../content'
import { Check } from '../components/Icons'
import Cabecalho from '../components/Cabecalho'

type Pacote = (typeof pacotes.itens)[number]

function CardPacote({ pacote }: { pacote: Pacote }) {
  const destaque = 'destaque' in pacote && pacote.destaque
  const { mensalidade, implantacao } = pacote.precos

  return (
    <li
      className={`flex flex-col gap-6 rounded-card p-7 ${
        destaque ? 'border border-lilas bg-preto text-white shadow-brilho xl:-my-4 xl:py-11' : 'bg-white'
      }`}
    >
      <div className="flex flex-col gap-3">
        {destaque && <p className="etiqueta">{pacotes.seloDestaque}</p>}
        <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{pacote.nome}</h3>
        <p className="font-display text-[44px] font-bold leading-none tracking-[-0.04em]">
          {reais(mensalidade)}
          <span className={`text-base font-medium tracking-normal ${destaque ? 'text-lavanda' : 'text-tinta-suave'}`}>/mês</span>
        </p>
        <p className={`text-[15px] font-medium ${destaque ? 'text-lavanda' : 'text-tinta-suave'}`}>
          Implantação: {implantacao === 0 ? <strong className={destaque ? 'text-white' : 'text-roxo'}>GRÁTIS</strong> : reais(implantacao)}
        </p>
      </div>

      <ul className="flex flex-1 list-none flex-col gap-3 p-0 text-[15px] leading-snug">
        {pacote.itens.map((item) => (
          <li key={item.texto} className={`flex gap-2.5 ${item.inclui ? '' : destaque ? 'text-tinta-fraca' : 'text-tinta-suave'}`}>
            {item.inclui ? (
              <Check className={`mt-0.5 h-4 w-4 shrink-0 ${destaque ? 'text-lilas' : 'text-roxo'}`} />
            ) : (
              <span aria-hidden="true" className="w-4 shrink-0 text-center">
                —
              </span>
            )}
            <span>
              {item.texto}
              {!item.inclui && <span className="sr-only"> (não incluso)</span>}
            </span>
          </li>
        ))}
      </ul>

      {'argumento' in pacote && pacote.argumento && (
        <p className="border-l-2 border-lilas pl-4 text-[15px] font-medium leading-normal">{pacote.argumento}</p>
      )}

      <a
        href={linkWhatsApp(pacote.mensagemWhatsApp)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn min-h-14 px-2 text-[15px] ${destaque ? 'bg-roxo text-white' : 'bg-preto text-white'}`}
      >
        Quero o {pacote.nome}
      </a>
    </li>
  )
}

export default function Precos() {
  return (
    <section id="pacotes" className="scroll-mt-4 bg-nevoa px-4 py-20 sm:px-6 lg:py-32">
      <div className="container-site flex flex-col gap-14">
        <Cabecalho rotulo={pacotes.rotulo} titulo={pacotes.titulo} />

        <ul className="grid list-none items-stretch gap-4 p-0 md:grid-cols-2 xl:grid-cols-4">
          {pacotes.itens.map((pacote) => (
            <CardPacote key={pacote.nome} pacote={pacote} />
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[60ch] text-[15px] leading-relaxed text-tinta-suave">{pacotes.aviso}</p>
          <a
            href={linkWhatsApp(pacotes.monteOSeu.mensagemWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contorno min-h-14 w-full border-roxo text-roxo sm:w-auto"
          >
            {pacotes.monteOSeu.botao} ›
          </a>
        </div>
      </div>
    </section>
  )
}

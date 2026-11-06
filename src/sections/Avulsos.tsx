import { avulsos, linkWhatsApp, type ItemAvulso } from '../content'
import { Chat } from '../components/Icons'
import Cabecalho from '../components/Cabecalho'

function LinhaAvulso({ item }: { item: ItemAvulso }) {
  const destaque = item.comecePorAqui
  const precoEhValor = item.preco.startsWith('R$')

  return (
    <li
      className={`flex flex-wrap items-center gap-x-8 gap-y-4 rounded-card px-6 py-6 sm:px-8 ${
        destaque ? 'border border-lilas bg-preto text-white' : 'bg-nevoa'
      }`}
    >
      <div className="flex flex-[1_1_300px] flex-col gap-1.5">
        {destaque && <p className="etiqueta mb-1">{avulsos.seloComece}</p>}
        <h3 className="font-display text-xl font-semibold tracking-[-0.01em]">{item.nome}</h3>
        <p className={`text-base leading-normal ${destaque ? 'text-lavanda' : 'text-tinta-suave'}`}>{item.descricao}</p>
      </div>
      <p className={`font-display font-bold tracking-[-0.03em] ${precoEhValor ? 'text-[28px]' : 'text-xl'}`}>{item.preco}</p>
      <a
        href={linkWhatsApp(item.mensagemWhatsApp)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${avulsos.botao}: ${item.nome}`}
        className={`btn min-h-12 w-full px-6 text-[15px] sm:w-auto ${destaque ? 'bg-roxo text-white' : 'bg-preto text-white'}`}
      >
        {avulsos.botao}
      </a>
    </li>
  )
}

export default function Avulsos() {
  return (
    <section id="precos" className="scroll-mt-4 bg-white px-4 py-20 sm:px-6 lg:py-32">
      <div className="container-site flex flex-col gap-14">
        <Cabecalho rotulo={avulsos.rotulo} titulo={avulsos.titulo} />
        <ul className="flex list-none flex-col gap-2.5 p-0">
          {avulsos.itens.map((item) => (
            <LinhaAvulso key={item.nome} item={item} />
          ))}
        </ul>

        <p className="text-[15px] leading-relaxed text-tinta-suave">{avulsos.aviso}</p>

        {/* Pacotes não têm preço no site: são montados para cada empresa pelo WhatsApp */}
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-7 rounded-card bg-roxo-escuro p-8 text-white shadow-brilho sm:p-12">
          <div className="flex flex-[1_1_420px] flex-col gap-4">
            <h3 className="font-display text-[28px] font-bold leading-[1.15] tracking-[-0.025em] md:text-[36px]">{avulsos.proposta.titulo}</h3>
            <p className="max-w-[58ch] leading-relaxed text-lavanda">{avulsos.proposta.texto}</p>
          </div>
          <a
            href={linkWhatsApp(avulsos.proposta.mensagemWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn min-h-[60px] w-full bg-white px-4 text-preto sm:w-auto sm:px-[30px] sm:text-lg"
          >
            <Chat />
            {avulsos.proposta.botao}
          </a>
        </div>
      </div>
    </section>
  )
}

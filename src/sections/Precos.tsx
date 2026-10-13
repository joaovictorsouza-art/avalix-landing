import { linkWhatsApp, precos, type ItemPreco } from '../content'

function LinhaPreco({ item }: { item: ItemPreco }) {
  const destaque = item.destaque
  const precoEhValor = item.preco.startsWith('R$')

  return (
    <div
      className={`flex flex-wrap items-center gap-x-10 gap-y-5 rounded-[28px] ${
        destaque ? 'bg-navy p-7 text-white sm:p-10' : 'bg-mist px-7 py-7 sm:px-10 sm:py-8'
      }`}
    >
      <div className="flex flex-[1_1_300px] flex-col gap-1.5">
        <h3 className={`font-display font-bold tracking-[-0.02em] ${destaque ? 'text-[26px] sm:text-[30px]' : 'text-[22px] sm:text-2xl'}`}>
          {item.nome}
        </h3>
        <p className={`text-[17px] leading-normal ${destaque ? 'text-ink-muted sm:text-lg' : ''}`}>{item.descricao}</p>
      </div>
      <p
        className={`font-display tracking-[-0.04em] ${
          precoEhValor
            ? destaque
              ? 'text-[52px] font-extrabold leading-none sm:text-[64px]'
              : 'text-[40px] font-extrabold sm:text-[44px]'
            : 'text-[22px] font-bold tracking-[-0.02em]'
        }`}
      >
        {item.preco}
      </p>
      <a
        href={linkWhatsApp(item.mensagemWhatsApp)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn w-full px-6 sm:w-auto ${destaque ? 'min-h-14 bg-accent-strong text-white' : 'min-h-[52px] bg-navy text-white'}`}
      >
        {item.botao}
      </a>
    </div>
  )
}

export default function Precos() {
  const logo = precos.cartaoComLogo
  const [principal, ...demais] = precos.itens

  return (
    <section id="precos" className="scroll-mt-4 bg-white px-4 py-24 sm:px-6 lg:py-40">
      <div className="container-site flex flex-col gap-14">
        <h2 className="titulo-lg">{precos.titulo}</h2>

        <div className="flex flex-col gap-2.5">
          <LinhaPreco item={principal} />

          {/*
            ============================================================
            CARD RESERVADO — "Cartão NFC com logotipo"
            Conteúdo em src/content.ts → precos.cartaoComLogo
            - disponivel: false → mostra "Em breve" no lugar do preço
            - disponivel: true  → mostra o preço preenchido em `preco`
            - mostrar: false    → esconde o card
            ============================================================
          */}
          {logo.mostrar && (
            <div className="flex flex-wrap items-center gap-x-10 gap-y-5 rounded-[28px] bg-mist px-7 py-7 sm:px-10 sm:py-8">
              <div className="flex flex-[1_1_300px] flex-col gap-1.5">
                <h3 className="font-display text-[22px] font-bold tracking-[-0.02em] sm:text-2xl">{logo.nome}</h3>
                <p className="text-[17px] leading-normal">{logo.descricao}</p>
              </div>
              {logo.disponivel && logo.preco ? (
                <p className="font-display text-[40px] font-extrabold tracking-[-0.04em] sm:text-[44px]">{logo.preco}</p>
              ) : (
                <p className="font-display text-[22px] font-bold tracking-[-0.02em] text-ink-soft">{logo.textoEmBreve}</p>
              )}
              <a
                href={linkWhatsApp(logo.mensagemWhatsApp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn min-h-[52px] w-full bg-navy px-6 text-white sm:w-auto"
              >
                {logo.botao}
              </a>
            </div>
          )}
          {/* ===================== fim do card reservado ===================== */}

          {demais.map((item) => (
            <LinhaPreco key={item.nome} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

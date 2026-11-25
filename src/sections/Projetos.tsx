import { Fragment } from 'react'
import { projetos as p } from '../content'

export default function Projetos() {
  return (
    <section id="projetos" className="relative scroll-mt-16 bg-white px-4 py-20 sm:px-6 lg:py-32">
      <div className="container-site flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <p className="destaque rv text-roxo">{p.rotulo}</p>
          <h2 className="titulo-lg rv max-w-[20ch]">{p.titulo}</h2>
          <div className="sublinhado rv" />
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rv flex flex-col justify-between gap-6 rounded-card bg-preto p-8 text-white sm:p-10">
            <p className="font-display text-[80px] font-bold leading-[0.9] tracking-[-0.05em] text-lilas lg:text-[120px]">{p.destaque.numero}</p>
            <div className="flex flex-col gap-3">
              <p className="font-display text-2xl font-semibold leading-snug">{p.destaque.texto}</p>
              <p className="leading-relaxed text-lavanda">{p.destaque.detalhe}</p>
            </div>
          </div>
          {p.casos.map((caso) => (
            <div key={caso.nome} className="rv flex flex-col overflow-hidden rounded-card bg-nevoa">
              <a href={caso.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
                <img src={caso.imagem.src} alt={caso.imagem.alt} loading="lazy" decoding="async" width={1200} height={675} className="block aspect-[16/9] w-full object-cover object-top" />
              </a>
              <div className="flex flex-1 flex-col gap-3 p-8 sm:p-10">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{caso.nome}</h3>
                <p className="leading-relaxed text-tinta-suave">{caso.texto}</p>
                <a href={caso.href} target="_blank" rel="noopener noreferrer" className="btn mt-2 min-h-12 w-fit bg-preto px-6 text-[15px] text-white">
                  {caso.botao} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="rv max-w-[40ch] font-display text-[22px] font-semibold leading-[1.3] tracking-[-0.02em] md:text-[30px]">
          {p.introducaoClientes}{' '}
          {p.clientes.map((nome, i) => (
            <Fragment key={nome}>
              <strong className="font-bold">{nome}</strong>
              {i < p.clientes.length - 1 ? ', ' : ' '}
            </Fragment>
          ))}
          {p.fechamento}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {p.fotos.map((foto) => (
            <figure key={foto.src} className="rv m-0 flex flex-col gap-3.5">
              <img src={foto.src} alt={foto.alt} loading="lazy" decoding="async" width={900} height={1200} className="block aspect-[4/5] w-full rounded-card object-cover object-[center_40%]" />
              <figcaption className="font-semibold">{foto.legenda}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

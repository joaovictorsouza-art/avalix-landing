import { Fragment } from 'react'
import { clientes } from '../content'

export default function Clientes() {
  const { nomes } = clientes

  return (
    <section id="clientes" className="bg-mist px-4 py-24 sm:px-6 lg:py-40">
      <div className="container-site flex flex-col gap-14">
        <h2 className="max-w-[40ch] font-display text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] md:text-[30px] xl:text-[36px]">
          {clientes.introducao}{' '}
          {nomes.map((nome, i) => (
            <Fragment key={nome}>
              <strong className="font-extrabold">{nome}</strong>
              {i < nomes.length - 1 ? ', ' : ' '}
            </Fragment>
          ))}
          {clientes.fechamento}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {clientes.fotos.map((foto) => (
            <figure key={foto.src} className="m-0 flex flex-col gap-3.5">
              <img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                width={1200}
                height={1600}
                className="block aspect-[4/5] w-full rounded-[28px] object-cover object-[center_40%]"
              />
              <figcaption className="text-lg font-semibold">{foto.legenda}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

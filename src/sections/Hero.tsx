import { Fragment } from 'react'
import { hero, linkWhatsApp } from '../content'
import { Simbolo } from '../components/Logo'
import { Chat } from '../components/Icons'

export default function Hero() {
  return (
    <section id="topo" data-estacao="n" data-campo-visivel className="hero">
      <div className="hero-grade container-site">
        {/* Área que o símbolo ocupa: no celular fica acima do texto, nunca por cima */}
        <div data-ancora className="hero-ancora">
          <Simbolo className="so-sem-campo w-[78%] max-w-[420px]" />
        </div>

        <div className="hero-texto">
          <p className="etiqueta entra" style={{ animationDelay: '500ms' }}>
            {hero.etiqueta}
          </p>
          <h1 className="titulo-hero">
            {hero.titulo.map((palavra, i) => (
              <Fragment key={palavra}>
                <span className="palavra">
                  <span className={palavra === 'patamar' ? 'palavra-in palavra-luz' : 'palavra-in'} style={{ animationDelay: `${640 + i * 70}ms` }}>
                    {palavra}
                  </span>
                </span>{' '}
              </Fragment>
            ))}
          </h1>
          <p className="hero-sub entra" style={{ animationDelay: '1250ms' }}>
            {hero.subtitulo}
          </p>
          <div className="hero-botoes entra" style={{ animationDelay: '1420ms' }}>
            <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="btn btn-luz min-h-[58px] bg-roxo px-7 text-white sm:text-lg">
              <Chat />
              {hero.botao}
            </a>
            <a href="#solucoes" className="btn-contorno min-h-[58px] text-white">
              {hero.linkSecundario} <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>

        <ul className="hero-pilares entra" style={{ animationDelay: '1650ms' }}>
          {hero.pilares.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

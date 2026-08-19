import { useEffect, useState } from 'react'

const whatsappUrl = 'https://wa.me/5511982688187?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20J.Menezess%20Conceito%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos.'
const bookingUrl = 'https://www.trinks.com/ju-meneses-conceito'
const mapsUrl = 'https://www.google.com/maps/place/J.Menezess+Conceito/@-23.5913389,-46.6264147,18z/data=!4m6!3m5!1s0x94ce5b3278217d4b:0xc25f998b2fc140c7!8m2!3d-23.5913143!4d-46.6261733!16s%2Fg%2F11nmcpzthk?entry=ttu'
const reviewsUrl = mapsUrl

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
)

const PinIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
    <path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
)

const ClockIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7v5l3.5 2" />
  </svg>
)

const PhoneIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
    <path d="M8.2 4.8 6 6.3c.7 5.5 6.2 11 11.7 11.7l1.5-2.2-3.4-2-1.6 1.5c-2.4-.9-4.6-3.1-5.5-5.5l1.5-1.6-2-3.4Z" />
  </svg>
)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    )
    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="J.Menezess Conceito — início">
          <span className="brand-mark">JM</span>
          <span className="brand-name">J.Menezess <i>Conceito</i></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          <a href="#sobre" onClick={closeMenu}>O salão</a>
          <a href="#avaliacoes" onClick={closeMenu}>Avaliações</a>
          <a href="#visita" onClick={closeMenu}>Como chegar</a>
          <a className="nav-cta" href={bookingUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Agendar on-line
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">J.Menezess Conceito · Chácara Klabin</p>
            <h1>Seu cabelo.<br /><em>Sua essência.</em></h1>
            <p className="hero-lead">
              Cuidado especializado para cabelos naturais, cacheados e crespos — com escuta, técnica e respeito à sua identidade.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">
                Agendar on-line <ArrowIcon />
              </a>
              <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowIcon /></a>
            </div>
            <p className="hero-note">4,9 no Google · 68 avaliações</p>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-image-wrap">
              <img src="/images/hero-salon.jpg" alt="Imagem ilustrativa de atendimento em salão de beleza" />
            </div>
            <div className="hours-card">
              <span className="icon-circle"><ClockIcon /></span>
              <span><small>Atendimento</small><strong>Terça a sábado</strong></span>
            </div>
            <p className="vertical-label">Beleza real, cuidado único</p>
          </div>

          <a className="hero-location" href={mapsUrl} target="_blank" rel="noreferrer">
            <PinIcon />
            <span>R. Ibaragui Nissui, 197<br /><small>Chácara Klabin · São Paulo</small></span>
          </a>
        </section>

        <section className="intro" id="sobre">
          <div className="intro-heading" data-reveal>
            <p className="eyebrow">Um espaço de transformação e acolhimento</p>
            <h2>Cada cabelo tem<br /><em>uma história.</em></h2>
          </div>
          <div className="intro-copy" data-reveal>
            <p>
              No J.Menezess Conceito, cada atendimento valoriza sua beleza real com cuidado técnico, carinho e respeito por quem você é.
            </p>
            <a className="text-link text-link-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
              Fale com a equipe <ArrowIcon />
            </a>
          </div>

          <div className="experience-grid">
            <article className="experience-card" data-reveal>
              <span>01</span>
              <h3>Cuidado que respeita você</h3>
              <p>Tratamentos personalizados com escuta e atenção à identidade de cada cabelo.</p>
            </article>
            <article className="experience-card card-image" data-reveal>
              <img src="/images/care.jpg" alt="Imagem ilustrativa de profissional cuidando do cabelo de uma cliente" />
            </article>
            <article className="experience-card" data-reveal>
              <span>02</span>
              <h3>Agende do seu jeito</h3>
              <p>Consulte os serviços e horários disponíveis diretamente na agenda on-line.</p>
            </article>
          </div>
        </section>

        <section className="salon-story">
          <div className="story-image story-image-wide" data-reveal>
            <img src="/images/styling.jpg" alt="Imagem ilustrativa de finalização de cabelo em salão" />
          </div>
          <div className="story-copy" data-reveal>
            <span className="story-number">197</span>
            <p className="eyebrow">Na Chácara Klabin</p>
            <h2>Um salão para você se sentir <em>acolhida.</em></h2>
            <p>
              Um ambiente aconchegante, inclusivo e preparado para transformar o cuidado com a sua beleza em um momento de autoestima.
            </p>
            <span className="inclusion-badge">Espaço que acolhe a comunidade LGBTQ+</span>
            <a className="button button-light" href={mapsUrl} target="_blank" rel="noreferrer">
              Abrir no mapa <ArrowIcon />
            </a>
          </div>
          <div className="story-image story-image-tall" data-reveal>
            <img src="/images/hair-wash.jpg" alt="Imagem ilustrativa de lavagem de cabelo em salão" />
          </div>
        </section>

        <section className="reviews" id="avaliacoes">
          <div className="reviews-heading" data-reveal>
            <p className="eyebrow">4,9 no Google · 68 avaliações</p>
            <h2>Experiências que<br /><em>viram confiança.</em></h2>
            <a className="text-link text-link-dark" href={reviewsUrl} target="_blank" rel="noreferrer">
              Ver mais avaliações <ArrowIcon />
            </a>
          </div>

          <div className="reviews-list">
            <article className="review-card" data-reveal>
              <p className="review-source">Avaliação no Google</p>
              <blockquote>“Amei a experiência! A Thalita e Luana são maravilhosas, o espaço é ótimo e achei um diferencial ter especialista em cachos!”</blockquote>
              <p>Thalia Leite</p>
            </article>
            <article className="review-card" data-reveal>
              <p className="review-source">Avaliação no Google</p>
              <blockquote>“Um ambiente aconchegante para as clientes, profissionais ótimos, tudo de bom.”</blockquote>
              <p>Cliente no Google</p>
            </article>
            <article className="review-card" data-reveal>
              <p className="review-source">Avaliação no Google</p>
              <blockquote>“Fui uma única vez fazer pé e mão e fui muito bem atendida por todos.”</blockquote>
              <p>Cliente no Google</p>
            </article>
          </div>
        </section>

        <section className="visit" id="visita">
          <div className="visit-panel" data-reveal>
            <p className="eyebrow">Planeje sua visita</p>
            <h2>Estamos na<br /><em>Chácara Klabin.</em></h2>

            <div className="visit-details">
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                <span className="icon-circle"><PinIcon /></span>
                <span><small>Endereço</small><strong>R. Ibaragui Nissui, 197</strong><em>São Paulo · SP, 04116-200</em></span>
              </a>
              <a href="tel:+5511982688187">
                <span className="icon-circle"><PhoneIcon /></span>
                <span><small>Telefone</small><strong>(11) 98268-8187</strong></span>
              </a>
              <div>
                <span className="icon-circle"><ClockIcon /></span>
                <span><small>Funcionamento</small><strong>Terça a sábado</strong><em>Consulte os horários na agenda</em></span>
              </div>
            </div>

            <p className="hours-disclaimer">Os horários disponíveis podem variar por serviço e profissional.</p>
            <a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">
              Ver agenda on-line <ArrowIcon />
            </a>
          </div>

          <div className="map-wrap" data-reveal>
            <iframe
              title="Mapa com a localização do J.Menezess Conceito"
              src="https://www.google.com/maps?q=J.Menezess%20Conceito%2C%20R.%20Ibaragui%20Nissui%2C%20197%20-%20Ch%C3%A1cara%20Klabin%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004116-200&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="map-link" href={mapsUrl} target="_blank" rel="noreferrer">
              Traçar rota <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="final-cta">
          <div data-reveal>
            <p className="eyebrow">Seu próximo momento começa aqui</p>
            <h2>Valorize sua<br /><em>beleza real.</em></h2>
          </div>
          <a className="cta-circle" href={bookingUrl} target="_blank" rel="noreferrer" aria-label="Agendar on-line">
            <span>Agendar</span>
            <ArrowIcon />
          </a>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">JM</span>
          <span className="brand-name">J.Menezess <i>Conceito</i></span>
        </div>
        <p>R. Ibaragui Nissui, 197 · Chácara Klabin · São Paulo</p>
        <div className="footer-links">
          <a href={bookingUrl} target="_blank" rel="noreferrer">Agendar on-line</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">Como chegar</a>
        </div>
        <small>© {new Date().getFullYear()} J.Menezess Conceito · Imagens ilustrativas</small>
      </footer>

      <a className="floating-whatsapp" href={bookingUrl} target="_blank" rel="noreferrer" aria-label="Agendar on-line">
        <span>Agendar</span>
        <ArrowIcon />
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HairSalon',
            name: 'J.Menezess Conceito',
            telephone: '+55 11 98268-8187',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Rua Ibaragui Nissui, 197',
              addressLocality: 'São Paulo',
              addressRegion: 'SP',
              postalCode: '04116-200',
              addressCountry: 'BR',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -23.5913143,
              longitude: -46.6261733,
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '68',
              bestRating: '5',
            },
            openingHoursSpecification: [
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday'], opens: '09:30', closes: '18:30' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Thursday', 'Friday'], opens: '09:00', closes: '18:30' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '18:00' },
            ],
            hasMap: mapsUrl,
            url: bookingUrl,
            sameAs: [bookingUrl],
          }),
        }}
      />
    </>
  )
}

export default App

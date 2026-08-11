import { useEffect, useState } from 'react'

const whatsappUrl = 'https://wa.me/5511965280613?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Up%20Hair%20%26%20Co%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.'
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Up+Hair+%26+Co%2C+R.+Cel.+Diogo%2C+709%2C+S%C3%A3o+Paulo'
const reviewsUrl = 'https://www.google.com/search?q=up+hair+%26+co+s%C3%A3o+paulo+avalia%C3%A7%C3%B5es'

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
        <a className="brand" href="#inicio" aria-label="Up Hair & Co — início">
          <span className="brand-mark">UP</span>
          <span className="brand-name">Hair <i>&</i> Co</span>
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
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Agendar horário
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Up Hair & Co · Jardim da Glória</p>
            <h1>Seu cabelo.<br /><em>Seu momento.</em></h1>
            <p className="hero-lead">
              Cuidado, atenção e uma pausa na rotina para você se sentir ainda mais você.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
                Agendar pelo WhatsApp <ArrowIcon />
              </a>
              <a className="text-link" href="#visita">Ver endereço <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-note">Atendimento com horário marcado</p>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-image-wrap">
              <img src="/images/hero-salon.jpg" alt="Imagem ilustrativa de atendimento em salão de beleza" />
            </div>
            <div className="hours-card">
              <span className="icon-circle"><ClockIcon /></span>
              <span><small>Horário</small><strong>Ter–Sáb · 9h–19h</strong></span>
            </div>
            <p className="vertical-label">Cuidado que transforma</p>
          </div>

          <a className="hero-location" href={mapsUrl} target="_blank" rel="noreferrer">
            <PinIcon />
            <span>R. Cel. Diogo, 709<br /><small>Jardim da Glória · São Paulo</small></span>
          </a>
        </section>

        <section className="intro" id="sobre">
          <div className="intro-heading" data-reveal>
            <p className="eyebrow">Uma experiência feita de detalhes</p>
            <h2>Beleza começa com<br /><em>escuta e cuidado.</em></h2>
          </div>
          <div className="intro-copy" data-reveal>
            <p>
              No Up Hair & Co, cada visita é um momento para conversar sobre o que você procura e cuidar do seu cabelo com atenção.
            </p>
            <a className="text-link text-link-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
              Converse com a equipe <ArrowIcon />
            </a>
          </div>

          <div className="experience-grid">
            <article className="experience-card" data-reveal>
              <span>01</span>
              <h3>Conte o que você busca</h3>
              <p>Fale com a equipe pelo WhatsApp e consulte o atendimento ideal para você.</p>
            </article>
            <article className="experience-card card-image" data-reveal>
              <img src="/images/care.jpg" alt="Imagem ilustrativa de profissional cuidando do cabelo de uma cliente" />
            </article>
            <article className="experience-card" data-reveal>
              <span>02</span>
              <h3>Escolha seu horário</h3>
              <p>O salão atende de terça a sábado, das 9h às 19h.</p>
            </article>
          </div>
        </section>

        <section className="salon-story">
          <div className="story-image story-image-wide" data-reveal>
            <img src="/images/styling.jpg" alt="Imagem ilustrativa de finalização de cabelo em salão" />
          </div>
          <div className="story-copy" data-reveal>
            <span className="story-number">709</span>
            <p className="eyebrow">No Jardim da Glória</p>
            <h2>Um salão para você se sentir <em>bem cuidada.</em></h2>
            <p>
              Ambiente bem decorado, profissionais atentos e atendimento elogiado por quem já passou por aqui.
            </p>
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
            <p className="eyebrow">O que dizem sobre o salão</p>
            <h2>Experiências que<br /><em>falam por nós.</em></h2>
            <a className="text-link text-link-dark" href={reviewsUrl} target="_blank" rel="noreferrer">
              Ver mais avaliações <ArrowIcon />
            </a>
          </div>

          <div className="reviews-list">
            <article className="review-card" data-reveal>
              <p className="review-source">Avaliação no Google</p>
              <blockquote>“Salão de beleza bem montado, funcionários atenciosos e preços razoáveis!”</blockquote>
              <p>Lilian Plaza</p>
            </article>
            <article className="review-card" data-reveal>
              <p className="review-source">Avaliação no Google</p>
              <blockquote>“Bom atendimento, profissionais atento com o cuidados do cabelo.”</blockquote>
              <p>Gabriel Costa</p>
            </article>
            <article className="review-card" data-reveal>
              <p className="review-source">Avaliação no Google</p>
              <blockquote>“Ambiente bem decorado, atendimento excelente, e total controle sobre covid-19.”</blockquote>
              <p>João Luis</p>
            </article>
          </div>
        </section>

        <section className="visit" id="visita">
          <div className="visit-panel" data-reveal>
            <p className="eyebrow">Planeje sua visita</p>
            <h2>Estamos no<br /><em>Jardim da Glória.</em></h2>

            <div className="visit-details">
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                <span className="icon-circle"><PinIcon /></span>
                <span><small>Endereço</small><strong>R. Cel. Diogo, 709</strong><em>São Paulo · SP, 01545-001</em></span>
              </a>
              <a href="tel:+5511965280613">
                <span className="icon-circle"><PhoneIcon /></span>
                <span><small>Telefone</small><strong>(11) 96528-0613</strong></span>
              </a>
              <div>
                <span className="icon-circle"><ClockIcon /></span>
                <span><small>Funcionamento</small><strong>Terça a sábado</strong><em>Das 9h às 19h</em></span>
              </div>
            </div>

            <p className="hours-disclaimer">Em feriados, confirme o horário diretamente com o salão.</p>
            <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
              Agendar atendimento <ArrowIcon />
            </a>
          </div>

          <div className="map-wrap" data-reveal>
            <iframe
              title="Mapa com a localização do Up Hair & Co"
              src="https://www.google.com/maps?q=R.%20Cel.%20Diogo%2C%20709%20-%20Jardim%20da%20Gloria%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001545-001&output=embed"
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
            <h2>Vamos cuidar<br /><em>do seu cabelo?</em></h2>
          </div>
          <a className="cta-circle" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp">
            <span>Agendar</span>
            <ArrowIcon />
          </a>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">UP</span>
          <span className="brand-name">Hair <i>&</i> Co</span>
        </div>
        <p>R. Cel. Diogo, 709 · Jardim da Glória · São Paulo</p>
        <div className="footer-links">
          <a href="https://www.facebook.com/UpCabeloeModa/?locale=pt_BR" target="_blank" rel="noreferrer">Facebook</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">Como chegar</a>
        </div>
        <small>© {new Date().getFullYear()} Up Hair & Co · Imagens ilustrativas</small>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp">
        <span>Agendar</span>
        <ArrowIcon />
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HairSalon',
            name: 'Up Hair & Co',
            telephone: '+55 11 96528-0613',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Rua Coronel Diogo, 709',
              addressLocality: 'São Paulo',
              addressRegion: 'SP',
              postalCode: '01545-001',
              addressCountry: 'BR',
            },
            openingHoursSpecification: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => ({
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: day,
              opens: '09:00',
              closes: '19:00',
            })),
            sameAs: ['https://www.facebook.com/UpCabeloeModa/?locale=pt_BR'],
          }),
        }}
      />
    </>
  )
}

export default App

import { OFFICE_PHOTO, OFFICE_SERVICES } from "@/lib/office";

// The office site rebuilt in miniature with HTML/CSS (sizes in container units), so the
// devices show the real content sharply at any width and the small portrait never upscales.
const NUMERALS = ["I", "II", "III"];

function DesktopScreen() {
  return (
    <div className="mk-desktop">
      <div className="mk-hero">
        <img src={OFFICE_PHOTO} alt="" className="mk-ambient" decoding="async" />
        <img src={OFFICE_PHOTO} alt="" className="mk-portrait" decoding="async" />
        <div className="mk-shade" />
        <div className="mk-header">
          <span className="mk-brand">
            Marcus Luz <i>&amp;</i> Advogados
            <small>Associados</small>
          </span>
          <span className="mk-nav">
            <span>Escritório</span>
            <span>Atuação</span>
            <span>Profissional</span>
            <span>Localização</span>
            <span>Contato</span>
          </span>
        </div>
        <div className="mk-copy">
          <span className="mk-eyebrow">Escritório de advocacia</span>
          <span className="mk-title">
            Advocacia com compromisso, <em>ética</em> e responsabilidade.
          </span>
          <span className="mk-sub">
            Marcus Luz &amp; Advogados Associados — atuação jurídica em Campo Grande, Mato Grosso do
            Sul.
          </span>
          <span className="mk-actions">
            <span className="mk-button">Entre em contato →</span>
            <span className="mk-link">Áreas de atuação</span>
          </span>
        </div>
      </div>
      <div className="mk-areas">
        <span className="mk-areas-head">
          <span className="mk-label">Áreas de atuação</span>
          <span className="mk-areas-title">Áreas de atuação jurídica.</span>
        </span>
        {OFFICE_SERVICES.map((service, index) => (
          <span key={service.name} className="mk-area">
            <span className="mk-numeral">{NUMERALS[index]}</span>
            <span className="mk-area-name">{service.name}</span>
            <span className="mk-area-text">{service.description}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="mk-mobile">
      <img src={OFFICE_PHOTO} alt="" className="mk-ambient" decoding="async" />
      <img src={OFFICE_PHOTO} alt="" className="mk-m-portrait" decoding="async" />
      <div className="mk-m-shade" />
      <div className="mk-status">
        <span>9:41</span>
        <span className="mk-status-icons">
          <span className="mk-signal">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="mk-battery" />
        </span>
      </div>
      <div className="mk-m-header">
        <span className="mk-brand">
          Marcus Luz <i>&amp;</i> Advogados
          <small>Associados</small>
        </span>
        <span className="mk-burger">
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="mk-m-copy">
        <span className="mk-eyebrow">Escritório de advocacia</span>
        <span className="mk-title">
          Advocacia com compromisso, <em>ética</em> e responsabilidade.
        </span>
        <span className="mk-sub">
          Marcus Luz &amp; Advogados Associados — atuação jurídica em Campo Grande, Mato Grosso do
          Sul.
        </span>
        <span className="mk-button">Entre em contato →</span>
      </div>
      <span className="mk-home" />
    </div>
  );
}

export function HeroDevices() {
  return (
    <div
      className="device-stage"
      role="img"
      aria-label="O site do escritório exibido em um monitor de computador e em um celular"
    >
      <div className="device-monitor">
        <div className="monitor-body">
          <div className="monitor-bezel">
            <div className="monitor-screen">
              <DesktopScreen />
              <span className="screen-glare" />
            </div>
          </div>
        </div>
        <span className="monitor-neck" />
        <span className="monitor-base" />
      </div>
      <div className="device-phone">
        <div className="phone-bezel">
          <div className="phone-screen">
            <PhoneScreen />
            <span className="phone-island" />
            <span className="screen-glare" />
          </div>
        </div>
      </div>
    </div>
  );
}

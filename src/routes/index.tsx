import { createFileRoute } from "@tanstack/react-router";
import photo from "@/assets/marcus-luz-advogado.jpg.asset.json";

const WHATSAPP_MESSAGE =
  "Olá! Acessei o site do Marcus Luz & Advogados Associados e gostaria de obter informações sobre o atendimento.";
const WHATSAPP = `https://wa.me/5567992209167?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const MAPS = "https://www.google.com/maps/search/?api=1&query=Rua+General+Os%C3%B3rio%2C+52+-+Centro%2C+Campo+Grande+-+MS%2C+79008-310";
const ADDRESS = "Rua General Osório, 52 — Centro, Campo Grande — MS, CEP 79008-310";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marcus Luz & Advogados Associados — Campo Grande, MS" },
      { name: "description", content: "Escritório de advocacia em Campo Grande — MS. Direito Militar, Previdenciário e Civil. Atendimento com ética e responsabilidade." },
      { property: "og:title", content: "Marcus Luz & Advogados Associados" },
      { property: "og:description", content: "Advocacia com compromisso, ética e responsabilidade, em Campo Grande — MS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Escritório", "#sobre"],
  ["Atuação", "#atuacao"],
  ["Profissional", "#profissional"],
  ["Localização", "#localizacao"],
  ["Contato", "#contato"],
];

const areas = [
  ["I", "Direito Militar", "Orientação jurídica em questões relacionadas à carreira e aos direitos de servidores militares."],
  ["II", "Direito Previdenciário", "Orientação sobre benefícios, aposentadorias e demais questões junto à previdência."],
  ["III", "Direito Civil", "Assessoria em relações contratuais, obrigações, responsabilidade civil e demais temas do direito privado."],
];

function CTA({ light }: { light?: boolean }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-7 py-4 text-sm tracking-wide transition-colors ${
        light ? "bg-background text-foreground hover:bg-secondary" : "bg-primary text-primary-foreground hover:bg-foreground"
      }`}
    >
      Entre em contato <span aria-hidden>→</span>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <a href="#" className="font-serif text-xl text-foreground">
            Marcus Luz <span className="italic text-primary">&amp;</span> Advogados
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex" aria-label="Principal">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="hover:text-foreground">{l}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 md:grid-cols-12 md:px-10 md:pt-40">
        <div className="md:col-span-5 md:pt-12">
          <p className="eyebrow">Campo Grande — MS</p>
          <h1 className="mt-6 text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Advocacia com compromisso, <em className="text-primary">ética</em> e responsabilidade.
          </h1>
          <p className="mt-8 max-w-md text-lg font-light text-muted-foreground">
            Conheça Marcus Luz &amp; Advogados Associados, em Campo Grande — MS.
          </p>
          <div className="mt-10"><CTA /></div>
        </div>
        <div className="md:col-span-7">
          <div className="ml-auto max-w-md overflow-hidden bg-secondary">
            <img
              src={photo.url}
              alt="Marcus Vinicius Rodrigues da Luz, advogado, de terno azul"
              className="aspect-[47/54] w-full object-cover object-top"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-4">
            <p className="eyebrow">O escritório</p>
            <h2 className="mt-5 text-4xl text-foreground md:text-5xl">Atendimento próximo e transparente.</h2>
          </div>
          <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
            <p>
              Marcus Luz &amp; Advogados Associados é um escritório de advocacia sediado no Centro de Campo Grande,
              dedicado a oferecer orientação jurídica clara a quem busca compreender seus direitos.
            </p>
            <p>
              Nossa atuação se pauta pela ética profissional, pelo sigilo e pela comunicação franca com cada cliente,
              em conformidade com as normas da Ordem dos Advogados do Brasil.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8 text-sm text-foreground">
              {["Ética", "Sigilo", "Clareza"].map((v) => (
                <p key={v} className="font-serif text-2xl">{v}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section id="atuacao" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow">Áreas de atuação</p>
        <h2 className="mt-5 max-w-xl text-4xl text-foreground md:text-5xl">Campos em que oferecemos orientação.</h2>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {areas.map(([n, t, d]) => (
            <div key={t} className="grid gap-4 py-10 md:grid-cols-12 md:items-baseline">
              <span className="font-serif text-xl italic text-accent md:col-span-1">{n}</span>
              <h3 className="text-3xl text-foreground md:col-span-4">{t}</h3>
              <p className="font-light text-muted-foreground md:col-span-6 md:col-start-7">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Profissional */}
      <section id="profissional" className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <p className="eyebrow">Profissional</p>
            <h2 className="mt-5 text-4xl text-foreground md:text-5xl">Marcus Vinicius Rodrigues da Luz</h2>
            <p className="mt-4 text-sm tracking-widest text-primary">ADVOGADO · OAB/MS 17.787</p>
          </div>
          <p className="text-lg font-light leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:pt-12">
            Responsável pela condução do escritório, atende pessoalmente os clientes, com dedicação ao estudo de cada caso
            e à orientação sobre os caminhos jurídicos disponíveis.
          </p>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <p className="eyebrow">Localização</p>
          <h2 className="mt-5 text-4xl text-foreground md:text-5xl">No Centro de Campo Grande.</h2>
          <p className="mt-6 font-light text-muted-foreground">{ADDRESS}</p>
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border-b border-primary pb-1 text-sm text-primary hover:text-foreground">
            Abrir no Google Maps →
          </a>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <iframe
            title="Mapa do escritório"
            src="https://www.google.com/maps?q=Rua+General+Os%C3%B3rio,+52,+Campo+Grande+-+MS&output=embed"
            className="aspect-[4/3] w-full border-0 grayscale-[60%] sepia-[20%]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-6">
            <p className="eyebrow text-accent">Contato</p>
            <h2 className="mt-5 text-4xl md:text-5xl">Converse com o escritório.</h2>
            <div className="mt-10"><CTA light /></div>
          </div>
          <dl className="space-y-6 text-sm font-light md:col-span-5 md:col-start-8">
            <div><dt className="eyebrow text-accent">WhatsApp</dt><dd className="mt-2 text-lg">+55 (67) 99220-9167</dd></div>
            <div><dt className="eyebrow text-accent">Endereço</dt><dd className="mt-2 text-lg">{ADDRESS}</dd></div>
          </dl>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-serif text-lg text-foreground">Marcus Luz &amp; Advogados Associados</p>
        <nav className="flex flex-wrap gap-6" aria-label="Rodapé">
          {nav.map(([l, h]) => <a key={h} href={h} className="hover:text-foreground">{l}</a>)}
        </nav>
        <p>OAB/MS 17.787 · © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

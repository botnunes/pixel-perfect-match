import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  PUBLIC_OFFICE_ADDRESS,
  OFFICE_ADDRESS_CONFIRMED,
  MAPS_URL,
  MAPS_EMBED,
  OFFICE_PHOTO,
  OFFICE_SERVICES,
} from "@/lib/office";

// The existing preview host is real; do not infer a future domain or canonical URL.
const SHARE_PHOTO = `https://id-preview--f3a143c3-2e2a-4700-b8fe-59cdb738e298.lovable.app${OFFICE_PHOTO}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marcus Luz & Advogados Associados — Campo Grande, MS" },
      {
        name: "description",
        content:
          "Marcus Luz & Advogados Associados — escritório de advocacia em Campo Grande — MS. Informações institucionais e contato.",
      },
      { property: "og:title", content: "Marcus Luz & Advogados Associados" },
      {
        property: "og:description",
        content: "Advocacia com compromisso, ética e responsabilidade, em Campo Grande — MS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: SHARE_PHOTO },
      { property: "og:image:alt", content: "Marcus Vinicius Rodrigues da Luz, de terno azul" },
      { name: "twitter:image", content: SHARE_PHOTO },
    ],
    links: [{ rel: "preload", as: "image", href: OFFICE_PHOTO, fetchPriority: "high" }],
  }),
  component: Index,
});

const nav = [
  ["Escritório", "#sobre"],
  ["Atuação", "#atuacao"],
  ["Profissional", "#profissional"],
  ["Localização", "#localizacao"],
  ["Contato", "#contato"],
] as const;

function CTA({ hero = false }: { hero?: boolean }) {
  return (
    <Button
      asChild
      className={`h-auto rounded-none px-7 py-4 font-normal shadow-none ${hero ? "hero-contact" : ""}`}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="gap-3 tracking-wide hover:bg-foreground"
      >
        Entre em contato <span aria-hidden>→</span>
      </a>
    </Button>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Closing the menu returns focus to its button at the top; scroll to the chosen section instead.
  const pendingSection = useRef<string | null>(null);
  return (
    <div className="min-h-screen">
      <header className="site-header header-enter absolute inset-x-0 top-0 z-10">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 md:px-10">
          <a href="#inicio" className="brand-name min-w-0 font-serif text-xl">
            Marcus Luz <span className="italic">&amp;</span> Advogados
            <span className="brand-detail">Associados</span>
          </a>
          <nav className="hidden gap-6 text-sm lg:flex" aria-label="Principal">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="header-link">
                {l}
              </a>
            ))}
          </nav>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="header-menu min-h-11 min-w-11 shrink-0 lg:hidden"
                aria-label="Abrir menu"
                aria-controls="menu-mobile"
                aria-expanded={menuOpen}
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              id="menu-mobile"
              side="right"
              aria-describedby={undefined}
              className="w-[min(85vw,24rem)]"
              onCloseAutoFocus={(event) => {
                const target = pendingSection.current;
                if (!target) return;
                pendingSection.current = null;
                event.preventDefault();
                document.querySelector(target)?.scrollIntoView();
              }}
            >
              <SheetTitle className="pr-12 font-serif text-2xl font-medium">
                Marcus Luz &amp; Advogados
              </SheetTitle>
              <nav
                aria-label="Navegação mobile"
                className="mt-10 flex flex-col divide-y divide-border"
              >
                {nav.map(([label, href]) => (
                  <SheetClose asChild key={href}>
                    <a
                      href={href}
                      onClick={() => {
                        pendingSection.current = href;
                      }}
                      className="flex min-h-12 items-center py-4 text-foreground"
                    >
                      {label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="office-hero" aria-labelledby="hero-title">
        <div className="hero-media">
          {/* The same original photo, softened, fills the screen without enlarging the portrait. */}
          <img src={OFFICE_PHOTO} alt="" className="hero-ambient" decoding="async" />
          <img
            src={OFFICE_PHOTO}
            alt="Marcus Vinicius Rodrigues da Luz, advogado, de terno azul"
            className="hero-photo"
            fetchPriority="high"
            decoding="async"
            width={470}
            height={540}
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-inner mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="hero-copy">
            <p className="hero-eyebrow hero-enter">
              <span aria-hidden="true" className="hero-rule" />
              Escritório de advocacia
            </p>
            <h1 id="hero-title" className="hero-title hero-enter">
              Advocacia com compromisso, <em>ética</em> e responsabilidade.
            </h1>
            <p className="hero-subtitle hero-enter">
              Marcus Luz &amp; Advogados Associados — atuação jurídica em Campo Grande, Mato Grosso
              do Sul.
            </p>
            <div className="hero-action hero-enter">
              <CTA hero />
              <a href="#atuacao" className="hero-secondary">
                Áreas de atuação
              </a>
            </div>
          </div>
        </div>
        <a href="#sobre" className="hero-scroll" aria-label="Conhecer o escritório">
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-4">
            <p className="eyebrow">O escritório</p>
            <h2 className="mt-5 text-4xl text-foreground md:text-5xl">
              Atendimento próximo e transparente.
            </h2>
          </div>
          <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
            <p>
              Marcus Luz &amp; Advogados Associados, em Campo Grande — MS, atua nas áreas de Direito
              Militar, Direito Previdenciário e Direito Civil.
            </p>
            <p>
              A orientação jurídica exige análise das particularidades de cada situação, observância
              do sigilo profissional e respeito às normas da Ordem dos Advogados do Brasil.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8 text-sm text-foreground">
              {["Ética", "Sigilo", "Clareza"].map((v) => (
                <p key={v} className="font-serif text-2xl">
                  {v}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section id="atuacao" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow">Áreas de atuação</p>
        <h2 className="mt-5 max-w-xl text-4xl text-foreground md:text-5xl">
          Áreas de atuação jurídica.
        </h2>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {OFFICE_SERVICES.map((service, index) => (
            <article
              key={service.name}
              className="grid gap-5 py-10 md:grid-cols-12 md:items-baseline"
            >
              <span
                className="font-serif text-xl italic text-primary md:col-span-1"
                aria-hidden="true"
              >
                {["I", "II", "III"][index]}
              </span>
              <h3 className="text-3xl text-foreground md:col-span-4">{service.name}</h3>
              <p className="font-light leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Profissional */}
      <section id="profissional" className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <p className="eyebrow">Profissional</p>
            <h2 className="mt-5 text-4xl text-foreground md:text-5xl">
              Marcus Vinicius Rodrigues da Luz
            </h2>
            <p className="mt-4 text-sm tracking-widest text-primary">ADVOGADO · OAB/MS 17.787</p>
          </div>
          <p className="text-lg font-light leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:pt-12">
            Para informações sobre o profissional, a forma de atendimento e a análise de uma questão
            jurídica, entre em contato com o escritório.
          </p>
        </div>
      </section>

      {/* Localização */}
      <section
        id="localizacao"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32"
      >
        <div className="md:col-span-4">
          <p className="eyebrow">Localização</p>
          <h2 className="mt-5 text-4xl text-foreground md:text-5xl">Em Campo Grande — MS.</h2>
          <p className="mt-6 font-light text-muted-foreground">{PUBLIC_OFFICE_ADDRESS}</p>
          {OFFICE_ADDRESS_CONFIRMED && (
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border-b border-primary pb-1 text-sm text-primary hover:text-foreground"
            >
              Abrir no Google Maps →
            </a>
          )}
        </div>
        {OFFICE_ADDRESS_CONFIRMED && (
          <div className="md:col-span-7 md:col-start-6">
            <iframe
              title="Localização do escritório"
              src={MAPS_EMBED}
              className="aspect-[4/3] w-full border-0 grayscale-[60%] sepia-[20%]"
              loading="lazy"
            />
          </div>
        )}
      </section>

      {/* Contato */}
      <section id="contato" className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-6">
            <p className="eyebrow">Contato</p>
            <h2 className="mt-5 text-4xl md:text-5xl">Converse com o escritório.</h2>
            <div className="mt-10">
              <CTA />
            </div>
          </div>
          <dl className="space-y-6 text-sm font-light md:col-span-5 md:col-start-8">
            <div>
              <dt className="eyebrow">WhatsApp</dt>
              <dd className="mt-2 text-lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {WHATSAPP_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Localização</dt>
              <dd className="mt-2 text-lg">{PUBLIC_OFFICE_ADDRESS}</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-serif text-lg text-foreground">Marcus Luz &amp; Advogados Associados</p>
        <nav className="flex flex-wrap gap-6" aria-label="Rodapé">
          {nav.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <p>OAB/MS 17.787 · © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

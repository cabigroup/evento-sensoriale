import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { ContactButton } from "@/components/ContactButton";
import { useReveal } from "@/hooks/use-reveal";
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

import heroBottle from "@/assets/hero-bottle.jpg";
import projectImg from "@/assets/project.jpg";
import evShop from "@/assets/event-shop.jpg";
import evCar from "@/assets/event-car.jpg";
import evXmas from "@/assets/event-christmas.jpg";
import evWed from "@/assets/event-wedding.jpg";
import evBap from "@/assets/event-baptism.jpg";
import evBday from "@/assets/event-birthday.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: OG_IMAGE,
          description: SITE_DESCRIPTION,
          email: "elisabetta@uniqueparfume.com",
          telephone: "+39-339-5345486",
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "Via Acqua delle Noci 4",
              addressLocality: "Mercogliano",
              addressRegion: "AV",
              postalCode: "83013",
              addressCountry: "IT",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Via Como",
              addressLocality: "Milano",
              addressCountry: "IT",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Il progetto", href: "#progetto" },
  { label: "Per quali eventi", href: "#eventi" },
  { label: "Il valore del ricordo", href: "#ricordo" },
  { label: "Contatti", href: "#contatti" },
];

const EVENTS = [
  {
    img: evShop,
    title: "Apertura di un negozio",
    line: "Un pensiero che accompagna chi varca la soglia per la prima volta.",
  },
  {
    img: evCar,
    title: "Lancio di un'autovettura",
    line: "Un dettaglio raffinato che resta oltre la giornata di presentazione.",
  },
  {
    img: evXmas,
    title: "Saluto natalizio ai clienti",
    line: "Il gesto discreto di un professionista che sceglie di essere ricordato.",
  },
  {
    img: evWed,
    title: "Matrimonio",
    line: "Un omaggio che resta nella memoria degli invitati, ben oltre la cena.",
  },
  {
    img: evBap,
    title: "Battesimo",
    line: "Un dono lieve, silenzioso, che accompagna un inizio.",
  },
  {
    img: evBday,
    title: "Compleanno",
    line: "Un ricordo intimo per chi si vuole festeggiare in modo diverso.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Project />
        <Events />
        <Memory />
        <Contact />
      </main>
      <Footer />
      <ContactButton />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-12">
        <a href="#top" className="flex items-center gap-3" aria-label="Unique Parfume">
          <Logo size={scrolled ? 44 : 56} />
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[0.72rem] uppercase tracking-[0.32em] text-ivory-dim hover:text-gold transition-colors duration-500"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Apri menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-[5px] p-2"
        >
          <span className={`h-px w-6 bg-gold transition-transform duration-500 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-gold transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-gold transition-transform duration-500 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-700 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-10 bg-background/95 backdrop-blur-md">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.35em] text-ivory-dim"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink"
    >
      <img
        src={heroBottle}
        alt=""
        width={1600}
        height={1808}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="image-veil" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.9) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <p className="eyebrow mb-8 md:mb-10 opacity-0 animate-[fadeIn_2s_ease_0.3s_forwards]">
          Unique Parfume · Milano
        </p>
        <h1
          className="font-display italic text-[2.6rem] leading-[1.05] tracking-[-0.02em] text-gold sm:text-6xl md:text-7xl lg:text-[5.2rem] opacity-0 animate-[fadeIn_2.4s_ease_0.6s_forwards]"
        >
          Un profumo che resta.
          <br />
          <span className="not-italic text-ivory">Un evento che non si dimentica.</span>
        </h1>
        <span className="hairline my-10 max-w-[120px] opacity-0 animate-[fadeIn_1.6s_ease_1.4s_forwards]" />
        <p className="max-w-xl text-base leading-relaxed text-ivory-dim md:text-lg opacity-0 animate-[fadeIn_1.6s_ease_1.6s_forwards]">
          Fragranze personalizzate come omaggio memorabile per i tuoi eventi.
        </p>
        <a
          href="mailto:elisabetta@uniqueparfume.com"
          className="mt-12 group inline-flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.4em] text-gold opacity-0 animate-[fadeIn_1.6s_ease_2s_forwards]"
        >
          <span className="relative py-2">
            Scrivici
            <span className="absolute -bottom-px left-0 h-px w-full bg-gold origin-left transition-transform duration-700 group-hover:scale-x-50" />
          </span>
          <span className="h-px w-10 bg-gold transition-all duration-700 group-hover:w-16" />
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-ivory-dim">
        <span className="text-[0.6rem] tracking-[0.4em] uppercase opacity-60">Scorri</span>
        <span className="h-10 w-px bg-gold/60 animate-[drop_2.4s_ease_infinite]" />
      </div>
      <style>{`
        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes drop {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}

function Reveal({ children, delay = 0, as: As = "div" as any, className = "" }: {
  children: ReactNode; delay?: number; as?: any; className?: string;
}) {
  const { ref, shown } = useReveal();
  return (
    <As
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </As>
  );
}

function Project() {
  return (
    <section id="progetto" className="relative py-32 md:py-48">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-20 md:px-12">
        <div className="md:col-span-5">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={projectImg}
                alt="Atelier di profumeria"
                loading="lazy"
                width={1408}
                height={1712}
                className="h-full w-full object-cover"
              />
              <div className="image-veil" />
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
          <Reveal delay={150}>
            <p className="eyebrow mb-8">Il progetto</p>
          </Reveal>
          <Reveal delay={250}>
            <h2 className="font-display text-4xl leading-[1.1] text-ivory md:text-5xl lg:text-[3.4rem]">
              Quarant'anni di profumeria,
              <br />
              <span className="italic text-gold">un nuovo capitolo.</span>
            </h2>
          </Reveal>
          <span className="hairline my-10 max-w-[80px]" />
          <div className="space-y-6 text-[1.02rem] leading-[1.85] text-ivory-dim md:text-lg">
            <Reveal delay={350}>
              <p>
                Dietro Unique Parfume c'è un'azienda che lavora la fragranza da
                oltre quarant'anni. Un mestiere fatto di misure precise, di
                pazienza, di ascolto.
              </p>
            </Reveal>
            <Reveal delay={450}>
              <p>
                Un'azienda sempre in movimento, animata dalla voglia di fare.
                Da questo cammino nasce oggi un progetto pensato per chi vuole
                lasciare un segno: dare a un evento la forma di una fragranza,
                e a una fragranza il tempo di essere ricordata.
              </p>
            </Reveal>
            <Reveal delay={550}>
              <p>
                Nessuna produzione seriale. Ogni profumo prende forma attorno
                all'occasione per cui viene creato.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="eventi" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow mb-8">Per quali eventi</p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display text-4xl leading-[1.1] text-ivory md:text-5xl lg:text-[3.4rem]">
              Ogni occasione
              <br />
              <span className="italic text-gold">chiede la sua fragranza.</span>
            </h2>
          </Reveal>
          <span className="hairline my-10 mx-auto max-w-[80px]" />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-12 md:gap-y-24 lg:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 120}>
              <article className="group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    width={1200}
                    height={1400}
                    className="h-full w-full object-cover grayscale-[35%] transition-all duration-[1400ms] ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="image-veil" />
                  <div className="absolute inset-x-6 bottom-6 h-px bg-gold/40" />
                </div>
                <h3 className="mt-8 font-display text-2xl text-gold md:text-[1.75rem]">
                  {e.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-dim md:text-[0.95rem]">
                  {e.line}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Memory() {
  return (
    <section
      id="ricordo"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink py-32"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(201,169,97,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow mb-10">Il valore del ricordo</p>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-display text-[2rem] leading-[1.25] text-ivory sm:text-4xl md:text-[3.2rem] md:leading-[1.2]">
            Un profumo resta sulla toilette
            <br />
            <span className="italic text-gold">tre, quattro mesi.</span>
          </p>
        </Reveal>
        <span className="hairline my-12 mx-auto max-w-[80px]" />
        <Reveal delay={400}>
          <p className="font-display text-xl leading-[1.6] text-ivory-dim md:text-[1.6rem] md:leading-[1.6]">
            Ogni mattina viene visto. Respirato. Ricordato.
          </p>
        </Reveal>
        <Reveal delay={600}>
          <p className="mt-8 font-display text-xl leading-[1.6] text-ivory-dim md:text-[1.6rem] md:leading-[1.6]">
            E con lui, chi lo ha donato.
          </p>
        </Reveal>
        <Reveal delay={800}>
          <p className="mt-14 max-w-xl mx-auto text-sm leading-[1.9] text-ivory-dim/80 md:text-base">
            Il tuo evento smette di essere una data sul calendario.
            Diventa un gesto quotidiano, per mesi, nella casa di chi hai voluto ringraziare.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contatti"
      className="relative flex min-h-[90vh] items-center justify-center bg-ink py-32"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="eyebrow mb-10">Contatti</p>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="font-display italic text-6xl text-gold md:text-8xl">
            Parliamone.
          </h2>
        </Reveal>
        <span className="hairline my-12 mx-auto max-w-[80px]" />
        <Reveal delay={300}>
          <a
            href="mailto:elisabetta@uniqueparfume.com"
            className="group inline-block font-display text-2xl text-gold transition-colors duration-500 md:text-[2.6rem]"
          >
            <span className="border-b border-gold/40 pb-2 transition-colors duration-500 group-hover:border-gold">
              elisabetta@uniqueparfume.com
            </span>
          </a>
        </Reveal>
        <Reveal delay={500}>
          <p className="mt-12 text-sm leading-[1.9] text-ivory-dim md:text-base">
            Per informazioni e preventivi, la nostra referente Elisabetta
            <br className="hidden sm:block" />
            {" "}risponde al{" "}
            <span className="text-ivory">339 5345486</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink pb-14 pt-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <span className="hairline mb-14" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4 flex flex-col gap-4">
            <Logo size={64} />
            <p className="mt-2 max-w-xs text-xs leading-[1.9] text-ivory-dim/80">
              Fragranze personalizzate come omaggio memorabile per i tuoi eventi.
            </p>
          </div>
          <div className="md:col-span-4 space-y-2 text-xs leading-[1.9] text-ivory-dim/80">
            <p className="eyebrow mb-4 !text-[0.65rem]">Società</p>
            <p>Unique Parfume è un progetto di Universal Commerce S.R.L.</p>
            <p>P.IVA e C.F. 03236080648</p>
          </div>
          <div className="md:col-span-4 space-y-2 text-xs leading-[1.9] text-ivory-dim/80">
            <p className="eyebrow mb-4 !text-[0.65rem]">Sedi</p>
            <p>Sede legale — Via Acqua delle Noci 4, 83013 Mercogliano (AV)</p>
            <p>Sede operativa — Via Como, Milano</p>
            <p className="pt-2">
              <a
                href="mailto:elisabetta@uniqueparfume.com"
                className="text-gold/90 hover:text-gold transition-colors"
              >
                elisabetta@uniqueparfume.com
              </a>
            </p>
          </div>
        </div>
        <p className="mt-16 text-center text-[0.65rem] uppercase tracking-[0.35em] text-ivory-dim/50">
          © {new Date().getFullYear()} Unique Parfume
        </p>
      </div>
    </footer>
  );
}

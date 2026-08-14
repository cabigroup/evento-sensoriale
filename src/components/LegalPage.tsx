import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";

import { Logo } from "@/components/Logo";
import { SiteFooter } from "@/components/SiteFooter";

/**
 * Impaginazione condivisa dei documenti legali (privacy e cookie policy):
 * header essenziale con ritorno alla home, colonna di lettura stretta e footer
 * del sito. La tipografia riprende la palette gold / ivory / ink.
 */
export function LegalPage({
  eyebrow,
  title,
  titleAccent,
  intro,
  updatedAt,
  children,
}: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-gold/15 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
          <Link to="/" aria-label="Unique Parfume — torna alla home">
            <Logo size={64} />
          </Link>
          <Link
            to="/"
            className="text-[0.65rem] uppercase tracking-[0.32em] text-ivory-dim transition-colors duration-500 hover:text-gold"
          >
            Torna alla home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24">
        <p className="eyebrow !text-[0.65rem]">{eyebrow}</p>
        <h1 className="mt-6 font-display text-4xl leading-[1.1] text-ivory md:text-[3.2rem]">
          {title} <span className="italic text-gold">{titleAccent}</span>
        </h1>
        <span className="hairline my-10 max-w-[80px]" />
        <p className="text-[0.95rem] leading-[1.9] text-ivory-dim md:text-base">{intro}</p>
        <p className="mt-6 text-[0.7rem] uppercase tracking-[0.28em] text-ivory-dim/50">
          Ultimo aggiornamento: {updatedAt}
        </p>

        <div className="mt-16 space-y-14">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl text-gold md:text-[1.9rem]">{title}</h2>
      <div className="mt-5 space-y-4 text-[0.92rem] leading-[1.95] text-ivory-dim md:text-[0.98rem]">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="relative pl-6">
          <span className="absolute left-0 top-[0.85em] h-px w-3 bg-gold/60" />
          {item}
        </li>
      ))}
    </ul>
  );
}

const LINK_CLASS =
  "border-b border-gold/40 text-gold transition-colors duration-500 hover:border-gold";

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  // Link interni: navigazione client-side. `to` è tipizzato sull'albero delle
  // route, qui l'indirizzo arriva come stringa dal contenuto della pagina.
  if (href.startsWith("/")) {
    return (
      <Link to={href as "/"} className={LINK_CLASS}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={LINK_CLASS}
    >
      {children}
    </a>
  );
}

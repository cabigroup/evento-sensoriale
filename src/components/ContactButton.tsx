import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

const CONTACT_EMAIL = "elisabetta@uniqueparfume.com";

/**
 * Bottone di contatto flottante in basso a destra.
 * Cerchio dorato su fondo ink; in hover rivela la label "Scrivici".
 * Coerente con la palette gold/ivory/ink e i tempi di transizione del sito.
 */
export function ContactButton() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      aria-label="Scrivici una mail"
      title="Scrivici"
      className={`group fixed bottom-6 right-6 z-40 flex items-center gap-3 md:bottom-8 md:right-8 transition-all duration-700 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <span className="pointer-events-none hidden translate-x-3 rounded-full border border-gold/25 bg-ink/85 px-4 py-2 text-[0.62rem] uppercase tracking-[0.3em] text-gold opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Scrivici
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-ink/85 text-gold shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-500 group-hover:scale-105 group-hover:border-gold group-hover:bg-ink">
        <Mail className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
      </span>
    </a>
  );
}

import { useEffect, useState } from "react";

// Numero di Elisabetta in formato internazionale per wa.me (39 + 3395345486)
const WHATSAPP_URL =
  "https://wa.me/393395345486?text=" +
  encodeURIComponent("Salve, vorrei informazioni su Unique Parfume.");

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.99 11.99 0 005.71 1.454h.006c6.585 0 11.946-5.359 11.949-11.893A11.82 11.82 0 0020.52 3.449" />
    </svg>
  );
}

/**
 * Bottone WhatsApp flottante in basso a destra.
 * Cerchio dorato su fondo ink; in hover rivela la label "WhatsApp".
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
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      title="Scrivici su WhatsApp"
      className={`group fixed bottom-6 right-6 z-40 flex items-center gap-3 md:bottom-8 md:right-8 transition-all duration-700 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <span className="pointer-events-none hidden translate-x-3 rounded-full border border-gold/25 bg-ink/85 px-4 py-2 text-[0.62rem] uppercase tracking-[0.3em] text-gold opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        WhatsApp
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-ink/85 text-gold shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-500 group-hover:scale-105 group-hover:border-gold group-hover:bg-ink">
        <WhatsAppIcon className="h-[1.35rem] w-[1.35rem]" />
      </span>
    </a>
  );
}

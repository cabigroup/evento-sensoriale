import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/Logo";
import { openConsentPreferences } from "@/lib/consent";

/**
 * Footer del sito, condiviso tra la home e le pagine legali.
 * Contiene i link a privacy e cookie policy e il pulsante per riaprire
 * il pannello delle preferenze cookie (revoca del consenso).
 */
export function SiteFooter() {
  return (
    <footer className="bg-ink pb-14 pt-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <span className="hairline mb-14" />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-12">
          <div className="md:col-span-3 flex flex-col gap-4">
            <Logo size={104} />
            <p className="mt-2 max-w-xs text-xs leading-[1.9] text-ivory-dim/80">
              Fragranze personalizzate come omaggio memorabile per i tuoi eventi.
            </p>
          </div>
          <div className="md:col-span-3 space-y-2 text-xs leading-[1.9] text-ivory-dim/80">
            <p className="eyebrow mb-4 !text-[0.65rem]">Contatti</p>
            <div>
              <p className="text-ivory-dim">Daniele De Ponte</p>
              <p>CEO</p>
            </div>
            <div className="!mt-4">
              <p className="text-ivory-dim">Elisabetta Maccanico</p>
              <p>Responsabile Commerciale</p>
            </div>
            <div className="!mt-4 space-y-2">
              <p>
                Tel:{" "}
                <a
                  href="tel:+393395345486"
                  className="text-gold/90 hover:text-gold transition-colors"
                >
                  339 534 5486
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/393395345486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold/90 hover:text-gold transition-colors"
                >
                  Scrivici ora
                </a>
              </p>
              <p className="break-words">
                Email:{" "}
                <a
                  href="mailto:elisabetta@uniqueparfume.com"
                  className="text-gold/90 hover:text-gold transition-colors"
                >
                  elisabetta@uniqueparfume.com
                </a>
              </p>
            </div>
          </div>
          <div className="md:col-span-3 space-y-2 text-xs leading-[1.9] text-ivory-dim/80">
            <p className="eyebrow mb-4 !text-[0.65rem]">Società</p>
            <p>Unique Parfume è un progetto di Universal Commerce S.R.L.</p>
            <p>P.IVA e C.F. 03236080648</p>
          </div>
          <div className="md:col-span-3 space-y-2 text-xs leading-[1.9] text-ivory-dim/80">
            <p className="eyebrow mb-4 !text-[0.65rem]">Sedi</p>
            <p>Sede legale — Via Acqua delle Noci 4, 83013 Mercogliano (AV)</p>
            <p>Ufficio Commerciale — Corso Como, Milano</p>
            <p>Ufficio Commerciale — Via Ferreria 71, 84081 Baronissi (SA)</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-gold/15 pt-10 md:flex-row md:justify-between">
          <nav
            aria-label="Documenti legali"
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            <Link
              to="/privacy"
              className="text-[0.65rem] uppercase tracking-[0.3em] text-ivory-dim/70 transition-colors duration-500 hover:text-gold"
            >
              Privacy policy
            </Link>
            <Link
              to="/cookie-policy"
              className="text-[0.65rem] uppercase tracking-[0.3em] text-ivory-dim/70 transition-colors duration-500 hover:text-gold"
            >
              Cookie policy
            </Link>
            <button
              type="button"
              onClick={openConsentPreferences}
              className="text-[0.65rem] uppercase tracking-[0.3em] text-ivory-dim/70 transition-colors duration-500 hover:text-gold"
            >
              Preferenze cookie
            </button>
          </nav>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-ivory-dim/50">
            © {new Date().getFullYear()} Unique Parfume
          </p>
        </div>
      </div>
    </footer>
  );
}

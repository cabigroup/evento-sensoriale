import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";

import {
  CONSENT_ALL,
  CONSENT_CHANGE_EVENT,
  CONSENT_NONE,
  CONSENT_OPEN_EVENT,
  readConsent,
  saveConsent,
  type ConsentChoices,
} from "@/lib/consent";

type PanelState = "hidden" | "banner" | "preferences";

const CATEGORIES: {
  key: "analytics" | "marketing";
  title: string;
  description: string;
}[] = [
  {
    key: "analytics",
    title: "Statistici",
    description:
      "Ci aiutano a capire, in forma aggregata, quali pagine vengono lette e come il sito viene usato.",
  },
  {
    key: "marketing",
    title: "Marketing",
    description:
      "Strumenti di terze parti (Klaviyo) che riconoscono il visitatore per proporre comunicazioni pertinenti.",
  },
];

/**
 * Banner di consenso cookie.
 *
 * Prima della scelta non viene caricato alcuno script non necessario
 * (vedi ConsentScripts). "Rifiuta" e "Accetta" hanno lo stesso peso visivo,
 * come richiesto dalle linee guida del Garante privacy.
 */
export function CookieBanner() {
  const [panel, setPanel] = useState<PanelState>("hidden");
  const [visible, setVisible] = useState(false);
  const [choices, setChoices] = useState<ConsentChoices>(CONSENT_NONE);

  const open = useCallback((state: Exclude<PanelState, "hidden">) => {
    setChoices(readConsent() ?? CONSENT_NONE);
    setPanel(state);
    // Un frame di ritardo per far partire la transizione di entrata.
    requestAnimationFrame(() => setVisible(true));
  }, []);

  useEffect(() => {
    if (!readConsent()) open("banner");

    const onOpen = () => open("preferences");
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, [open]);

  const close = useCallback(() => {
    setVisible(false);
    const t = setTimeout(() => setPanel("hidden"), 500);
    return () => clearTimeout(t);
  }, []);

  const commit = useCallback(
    (next: ConsentChoices) => {
      const previous = readConsent();
      saveConsent(next);
      close();
      // Gli script già caricati non si possono "scaricare": se l'utente revoca
      // un consenso che aveva dato, ricarichiamo la pagina per ripartire pulito.
      const revoked =
        (previous?.analytics && !next.analytics) || (previous?.marketing && !next.marketing);
      if (revoked) window.location.reload();
    },
    [close],
  );

  useEffect(() => {
    if (panel === "hidden") return;
    const onKey = (e: KeyboardEvent) => {
      // Esc chiude solo il pannello preferenze: dal banner iniziale l'utente
      // deve compiere una scelta esplicita.
      if (e.key === "Escape" && readConsent()) close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panel, close]);

  if (panel === "hidden") return null;

  const isPreferences = panel === "preferences";

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Informativa sui cookie"
      className={`fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 transition-all duration-700 md:px-8 md:pb-8 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {/* max-h + scroll interno: su schermi bassi il pannello preferenze
          resta interamente raggiungibile. */}
      <div className="mx-auto max-h-[85svh] max-w-[1100px] overflow-y-auto border border-gold/25 bg-ink/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md md:p-9">
        <p className="eyebrow !text-[0.62rem]">Cookie</p>

        {isPreferences ? (
          <>
            <h2 className="mt-4 font-display text-2xl text-ivory md:text-3xl">
              Preferenze <span className="italic text-gold">cookie</span>
            </h2>
            <p className="mt-3 max-w-2xl text-xs leading-[1.9] text-ivory-dim/85 md:text-[0.82rem]">
              Scegli quali categorie attivare. Puoi cambiare idea in qualsiasi momento dal pulsante
              «Preferenze cookie» nel footer.
            </p>

            <div className="mt-8 space-y-5">
              <CategoryRow
                title="Necessari"
                description="Indispensabili per la navigazione e per ricordare la tua scelta sui cookie. Sempre attivi."
                checked
                locked
              />
              {CATEGORIES.map((c) => (
                <CategoryRow
                  key={c.key}
                  title={c.title}
                  description={c.description}
                  checked={choices[c.key]}
                  onChange={(value) => setChoices((prev) => ({ ...prev, [c.key]: value }))}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="mt-4 font-display text-2xl text-ivory md:text-3xl">
              Rispettiamo la tua <span className="italic text-gold">privacy</span>
            </h2>
            <p className="mt-3 max-w-2xl text-xs leading-[1.9] text-ivory-dim/85 md:text-[0.82rem]">
              Usiamo cookie tecnici necessari al funzionamento del sito e, solo con il tuo consenso,
              cookie statistici e di marketing. Puoi accettarli, rifiutarli tutti o scegliere
              categoria per categoria.
            </p>
          </>
        )}

        <div className="mt-8 flex flex-col gap-6 border-t border-gold/15 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.62rem] uppercase tracking-[0.28em] text-ivory-dim/70">
            <Link to="/privacy" className="transition-colors hover:text-gold">
              Privacy policy
            </Link>
            <Link to="/cookie-policy" className="transition-colors hover:text-gold">
              Cookie policy
            </Link>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {isPreferences ? (
              <BannerButton onClick={() => commit(choices)}>Salva preferenze</BannerButton>
            ) : (
              <BannerButton onClick={() => open("preferences")}>Personalizza</BannerButton>
            )}
            <BannerButton onClick={() => commit(CONSENT_NONE)}>Rifiuta</BannerButton>
            <BannerButton primary onClick={() => commit(CONSENT_ALL)}>
              Accetta tutti
            </BannerButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function BannerButton({
  children,
  onClick,
  primary = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  primary?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center border px-6 py-3 text-[0.62rem] uppercase tracking-[0.3em] transition-all duration-500 ${
        primary
          ? "border-gold bg-gold text-ink hover:bg-gold-soft"
          : "border-gold/35 text-gold hover:border-gold hover:bg-gold/10"
      }`}
    >
      {children}
    </button>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  locked = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        <p className="text-[0.78rem] uppercase tracking-[0.22em] text-gold">{title}</p>
        <p className="mt-2 max-w-xl text-xs leading-[1.85] text-ivory-dim/80">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={locked ? `${title} (sempre attivi)` : title}
        disabled={locked}
        onClick={() => onChange?.(!checked)}
        className={`relative mt-1 h-6 w-11 shrink-0 rounded-full border transition-colors duration-500 ${
          checked ? "border-gold bg-gold/30" : "border-gold/30 bg-ink"
        } ${locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full transition-all duration-500 ${
            checked ? "left-[1.5rem] bg-gold" : "left-[0.15rem] bg-ivory-dim/60"
          }`}
        />
      </button>
    </div>
  );
}

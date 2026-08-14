import { useEffect } from "react";

import { useConsent } from "@/lib/consent";
import { KLAVIYO_INIT_SNIPPET, KLAVIYO_SRC } from "@/lib/site";

const KLAVIYO_SCRIPT_ID = "klaviyo-onsite";

/**
 * Carica gli script di terze parti solo dopo il consenso.
 *
 * Klaviyo (onsite tracking, categoria marketing) scrive cookie di profilazione:
 * non può essere caricato prima di una scelta esplicita dell'utente. Una volta
 * inserito, lo script resta nella pagina fino al reload — la revoca del consenso
 * viene applicata al successivo caricamento (vedi CookieBanner, che ricarica la
 * pagina quando un consenso già dato viene ritirato).
 */
export function ConsentScripts() {
  const { consent } = useConsent();
  const marketing = consent?.marketing === true;

  useEffect(() => {
    if (!marketing) return;
    if (document.getElementById(KLAVIYO_SCRIPT_ID)) return;

    // Stub di window.klaviyo: mette in coda le chiamate fatte prima che
    // klaviyo.js sia pronto.
    const init = document.createElement("script");
    init.type = "text/javascript";
    init.text = KLAVIYO_INIT_SNIPPET;
    document.head.appendChild(init);

    const script = document.createElement("script");
    script.id = KLAVIYO_SCRIPT_ID;
    script.type = "text/javascript";
    script.async = true;
    script.src = KLAVIYO_SRC;
    document.head.appendChild(script);
  }, [marketing]);

  return null;
}

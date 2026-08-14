import { useEffect, useState } from "react";

/**
 * Gestione del consenso cookie (GDPR / ePrivacy).
 *
 * Il consenso è salvato in localStorage: nessun cookie viene scritto prima che
 * l'utente abbia scelto, e gli script di terze parti (Klaviyo) vengono caricati
 * solo dopo un consenso esplicito per la relativa categoria.
 */

export const CONSENT_STORAGE_KEY = "up-cookie-consent";
export const CONSENT_VERSION = 1;

/** Evento emesso quando il consenso cambia (salvataggio o revoca). */
export const CONSENT_CHANGE_EVENT = "up:consent-change";
/** Evento emesso dai pulsanti "Preferenze cookie" per riaprire il banner. */
export const CONSENT_OPEN_EVENT = "up:consent-open";

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export type ConsentChoices = {
  /** Sempre attivi: indispensabili al funzionamento del sito. */
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentRecord = ConsentChoices & {
  version: number;
  /** Data ISO in cui il consenso è stato prestato: prova del consenso. */
  updatedAt: string;
};

export const CONSENT_ALL: ConsentChoices = {
  necessary: true,
  analytics: true,
  marketing: true,
};

export const CONSENT_NONE: ConsentChoices = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function isBrowser() {
  return typeof window !== "undefined";
}

/** Legge il consenso salvato. `null` = l'utente non ha ancora scelto. */
export function readConsent(): ConsentRecord | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>;
    // Un cambio di versione (nuove finalità o nuovi cookie) invalida la scelta
    // precedente: va richiesto un nuovo consenso.
    if (parsed?.version !== CONSENT_VERSION) return null;
    return {
      necessary: true,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
      version: CONSENT_VERSION,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    // localStorage non disponibile (private mode, storage pieno, JSON corrotto).
    return null;
  }
}

/** Salva la scelta dell'utente e notifica il resto dell'app. */
export function saveConsent(choices: ConsentChoices): ConsentRecord {
  const record: ConsentRecord = {
    ...choices,
    necessary: true,
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  };
  if (isBrowser()) {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    } catch {
      // Se non possiamo persistere, il consenso vale comunque per la sessione.
    }
    window.dispatchEvent(new CustomEvent<ConsentRecord>(CONSENT_CHANGE_EVENT, { detail: record }));
  }
  return record;
}

/** Cancella la scelta salvata: alla prossima render il banner riappare. */
export function resetConsent() {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // ignorata: senza storage non c'è nulla da cancellare.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: null }));
}

/** Riapre il pannello delle preferenze (pulsanti nel footer / cookie policy). */
export function openConsentPreferences() {
  if (!isBrowser()) return;
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT));
}

/**
 * Consenso corrente lato client.
 * Durante l'SSR e alla prima render restituisce `null` (stato "non deciso"),
 * così markup server e client coincidono e non c'è mismatch di idratazione.
 */
export function useConsent() {
  const [consent, setConsent] = useState<ConsentRecord | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setLoaded(true);

    const onChange = () => setConsent(readConsent());
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    // Allinea le altre schede aperte sullo stesso sito.
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  return { consent, loaded };
}

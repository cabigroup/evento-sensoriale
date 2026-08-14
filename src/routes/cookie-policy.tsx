import { createFileRoute } from "@tanstack/react-router";
import { type ReactNode } from "react";

import { LegalLink, LegalList, LegalPage, LegalSection } from "@/components/LegalPage";
import { openConsentPreferences } from "@/lib/consent";
import { LEGAL_UPDATED_AT, SITE_NAME, SITE_URL } from "@/lib/site";

const TITLE = `Cookie Policy - ${SITE_NAME}`;
const DESCRIPTION =
  "Quali cookie e strumenti di tracciamento usa il sito Unique Parfume, a cosa servono e come gestire o revocare il consenso in qualsiasi momento.";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/cookie-policy` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cookie-policy` }],
  }),
  component: CookiePolicy,
});

function CookiePolicy() {
  return (
    <LegalPage
      eyebrow="Informativa cookie"
      title="Cookie"
      titleAccent="policy"
      intro="Questo documento spiega quali cookie e strumenti di tracciamento utilizza il sito uniqueparfume.com, a quali finalità rispondono e come puoi controllarli, ai sensi dell'art. 122 del Codice privacy e delle Linee guida del Garante del 10 giugno 2021."
      updatedAt={LEGAL_UPDATED_AT}
    >
      <LegalSection title="1. Cosa sono i cookie">
        <p>
          I cookie sono piccoli file di testo che i siti visitati inviano al tuo dispositivo, dove
          vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
          Accanto ai cookie esistono strumenti analoghi — come il <em>localStorage</em> del browser
          e i pixel di tracciamento — che questa informativa tratta allo stesso modo.
        </p>
        <p>
          I cookie possono essere installati dal gestore del sito (<em>di prima parte</em>) o da
          soggetti terzi (<em>di terza parte</em>), e possono restare attivi per la sola sessione di
          navigazione o per un periodo determinato (<em>cookie persistenti</em>).
        </p>
      </LegalSection>

      <LegalSection title="2. Cookie tecnici e necessari">
        <p>
          Servono a far funzionare il sito e a ricordare le tue scelte. Non richiedono consenso e
          non possono essere disattivati tramite il pannello delle preferenze.
        </p>
        <CookieTable
          rows={[
            {
              name: "up-cookie-consent",
              provider: "Unique Parfume (prima parte)",
              purpose:
                "Memorizza nel localStorage del browser la scelta espressa sui cookie e la data in cui è stata prestata, così da non riproporre il banner a ogni visita e da conservare la prova del consenso.",
              duration: "Fino a cancellazione manuale o all'aggiornamento del documento",
            },
            {
              name: "Log e cookie tecnici di sessione",
              provider: "Fornitore di hosting (prima parte)",
              purpose:
                "Garantiscono la corretta erogazione delle pagine, la ripartizione del traffico e la sicurezza del sito.",
              duration: "Durata della sessione",
            },
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Cookie statistici">
        <p>
          Consentono di misurare in forma aggregata l'uso del sito. Alla data di ultimo
          aggiornamento di questo documento non è attivo alcuno strumento di statistica: la
          categoria resta disponibile nel pannello delle preferenze e, se in futuro attiveremo uno
          di questi strumenti, sarà caricato solo dopo il tuo consenso e descritto qui.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookie di marketing">
        <p>
          Vengono installati solo se presti il consenso e permettono di riconoscere il visitatore
          per proporre comunicazioni pertinenti.
        </p>
        <CookieTable
          rows={[
            {
              name: "__kla_id e identificativi collegati",
              provider: "Klaviyo, Inc. (terza parte)",
              purpose:
                "Tracciamento onsite della piattaforma di email marketing Klaviyo: associa la navigazione a un profilo per misurare l'interesse verso i contenuti e personalizzare le comunicazioni.",
              duration: "Fino a 2 anni",
            },
          ]}
        />
        <p>
          Informativa del fornitore:{" "}
          <LegalLink href="https://www.klaviyo.com/legal/privacy-notice">
            klaviyo.com/legal/privacy-notice
          </LegalLink>
          . Klaviyo, Inc. ha sede negli Stati Uniti: il trasferimento dei dati avviene con le
          garanzie descritte nella <LegalLink href="/privacy">privacy policy</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="5. Servizi di terze parti senza cookie">
        <p>
          Alcuni contenuti sono richiamati da server esterni che, pur non installando cookie sul tuo
          dispositivo, ricevono il tuo indirizzo IP per poter erogare la risorsa:
        </p>
        <LegalList
          items={[
            <>
              <span className="text-ivory">Google Fonts</span> (Google Ireland Limited), per il
              caricamento dei caratteri tipografici del sito.
            </>,
            <>
              <span className="text-ivory">WhatsApp</span> (WhatsApp Ireland Limited): il pulsante
              presente sul sito è un semplice collegamento e attiva un trattamento solo se scegli di
              aprirlo.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Come gestire il consenso">
        <p>
          Alla prima visita un banner ti permette di accettare tutti i cookie, rifiutarli tutti o
          scegliere categoria per categoria. Finché non compi una scelta, nessun cookie non
          necessario viene installato.
        </p>
        <p>
          Puoi modificare o revocare la tua decisione in qualsiasi momento, con la stessa facilità
          con cui l'hai prestata, usando il pulsante «Preferenze cookie» presente nel footer di ogni
          pagina oppure qui sotto.
        </p>
        <p>
          <button
            type="button"
            onClick={openConsentPreferences}
            className="mt-2 inline-flex items-center justify-center border border-gold/35 px-6 py-3 text-[0.62rem] uppercase tracking-[0.3em] text-gold transition-all duration-500 hover:border-gold hover:bg-gold/10"
          >
            Gestisci le preferenze cookie
          </button>
        </p>
        <p>
          In alternativa puoi bloccare o cancellare i cookie dalle impostazioni del tuo browser:{" "}
          <LegalLink href="https://support.google.com/chrome/answer/95647">Chrome</LegalLink>,{" "}
          <LegalLink href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie">
            Firefox
          </LegalLink>
          ,{" "}
          <LegalLink href="https://support.apple.com/it-it/guide/safari/sfri11471/mac">
            Safari
          </LegalLink>
          ,{" "}
          <LegalLink href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09">
            Edge
          </LegalLink>
          . La disattivazione dei cookie tecnici può compromettere il corretto funzionamento del
          sito.
        </p>
      </LegalSection>

      <LegalSection title="7. Titolare del trattamento e diritti">
        <p>
          Titolare del trattamento è Universal Commerce S.R.L., sede legale in Via Acqua delle Noci
          4, 83013 Mercogliano (AV), P.IVA e C.F. 03236080648, contattabile all'indirizzo{" "}
          <LegalLink href="mailto:elisabetta@uniqueparfume.com">
            elisabetta@uniqueparfume.com
          </LegalLink>
          .
        </p>
        <p>
          Le finalità, le basi giuridiche, i tempi di conservazione e i diritti che puoi esercitare
          sui dati raccolti tramite cookie sono descritti in dettaglio nella{" "}
          <LegalLink href="/privacy">privacy policy</LegalLink>. Hai in ogni caso diritto di
          proporre reclamo al Garante per la protezione dei dati personali (
          <LegalLink href="https://www.garanteprivacy.it">www.garanteprivacy.it</LegalLink>).
        </p>
      </LegalSection>

      <LegalSection title="8. Aggiornamenti">
        <p>
          Questo documento viene aggiornato ogni volta che cambiano gli strumenti utilizzati dal
          sito. Se le modifiche riguardano cookie soggetti a consenso, ti verrà richiesta nuovamente
          una scelta.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

type CookieRow = {
  name: string;
  provider: string;
  purpose: ReactNode;
  duration: string;
};

function CookieTable({ rows }: { rows: CookieRow[] }) {
  return (
    <div className="mt-6 space-y-px overflow-hidden border border-gold/20">
      {rows.map((row) => (
        <div key={row.name} className="border-b border-gold/15 p-5 last:border-b-0 md:p-6">
          <p className="font-display text-lg text-gold md:text-xl">{row.name}</p>
          <dl className="mt-4 grid grid-cols-1 gap-3 text-[0.85rem] leading-[1.85] sm:grid-cols-[8rem_1fr] sm:gap-x-6">
            <dt className="text-[0.62rem] uppercase tracking-[0.28em] text-ivory-dim/50">
              Fornitore
            </dt>
            <dd className="text-ivory-dim">{row.provider}</dd>
            <dt className="text-[0.62rem] uppercase tracking-[0.28em] text-ivory-dim/50">
              Finalità
            </dt>
            <dd className="text-ivory-dim">{row.purpose}</dd>
            <dt className="text-[0.62rem] uppercase tracking-[0.28em] text-ivory-dim/50">Durata</dt>
            <dd className="text-ivory-dim">{row.duration}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
}

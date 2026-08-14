import { createFileRoute } from "@tanstack/react-router";

import { LegalLink, LegalList, LegalPage, LegalSection } from "@/components/LegalPage";
import { LEGAL_UPDATED_AT, SITE_NAME, SITE_URL } from "@/lib/site";

const TITLE = `Privacy Policy - ${SITE_NAME}`;
const DESCRIPTION =
  "Informativa sul trattamento dei dati personali ai sensi degli articoli 13 e 14 del Regolamento UE 2016/679 (GDPR) per il sito Unique Parfume.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/privacy` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Informativa privacy"
      title="Privacy"
      titleAccent="policy"
      intro="Informativa resa ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.lgs. 196/2003 come modificato dal D.lgs. 101/2018, per chi visita questo sito o ci contatta."
      updatedAt={LEGAL_UPDATED_AT}
    >
      <LegalSection title="1. Titolare del trattamento">
        <p>
          Il titolare del trattamento è{" "}
          <strong className="text-ivory">Universal Commerce S.R.L.</strong>, di cui Unique Parfume è
          un progetto, con sede legale in Via Acqua delle Noci 4, 83013 Mercogliano (AV), P.IVA e
          C.F. 03236080648.
        </p>
        <p>
          Per ogni questione relativa ai dati personali puoi scrivere a{" "}
          <LegalLink href="mailto:elisabetta@uniqueparfume.com">
            elisabetta@uniqueparfume.com
          </LegalLink>{" "}
          o telefonare al <span className="text-ivory">339 534 5486</span>.
        </p>
        <p>
          Il titolare non ha nominato un Responsabile della protezione dei dati (DPO), non
          ricorrendone i presupposti di legge.
        </p>
      </LegalSection>

      <LegalSection title="2. Quali dati trattiamo">
        <LegalList
          items={[
            <>
              <span className="text-ivory">Dati di contatto che ci fornisci tu.</span> Nome,
              indirizzo email, numero di telefono, nome dell'azienda e ogni informazione contenuta
              nei messaggi che ci invii via email, WhatsApp o telefono, ad esempio per richiedere un
              preventivo.
            </>,
            <>
              <span className="text-ivory">Dati di navigazione.</span> I sistemi informatici e le
              procedure software del sito acquisiscono, nel normale esercizio, alcuni dati la cui
              trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet:
              indirizzo IP, tipo di browser e sistema operativo, data e ora della richiesta, pagine
              visitate. Questi dati sono usati per garantire il funzionamento e la sicurezza del
              sito e sono conservati nei log tecnici del fornitore di hosting.
            </>,
            <>
              <span className="text-ivory">Dati raccolti tramite cookie e tecnologie simili.</span>{" "}
              Solo previo tuo consenso, come descritto nella{" "}
              <LegalLink href="/cookie-policy">cookie policy</LegalLink>.
            </>,
          ]}
        />
        <p>
          Il sito non prevede moduli di registrazione né aree riservate e non richiede il pagamento
          di alcun corrispettivo online.
        </p>
      </LegalSection>

      <LegalSection title="3. Perché trattiamo i dati e con quale base giuridica">
        <LegalList
          items={[
            <>
              <span className="text-ivory">Rispondere alle tue richieste</span> di informazioni,
              preventivi o campionature. Base giuridica: esecuzione di misure precontrattuali
              richieste dall'interessato (art. 6.1.b GDPR).
            </>,
            <>
              <span className="text-ivory">Gestire il rapporto commerciale</span> eventualmente
              instaurato e adempiere agli obblighi contabili e fiscali. Base giuridica: esecuzione
              del contratto (art. 6.1.b) e obbligo legale (art. 6.1.c).
            </>,
            <>
              <span className="text-ivory">Garantire il funzionamento e la sicurezza del sito</span>
              , prevenire abusi e attività fraudolente. Base giuridica: legittimo interesse del
              titolare (art. 6.1.f).
            </>,
            <>
              <span className="text-ivory">Inviarti comunicazioni commerciali</span> e misurare
              l'interesse verso i nostri contenuti attraverso cookie statistici e di marketing. Base
              giuridica: il tuo consenso (art. 6.1.a), revocabile in qualsiasi momento.
            </>,
          ]}
        />
        <p>
          Il conferimento dei dati di contatto è facoltativo, ma senza di essi non possiamo dare
          seguito alla tua richiesta. Il consenso ai cookie non necessari è sempre libero: negarlo
          non limita la consultazione del sito.
        </p>
      </LegalSection>

      <LegalSection title="4. Come trattiamo i dati">
        <p>
          I dati sono trattati con strumenti elettronici e, in misura residuale, cartacei, adottando
          misure tecniche e organizzative adeguate a garantirne sicurezza e riservatezza. L'accesso
          è riservato al personale autorizzato e istruito ai sensi dell'art. 29 GDPR.
        </p>
        <p>
          Non effettuiamo processi decisionali automatizzati né profilazione produttiva di effetti
          giuridici sull'interessato ai sensi dell'art. 22 GDPR.
        </p>
      </LegalSection>

      <LegalSection title="5. A chi comunichiamo i dati">
        <p>
          I dati non sono diffusi. Possono essere comunicati a soggetti che agiscono come
          responsabili del trattamento, nominati ai sensi dell'art. 28 GDPR, o come autonomi
          titolari quando la legge lo prevede:
        </p>
        <LegalList
          items={[
            <>
              fornitori di servizi di hosting, rete di distribuzione dei contenuti e manutenzione
              del sito;
            </>,
            <>
              fornitori di servizi di posta elettronica e di email marketing, tra cui{" "}
              <span className="text-ivory">Klaviyo, Inc.</span>;
            </>,
            <>consulenti fiscali, contabili e legali, nei limiti dell'incarico ricevuto;</>,
            <>
              autorità pubbliche e organi di vigilanza, quando la comunicazione è imposta da un
              obbligo di legge o necessaria per accertare o difendere un diritto in sede
              giudiziaria.
            </>,
          ]}
        />
        <p>
          Se ci contatti tramite WhatsApp, la conversazione avviene sulla piattaforma di WhatsApp
          Ireland Limited, che tratta i dati come autonomo titolare secondo la propria informativa.
        </p>
      </LegalSection>

      <LegalSection title="6. Trasferimenti fuori dallo Spazio Economico Europeo">
        <p>
          Alcuni fornitori, in particolare Klaviyo, Inc. e i servizi di font di Google, possono
          trattare dati negli Stati Uniti. In questi casi il trasferimento avviene sulla base di una
          decisione di adeguatezza della Commissione europea (EU-U.S. Data Privacy Framework) oppure
          delle Clausole Contrattuali Standard adottate dalla Commissione, integrate da misure
          supplementari di sicurezza. Puoi chiederci copia delle garanzie adottate scrivendo ai
          contatti indicati al punto 1.
        </p>
      </LegalSection>

      <LegalSection title="7. Per quanto tempo conserviamo i dati">
        <LegalList
          items={[
            <>
              <span className="text-ivory">Richieste di informazioni e preventivi:</span> fino a 24
              mesi dall'ultimo contatto, salvo che ne derivi un rapporto contrattuale.
            </>,
            <>
              <span className="text-ivory">Dati contrattuali, contabili e fiscali:</span> 10 anni
              dalla conclusione del rapporto, come previsto dalla normativa civilistica e fiscale.
            </>,
            <>
              <span className="text-ivory">Comunicazioni commerciali:</span> fino alla revoca del
              consenso o alla richiesta di cancellazione.
            </>,
            <>
              <span className="text-ivory">Log tecnici di navigazione:</span> per il tempo
              strettamente necessario alla sicurezza del sito, di norma non oltre 12 mesi.
            </>,
            <>
              <span className="text-ivory">Prova del consenso ai cookie:</span> secondo quanto
              indicato nella <LegalLink href="/cookie-policy">cookie policy</LegalLink>.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="8. I tuoi diritti">
        <p>In qualsiasi momento puoi esercitare i diritti previsti dagli artt. 15-22 GDPR:</p>
        <LegalList
          items={[
            <>accedere ai tuoi dati e ottenerne copia;</>,
            <>chiederne la rettifica o l'aggiornamento;</>,
            <>chiederne la cancellazione, nei casi previsti dalla legge;</>,
            <>chiedere la limitazione del trattamento;</>,
            <>opporti al trattamento fondato sul legittimo interesse;</>,
            <>ricevere i dati in formato strutturato e chiederne la portabilità;</>,
            <>
              revocare il consenso prestato, in ogni momento e senza pregiudicare la liceità del
              trattamento effettuato prima della revoca.
            </>,
          ]}
        />
        <p>
          Per esercitarli è sufficiente scrivere a{" "}
          <LegalLink href="mailto:elisabetta@uniqueparfume.com">
            elisabetta@uniqueparfume.com
          </LegalLink>
          . Rispondiamo entro un mese dalla ricezione della richiesta.
        </p>
        <p>
          Se ritieni che il trattamento violi il Regolamento, puoi proporre reclamo al Garante per
          la protezione dei dati personali (
          <LegalLink href="https://www.garanteprivacy.it">www.garanteprivacy.it</LegalLink>) o
          ricorrere all'autorità giudiziaria.
        </p>
      </LegalSection>

      <LegalSection title="9. Minori">
        <p>
          Il sito si rivolge a un pubblico adulto e non è destinato a minori di 14 anni. Non
          raccogliamo consapevolmente dati di minori; se ci accorgiamo di averlo fatto, li
          cancelliamo senza indugio.
        </p>
      </LegalSection>

      <LegalSection title="10. Link verso altri siti">
        <p>
          Il sito contiene collegamenti verso piattaforme di terze parti (ad esempio WhatsApp). Il
          titolare non risponde del trattamento dei dati effettuato da tali soggetti: ti invitiamo a
          leggere le rispettive informative.
        </p>
      </LegalSection>

      <LegalSection title="11. Modifiche a questa informativa">
        <p>
          Questa informativa può essere aggiornata per adeguarla a modifiche normative o
          all'evoluzione dei servizi offerti. La versione pubblicata su questa pagina, con la data
          di ultimo aggiornamento in alto, è sempre quella vigente.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

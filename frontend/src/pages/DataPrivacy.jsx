import React from 'react';
import './DataPrivacy.scss';
import { useTranslation } from 'react-i18next';

const DataPrivacy = () => {
  return (
    <div className="data-privacy-page">
      <div className="container">
        <h1>Datenschutzerklärung der THANK KOMPANY GmbH Stand: Januar 2025</h1>

        <section>
          <h2>Einleitung</h2>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie darüber, wie wir personenbezogene Daten auf unserer Website verarbeiten. Grundlage hierfür ist die Datenschutz-Grundverordnung (DSGVO).
          </p>
        </section>

        <section>
          <h2>Verantwortlicher THANK KOMPANY GmbH</h2>
          <p>
            Mundenheimer Str. 177 <br />
            67061 Ludwigshafen <br />
            Deutschland <br />

            E-Mail: privacy@thankompany.com <br />
            Telefon: ‪+49 176 684 054 56‬ <br />
            Datenschutzbeauftragter: „kein Datenschutzbeauftragter bestellt“

          </p>
        </section>

        <section>
          <h2>Erhebung und Speicherung personenbezogener Daten</h2>
         <p>
            Wir verarbeiten personenbezogene Daten nur, wenn Sie uns diese übermitteln oder wenn dies für die Nutzung unserer Website technisch notwendig ist.
            Verarbeitete Daten können umfassen:
            <ul>
              <li>Kontaktdaten (Hector Kamdowm, privacy@thankompany.com, ‪+49 176 684 054 56‬)</li>
              <li> Technische Daten (IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs)</li>
              <li>Inhaltsdaten aus Formularen</li>
            </ul>

         </p>
        </section>

        <section>
          <h2>Zweck der Datenverarbeitung</h2>
            <p>
              Ihre Daten werden verarbeitet für:
              <ul>
                <li>Kontaktaufnahme und Kommunikation</li>
                <li>Vertragsvorbereitung und -erfüllung</li>
                <li>IT-Sicherheit und Funktionsfähigkeit der Website</li>
                <li>Analyse und Optimierung unseres Online-Angebots</li>
              </ul>
            </p>
        </section>

        <section>
          <h2>Rechtsgrundlagen</h2>
          <p>
            Wir verarbeiten Daten gemäß:
            <ul>
              <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
              <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung)</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
            </ul>
          </p>
        </section>

        <section>
          <h2>Cookies und Tracking</h2>
            <p>
                Unsere Website verwendet technisch notwendige Cookies. Analyse- oder Marketing-Cookies werden nur mit Ihrer ausdrücklichen Einwilligung eingesetzt. Sie können Ihre Einwilligung jederzeit über das Cookie-Banner oder per E-Mail widerrufen.
            </p>
        </section>

        <section>
          <h2>Weitergabe von Daten</h2>
            <p>
                Wir geben personenbezogene Daten nur weiter, wenn:
                <ul>
                  <li>dies zur Vertragserfüllung notwendig ist</li>
                  <li>eine gesetzliche Verpflichtung besteht</li>
                  <li>eine Weitergabe an Dienstleister (z. B. Hosting) notwendig ist</li>
                </ul>
            </p>
        </section>

        <section>
          <h2>Datenübermittlung in Drittländer</h2>
            <p>
                Eine Übermittlung in Länder außerhalb der EU erfolgt nur, wenn geeignete Garantien gemäß Art. 46 DSGVO bestehen (z. B. EU-Standardvertragsklauseln) oder Sie ausdrücklich einwilligen.
            </p>
        </section>

        <section>
          <h2>Speicherdauer</h2>
            <p>
                Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. <br />
                Beispiele:
                  <ul>
                    <li>Kontaktanfragen: 6 Monate</li>
                    <li>Vertragsdaten: 10 Jahre (gemäß steuerrechtlichen Vorgaben)</li>
                  </ul>

            </p>
        </section>

        <section>
          <h2>Ihre Rechte</h2>
            <p>
                Sie haben folgende Rechte:
                  <ul>
                    <li>Auskunft (Art. 15 DSGVO)</li>
                    <li>Berichtigung (Art. 16 DSGVO)</li>
                    <li>Löschung (Art. 17 DSGVO)</li>
                    <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruch (Art. 21 DSGVO)</li>
                    <li>Widerruf von Einwilligungen</li>
                  </ul>
                Anfragen richten Sie bitte an: privacy@thankompany.com. <br />
                Sie haben zudem das Recht, sich bei einer Aufsichtsbehörde zu beschweren (z. B. Sächsischer Datenschutzbeauftragter).

            </p>
        </section>

        <section>
          <h2>Sicherheit</h2>
            <p>
                Wir verwenden aktuelle technische und organisatorische Maßnahmen (z. B. SSL-/TLS-Verschlüsselung) zum Schutz Ihrer Daten.

            </p>
        </section>

        <section>
          <h2>Änderungen dieser Datenschutzerklärung</h2>
            <p>
                Wir behalten uns vor, diese Erklärung bei Bedarf anzupassen, um rechtliche oder technische Änderungen zu berücksichtigen. Die aktuelle Version ist jederzeit unter www.thankompany/privacy abrufbar.
            </p>
        </section>
      </div>
    </div>
  );
};

export default DataPrivacy;

import React from 'react';
import './Impresum.scss';
import { useTranslation } from 'react-i18next';

const Impresum = () => {
  return (
    <div className="impresum-page">
      <div className="container">
        <h1>Impresum</h1>

        <section>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            THANK KOMPANY GmbH<br />
            Mundenheimer Str. 177<br />
            67061 Ludwigshafen
          </p>
        </section>

        <section>
          <h2>Vertreten durch:</h2>
          <p>
            Herrn Justard Tankou<br />
            Herrn Hector Kamdoum<br />
            Geschäftsführer
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: +49 176 267 792 75<br />
            E-Mail: info@thankompany.com
          </p>
        </section>

        <section>
          <h2>Registereintrag</h2>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Mannheim<br />
            Registernummer: HRB 746268
          </p>
        </section>

        <section>
          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
            DE358414376
          </p>
        </section>
      </div>
    </div>
  );
};

export default Impresum;

import React, { useState } from 'react';
import './Logistics.scss';
import { useTranslation } from 'react-i18next';

const Logistics = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="logistics-page-v4">
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-h1">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" aria-hidden="true"></span>
            <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_hero_badge') }} />
          </div>
          <span className="hero-sup" dangerouslySetInnerHTML={{ __html: t('logistics_africa_hero_sup') }} />
          <h1 id="hero-h1" className="hero-title" dangerouslySetInnerHTML={{ __html: t('logistics_africa_hero_title') }} />
          <p className="hero-desc" dangerouslySetInnerHTML={{ __html: t('logistics_africa_hero_desc') }} />
          <div className="hero-actions">
            <a href="#contact" className="btn btn--primary" dangerouslySetInnerHTML={{ __html: t('logistics_africa_hero_btn_primary') }} />
            <a href="https://smartls.cm" target="_blank" rel="noopener noreferrer" className="btn btn--ghost" dangerouslySetInnerHTML={{ __html: t('logistics_africa_hero_btn_ghost') }} />
          </div>
        </div>
        <div className="hero-panel" aria-hidden="true">
          <div className="stat-card r">
            <div className="stat-num">6+</div>
            <div>
              <strong className="stat-title" dangerouslySetInnerHTML={{ __html: t('logistics_africa_hero_stat1_title') }} />
              <span className="stat-sub">CM · TD · CF · CG · GA · GQ</span>
            </div>
          </div>
          <div className="stat-card r">
            <div className="stat-num">48h</div>
            <div>
              <strong className="stat-title" dangerouslySetInnerHTML={{ __html: t('logistics_africa_hero_stat2_title') }} />
              <span className="stat-sub">Import/Export · Port of Douala</span>
            </div>
          </div>
          <div className="stat-card r">
            <div className="stat-num">3PL</div>
            <div>
              <strong className="stat-title" dangerouslySetInnerHTML={{ __html: t('logistics_africa_hero_stat3_title') }} />
              <span className="stat-sub">Air · Land · Sea · Warehousing</span>
            </div>
          </div>
          <div className="stat-card r">
            <div className="stat-num">WCA</div>
            <div>
              <strong className="stat-title" dangerouslySetInnerHTML={{ __html: t('logistics_africa_hero_stat4_title') }} />
              <span className="stat-sub">WCA · FIATA · JC Trans</span>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER BAND */}
      <div className="partner-band" role="complementary">
        <p dangerouslySetInnerHTML={{ __html: t('logistics_africa_partner_band') }} />
        <div className="band-dot" aria-hidden="true"></div>
        <p dangerouslySetInnerHTML={{ __html: t('logistics_africa_partner_band_loc') }} />
      </div>

      {/* TRUST STRIP */}
      <div className="trust-strip" aria-label="Reference Clients">
        <p className="trust-label" dangerouslySetInnerHTML={{ __html: t('logistics_africa_trust_label') }} />
        <div className="trust-logos">
          <span className="trust-logo">UNFPA</span><span className="trust-logo">WFP</span><span className="trust-logo">GIZ</span>
          <span className="trust-logo">Maersk</span><span className="trust-logo">CMA CGM</span><span className="trust-logo">Hapag-Lloyd</span>
          <span className="trust-logo">Larsen &amp; Toubro</span><span className="trust-logo">Tata Group</span>
          <span className="trust-logo">DHL</span><span className="trust-logo">MSC</span><span className="trust-logo">SGS</span>
          <span className="trust-logo">MINUSCA / UN</span><span className="trust-logo">CHAI</span>
        </div>
      </div>

      {/* SYNERGY */}
      <section className="synergy" id="partnership" aria-labelledby="syn-h2">
        <div className="wrap">
          <div className="section-eyebrow r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_eyebrow') }} />
          <h2 id="syn-h2" className="section-title r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_title') }} />
          <p className="section-lead r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_lead') }} />
          
          <div className="synergy-grid">
            <div className="co-card co-card--blue r">
              <div className="co-tag tag-b" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_tag1') }} />
              <div className="co-name">Thank Kompany GmbH</div>
              <p className="co-desc" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_desc1') }} />
              <div className="chips">
                <span className="chip">SAP EAM/PM</span>
                <span className="chip" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_chip_auto') }} />
                <span className="chip" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_chip_soft') }} />
                <span className="chip" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_chip_digi') }} />
              </div>
            </div>
            <div className="co-card co-card--gold r">
              <div className="co-tag tag-g" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_tag2') }} />
              <div className="co-name">Smart Logistics &amp; Services Ltd</div>
              <p className="co-desc" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_desc2') }} />
              <div className="chips">
                <span className="chip" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_chip_air') }} />
                <span className="chip" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_chip_sea') }} />
                <span className="chip" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_chip_land') }} />
                <span className="chip" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_chip_cust') }} />
                <span className="chip" dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_chip_ware') }} />
              </div>
            </div>
          </div>
          
          <div className="synergy-bridge r">
            <svg className="bridge-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            <p dangerouslySetInnerHTML={{ __html: t('logistics_africa_syn_bridge') }} />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits" id="benefits" aria-labelledby="bene-h2">
        <div className="wrap">
          <div className="section-eyebrow r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_eyebrow') }} />
          <h2 id="bene-h2" className="section-title r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_title') }} />
          <p className="section-lead r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_bene_lead') }} />
          
          <div className="grid-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="feat-box r">
                <svg className="feat-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                <h3 className="feat-title" dangerouslySetInnerHTML={{ __html: t(`logistics_africa_bene_t${i}`) }} />
                <p dangerouslySetInnerHTML={{ __html: t(`logistics_africa_bene_d${i}`) }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-sect" id="services" aria-labelledby="srv-h2">
        <div className="wrap">
          <div className="section-eyebrow r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_eyebrow') }} />
          <h2 id="srv-h2" className="section-title section-title--w r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_title') }} />
          <p className="section-lead section-lead--w r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_srv_lead') }} />
          
          <div className="grid-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="srv-card r">
                <h3 className="srv-title" dangerouslySetInnerHTML={{ __html: t(`logistics_africa_srv_t${i}`) }} />
                <p className="srv-desc" dangerouslySetInnerHTML={{ __html: t(`logistics_africa_srv_d${i}`) }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries" id="industries" aria-labelledby="ind-h2">
        <div className="wrap">
          <div className="section-eyebrow r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_eyebrow') }} />
          <h2 id="ind-h2" className="section-title r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_title') }} />
          <p className="section-lead r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_ind_lead') }} />
          
          <div className="grid-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="ind-card r">
                <h3 className="ind-title" dangerouslySetInnerHTML={{ __html: t(`logistics_africa_ind_t${i}`) }} />
                <p dangerouslySetInnerHTML={{ __html: t(`logistics_africa_ind_d${i}`) }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="coverage" id="coverage" aria-labelledby="cov-h2">
        <div className="wrap">
          <div className="coverage-inner">
            <div className="cov-text r">
              <div className="section-eyebrow" dangerouslySetInnerHTML={{ __html: t('logistics_africa_cov_eyebrow') }} />
              <h2 id="cov-h2" className="section-title" dangerouslySetInnerHTML={{ __html: t('logistics_africa_cov_title') }} />
              <p className="section-lead" dangerouslySetInnerHTML={{ __html: t('logistics_africa_cov_lead') }} />
              
              <div className="cov-stats">
                <div className="cov-stat">
                  <span className="cov-sn">6</span>
                  <div>
                    <strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_cov_k1_title') }} />
                    <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_cov_k1_sub') }} />
                  </div>
                </div>
                <div className="cov-stat">
                  <span className="cov-sn">48h</span>
                  <div>
                    <strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_cov_k2_title') }} />
                    <span dangerouslySetInnerHTML={{ __html: t('logistics_africa_cov_k2_sub') }} />
                  </div>
                </div>
                <div className="cov-stat">
                  <span className="cov-sn">50+</span>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_cov_k3_title') }} />
                  </div>
                </div>
                <div className="cov-stat">
                  <span className="cov-sn">3</span>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <strong dangerouslySetInnerHTML={{ __html: t('logistics_africa_cov_k4_title') }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="cov-map r" aria-hidden="true">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="400" rx="24" fill="var(--surface-2)" />
                <circle cx="200" cy="200" r="120" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 4" opacity="0.2" />
                <circle cx="200" cy="200" r="80" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
                <circle cx="200" cy="200" r="40" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
                
                <circle cx="200" cy="200" r="8" fill="var(--accent)" />
                <circle cx="200" cy="200" r="24" stroke="var(--accent)" strokeWidth="2" opacity="0.5" />
                
                <circle cx="140" cy="160" r="6" fill="var(--primary)" />
                <path d="M140 160 L200 200" stroke="var(--primary)" strokeWidth="2" opacity="0.5" />
                
                <circle cx="260" cy="140" r="6" fill="var(--primary)" />
                <path d="M260 140 L200 200" stroke="var(--primary)" strokeWidth="2" opacity="0.5" />
                
                <circle cx="240" cy="260" r="6" fill="var(--primary)" />
                <path d="M240 260 L200 200" stroke="var(--primary)" strokeWidth="2" opacity="0.5" />
                
                <circle cx="160" cy="250" r="6" fill="var(--primary)" />
                <path d="M160 250 L200 200" stroke="var(--primary)" strokeWidth="2" opacity="0.5" />
                
                <text x="215" y="195" fill="var(--slate-700)" style={{ fontSize: '12px', fontWeight: 600 }}>Douala</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" aria-labelledby="testi-h2">
        <div className="wrap">
          <div className="section-eyebrow r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_testi_eyebrow') }} />
          <h2 id="testi-h2" className="section-title r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_testi_title') }} />
          
          <div className="grid-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="testi-card r">
                <div className="testi-stars" aria-hidden="true">★★★★★</div>
                <p className="testi-quote" dangerouslySetInnerHTML={{ __html: t(`logistics_africa_testi_q${i}`) }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG */}
      <section className="esg" aria-labelledby="esg-h2">
        <div className="wrap">
          <div className="section-eyebrow r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_esg_eyebrow') }} />
          <h2 id="esg-h2" className="section-title r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_esg_title') }} />
          <p className="section-lead r" dangerouslySetInnerHTML={{ __html: t('logistics_africa_esg_lead') }} />
          
          <div className="grid-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="esg-box r">
                <h3 className="esg-t" dangerouslySetInnerHTML={{ __html: t(`logistics_africa_esg_t${i}`) }} />
                <p dangerouslySetInnerHTML={{ __html: t(`logistics_africa_esg_d${i}`) }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-sect" aria-labelledby="faq-h2">
        <div className="wrap">
          <div className="faq-inner">
            <div className="faq-header r">
              <div className="section-eyebrow" dangerouslySetInnerHTML={{ __html: t('logistics_africa_faq_eyebrow') }} />
              <h2 id="faq-h2" className="section-title" dangerouslySetInnerHTML={{ __html: t('logistics_africa_faq_title') }} />
              <p className="section-lead" dangerouslySetInnerHTML={{ __html: t('logistics_africa_faq_lead') }} />
              <a href="#contact" className="btn btn--primary" dangerouslySetInnerHTML={{ __html: t('logistics_africa_faq_cta') }} />
            </div>
            <div className="faq-list r">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                  <div className="faq-q">
                    <span dangerouslySetInnerHTML={{ __html: t(`logistics_africa_faq_q${i}`) }} />
                    <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                  <div className="faq-a">
                    <p dangerouslySetInnerHTML={{ __html: t(`logistics_africa_faq_a${i}`) }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sect" id="contact" aria-labelledby="cta-h2">
        <div className="cta-inner">
          <h2 id="cta-h2" className="cta-title" dangerouslySetInnerHTML={{ __html: t('logistics_africa_cta_title') }} />
          <p className="cta-desc" dangerouslySetInnerHTML={{ __html: t('logistics_africa_cta_desc') }} />
          <div className="cta-btns">
            <a href="mailto:info@smartls.cm" className="btn btn--primary" dangerouslySetInnerHTML={{ __html: t('logistics_africa_cta_btn1') }} />
            <a href="https://smartls.cm/smart-quote" target="_blank" rel="noopener noreferrer" className="btn btn--ghost" dangerouslySetInnerHTML={{ __html: t('logistics_africa_cta_btn2') }} />
            <a href="https://wa.me/237696122511" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">WhatsApp ↗</a>
          </div>
          <div className="cta-contacts">
            <a href="mailto:info@smartls.cm" className="cta-ci"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>info@smartls.cm</a>
            <div className="cta-vsep" aria-hidden="true"></div>
            <a href="tel:+237233420281" className="cta-ci"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5 2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 18.19Z"/></svg>+237 233 420 281</a>
            <div className="cta-vsep" aria-hidden="true"></div>
            <span className="cta-ci">📍 B.P. 5120, Douala, Cameroun</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Logistics;

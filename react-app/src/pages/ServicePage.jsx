import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { servicePages } from '../data/services';
import { ArrowRight } from '../components/Icons';
import useScrollReveal from '../hooks/useScrollReveal';
import './ServicePage.css';

export default function ServicePage() {
  const { slug } = useParams();
  const data = servicePages[slug];
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenFaq(null);
  }, [slug]);

  useScrollReveal();

  if (!data) {
    return (
      <div className="sp-not-found">
        <h1>Page Not Found</h1>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="sp-hero">
        {data.hero.image && (
          <>
            <img src={data.hero.image} alt="" className="sp-hero-bg" loading="eager" />
            <div className="sp-hero-overlay" />
          </>
        )}
        <div className="sp-hero-inner">
          <Link to="/" className="sp-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
          </Link>
          <h1 className="sp-hero-title">{data.hero.heading}</h1>
          <p className="sp-hero-desc">{data.hero.description}</p>
        </div>
      </section>

      {/* Coverage Grid */}
      <section className="section" id="coverages">
        <div className="sp-section-header reveal">
          <div className="section-label">Coverage Options</div>
          <h2 className="section-title">What we <em>cover</em></h2>
        </div>
        <div className="sp-coverage-grid">
          {data.coverages.map((c, i) => (
            <div className={`sp-coverage-card reveal reveal-delay-${(i % 3) + 1}`} key={c.title}>
              <h3 className="sp-coverage-title">{c.title}</h3>
              <p className="sp-coverage-desc">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Geneva */}
      <div className="section-alt">
        <div className="section-wrap">
          <div className="sp-section-header reveal">
            <div className="section-label">Why Geneva</div>
            <h2 className="section-title">Why clients <em>choose us</em></h2>
          </div>
          <div className="sp-why-grid">
            {data.whyGeneva.map((w, i) => (
              <div className={`sp-why-item reveal reveal-delay-${i + 1}`} key={w.title}>
                <div className="sp-why-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="sp-why-title">{w.title}</h3>
                  <p className="sp-why-desc">{w.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="section">
        <div className="sp-section-header reveal">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title">Frequently <em>asked</em></h2>
        </div>
        <div className="sp-faq-list">
          {data.faqs.map((faq, i) => (
            <div
              className={`sp-faq-item reveal reveal-delay-${i + 1}${openFaq === i ? ' open' : ''}`}
              key={i}
            >
              <button className="sp-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {faq.q}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="sp-faq-a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="sp-cta">
        <div className="sp-cta-inner reveal">
          <h2 className="sp-cta-title">{data.cta.heading}</h2>
          <p className="sp-cta-desc">{data.cta.description}</p>
          <Link to="/#contact" className="btn-primary">
            Start a Conversation <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}

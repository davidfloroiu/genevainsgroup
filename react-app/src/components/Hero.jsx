import { ArrowRight, ChevronDown } from './Icons';
import { images } from '../data/services';
import './Hero.css';

export default function Hero() {
  const scrollTo = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-tag">Independent Insurance Agency — Long Grove, IL</div>
          <h1>Protection crafted around <em>your life</em></h1>
          <p className="hero-sub">
            Comprehensive home, auto, business, and life insurance strategies from an independent agency serving Long Grove, Hawthorn Woods, Barrington, Vernon Hills, and the northwest suburbs of Chicago.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('#contact')}>
              Start a Conversation <ArrowRight />
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('#services')}>
              Explore Services <ChevronDown />
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src={images.hero} alt="Professional handshake representing trust and partnership" className="hero-image" loading="eager" />
          </div>
          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Carrier Partners</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Independent</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

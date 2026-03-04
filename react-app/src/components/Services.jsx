import { Link } from 'react-router-dom';
import { serviceCards } from '../data/services';
import { ServiceIcon, ArrowRight } from './Icons';
import './Services.css';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="services-header reveal">
        <div className="section-label">What We Protect</div>
        <h2 className="section-title">Comprehensive coverage, <em>personally delivered</em></h2>
        <p className="section-subtitle">
          From your family's home to your business's future, we build layered protection strategies tailored to the way you actually live and work.
        </p>
      </div>

      <div className="services-grid">
        {serviceCards.map((s, i) => (
          <div className={`service-card reveal reveal-delay-${(i % 3) + 1}`} key={s.slug}>
            <div className="service-icon"><ServiceIcon name={s.icon} /></div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <Link to={`/${s.slug}`} className="service-link">
              Learn More <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

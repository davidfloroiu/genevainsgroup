import { useEffect, useRef } from 'react';
import './Reviews.css';

export default function Reviews() {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current && !widgetRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.trustindex.io/loader.js?1f5fb79662820457b40620ddf71';
      script.async = true;
      script.defer = true;
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <section className="section" id="reviews">
      <div className="reviews-header reveal">
        <div className="section-label">Client Reviews</div>
        <h2 className="section-title">What our clients <em>are saying</em></h2>
        <p className="section-subtitle">Real reviews from real clients, pulled directly from Google.</p>
      </div>
      <div className="reveal" style={{ maxWidth: 1000, margin: '0 auto' }} ref={widgetRef} />
    </section>
  );
}

import useScrollReveal from '../hooks/useScrollReveal';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Services from '../components/Services';
import Process from '../components/Process';
import Differentiators from '../components/Differentiators';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <SEO
        title="Independent Insurance Agency Long Grove IL | Geneva Insurance Group"
        description="Geneva Insurance Group is an independent insurance agency serving Long Grove, Hawthorn Woods, Barrington, and Vernon Hills, IL. Home, auto, business, life, umbrella, and specialty insurance from 25+ carriers."
      />
      <Hero />
      <div className="section-divider"><hr /></div>
      <Philosophy />
      <div className="section-divider"><hr /></div>
      <Services />
      <Process />
      <Differentiators />
      <Reviews />
      <Contact />
    </>
  );
}

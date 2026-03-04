import useScrollReveal from '../hooks/useScrollReveal';
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

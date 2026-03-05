import { ShieldIcon, InfoIcon, UsersIcon } from './Icons';
import { images } from '../data/services';
import './Philosophy.css';

const values = [
  { icon: <ShieldIcon />, title: 'Integrity First', desc: "We'll tell you what you need to hear, not what's easiest to sell." },
  { icon: <InfoIcon />, title: 'Clarity Over Complexity', desc: 'We explain your coverage in plain language so you always know where you stand.' },
  { icon: <UsersIcon />, title: 'Relationship Driven', desc: "You're not a policy number. We invest in knowing your life, your risks, and your goals." },
];

export default function Philosophy() {
  return (
    <section className="section" id="philosophy">
      <div className="philosophy">
        <div className="philosophy-content reveal">
          <div className="section-label">Our Philosophy</div>
          <h2 className="section-title">Insurance should feel like <em>confidence</em>, not confusion</h2>
          <blockquote className="philosophy-blockquote">
            "We believe people deserve an insurance partner who treats their protection with the same seriousness they treat their future."
          </blockquote>
          <p className="philosophy-body">
            Geneva Insurance Group was founded on a simple conviction: the insurance experience is broken. As an independent insurance agency in Long Grove, IL, we serve families and businesses across Hawthorn Woods, Barrington, Vernon Hills, and Lake County with a different approach — one built on transparency, deep expertise, and an unwavering commitment to doing what's right for each client we serve.
          </p>
        </div>

        <div className="philosophy-visual reveal reveal-delay-2">
          <div className="philosophy-image-wrapper">
            <img src={images.philosophy} alt="Professional consultation at Geneva Insurance" className="philosophy-image" loading="lazy" />
          </div>
          <div className="philosophy-card">
            <ul className="value-list">
              {values.map((v) => (
                <li className="value-item" key={v.title}>
                  <div className="value-icon">{v.icon}</div>
                  <div>
                    <div className="value-title">{v.title}</div>
                    <div className="value-desc">{v.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

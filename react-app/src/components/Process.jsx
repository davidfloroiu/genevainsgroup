import './Process.css';

const steps = [
  { num: '01', title: 'Discovery', desc: 'We listen first. A thorough conversation about your life, assets, risk profile, and what matters most.' },
  { num: '02', title: 'Analysis', desc: 'We audit your current coverage, identify gaps, and shop across 25+ carriers for the optimal combination.' },
  { num: '03', title: 'Recommendation', desc: "A clear, side-by-side presentation of your best options — with honest guidance on what we'd choose and why." },
  { num: '04', title: 'Ongoing Service', desc: 'Annual reviews, proactive policy management, and a real person who picks up the phone when you need them.' },
];

export default function Process() {
  return (
    <div className="section-alt">
      <div className="section-wrap" id="process">
        <div className="reveal">
          <div className="section-label">Our Process</div>
          <h2 className="section-title">Four steps to <em>real protection</em></h2>
          <p className="section-subtitle">
            A deliberate, consultative approach that replaces the typical insurance sales experience with something you'll actually appreciate.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s, i) => (
            <div className={`process-step reveal reveal-delay-${i + 1}`} key={s.num}>
              <div className="process-number">{s.num}</div>
              <h3 className="process-title">{s.title}</h3>
              <p className="process-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

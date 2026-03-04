import './Differentiators.css';

const items = [
  { num: '01', title: 'True Independence', desc: "We're not captive to any single carrier. Our only loyalty is to you. That means real options and recommendations you can trust." },
  { num: '02', title: 'Claims Advocacy', desc: "When you file a claim, we don't disappear. We go to bat for you — coordinating with adjusters, pushing back when needed." },
  { num: '03', title: 'Proactive Reviews', desc: 'Life changes. So should your coverage. We schedule annual reviews and proactively reach out when things shift.' },
  { num: '04', title: 'Local. Personal. Accountable.', desc: "You'll know your agent by name, and they'll know yours. We're rooted in our community and accountable to the people we serve." },
];

export default function Differentiators() {
  return (
    <section className="section-dark diff-section" id="why-us">
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">Why Geneva</div>
          <h2 className="section-title">What sets us <em>apart</em></h2>
          <p className="section-subtitle">
            Working with an independent agency should feel different. Here's why our clients stay.
          </p>
        </div>

        <div className="diff-grid">
          <div>
            {items.slice(0, 2).map((item, i) => (
              <div className={`diff-item reveal reveal-delay-${i + 1}`} key={item.num}>
                <div className="diff-number">{item.num}</div>
                <div>
                  <h3 className="diff-title">{item.title}</h3>
                  <p className="diff-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {items.slice(2).map((item, i) => (
              <div className={`diff-item reveal reveal-delay-${i + 3}`} key={item.num}>
                <div className="diff-number">{item.num}</div>
                <div>
                  <h3 className="diff-title">{item.title}</h3>
                  <p className="diff-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

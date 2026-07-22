import Link from "next/link";

const principles = [
  ["Your plan stays authoritative", "The uploaded floor plan becomes structured geometry after review. The 3D view is a projection of that model."],
  ["Advice follows your real life", "DYH is designed to understand routines, people, existing belongings, constraints, and future needs."],
  ["Every choice stays explainable", "Meaningful recommendations will show alternatives, trade-offs, assumptions, and what still needs verification."]
];

export default function HomePage() {
  return (
    <main>
      <nav className="nav shell">
        <span className="brand">DYH<span>.</span></span>
        <span className="nav-note">Design Your Home</span>
      </nav>

      <section className="hero shell">
        <div className="eyebrow">A clearer way to design your home</div>
        <h1>Make confident home decisions before you spend.</h1>
        <p className="hero-copy">DesignYourHome will turn your own floor plan into a persistent, navigable digital twin—then help you reason through what fits, what works, and what is worth changing.</p>
        <div className="status-card" role="status">
          <div className="status-dot" />
          <div>
            <strong>Milestone 0 foundation</strong>
            <p>The product constitution and technical boundaries are in place. The first working upload-to-digital-twin slice is next.</p>
          </div>
        </div>
        <div className="hero-actions">
          <Link className="primary-button" href="/workspace">Upload a floor plan</Link>
          <span>Milestone 1 starts with your source architecture.</span>
        </div>
      </section>

      <section className="principles shell" aria-labelledby="principles-title">
        <div className="section-heading">
          <div className="eyebrow">The DYH promise</div>
          <h2 id="principles-title">Useful before beautiful.</h2>
        </div>
        <div className="principle-grid">
          {principles.map(([title, description], index) => (
            <article className="principle" key={title}>
              <span className="principle-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer shell">
        <span>DesignYourHome</span>
        <span>Built around your home, not a template.</span>
      </footer>
    </main>
  );
}

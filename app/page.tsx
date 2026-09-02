import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { getCaseIndex } from "@/lib/cases";

export default function Landing() {
  const cases = getCaseIndex();

  return (
    <div className="landing">
      {/* HERO */}
      <section className="l-hero">
        <div className="l-wrap">
          <p className="l-eyebrow">XPMI</p>
          <h1 className="l-h1">
            Strategic Intelligence Engine
          </h1>
          <p className="l-sub">
            We don't tell companies what AI features to build.
            <br />
            We identify the decisions that matter, the intelligence gaps behind them,
            and the workflows required to improve them.
          </p>
          <div className="l-ctas">
            <a href="#cases" className="btn btn-primary">Explore Cases</a>
            <a href="#questions" className="btn btn-ghost">Explore Questions</a>
          </div>
        </div>
      </section>

      {/* FEATURED MICRO-INTEL */}
      <section className="l-section" id="questions">
        <div className="l-wrap">
          <h2 className="l-h2">Featured Questions</h2>
          <p className="l-desc">
            هر سؤال از تحلیل عمیق یک کسب‌وکار استخراج شده — سؤالی که پاسخش می‌تواند تصمیم را عوض کند.
          </p>
          <div className="mi-grid">
            {cases.filter(c => c.question).map((c) => (
              <Link href={`/cases/${c.slug}`} key={c.slug} className="mi-card">
                <span className="mi-company">{c.company_en}</span>
                <span className="mi-type">{c.case_type}</span>
                <p className="mi-q">{c.question}</p>
                <span className="mi-cta">Read Case →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY — compact */}
      <section className="l-section l-dark" id="method">
        <div className="l-wrap">
          <h2 className="l-h2">How XPMI Works</h2>
          <div className="meth-flow">
            {[
              { n: "01", t: "Public Signals", d: "سیگنال‌های عمومی: محصول، رفتار بازار، استخدام، تکنولوژی، رقبا — بدون داده محرمانه" },
              { n: "02", t: "Case Report", d: "بازسازی واقعیت در هفت لایه: Reality → Risk → Future → Capability → Execution → Decision" },
              { n: "03", t: "Micro-Intel", d: "یک سؤال که شرکت احتمالاً جوابش را نمی‌داند و پاسخش تصمیم را تغییر می‌دهد" },
              { n: "04", t: "5-15 KPIs", d: "فقط آن اعدادی که واقعاً فرضیه را رد یا تأیید می‌کنند — نه ۲۰۰ جدول" },
            ].map((s) => (
              <div className="meth-step" key={s.n}>
                <span className="meth-n">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <p className="meth-golden">
            Public Signals are enough to reconstruct reality.
            <br />
            They are not enough to measure economics.
          </p>
        </div>
      </section>

      {/* CASE LIBRARY */}
      <section className="l-section" id="cases">
        <div className="l-wrap">
          <h2 className="l-h2">{cases.length} Strategic Intelligence Cases</h2>
          <div className="case-grid">
            {cases.map((c) => (
              <Link href={`/cases/${c.slug}`} key={c.slug} className="case-card">
                <div className="cc-top">
                  <span className="cc-company">{c.company_en}</span>
                  <span className="cc-type">{c.case_type}</span>
                </div>
                {c.question && <p className="cc-q">{c.question}</p>}
                <span className="cc-cta">Explore Case →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOR COMPANIES */}
      <section className="l-section l-dark" id="contact">
        <div className="l-wrap l-center">
          <h2 className="l-h2">
            Your company probably has decisions<br />
            that are made without enough intelligence.
          </h2>
          <p className="l-sub-fa">
            XPMI کمک می‌کند آن تصمیم‌ها را شناسایی کنید.
          </p>
          <ContactForm />
          <p className="l-badge">Confidential · Founder-led · Strategic Intelligence Service</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="l-footer">
        <div className="l-wrap l-center">
          <span className="lf-logo">XPMI</span>
          <p>Strategic Intelligence for High-Stakes Decisions</p>
          <p>Reality. Risk. Future. Capability. Execution.</p>
          <div className="lf-links">
            <a href="https://xp-knowledge-base.vercel.app/" target="_blank" rel="noopener">XP Protocol</a>
            <span>·</span>
            <a href="https://freshface.ir" target="_blank" rel="noopener">FreshFace</a>
            <span>·</span>
            <span>Founded by <a href="https://www.linkedin.com/in/ehsanjahangiri/" target="_blank" rel="noopener">Ehsan Jahangiri</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

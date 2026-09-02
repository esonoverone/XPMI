"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import type { CaseData } from "@/lib/cases";

/* ─── Markdown renderers ─── */
const md = {
  h1: (p: React.ComponentProps<"h1">) => <h1 className="md-h1" {...p} />,
  h2: (p: React.ComponentProps<"h2">) => <h2 className="md-h2" {...p} />,
  h3: (p: React.ComponentProps<"h3">) => <h3 className="md-h3" {...p} />,
  table: ({ children, ...p }: React.ComponentProps<"table">) => (
    <div className="table-wrap"><table className="case-table" {...p}>{children}</table></div>
  ),
  blockquote: (p: React.ComponentProps<"blockquote">) => <blockquote className="md-bq" {...p} />,
  code: ({ className, ...p }: React.ComponentProps<"code">) =>
    className?.startsWith("language-")
      ? <pre className="md-pre"><code className={className} {...p} /></pre>
      : <code className="md-code" {...p} />,
};

/* ─── Intelligence Gate ─── */
function Gate({ onUnlock, company }: { onUnlock: () => void; company: string }) {
  const [sent, setSent] = useState(false);
  const [otp, setOtp] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    console.log("XPMI Identity:", JSON.stringify(d));
    setSent(true);
  }

  function verify(e: React.FormEvent) {
    e.preventDefault();
    console.log("XPMI OTP verified:", otp);
    onUnlock();
  }

  return (
    <div className="gate">
      <div className="gate-eyebrow">Intelligence Gate</div>
      <h2 className="gate-title">Continue the Intelligence</h2>
      <p className="gate-sub">
        سیگنال را دیدید. حالا ببینید XPMI با آن چه می‌کند.
      </p>
      <p className="gate-desc">
        تحلیل کامل {company} شامل Reality، Risk Analysis، Future Scenarios،
        Capability Gaps، Execution Architecture و Strategic Decision است.
      </p>

      {!sent ? (
        <form className="gate-form" onSubmit={submit}>
          <div className="gate-row">
            <input name="firstName" placeholder="نام" required className="gate-input" />
            <input name="lastName" placeholder="نام خانوادگی" required className="gate-input" />
          </div>
          <input name="mobile" type="tel" placeholder="شماره موبایل" required className="gate-input" dir="ltr" />
          <input name="linkedin" type="url" placeholder="LinkedIn URL (اختیاری)" className="gate-input" dir="ltr" />
          <div className="gate-row">
            <input name="company" placeholder="شرکت (اختیاری)" className="gate-input" />
            <input name="role" placeholder="سِمَت (اختیاری)" className="gate-input" />
          </div>
          <button type="submit" className="btn btn-primary gate-btn">
            دریافت کد تأیید
          </button>
          <p className="gate-note">بدون رمز عبور · بدون ثبت‌نام · فقط تأیید شماره</p>
        </form>
      ) : (
        <form className="gate-form" onSubmit={verify}>
          <p className="gate-otp-msg">کد تأیید به شماره شما ارسال شد.</p>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="کد ۶ رقمی"
            maxLength={6}
            required
            className="gate-input gate-otp"
            dir="ltr"
          />
          <button type="submit" className="btn btn-primary gate-btn">
            Unlock Full Intelligence
          </button>
          <button type="button" className="gate-back" onClick={() => setSent(false)}>
            ← تغییر شماره
          </button>
        </form>
      )}
    </div>
  );
}

/* ─── Main ─── */
export default function CaseViewer({
  caseData, allCases, prev, next,
}: {
  caseData: CaseData;
  allCases: { slug: string; company: string }[];
  prev: { slug: string; company: string } | null;
  next: { slug: string; company: string } | null;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const fm = caseData.frontmatter;
  const micro = caseData.micro;

  return (
    <div className="case-page">
      <nav className="topbar">
        <Link href="/" className="tb-back">← Back to XPMI</Link>
        <span className="tb-logo">XPMI</span>
      </nav>

      <div className="case-wrap">
        {/* HERO */}
        <header className="case-hero">
          <p className="case-eyebrow">XPMI Strategic Intelligence Case</p>
          <h1>{fm.company_en} <span className="gold">×</span> XPMI</h1>
          <div className="case-meta">
            <span><strong>Type:</strong> {fm.case_type}</span>
            <span><strong>Market:</strong> {fm.market}</span>
            <span><strong>Evidence:</strong> {fm.evidence_level}</span>
          </div>
        </header>

        {/* MICRO-INTEL — always free */}
        {micro && (
          <section className="micro-block">
            <div className="micro-label">MICRO-INTEL</div>
            <blockquote className="micro-question">{micro.question}</blockquote>

            {micro.whyItMatters && (
              <div className="micro-why">
                <h3>Why It Matters</h3>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{micro.whyItMatters}</ReactMarkdown>
              </div>
            )}

            {micro.findings.length > 0 && (
              <div className="micro-found">
                <h3>What XPMI Found</h3>
                <ul>
                  {micro.findings.map((f, i) => (
                    <li key={i}>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{f}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* GATE or FULL CASE */}
        {!unlocked ? (
          <Gate onUnlock={() => setUnlocked(true)} company={fm.company} />
        ) : (
          <>
            <div className="pipeline">
              {["Reality", "Risk", "Future", "Capability", "Execution", "Decision"].map((s, i) => (
                <span key={s}>
                  {i > 0 && <span className="pip-arrow">→</span>}
                  <span className="pip-step active">{s}</span>
                </span>
              ))}
            </div>
            <div className="divider" />
            <article className="case-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={md}>
                {caseData.content}
              </ReactMarkdown>
            </article>
          </>
        )}

        <div className="divider" />

        {/* PREV / NEXT */}
        <div className="prev-next">
          {prev ? (
            <Link href={`/cases/${prev.slug}`} className="pn-link">
              <span className="pn-label">← Previous</span>
              <span className="pn-company">{prev.company}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/cases/${next.slug}`} className="pn-link pn-next">
              <span className="pn-label">Next →</span>
              <span className="pn-company">{next.company}</span>
            </Link>
          ) : <div />}
        </div>

        {/* CASE NAV */}
        <nav className="case-nav">
          <h3>Explore Other Cases</h3>
          <div className="case-nav-grid">
            {allCases.map((c) => (
              <Link key={c.slug} href={`/cases/${c.slug}`}
                className={`case-nav-link ${c.slug === caseData.slug ? "current" : ""}`}>
                {c.company}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <footer className="case-footer">
        <p>XPMI — Strategic Intelligence for High-Stakes Decisions</p>
        <p>Reality. Risk. Future. Capability. Execution.</p>
      </footer>
    </div>
  );
}

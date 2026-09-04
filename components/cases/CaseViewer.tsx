"use client";

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

/* ─── Main ─── */
export default function CaseViewer({
  caseData, allCases, prev, next,
}: {
  caseData: CaseData;
  allCases: { slug: string; company: string }[];
  prev: { slug: string; company: string } | null;
  next: { slug: string; company: string } | null;
}) {
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

        {/* MICRO-INTEL */}
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

        {/* FULL CASE — rendered directly, protection is at server/middleware layer */}
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

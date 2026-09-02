import Link from "next/link";

export default function CaseNotFound() {
  return (
    <div className="case-page">
      <nav className="topbar">
        <Link href="/" className="tb-back">← Back to XPMI</Link>
        <span className="tb-logo">XPMI</span>
      </nav>
      <div className="case-wrap" style={{ textAlign: "center", paddingTop: "8rem" }}>
        <h1 style={{ fontFamily: "'Abel', sans-serif", fontSize: "2rem", marginBottom: "1rem" }}>
          Case Not Found
        </h1>
        <p style={{ color: "rgba(255,255,255,.5)", marginBottom: "2rem" }}>
          This intelligence case does not exist.
        </p>
        <Link href="/" className="btn btn-primary">
          ← Back to XPMI
        </Link>
      </div>
    </div>
  );
}

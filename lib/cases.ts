import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASES_DIR = path.join(process.cwd(), "content", "cases");
const MICRO_DIR = path.join(process.cwd(), "content", "micro-intel");

export interface CaseFrontmatter {
  title: string;
  company: string;
  company_en: string;
  slug: string;
  case_type: string;
  analysis_type?: string;
  evidence_level: string;
  status?: string;
  market: string;
  language?: string;
  parent?: string;
}

export interface MicroIntel {
  question: string;
  whyItMatters: string;
  findings: string[];
}

export interface CaseData {
  frontmatter: CaseFrontmatter;
  content: string;
  slug: string;
  micro: MicroIntel | null;
}

function safeSlug(slug: string): boolean {
  return /^[a-z0-9-]+$/.test(slug);
}

/* ─── Parse Micro-Intel into structured parts ─── */
function parseMicroIntel(raw: string): MicroIntel | null {
  const { content } = matter(raw);

  const qMatch = content.match(/## THE QUESTION\s*\n([\s\S]*?)(?=\n## )/);
  const wMatch = content.match(/## WHY IT MATTERS\s*\n([\s\S]*?)(?=\n## )/);
  const fMatch = content.match(/## WHAT XPMI FOUND\s*\n([\s\S]*?)(?=\n## )/);

  if (!qMatch) return null;

  const findings = fMatch
    ? fMatch[1]
        .split("\n")
        .filter((l) => l.trim().startsWith("-"))
        .map((l) => l.replace(/^-\s*/, "").trim())
    : [];

  return {
    question: qMatch[1].trim(),
    whyItMatters: wMatch ? wMatch[1].trim() : "",
    findings,
  };
}

export function getMicroIntel(slug: string): MicroIntel | null {
  if (!safeSlug(slug)) return null;
  const p = path.join(MICRO_DIR, `${slug}_micro_intel.md`);
  if (!fs.existsSync(p)) return null;
  return parseMicroIntel(fs.readFileSync(p, "utf-8"));
}

export function getAllCaseSlugs(): string[] {
  if (!fs.existsSync(CASES_DIR)) return [];
  return fs.readdirSync(CASES_DIR).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

export function getCaseBySlug(slug: string): CaseData | null {
  if (!safeSlug(slug)) return null;
  const filePath = path.join(CASES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as CaseFrontmatter,
    content,
    slug,
    micro: getMicroIntel(slug),
  };
}

export function getAllCases(): CaseData[] {
  return getAllCaseSlugs().map(getCaseBySlug).filter((c): c is CaseData => c !== null);
}

export function getCaseIndex() {
  return getAllCases().map((c) => ({
    slug: c.slug,
    company: c.frontmatter.company,
    company_en: c.frontmatter.company_en,
    case_type: c.frontmatter.case_type,
    evidence_level: c.frontmatter.evidence_level,
    market: c.frontmatter.market,
    question: c.micro?.question || "",
  }));
}

export function getAdjacentCases(currentSlug: string) {
  const all = getAllCases();
  const i = all.findIndex((c) => c.slug === currentSlug);
  return {
    prev: i > 0 ? { slug: all[i - 1].slug, company: all[i - 1].frontmatter.company } : null,
    next: i < all.length - 1 ? { slug: all[i + 1].slug, company: all[i + 1].frontmatter.company } : null,
  };
}

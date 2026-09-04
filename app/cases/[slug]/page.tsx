import { notFound } from "next/navigation";
import {
  getCaseBySlug,
  getAllCaseSlugs,
  getPublicCases,
  getAdjacentPublicCases,
  getAdjacentProtectedCases,
  isProtectedSlug,
} from "@/lib/cases";
import CaseViewer from "@/components/cases/CaseViewer";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return { title: "Case Not Found — XPMI" };
  const title = `${c.frontmatter.company_en} × XPMI — Strategic Intelligence Case`;
  const description = c.micro?.question?.slice(0, 160) || c.frontmatter.case_type;
  return { title, description, openGraph: { title, description } };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseData = getCaseBySlug(slug);
  if (!caseData) notFound();

  const isProtected = isProtectedSlug(slug);

  // For public cases: only show public cases in nav
  // For protected cases: only show protected cases in nav
  // This prevents leaking protected slugs to public visitors
  // and gives authenticated users navigation within the protected library
  const navCases = isProtected
    ? (await import("@/lib/cases")).getAllCases()
        .filter((c) => isProtectedSlug(c.slug))
        .map((c) => ({ slug: c.slug, company: c.frontmatter.company }))
    : getPublicCases().map((c) => ({ slug: c.slug, company: c.frontmatter.company }));

  const { prev, next } = isProtected
    ? getAdjacentProtectedCases(slug)
    : getAdjacentPublicCases(slug);

  return <CaseViewer caseData={caseData} allCases={navCases} prev={prev} next={next} />;
}

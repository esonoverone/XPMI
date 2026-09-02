import { notFound } from "next/navigation";
import { getCaseBySlug, getAllCaseSlugs, getAllCases, getAdjacentCases } from "@/lib/cases";
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

  const allCases = getAllCases().map((c) => ({ slug: c.slug, company: c.frontmatter.company }));
  const { prev, next } = getAdjacentCases(slug);

  return <CaseViewer caseData={caseData} allCases={allCases} prev={prev} next={next} />;
}

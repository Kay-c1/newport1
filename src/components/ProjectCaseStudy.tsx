
import Link from "next/link";
import type { ReactNode } from "react";

type ProjectCaseStudyProps = {
  number: string;
  category: string;
  title: string;
  introduction: string;
  overview: ReactNode;
  technologies: string;
  detailsTitle: string;
  details: ReactNode;
};

export default function ProjectCaseStudy({
  number,
  category,
  title,
  introduction,
  overview,
  technologies,
  detailsTitle,
  details,
}: ProjectCaseStudyProps) {
  return (
    <main className="min-h-screen bg-[#F4F1E9] text-[#010000]">
      <header className="flex items-center justify-between border-b border-black px-6 py-6 sm:px-10 lg:px-16">
        <Link href="/" className="font-serif text-2xl">
          KDS.
        </Link>

        <Link href="/#work" className="editorial-label">
          BACK TO WORK ↗
        </Link>
      </header>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <p className="editorial-label text-[#6C6B6B]">
          PROJECT {number} / {category}
        </p>

        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight sm:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 sm:text-lg">
          {introduction}
        </p>

        <div className="mt-16 grid gap-10 border-t border-black/20 pt-8 sm:grid-cols-2">
          <div>
            <p className="editorial-label text-[#6C6B6B]">
              OVERVIEW
            </p>
            <div className="mt-4 leading-7">{overview}</div>
          </div>

          <div>
            <p className="editorial-label text-[#6C6B6B]">
              TECHNOLOGIES
            </p>
            <p className="mt-4 leading-7">{technologies}</p>
          </div>
        </div>

        <div className="mt-16 border-t border-black/20 pt-8">
          <p className="editorial-label text-[#6C6B6B]">
            {detailsTitle}
          </p>
          <div className="mt-4 max-w-2xl leading-7">{details}</div>
        </div>

        <Link
          href="/#work"
          className="mt-16 inline-block border border-black px-5 py-3 text-sm transition-colors hover:bg-black hover:text-[#F4F1E9]"
        >
          ← BACK TO ALL PROJECTS
        </Link>
      </section>
    </main>
  );
}

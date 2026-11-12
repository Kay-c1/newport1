
import Link from "next/link";

export default function GreenhouseProject() {
  return (
    <main className="page-shell py-8 sm:py-12">
      <header className="flex items-center justify-between gap-4">
        <Link href="/" className="font-serif text-xl">
          KDS.
        </Link>

        <Link href="/#work" className="editorial-label">
          ← BACK TO WORK
        </Link>
      </header>

      <hr className="rule my-6" />

      <div className="flex items-center justify-between gap-4">
        <span className="editorial-label">
          CASE STUDY / 001
        </span>
        <span className="editorial-label">
          AI & COMPUTER VISION
        </span>
      </div>

      <section className="py-12 sm:py-20">
        <h1 className="display-heading max-w-5xl text-5xl sm:text-7xl lg:text-8xl">
          Minimalist AI Monitoring
          with Automated Plant Care
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-7">
          An AI-powered greenhouse monitoring system
          integrating computer vision, environmental
          sensors, and microcontroller-based automation
          for strawberry farming environments.
        </p>

        <div className="mt-10 grid gap-6 border-y border-black/25 py-6 sm:grid-cols-3">
          <div>
            <p className="editorial-label text-[#6C6B6B]">
              MY ROLE
            </p>
            <p className="mt-2 text-sm">
              Lead Developer & Embedded Systems Engineer
            </p>
          </div>

          <div>
            <p className="editorial-label text-[#6C6B6B]">
              TECHNOLOGIES
            </p>
            <p className="mt-2 text-sm">
              Next.js · FastAPI · Python
            </p>
          </div>

          <div>
            <p className="editorial-label text-[#6C6B6B]">
              REPORTED RESULT
            </p>
            <p className="mt-2 text-sm">
              Approximately 97% disease detection accuracy
            </p>
          </div>
        </div>
      </section>

<section className="py-8 sm:py-12">
  <div className="mb-4 flex items-center justify-between gap-4">
    <span className="editorial-label">
      FIG. 01 / SYSTEM OVERVIEW
    </span>
    <span className="editorial-label text-[#6C6B6B]">
      PROJECT DOCUMENTATION
    </span>
  </div>

  <div className="border border-black p-2">
    <img
      src="/images/p1.jpg"
      alt="Greenhouse monitoring application dashboard"
      className="block h-auto w-full"
    />
  </div>

  <p className="mt-3 text-sm text-[#6C6B6B]">
    Greenhouse monitoring system — application overview.
  </p>
</section>

      <hr className="rule" />

      <section className="grid gap-4 py-12 sm:grid-cols-[180px_1fr] sm:gap-10">
        <span className="editorial-label">
          01 / THE PROBLEM
        </span>

        <div>
          <h2 className="display-heading text-4xl sm:text-5xl">
            Monitoring plants more intelligently.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7">
            The project explores how computer vision,
            environmental monitoring, and automated
            irrigation can support greenhouse management.
          </p>
        </div>
      </section>

      <hr className="rule" />

      <section className="grid gap-4 py-12 sm:grid-cols-[180px_1fr] sm:gap-10">
        <span className="editorial-label">
          02 / THE APPROACH
        </span>

        <div>
          <h2 className="display-heading text-4xl sm:text-5xl">
            Connecting AI, sensors, and automation.
          </h2>

          <ul className="mt-6 space-y-4 text-sm leading-7">
            <li>
              <strong>Computer vision.</strong>{" "}
              Plant disease detection using machine learning models.
            </li>
            <li>
              <strong>Environmental sensing.</strong>{" "}
              Sensor integration for greenhouse monitoring.
            </li>
            <li>
              <strong>Automated irrigation.</strong>{" "}
              Microcontroller-based workflows for plant care.
            </li>
            <li>
              <strong>Web application.</strong>{" "}
              A Next.js frontend connected to a FastAPI backend.
            </li>
          </ul>
        </div>
      </section>

      <hr className="rule" />

      <section className="grid gap-4 py-12 sm:grid-cols-[180px_1fr] sm:gap-10">
        <span className="editorial-label">
          03 / THE RESULT
        </span>

        <div>
          <h2 className="display-heading text-4xl sm:text-5xl">
            An integrated plant monitoring system.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7">
            The project reported approximately 97% disease
            detection accuracy and combined monitoring
            with automated irrigation workflows.
          </p>
        </div>
      </section>

      <hr className="rule" />

      <footer className="py-10">
        <Link href="/#work" className="editorial-label">
          ← RETURN TO ALL PROJECTS
        </Link>
      </footer>
    </main>
  );
}

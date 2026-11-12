
import Link from "next/link";
import DitherVeil from "@/components/DitherVeil";
import BouncyText from "@/components/BouncyText";
import PortfolioAnimations from "@/components/PortfolioAnimations";
import ProjectVideoHover from "@/components/ProjectVideoHover";
import ThemeToggle from "@/components/ThemeToggle";

const projects = [
  {
    title: "AI Greenhouse Monitoring",
    category: "AI / COMPUTER VISION",
    year: "2026",
    description:
      "An intelligent greenhouse system combining plant disease detection, environmental sensors, and automated irrigation.",
    stack: ["Next.js", "FastAPI", "Python"],
    result: "~97% disease detection accuracy",
    href: "/projects/ai-greenhouse",
    videoSrc: "/videos/v1.mp4",
  },
  {
    title: "Training Wheels",
    category: "FULL-STACK ENGINEERING",
    year: "2026",
    description:
      "An AI-assisted QA and project management platform with task assignment, milestone approvals, messaging, and administrative workflows.",
    stack: ["React", "Django", "Python"],
    result: "Integrated QA and project workflows",
    href: "/projects/training-wheels",
    videoSrc: "/videos/v2.mp4",
  },
  {
    title: "MT5 AI Trading Dashboard",
    category: "MACHINE LEARNING",
    year: "2026",
    description:
      "A forex analysis dashboard integrating market data, three-class trading predictions, entry filters, and configurable risk controls.",
    stack: ["Python", "FastAPI", "Next.js"],
    result: "BUY / SELL / NO TRADE predictions",
    href: "/projects/mt5-trading-dashboard",
    videoSrc: "/videos/v3.mp4",
  },
  {
    title: "Sleep Apnea Detector",
    category: "AI / HEALTH TECHNOLOGY",
    year: "2026",
    description:
      "A full-stack sleep analysis platform integrating machine learning and real-time data synchronization.",
    stack: ["Next.js", "FastAPI", "Firebase"],
    result: "Machine-learning-assisted sleep analysis",
    href: "/projects/sleep-apnea-detector",
    videoSrc: "/videos/v4.mp4",
  },
  {
    title: "QR Asset Tracking",
    category: "BACKEND ENGINEERING",
    year: "2026",
    description:
      "A centralized asset tracking solution with backend APIs and administrator-controlled account management.",
    stack: ["TypeScript", "Node.js", "Express.js", "Firebase"],
    result: "Administrative account and asset workflows",
    href: "/projects/qr-asset-tracking",
    videoSrc: "/videos/v5.mp4",
  },
];

const skills = [
  {
    category: "LANGUAGES",
    technologies: "Python, JavaScript, TypeScript, SQL",
  },
  {
    category: "BACKEND",
    technologies: "Node.js, NestJS, Django, FastAPI, REST APIs",
  },
  {
    category: "FRONTEND",
    technologies: "React, Next.js",
  },
  {
    category: "DATABASES",
    technologies: "PostgreSQL, MySQL, Firebase",
  },
  {
    category: "TOOLS",
    technologies: "Docker, Git, GitHub Actions, Postman",
  },
  {
    category: "AI / ML",
    technologies: "TensorFlow, Pandas, Computer Vision",
  },
];

function ArrowIcon() {
  return (
    <svg
      className="project-arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="top">
      <PortfolioAnimations />

      {/* HEADER */}

      <header
        className="page-shell"
        data-animate="masthead"
      >
        <div className="flex items-center justify-between gap-4 py-4">
          <span className="editorial-label">
            COMPUTER ENGINEERING
          </span>

          <span className="editorial-label text-right">
            PORTFOLIO — 2026
          </span>
        </div>

        <hr className="rule" />

        <div className="py-8 text-center sm:py-12">
          <h1 className="display-heading text-5xl sm:text-7xl md:text-8xl">
            <BouncyText text="Kristian M. Delos Santos" />
          </h1>

          <p className="editorial-label mt-6 theme-muted">
            BACKEND ENGINEERING · AI SYSTEMS · SOFTWARE
          </p>
        </div>

        <hr className="rule" />

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-between gap-4 py-5"
        >
          <a href="#top" className="font-serif text-2xl">
            KDS.
          </a>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <a className="editorial-label" href="#work">
              Work
            </a>

            <a className="editorial-label" href="#about">
              About
            </a>

            <a className="editorial-label" href="#experience">
              Experience
            </a>

            <a className="editorial-label" href="#contact">
              Contact
            </a>

            <a
              className="editorial-label"
              href="/Kristian_Delos_Santos_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV ↗
            </a>

            <ThemeToggle />
          </div>
        </nav>
      </header>

      <hr className="rule" />

      {/* HERO */}

      <section
        id="home"
        aria-labelledby="hero-heading"
        className="page-shell py-12 sm:py-20"
      >
        <div className="mb-10 flex items-center justify-end border-b theme-border pb-4">
          <span className="editorial-label">
            BACKEND · AI · SOFTWARE
          </span>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
          <div className="min-w-0">
            <p
              data-animate="hero-detail"
              className="editorial-label mb-6 theme-muted"
            >
              COMPUTER ENGINEERING STUDENT & DEVELOPER
            </p>

            <h2
              id="hero-heading"
              data-animate="hero"
              className="display-heading text-[clamp(52px,7vw,104px)]"
            >
              Building
              <br />
              intelligent
              <br />
              systems —
              <br />
              <em>from idea to code.</em>
            </h2>

            <p
              data-animate="hero-detail"
              className="body-large mt-8 max-w-lg"
            >
              I&apos;m Kristian M. Delos Santos, a developer
              focused on backend engineering, AI systems,
              and building practical software solutions.
            </p>

            <div
              data-animate="hero-detail"
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#work"
                className="editorial-button"
              >
                VIEW SELECTED WORK
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#contact"
                className="editorial-button editorial-button-outline"
              >
                CONTACT ME
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="mt-12 border-t theme-border pt-5">
              <p className="editorial-label theme-muted">
                CURRENTLY EXPLORING
              </p>

              <p className="mt-3 text-sm leading-7">
                Backend Architecture / Computer Vision /
                Intelligent Automation
              </p>
            </div>
          </div>

          {/* EXISTING DITHERVEIL PORTRAIT */}

          <div
            data-reveal
            className="relative min-w-0 border theme-border-strong p-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#010000]">
              <DitherVeil
                src="/images/18.png"
                fit="contain"
                pattern="floyd"
                pixelSize={2}
                levels={2}
                palette="duotone"
                inkColor="#010000"
                paperColor="#F4F1E9"
                contrast={1.15}
                brightness={0}
                revealRadius={200}
                softness={0.6}
                linger={1}
                rim={0}
                className="h-full w-full"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-y theme-border-strong py-5">
          <span className="editorial-label">
            PYTHON / TYPESCRIPT
          </span>

          <span className="editorial-label">
            BACKEND SYSTEMS
          </span>

          <span className="editorial-label">
            ARTIFICIAL INTELLIGENCE
          </span>
        </div>

        <div className="mt-8 text-right">
          <a href="#work" className="editorial-link">
            SCROLL TO EXPLORE
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <hr className="rule" />

      {/* SELECTED WORK */}

      <section
        id="work"
        aria-labelledby="work-heading"
        className="page-shell section-spacing"
      >
        <div
          data-reveal
          className="mb-12 flex flex-wrap items-end justify-between gap-6"
        >
          <h2
            id="work-heading"
            className="section-heading"
          >
            <BouncyText text="Work worth examining." />
          </h2>

          <span className="editorial-label theme-muted">
            SELECTED PROJECTS / 2026
          </span>
        </div>

        <div className="border-t theme-border-strong">
          {projects.map((project) => (
            <ProjectVideoHover
              key={project.href}
              title={project.title}
              videoSrc={project.videoSrc}
            >
              <div className="min-w-0">
                <p className="editorial-label theme-muted">
                  {project.category}
                </p>

                <h3 className="project-heading mt-4">
                  <Link
                    href={project.href}
                    className="transition-opacity duration-300 hover:opacity-60"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-7 theme-muted">
                  {project.description}
                </p>

                <p className="editorial-label mt-6 theme-muted">
                  {project.year}
                </p>
              </div>

              <div className="flex min-w-0 flex-col justify-between gap-10">
                <div>
                  <p className="editorial-label">
                    TECHNOLOGIES
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="border theme-border px-3 py-1.5 text-xs"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="editorial-label theme-muted">
                      KEY DETAIL
                    </p>

                    <p className="mt-3 text-sm leading-7">
                      {project.result}
                    </p>
                  </div>

                  <Link
                    href={project.href}
                    aria-label={`View ${project.title} case study`}
                    className="project-arrow"
                  >
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </ProjectVideoHover>
          ))}
        </div>
      </section>

      <hr className="rule" />

      {/* ABOUT */}

      <section
        id="about"
        aria-labelledby="about-heading"
        className="page-shell section-spacing"
      >
        <div data-reveal>
          <h2
            id="about-heading"
            className="section-heading max-w-5xl"
          >
            <BouncyText text="Software engineering grounded in systems thinking." />
          </h2>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div data-reveal>
            <p className="body-large">
              I am a Computer Engineering student at
              Holy Angel University with practical experience
              in backend development, API design, automation,
              and AI-powered applications.
            </p>

            <p className="mt-6 leading-7 theme-muted">
              My work focuses on connecting software,
              data, and intelligent systems to solve
              real-world problems.
            </p>
          </div>

          <div data-reveal>
            <p className="editorial-label mb-5">
              TECHNICAL EXPERTISE
            </p>

            {skills.map((skill) => (
              <div
                key={skill.category}
                className="skill-row"
              >
                <p className="editorial-label theme-muted">
                  {skill.category}
                </p>

                <p className="text-sm leading-7">
                  {skill.technologies}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* PROFESSIONAL EXPERIENCE */}

      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="page-shell section-spacing"
      >
        <div data-reveal>
          <p className="editorial-label theme-muted">
            PROFESSIONAL EXPERIENCE
          </p>

          <h2
            id="experience-heading"
            className="section-heading mt-6"
          >
            Engineering in practice.
          </h2>
        </div>

        <div
          data-reveal
          className="experience-item mt-12"
        >
          <div>
            <p className="editorial-label theme-muted">
              NOV 2025 — FEB 2026
            </p>

            <p className="mt-4 text-sm">
              System Sense Corporation
            </p>
          </div>

          <div>
            <h3 className="display-heading text-4xl sm:text-5xl">
              Backend Lead Intern
            </h3>

            <p className="mt-6 max-w-2xl text-sm leading-7 theme-muted">
              Led backend development and delivered
              production APIs supporting business operations,
              device management, transaction processing,
              and analytics.
            </p>

            <ul className="mt-8 space-y-4 text-sm leading-7">
              <li className="border-l theme-border pl-5">
                Delivered 8+ production APIs for user
                management, orders, devices, multilingual
                menus, and analytics.
              </li>

              <li className="border-l theme-border pl-5">
                Built transaction processing workflows
                and automated sales aggregation.
              </li>

              <li className="border-l theme-border pl-5">
                Improved API response times by approximately 20ms.
              </li>

              <li className="border-l theme-border pl-5">
                Contributed to database design,
                integration, debugging, and documentation.
              </li>

              <li className="border-l theme-border pl-5">
                Implemented CI/CD and security workflows
                using GitHub Actions, ESLint,
                OWASP Dependency Check, and Gitleaks.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* CONTACT */}

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="page-shell section-spacing"
      >
        <div data-reveal>
          <p className="editorial-label theme-muted">
            OPEN TO OPPORTUNITIES & COLLABORATIONS
          </p>

          <h2
            id="contact-heading"
            className="section-heading mt-6 max-w-4xl"
          >
            <BouncyText text="Let's build something meaningful." />
          </h2>

          <p className="body-large mt-8 max-w-2xl theme-muted">
            I&apos;m available to discuss software engineering roles,
            backend systems, AI projects, and collaborations.
            Reach out by email or phone, or download my CV.
          </p>
        </div>

        <div data-reveal className="mt-12 grid gap-8 border-t theme-border pt-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="editorial-label theme-muted">EMAIL</p>
            <a
              href="mailto:delossantoskristian5@gmail.com"
              className="mt-3 inline-block break-all font-serif text-2xl underline decoration-black/25 underline-offset-8 transition-colors hover:theme-muted sm:text-3xl"
            >
              delossantoskristian5@gmail.com
            </a>
          </div>

          <div>
            <p className="editorial-label theme-muted">PHONE</p>
            <a
              href="tel:+639763754586"
              className="mt-3 inline-block font-serif text-3xl underline decoration-black/25 underline-offset-8 transition-colors hover:theme-muted"
            >
              +63 976 375 4586
            </a>
            <p className="mt-4 text-sm theme-muted">
              Mabalacat City, Pampanga, Philippines
            </p>
          </div>
        </div>

        <div data-reveal className="mt-12 flex flex-wrap gap-3">
          <a
            href="mailto:delossantoskristian5@gmail.com?subject=Portfolio%20Inquiry"
            className="editorial-button"
          >
            SEND AN EMAIL <span aria-hidden="true">↗</span>
          </a>
          <a
            href="/Kristian_Delos_Santos_CV.pdf"
            download="Kristian_Delos_Santos_CV.pdf"
            className="editorial-button editorial-button-outline"
          >
            DOWNLOAD CV <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <hr className="rule" />

      {/* FOOTER */}

      <footer className="page-shell py-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <a href="#top" className="font-serif text-3xl">
            KDS.
          </a>

          <p className="editorial-label theme-muted">
            BACKEND ENGINEERING / AI SYSTEMS
          </p>

          <a
            href="#work"
            className="editorial-link"
          >
            ALL PROJECTS
            <span
              className="editorial-link-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t theme-border pt-6">
          <p className="text-xs theme-muted">
            © 2026 Kristian M. Delos Santos
          </p>

          <a href="#top" className="editorial-label">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

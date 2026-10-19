import PortfolioAnimations from "@/components/PortfolioAnimations";

import Link from "next/link";
import DitherVeil from "@/components/DitherVeil";
import BouncyText from "@/components/BouncyText";
const projects = [
  {
    number: "01",
    title: "AI Greenhouse Monitoring",
    category: "AI / COMPUTER VISION",
    year: "2026",
    description:
      "An intelligent greenhouse system combining plant disease detection, environmental sensors, and automated irrigation.",
    stack: ["Next.js", "FastAPI", "Python"],
    result: "~97% disease detection accuracy",
    href: "/projects/ai-greenhouse",
  },
  {
    number: "02",
    title: "Training Wheels",
    category: "FULL-STACK ENGINEERING",
    year: "2026",
    description:
      "An AI-assisted QA and project management platform with task assignment, milestone approvals, messaging, and administrative workflows.",
    stack: ["React", "Django", "Python"],
    result: "Integrated QA and project workflows",
    href: "/projects/training-wheels",
  },
  {
    number: "03",
    title: "MT5 AI Trading Dashboard",
    category: "MACHINE LEARNING",
    year: "2026",
    description:
      "A forex analysis dashboard integrating market data, three-class trading predictions, entry filters, and configurable risk controls.",
    stack: ["Python", "FastAPI", "Next.js"],
    result: "BUY / SELL / NO TRADE predictions",
    href: "/projects/mt5-trading-dashboard",
  },
  {
    number: "04",
    title: "Sleep Apnea Detector",
    category: "AI / HEALTH TECHNOLOGY",
    year: "2026",
    description:
      "A full-stack sleep analysis platform integrating machine learning and real-time data synchronization.",
    stack: ["Next.js", "FastAPI", "Firebase"],
    result: "Machine-learning-assisted sleep analysis",
    href: "/projects/sleep-apnea-detector",
  },
  {
    number: "05",
    title: "QR Asset Tracking",
    category: "BACKEND ENGINEERING",
    year: "2026",
    description:
      "A centralized asset tracking solution with backend APIs and administrator-controlled account management.",
    stack: ["TypeScript", "Node.js", "Express.js", "Firebase"],
    result: "Administrative account and asset workflows",
    href: "/projects/qr-asset-tracking",
  },
];



export default function Home() {
  return (
    <main>
        <PortfolioAnimations />
     <header className="page-shell" data-animate="masthead">
        <div className="flex items-center justify-between gap-4 py-4">
          <span className="editorial-label">
            COMPUTER ENGINEERING
          </span>
          <span className="editorial-label text-right">
            PORTFOLIO — 2026
          </span>
        </div>

        <hr className="rule" />

        <div className="py-8 text-center sm:py-10">
          <h1 className="display-heading text-5xl sm:text-7xl md:text-8xl">
            
            <BouncyText text="Kristian M. Delos Santos" />
          </h1>
          <p className="editorial-label mt-5">
            BACKEND ENGINEERING · AI SYSTEMS · SOFTWARE
          </p>
        </div>

        <hr className="rule" />

        <nav className="flex items-center justify-between gap-4 py-4">
          <a
            href="#home"
            className="font-serif text-xl"
          >
            KDS.
          </a>

          <div className="flex items-center gap-4 sm:gap-8">
            <a className="editorial-label" href="#work">
              Work
            </a>
            <a className="editorial-label" href="#about">
              About
            </a>
            <a className="editorial-label" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <hr className="rule" />

      
<section
  id="home"
  className="page-shell py-10 sm:py-16"
>
  <div className="mb-6 flex items-center justify-between gap-4 border-b border-black/25 pb-4">
   
    <span className="editorial-label text-right">
      BACKEND · AI · SOFTWARE
    </span>
  </div>

  <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
    {/* LEFT: Introduction */}
    <div>
      <p
        data-animate="hero-detail"
        className="editorial-label mb-5 text-[#6C6B6B]"
      >
        COMPUTER ENGINEERING STUDENT & DEVELOPER
      </p>

      <h2
        data-animate="hero"
        className="display-heading text-5xl sm:text-7xl lg:text-[84px]"
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
        className="mt-7 max-w-lg text-base leading-7"
      >
        I'm Kristian M. Delos Santos, a developer
        focused on backend engineering, AI systems,
        and building practical software solutions.
      </p>

      <div
        data-animate="hero-detail"
        className="mt-8 flex flex-wrap gap-3"
      >
        <a
  href="#work"
  className="inline-flex items-center border border-black px-7 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-black hover:text-[#F4F1E9]"
>
  VIEW SELECTED WORK ↗
</a>

        <a
          href="#contact"
          className="inline-flex items-center border border-black px-7 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-black hover:text-[#F4F1E9]"
        >
          CONTACT ME
        </a>
      </div>

      <div className="mt-10 border-t border-black/25 pt-5">
        <p className="editorial-label text-[#6C6B6B]">
          CURRENTLY EXPLORING
        </p>

        <p className="mt-3 text-sm leading-7">
          Backend Architecture / Computer Vision /
          Intelligent Automation
        </p>
      </div>
    </div>

    {/* RIGHT: Your portrait */}
    <div
      data-reveal
      className="relative border border-black p-2"
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
  style={{ width: "100%", height: "100%" }}
/>

</div>

      
    </div>
  </div>

  <div className="mt-12 border-y border-black py-4">
    <div className="flex flex-wrap items-center justify-between gap-3">
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
  </div>
</section>


      <hr className="rule" />

      
<section id="work" className="page-shell py-16 sm:py-24">
  <div
    data-reveal
    className="mb-10 flex flex-wrap items-end justify-between gap-5"
  >
    <div>
      

      <h2 className="display-heading mt-5 text-5xl sm:text-7xl">
        
        <BouncyText text="Work worth examining." />
      </h2>
    </div>

    <span className="editorial-label text-[#6C6B6B]">
      05 PROJECTS / 2025–2026
    </span>
  </div>

  <div className="border-t border-black">
    {projects.map((project) => (
      <article
        key={project.number}
        data-reveal
        className="group grid gap-5 border-b border-black/25 py-8 transition-colors duration-300 md:grid-cols-[64px_1fr_1fr] md:gap-8 md:py-10"
      >
        <div className="flex items-start justify-between md:block">
          <span className="display-heading text-3xl text-[#6C6B6B]">
            {project.number}
          </span>

          <span className="editorial-label md:hidden">
            {project.year}
          </span>
        </div>

        <div>
          <p className="editorial-label text-[#6C6B6B]">
            {project.category}
          </p>

          <h3 className="display-heading mt-3 text-4xl transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-7">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-6 md:pl-6">
          <div>
            <p className="editorial-label">TECHNOLOGIES</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="border border-black/25 px-3 py-1.5 text-xs"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="editorial-label text-[#6C6B6B]">
                KEY DETAIL
              </p>
              <p className="mt-2 text-sm">
                {project.result}
              </p>
            </div>

            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title}`}
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-black transition-colors duration-300 hover:bg-black hover:text-[#F4F1E9]"
              >
                ↗
              </a>
            )}
          </div>
        </div>
      </article>
    ))}
  </div>
</section>


      <hr className="rule" />

      <section id="about" className="page-shell py-16 sm:py-20">
        

        <h2 className="display-heading mt-5 max-w-4xl text-5xl sm:text-6xl">
          
          <BouncyText text="Software engineering grounded in systems thinking." />
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <p className="leading-7">
            I am a Computer Engineering student at Holy
            Angel University with practical experience in
            backend development, API design, automation,
            and AI-powered applications.
          </p>

          <div>
            <p className="editorial-label mb-4">
              TECHNICAL STACK
            </p>
            <p className="leading-8">
              Python · TypeScript · JavaScript · SQL
              <br />
              Django · FastAPI · Node.js · NestJS
              <br />
              Next.js · React · MySQL · Firebase
              <br />
              Git · Docker · GitHub Actions
            </p>
          </div>
        </div>
      </section>

<section
  id="contact"
  className="border-y border-black px-6 py-20 text-center sm:py-28"
>
  <p className="editorial-label text-[#6C6B6B]">
    HAVE A PROJECT IN MIND?
  </p>

  <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
  <BouncyText text="Let's build something meaningful." />
</h2>

  <p className="mx-auto mt-5 max-w-xl leading-7 text-[#6C6B6B]">
    I'm open to opportunities in backend engineering,
    AI systems, and software development.
  </p>

  <a
    href="mailto:YOUR_EMAIL@example.com"
    className="mt-8 inline-flex items-center justify-center border border-black px-7 py-4 text-sm transition-colors hover:bg-black hover:text-[#F4F1E9]"
  >
    GET IN TOUCH ↗
  </a>
</section>

      <hr className="rule" />

      

<footer className="border-t border-black px-6 py-8 sm:px-10 lg:px-16">
  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
    <Link href="/" className="font-serif text-2xl">
      KDS.
    </Link>

    <p className="editorial-label text-[#6C6B6B]">
      BACKEND ENGINEERING / AI SYSTEMS
    </p>

    <Link href="/#work" className="editorial-label">
      ALL PROJECTS ↗
    </Link>
  </div>

  <p className="mt-8 text-xs text-[#6C6B6B]">
    © 2026 Kristian M. Delos Santos
  </p>
</footer>


    </main>
  );
}

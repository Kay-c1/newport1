
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export default function MT5TradingDashboardPage() {
  return (
    <ProjectCaseStudy
      number="03"
      category="MACHINE LEARNING"
      title="MT5 AI Trading Dashboard"
      introduction="A forex analysis dashboard integrating market data, three-class trading predictions, entry filters, and configurable risk controls."
      overview={
        <>
          The dashboard brings market analysis and AI-generated
          trading signals into one interface, with predictions
          categorized as BUY, SELL, or NO TRADE.
        </>
      }
      technologies="Python · FastAPI · Next.js"
      detailsTitle="KEY CAPABILITIES"
      details={
        <ul className="space-y-3">
          <li>01 — Market data analysis</li>
          <li>02 — BUY / SELL / NO TRADE predictions</li>
          <li>03 — Entry filters and configurable risk controls</li>
        </ul>
      }
    />
  );
}

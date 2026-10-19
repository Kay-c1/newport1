
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export default function SleepApneaDetectorPage() {
  return (
    <ProjectCaseStudy
      number="04"
      category="MACHINE LEARNING"
      title="Sleep Apnea Detector"
      introduction="A machine learning project focused on analyzing sleep-related data to investigate patterns associated with possible sleep apnea."
      overview={
        <>
          This project explores how data processing and machine
          learning can be applied to sleep-related measurements.
          The goal is to document the approach used to analyze
          the data and evaluate the resulting model.
        </>
      }
      technologies="Add the actual languages, libraries, and frameworks used"
      detailsTitle="TECHNICAL APPROACH"
      details={
        <>
          Document your actual dataset, preprocessing steps,
          model architecture, evaluation metrics, and measured
          results here. Include only findings verified by your
          implementation.
        </>
      }
    />
  );
}


import Link from "next/link";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
export default function TrainingWheelsPage() {
  return (
    <>
      <ProjectCaseStudy
      number="02"
      category="FULL-STACK ENGINEERING"
      title="Training Wheels"
      introduction="An AI-assisted QA and project management platform designed to organize tasks, milestone approvals, messaging, and administrative workflows."
      overview={
        <>
          Training Wheels brings quality assurance and project
          coordination into a unified workflow. It is designed to
          help teams track work, review milestones, and coordinate
          project activities.
        </>
      }
      technologies="React · Django · Python"
      detailsTitle="PROJECT NOTES"
      details={
        <>
          The platform focuses on task assignment, milestone
          approvals, messaging, and administrative workflows.
          Additional implementation details and measured outcomes
          can be documented as they are verified.
        </>
      }
    />
    </>
  );
}

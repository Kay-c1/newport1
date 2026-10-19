
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export default function QRAssetTrackingPage() {
  return (
    <ProjectCaseStudy
      number="05"
      category="SOFTWARE ENGINEERING"
      title="QR Code Asset Tracking"
      introduction="A software project focused on identifying and tracking assets through QR codes."
      overview={
        <>
          The project explores how QR codes can connect physical
          assets with digital records, making asset identification
          and information retrieval easier.
        </>
      }
      technologies="Add the actual languages, frameworks, and database used"
      detailsTitle="IMPLEMENTATION"
      details={
        <>
          Document how assets are registered, how QR codes are
          generated or scanned, and how asset records are stored
          and retrieved. Include only features present in your
          actual implementation.
        </>
      }
    />
  );
}

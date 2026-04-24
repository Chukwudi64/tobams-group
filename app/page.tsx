import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LearningManagement } from '@/components/LearningManagement';
import { CorporateTraining } from "@/components/CorporateTraining";
import { PersonalisedTraining } from "@/components/PersonalisedTraining";
import { CapacityDevelopment } from "@/components/CapacityDevelopment";
import { ManagementDevelopment } from "@/components/ManagementDevelopment";
import { TransformationHub } from "@/components/TransformationHub";
import { TrainingConsultant } from "@/components/TrainingConsultant";
import { BookConsultation } from "@/components/BookConsultation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <LearningManagement />
        <CorporateTraining />
        <PersonalisedTraining />
        <CapacityDevelopment />
        <ManagementDevelopment />
        <TransformationHub />
        <TrainingConsultant />
        <BookConsultation />
      </main>
    </div>
  );
}

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LearningManagement } from '@/components/LearningManagement';
import { CorporateTraining } from "@/components/CorporateTraining";
import { PersonalisedTraining } from "@/components/PersonalisedTraining";
import { CapacityDevelopment } from "@/components/CapacityDevelopment";
import { ManagementDevelopment } from "@/components/ManagementDevelopment";

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
      </main>
    </div>
  );
}

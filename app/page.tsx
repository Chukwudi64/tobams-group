import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LearningManagement } from '@/components/LearningManagement';
import { CorporateTraining } from "@/components/CorporateTraining";
import { PersonalisedTraining } from "@/components/PersonalisedTraining";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <LearningManagement />
        <CorporateTraining />
        <PersonalisedTraining />
      </main>
    </div>
  );
}

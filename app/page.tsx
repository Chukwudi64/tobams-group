import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LearningManagement } from '@/components/LearningManagement';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <LearningManagement />
      </main>
    </div>
  );
}

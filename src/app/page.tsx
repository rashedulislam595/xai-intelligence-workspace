
import { DashboardPreview } from "@/components/dashboard/DashboardPreview";
import { HeroSection } from "@/components/hero/HeroSection";
import { InsightFlow } from "@/components/insight-flow/InsightFlow";
import { Header } from "@/components/layout/Header";
import SignatureInteraction from "@/components/wow/SignatureInteractionWrapper";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <InsightFlow />
      <DashboardPreview />
      <SignatureInteraction />
    </main>
  );
}
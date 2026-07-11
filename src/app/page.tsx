
import { HeroSection } from "@/components/hero/HeroSection";
import { InsightFlow } from "@/components/insight-flow/InsightFlow";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <InsightFlow />
    </main>
  );
}

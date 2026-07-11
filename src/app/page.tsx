
import { HeroSection } from "@/components/hero/HeroSection";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
    </main>
  );
}

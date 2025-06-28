import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home/HeroSection";
import BenefitSection from "./components/Home/BenefitSection";
import MentorSection from "./components/Home/MentorSection";
import ToolsSection from "./components/Home/ToolsSection";
import ServiceSection from "./components/Home/ServiceSection";
import CTASection from "./components/Home/CTASection";
import FAQSection from "./components/Home/FAQSection";
import FooterSection from "./components/Home/FooterSection";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroSection />
        <BenefitSection />
        <MentorSection />
        <ToolsSection />
        <ServiceSection />
        <CTASection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
}

import MissionSection from "../components/MissionSection"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import FAQSection from "@/components/FAQSection"

export default function Home() {
  return (
    <main className="mx-auto sm:px-6 md:max-w-7xl max-w-7xl px-4 ">
      <HeroSection />
      {/* <MissionSection /> */}
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
    </main>
  )
}

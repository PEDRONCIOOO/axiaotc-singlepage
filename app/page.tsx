import ApiSection from "@/components/ApiSection";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import FinalCta from "@/components/FinalCta";
import Hero from "@/components/Hero";
import ProofOfReserves from "@/components/ProofOfReserves";
import UseCases from "@/components/UseCases";
import Whitelabel from "@/components/Whitelabel";

export default function Home() {
  return (

    <div className="bg-white text-black dark:bg-[#0a0a0a] dark:text-white">
      <Hero />
      <Features />
      <ProofOfReserves />
      <ApiSection />
      <Whitelabel />
      <UseCases />
      <Faq />
      <FinalCta />
    </div>
  );
}

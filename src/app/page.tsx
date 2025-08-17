import Image from "next/image";
import { AboutMe } from "@/components/AboutMe";
import { PersonalInfo } from "@/components/PersonalInfo";
import { ProfessionalExperience } from "@/components/ProfessionalExperience";
import { Education } from "@/components/Education";
import { Languages } from "@/components/Languages";
import { OnlineContent } from "@/components/OnlineContent";
import { ProfessionalCertificates } from "@/components/ProfessionalCertificates";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <PersonalInfo />
        <AboutMe />
        <ProfessionalExperience />
        <Education />
        <Languages />
        <OnlineContent />
        <ProfessionalCertificates />
      </main>
      <Footer />
    </div>
  );
}

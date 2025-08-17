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
    <div className="font-sans min-h-screen flex flex-col">
      <main className="flex-grow p-8 sm:p-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <PersonalInfo />
          <AboutMe />
          <ProfessionalExperience />
          <Education />
          <Languages />
          <OnlineContent />
          <ProfessionalCertificates />
        </div>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

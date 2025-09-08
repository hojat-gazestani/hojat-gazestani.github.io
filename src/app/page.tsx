import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { PersonalInfo } from "@/components/PersonalInfo";
import { ProfessionalExperience } from "@/components/ProfessionalExperience";
import { Education } from "@/components/Education";
import { Languages } from "@/components/Languages";
import { OnlineContent } from "@/components/OnlineContent";
import { ProfessionalCertificates } from "@/components/ProfessionalCertificates";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { metadataConfig } from "@/components/Metadata";
import { LatestBlogs } from "@/components/LatestBlogs";

export const metadata: Metadata = metadataConfig;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="font-sans min-h-screen flex flex-col">
        <main className="flex-grow p-8 sm:p-20">
          <div className="max-w-4xl mx-auto flex flex-col gap-12">
            <Hero />
            <PersonalInfo />
            <AboutMe />
            <LatestBlogs />
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
    </>
  );
}

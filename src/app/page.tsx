import { AboutMe } from "@/components/AboutMe";
import { PersonalInfo } from "@/components/PersonalInfo";
import { ProfessionalExperience } from "@/components/ProfessionalExperience";
import { Education } from "@/components/Education";
import { Languages } from "@/components/Languages";
import { OnlineContent } from "@/components/OnlineContent";
import { ProfessionalCertificates } from "@/components/ProfessionalCertificates";
import { Footer } from "@/components/Footer";

import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { SEOHead } from "@/components/SEOHead";

export const metadata: Metadata = {
  metadataBase: new URL("https://hojat-gazestani.github.io"),
  title: "Hojat Gazestani | Cloud Engineer & DevOps Specialist",
  description:
    "Professional portfolio of Hojat Gazestani, showcasing expertise in Kubernetes, AWS, OpenStack, and DevOps engineering with 10+ years of experience.",
  keywords: [
    "DevOps",
    "Kubernetes",
    "AWS",
    "Cloud Engineer",
    "OpenStack",
    "CI/CD",
  ],
  authors: [{ name: "Hojat Gazestani" }],
  openGraph: {
    type: "website",
    url: "https://hojat-gazestani.github.io",
    title: "Hojat Gazestani | Cloud Engineer & DevOps Specialist",
    description:
      "Professional portfolio showcasing 10+ years of DevOps and cloud engineering experience",
    images: [
      {
        url: "/me.png",
        width: 1200,
        height: 630,
        alt: "Hojat Gazestani Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hojat_gazestani",
    creator: "@hojat_gazestani",
    images: "/me.png",
  },
};

export default function Home() {
  return (
    <>
      <SEOHead />
      <StructuredData />
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
    </>
  );
}

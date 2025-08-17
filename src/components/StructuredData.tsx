"use client";

export const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hojat Gazestani",
    jobTitle: "Cloud Engineer | DevOps Specialist",
    url: "https://hojat-gazestani.github.io",
    image: "/me.png",
    sameAs: [
      "https://github.com/hojat-gazestani",
      "https://www.linkedin.com/in/hojat-gazestani/",
      "https://www.youtube.com/channel/UCmYCnN9mmHEcSvfP6ytbnGA",
      "https://medium.com/@hojat_gazestani",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tehran",
      addressCountry: "IR",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Applied Science and Technology",
      },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "DevOps Engineer",
      skills: "Kubernetes, AWS, OpenStack, CI/CD, Python",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

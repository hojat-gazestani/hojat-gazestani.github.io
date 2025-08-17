export const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hojat Gazestani",
    jobTitle: "Cloud Engineer | DevOps Specialist",
    url: "https://hojat-gazestani.github.io",
    sameAs: [
      "https://github.com/hojat-gazestani",
      "https://www.linkedin.com/in/hojat-gazestani/",
      "https://www.youtube.com/channel/UCmYCnN9mmHEcSvfP6ytbnGA",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tehran",
      addressCountry: "IR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

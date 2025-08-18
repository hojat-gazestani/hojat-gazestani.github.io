import type { Metadata } from "next";

export const metadataConfig: Metadata = {
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
  icons: {
    icon: "/favicon.ico",
  },
};
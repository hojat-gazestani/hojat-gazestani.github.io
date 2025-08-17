import { DefaultSeo } from "next-seo";

export const SEOHead = () => (
  <DefaultSeo
    canonical="https://hojat-gazestani.github.io"
    additionalLinkTags={[
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ]}
    additionalMetaTags={[
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ]}
  />
);

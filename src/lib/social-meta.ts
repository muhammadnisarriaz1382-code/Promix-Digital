const SHARING_ORIGIN = "https://promixdigital.co";
const SOCIAL_TITLE = "Promix Digital | Performance Marketing & Ecommerce Websites";
const SOCIAL_DESCRIPTION = "We build ecommerce storefronts and manage performance marketing campaigns. Explore our work and discuss your next project.";
const SOCIAL_IMAGE = `${SHARING_ORIGIN}/promix-social-preview.png`;

export function socialMeta(path: string) {
  return [
    { property: "og:title", content: SOCIAL_TITLE },
    { property: "og:description", content: SOCIAL_DESCRIPTION },
    { property: "og:image", content: SOCIAL_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:url", content: new URL(path, SHARING_ORIGIN).href },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: SOCIAL_TITLE },
    { name: "twitter:description", content: SOCIAL_DESCRIPTION },
    { name: "twitter:image", content: SOCIAL_IMAGE },
  ];
}
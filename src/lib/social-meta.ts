const SHARING_ORIGIN = "https://promixdigital.co";
const SOCIAL_TITLE = "Promix Digital | Your Digital Growth Partner";
const SOCIAL_DESCRIPTION = "Helping brands build their presence, reach new audiences and grow online.";
const SOCIAL_IMAGE = `${SHARING_ORIGIN}/promix-social-preview-v3.png`;

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
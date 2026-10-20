import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Target } from "lucide-react";
import baghistanAsset from "@/assets/client-work/baghistan.png.asset.json";
import fineTuneAsset from "@/assets/client-work/fine-tune-3d.png.asset.json";
import jewelryPalaceAsset from "@/assets/client-work/jewelry-palace.png.asset.json";
import artisanSoapAsset from "@/assets/client-work/artisan-soap-co.png.asset.json";
import londonFurnitureAsset from "@/assets/client-work/london-furniture.png.asset.json";
import noirIndulgenceAsset from "@/assets/client-work/noir-indulgence.jpg.asset.json";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Promix Digital" },
      { name: "description", content: "Selected work from Promix Digital — storefronts, ad campaigns, branding, and video for brands that scaled." },
      { property: "og:title", content: "Our Work — Promix Digital" },
      { property: "og:description", content: "Explore brand, ecommerce, and creative work by Promix Digital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: WorkPage,
});

type Project = {
  title: string;
  category: string;
  goal: string;
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Brown Biscuit Games",
    category: "Website Development · Performance Marketing",
    goal: "Showcase the games through an engaging, easy-to-navigate website and support marketing campaigns that attract relevant audiences and encourage purchases.",
    image: "/brownbiscuitgames-logo.png",
    link: "https://brownbiscuitgames.com/",
  },
  {
    title: "CharmTot",
    category: "Ecommerce Development · US Market Launch",
    goal: "Build trust with first-time shoppers through clear navigation, informative product pages and a smooth journey from discovery to checkout.",
    image: "/charmtot-logo.jpeg",
    link: "https://charmtot.com/",
  },
  {
    title: "ZenMart World",
    category: "Ecommerce Development · US Market Launch",
    goal: "Help shoppers find relevant products, understand their value and complete purchases through a clear, mobile-friendly storefront.",
    image: "/zenmartworld-logo.png",
    link: "https://zenmartworld.com/",
  },
  {
    title: "Baghistan",
    category: "D2C Strategy · Ecommerce",
    goal: "Build a conversion-focused online presence for a premium mango brand and make seasonal pre-orders simple.",
    image: baghistanAsset.url,
  },
  {
    title: "Fine Tune 3D",
    category: "Digital Presence · Lead Generation",
    goal: "Present specialized 3D services clearly and create a stronger path from discovery to qualified enquiries.",
    image: fineTuneAsset.url,
  },
  {
    title: "Jewelry Palace",
    category: "Brand Positioning · Creative",
    goal: "Shape a premium visual direction that builds trust and highlights diamonds and watches with clarity.",
    image: jewelryPalaceAsset.url,
    link: "https://shopjewelrypalace.com/",
  },
  {
    title: "Artisan Soap Co.",
    category: "Brand Identity · Product Storytelling",
    goal: "Create a clean, approachable identity that lets handcrafted products and their story take center stage.",
    image: artisanSoapAsset.url,
    link: "https://artisansoapco.uk/",
  },
  {
    title: "London Furniture",
    category: "Luxury Branding · Social Creative",
    goal: "Establish a refined identity and visual system suited to a premium home-furnishing audience.",
    image: londonFurnitureAsset.url,
  },
  {
    title: "Noir Indulgence",
    category: "Luxury Identity · Launch Creative",
    goal: "Develop an elegant brand presence with rich campaign visuals designed for a high-end launch.",
    image: noirIndulgenceAsset.url,
  },
];

// Same media box on every card; the logo sits in a centered square that
// never stretches past the card, so wide logos stay small and uncropped.
const MEDIA_BOX = "flex h-48 items-center justify-center overflow-hidden bg-background md:h-[320px]";
const LOGO_SQUARE = "h-32 w-32 sm:h-44 sm:w-44 md:h-[280px] md:w-[280px]";

function WorkPage() {
  return (
    <Layout>
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Selected work</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold text-foreground md:text-6xl">
            Brands we've helped <span className="text-gradient">move forward</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Selected client work across ecommerce, brand identity, creative direction, and digital growth.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const cardClass =
              "group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-smooth hover:border-primary/50 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

            const media = (
              <div className={MEDIA_BOX}>
                <div className={LOGO_SQUARE}>
                  <img
                    src={p.image}
                    alt={`${p.title} logo`}
                    className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    width={280}
                    height={280}
                    loading="lazy"
                  />
                </div>
              </div>
            );

            const info = (
              <div className="flex flex-1 flex-col p-6">
                <p className="min-h-[2.5rem] text-xs font-medium uppercase leading-normal tracking-wider text-primary">
                  {p.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-tight text-foreground">{p.title}</h3>
                <div className="mt-4 flex items-start gap-3 border-t border-border/60 pt-4">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground"><span className="font-medium text-foreground">Project goal:</span> {p.goal}</p>
                </div>
                {p.link && (
                  <p className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-primary">
                    Visit site <ArrowUpRight className="h-4 w-4" />
                  </p>
                )}
              </div>
            );

            return p.link ? (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
                aria-label={`${p.title} — opens in a new tab`}
              >
                {media}
                {info}
              </a>
            ) : (
              <article key={p.title} className={cardClass}>
                {media}
                {info}
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-gradient-primary p-12 text-center shadow-glow md:p-16">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Could your brand be next?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Tell us about your goals — we'll send back a tailored growth plan within 48 hours.
          </p>
          <Button asChild size="lg" className="mt-8 bg-background text-foreground hover:bg-background/90">
            <Link to="/contact">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
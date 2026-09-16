import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, Megaphone, Palette, Video, GraduationCap, ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Promix Digital" },
      { name: "description", content: "Shopify & WordPress store creation, Meta, Google, TikTok & Pinterest ads, branding, video editing, and 1-on-1 dropshipping consultation." },
      { property: "og:title", content: "Services — Promix Digital" },
      { property: "og:description", content: "Five services. One growth engine for your brand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: ShoppingBag,
    title: "Shopify / WordPress Store Creation",
    desc: "Conversion-focused storefronts built on the platform that fits your business — fast, mobile-first, and ready to scale from launch day.",
    features: ["Theme customization", "Product catalog setup", "Payment & shipping integration", "Speed & SEO optimized"],
  },
  {
    icon: Megaphone,
    title: "Meta, Google, TikTok & Pinterest Ads",
    desc: "Multi-platform ad campaigns engineered for ROAS — Meta, Google, TikTok, and Pinterest — from creative testing to scaling winners profitably.",
    features: ["Audience & keyword research", "Creative testing", "Funnel optimization", "Weekly reporting"],
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    desc: "Logos, identity systems, and marketing creative that make your brand recognizable and premium.",
    features: ["Logo & identity", "Brand guidelines", "Ad creatives", "Social templates"],
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Hook-first cuts for ads, reels, and YouTube — designed to stop the scroll and drive action.",
    features: ["UGC editing", "Ad creatives", "Reels & shorts", "Color & sound design"],
  },
  {
    icon: GraduationCap,
    title: "Consultation & Classes",
    desc: "1-on-1 dropshipping consultation covering everything from product research to scaling your first profitable store.",
    features: ["Multi-platform ad strategies", "Product hunting methods", "Creatives hunting & making", "Store management for clients", "Tricks & tools"],
  },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our services</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold text-foreground md:text-6xl">
            Everything you need to <span className="text-gradient">grow online</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Five focused services. One unified team. We handle the marketing, the storefront, and
            the creative so you can focus on the product.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group grid gap-8 rounded-3xl border border-border bg-card p-8 transition-smooth hover:border-primary/40 hover:shadow-card md:grid-cols-[auto_1fr_auto] md:items-center md:p-10"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-glow">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="text-5xl font-bold text-primary/30 md:hidden">0{i + 1}</div>
              </div>

              <div>
                <div className="hidden text-sm font-semibold text-primary md:block">0{i + 1}</div>
                <h2 className="mt-1 text-2xl font-bold text-foreground md:text-3xl">{s.title}</h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild variant="outline" className="border-border bg-transparent text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary">
                <Link to="/contact">Inquire <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Promix Digital" },
      { name: "description", content: "Selected work from Promix Digital — storefronts, ad campaigns, branding, and video for brands that scaled." },
      { property: "og:title", content: "Our Work — Promix Digital" },
      { property: "og:description", content: "Real brands. Real results. See what we've built." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  { title: "Lumora Skincare", category: "Shopify Store + Meta Ads", result: "6.2x ROAS in 90 days", color: "from-emerald-500/20 to-primary/30" },
  { title: "NorthGear Apparel", category: "Brand Identity + Storefront", result: "$180k month one", color: "from-primary/30 to-lime-500/20" },
  { title: "PetPals Co.", category: "Dropshipping Management", result: "0 to $40k/mo in 60 days", color: "from-green-500/20 to-primary/20" },
  { title: "Fitline Studio", category: "Video Ads + Creative", result: "3.4x lower CPA", color: "from-primary/20 to-emerald-400/20" },
  { title: "Aurora Home", category: "WordPress + WooCommerce", result: "Launched in 14 days", color: "from-lime-500/20 to-primary/30" },
  { title: "Velo Coffee", category: "Branding + Storefront", result: "Sold out launch drop", color: "from-primary/30 to-green-500/20" },
];

function WorkPage() {
  return (
    <Layout>
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Selected work</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold text-foreground md:text-6xl">
            Brands we've helped <span className="text-gradient">scale</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A selection of recent projects — from zero-to-launch storefronts to seven-figure ad accounts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-smooth hover:border-primary/50 hover:shadow-card">
              <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.color}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-foreground/20">{p.title.charAt(0)}</span>
                </div>
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-smooth group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">{p.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-gradient-primary p-12 text-center shadow-glow md:p-16">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Could your brand be next?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Tell us about your goals — we'll send back a tailored growth plan within 48 hours.
          </p>
          <Button asChild size="lg" className="mt-8 bg-background text-foreground hover:bg-background/90">
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

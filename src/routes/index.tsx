import { socialMeta } from "@/lib/social-meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Target, TrendingUp, ShoppingBag, Megaphone, Palette, Video, GraduationCap } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Promix Digital — Reach More. Convert Better. Grow Faster." },
      { name: "description", content: "Promix Digital is a full-service agency for store creation, Meta, Google, TikTok & Pinterest ads, branding, video editing, and dropshipping consultation." },
      ...socialMeta("/"),
    ],
  }),
  component: HomePage,
});

const services = [
  { number: "01", title: "Shopify / WordPress Stores", description: "End-to-end storefront builds engineered for conversion and scale.", icon: ShoppingBag },
  { number: "02", title: "Meta, Google, TikTok & Pinterest Ads", description: "Multi-platform ad campaigns on Meta, Google, TikTok, and Pinterest that turn audiences into paying customers.", icon: Megaphone },
  { number: "03", title: "Graphic Design & Branding", description: "Identity systems and creative that make your brand impossible to ignore.", icon: Palette },
  { number: "04", title: "Video Editing", description: "Scroll-stopping cuts for ads, reels, and brand storytelling.", icon: Video },
  { number: "05", title: "Consultation & Classes", description: "1-on-1 coaching to take you from zero to your first profitable sale.", icon: GraduationCap },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3 w-3" /> Performance-driven digital agency
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Reach more. <br />
              Convert better. <br />
              <span className="text-gradient">Grow faster.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Promix Digital builds high-converting storefronts, runs profitable ads across Meta,
              Google, TikTok, and Pinterest, and crafts brand systems that scale — all under one roof.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-card/40 text-foreground hover:bg-card">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { v: "120+", l: "Stores Launched" },
              { v: "$4M+", l: "Ad Spend Managed" },
              { v: "8x", l: "Avg. ROAS" },
              { v: "50+", l: "Happy Brands" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
                <div className="text-3xl font-bold text-primary md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What we do</p>
            <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
              Our <span className="text-gradient">company</span> services
            </h2>
            <div className="mt-2 h-1 w-24 rounded-full bg-primary" />
          </div>
          <p className="max-w-md text-muted-foreground">
            From storefront to ad creative — every service designed to move the needle on revenue.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.number} {...s} />)}
        </div>
      </section>

      {/* A TO Z STORE HANDLING */}
      <section className="bg-card/30 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Done-for-you</p>
            <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
              A to Z <span className="text-gradient">Store Handling</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Expert dropshipping store management for busy business owners. We run the marketing,
              the products, and the creative — you watch the orders roll in.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Hand Us Your Store <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="space-y-3">
            {[
              { icon: Target, t: "Marketing & Ads", d: "Multi-platform campaigns on Meta, Google, TikTok & Pinterest, optimized weekly." },
              { icon: ShoppingBag, t: "Store Creation & Management", d: "Built, tuned, and maintained for performance." },
              { icon: Sparkles, t: "Winning Product Hunting", d: "Data-backed product research that finds the gold." },
              { icon: Palette, t: "Creatives Making", d: "Hooks, statics, and UGC produced in-house." },
              { icon: TrendingUp, t: "Monthly Performance Reports", d: "Transparent reporting so you always know what's working." },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-smooth hover:border-primary/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{f.t}</h4>
                  <p className="mt-0.5 text-sm text-muted-foreground">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 text-center shadow-glow md:p-20">
          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-4xl font-bold text-primary-foreground md:text-5xl">
              Ready to scale your brand?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Book a free strategy call. We'll audit your store, ads, and creative — no fluff, just next steps.
            </p>
            <Button asChild size="lg" className="mt-8 bg-background text-foreground hover:bg-background/90">
              <Link to="/contact">Book a Free Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

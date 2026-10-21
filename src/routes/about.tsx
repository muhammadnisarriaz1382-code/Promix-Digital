import { socialMeta } from "@/lib/social-meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Rocket, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Promix Digital" },
      { name: "description", content: "Promix Digital is a performance-driven team of marketers, designers, and store builders helping brands grow faster." },
      ...socialMeta("/about"),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="border-b border-border/50 bg-card/30">
        <div data-reveal="hero" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About us</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold text-foreground md:text-6xl">
            We build brands that <span className="text-gradient">actually sell</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Promix Digital is a small, senior team of performance marketers, designers, and
            store builders. We've spent years inside ad accounts and storefronts — and we've
            learned what makes brands scale (and what kills them).
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div data-reveal>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our story</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Promix Digital started with one belief: most agencies overcomplicate growth.
                Brands don't need 50 dashboards — they need a profitable ad account, a fast
                storefront, and creative that converts.
              </p>
              <p>
                So we built a focused team that does exactly that. No bloat, no jargon — just
                the five services that move revenue, executed by people who care about your
                ROAS as much as you do.
              </p>
              <p>
                Today, we partner with founders launching their first store and brands scaling
                past seven figures. Same playbook, same obsession with results.
              </p>
            </div>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
              <Link to="/contact">Work With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Eye, title: "Vision", text: "Make growth simple, transparent, and accessible to every founder." },
              { icon: Heart, title: "Values", text: "Honest reporting, real partnerships, and obsession with results." },
              { icon: Rocket, title: "Mission", text: "Scale 100 brands past seven figures by 2026." },
              { icon: Users, title: "Team", text: "Marketers, editors, designers, and developers — under one roof." },
            ].map((b, i) => (
              <div key={b.title} data-reveal data-reveal-index={i} className="rounded-2xl border border-border bg-card p-6 transition-smooth hover:border-primary/40 hover:shadow-card">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div data-reveal className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">By the numbers</h2>
            <p className="mt-3 text-muted-foreground">A snapshot of what we've shipped so far.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { v: "120+", l: "Stores launched" },
              { v: "$4M+", l: "Ad spend managed" },
              { v: "8x", l: "Average ROAS" },
              { v: "50+", l: "Brands served" },
            ].map((s, i) => (
              <div key={s.l} data-reveal data-reveal-index={i} className="rounded-2xl border border-border bg-background p-8 text-center">
                <div className="text-4xl font-bold text-gradient md:text-5xl">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

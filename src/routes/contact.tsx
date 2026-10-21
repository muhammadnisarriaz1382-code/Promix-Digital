import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { whatsappProjectUrl } from "@/lib/whatsapp";
import { socialMeta } from "@/lib/social-meta";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Globe, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Promix Digital" },
      { name: "description", content: "Get in touch with Promix Digital. Call 0314-2043492 or send us a message to start your project." },
      ...socialMeta("/contact"),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! We'll get back to you within 24 hours.");
    }, 800);
  };

  return (
    <Layout>
      <Toaster position="top-center" />
      <section className="border-b border-border/50 bg-card/30">
        <div data-reveal="hero" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Get in touch</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold text-foreground md:text-6xl">
            Let's build something <span className="text-gradient">that converts</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Tell us a bit about your brand and goals. We'll respond within 24 hours with next steps.
          </p>
          <Button asChild size="lg" className="mt-8 min-h-12 w-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 sm:w-auto">
            <a href={whatsappProjectUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <div className="space-y-6">
            <div data-reveal className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground">Reach us directly</h3>
              <ul className="mt-6 space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "0314-2043492" },
                  { icon: Globe, label: "Website", value: "promixdigital.co" },
                  { icon: Mail, label: "Email", value: "promixdigital.co@gmail.com" },
                  { icon: MapPin, label: "Hours", value: "Mon – Sat · 10am – 10pm" },
                ].map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                      <p className="mt-0.5 font-medium text-foreground">{c.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-primary p-8 shadow-glow">
              <div data-reveal data-reveal-index={1}>
              <h3 className="text-lg font-semibold text-primary-foreground">Free strategy call</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Book a 30-minute audit. We'll review your store, ads, and creative — no pitch, just feedback.
              </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form data-reveal data-reveal-index={1} onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Your full name" className="mt-2 bg-background" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@brand.com" className="mt-2 bg-background" />
              </div>
              <div>
                <Label htmlFor="brand">Brand / Company</Label>
                <Input id="brand" placeholder="Brand name" className="mt-2 bg-background" />
              </div>
              <div>
                <Label htmlFor="service">Service</Label>
                <Input id="service" placeholder="e.g. Meta Ads, Store build" className="mt-2 bg-background" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Project details</Label>
                <Textarea id="message" required rows={5} placeholder="Tell us about your goals, timeline, and current setup…" className="mt-2 bg-background" />
              </div>
            </div>
            <Button type="submit" disabled={submitting} size="lg" className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow sm:w-auto">
              {submitting ? "Sending…" : <>Send message <Send className="ml-2 h-4 w-4" /></>}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

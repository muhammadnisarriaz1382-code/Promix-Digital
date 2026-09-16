import { Link } from "@tanstack/react-router";
import { Phone, Globe, Mail, Instagram, Facebook } from "lucide-react";
import logoAsset from "@/assets/promix-logo-wide.png.asset.json";
const logo = logoAsset.url;

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo} alt="Promix Digital" className="h-12 w-auto" width={172} height={48} />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              We help brands reach more, convert better, and grow faster through performance marketing,
              storefront builds, and creative production.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/work" className="hover:text-primary">Work</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> 0314-2043492</li>
              <li className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> promixdigital.co</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> promixdigital.co@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Promix Digital. All rights reserved.</p>
          <p>Built for brands ready to scale.</p>
        </div>
      </div>
    </footer>
  );
}

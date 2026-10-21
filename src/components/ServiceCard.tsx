import type { LucideIcon } from "lucide-react";

interface Props {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  revealIndex?: number;
}

export function ServiceCard({ number, title, description, icon: Icon, revealIndex = 0 }: Props) {
  return (
    <div data-reveal data-reveal-index={revealIndex} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-smooth hover:border-primary/50 hover:shadow-card">
      <div className="absolute -right-8 -top-8 text-[8rem] font-bold leading-none text-primary/5 transition-smooth group-hover:text-primary/10">
        {number}
      </div>
      <div className="relative">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

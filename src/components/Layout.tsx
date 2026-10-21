import { Header } from "./Header";
import { Footer } from "./Footer";
import { useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import { useScrollReveals } from "@/hooks/use-scroll-reveals";

export function Layout({ children }: { children: React.ReactNode }) {
  const main = useRef<HTMLElement>(null);
  const pathname = useLocation({ select: (location) => location.pathname });
  useScrollReveals(main, pathname);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main ref={main} className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

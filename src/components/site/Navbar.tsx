import { useEffect, useState } from "react";
import { Menu, X, Bike } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "book", key: "book" as const },
  { id: "contact", key: "contact" as const },
  { id: "services", key: "services" as const },
];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-soft" : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-2 font-bold text-lg">
          <span className="size-9 rounded-xl bg-gradient-brand text-primary-foreground grid place-items-center shadow-soft">
            <Bike className="size-5" />
          </span>
          <span>Bike<span className="text-primary">Seva</span></span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
            >
              {t.nav[l.key]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("en")}
              className={cn("px-3 py-1 rounded-full transition", lang === "en" && "bg-gradient-brand text-primary-foreground")}
            >
              EN
            </button>
            <button
              onClick={() => setLang("hi")}
              className={cn("px-3 py-1 rounded-full transition", lang === "hi" && "bg-gradient-brand text-primary-foreground")}
            >
              हिंदी
            </button>
          </div>
          <button
            onClick={() => go("book")}
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition"
          >
            {t.nav.book}
          </button>
          <button onClick={() => setOpen((s) => !s)} className="md:hidden p-2 rounded-md hover:bg-muted" aria-label="menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-4 py-3 flex flex-col">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-left py-3 border-b border-border/60 font-medium"
              >
                {t.nav[l.key]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

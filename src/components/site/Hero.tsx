import { ArrowRight, MapPin, Bike, Shield, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const CAPTAIN_WA = "https://wa.me/919829982153?text=" + encodeURIComponent("Hello, I want to become a captain 🚴‍♂️");

export function Hero() {
  const { t } = useI18n();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-hero">
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-gradient-sun opacity-40 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-border text-xs font-semibold text-foreground/80 shadow-soft">
            <Sparkles className="size-3.5 text-brand" /> {t.hero.tag}
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            {t.hero.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">{t.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => go("book")}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand text-primary-foreground font-semibold shadow-lift hover:scale-[1.02] active:scale-[0.99] transition"
            >
              {t.hero.cta1}
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
            </button>
            <a
              href={CAPTAIN_WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-card border border-border font-semibold hover:border-primary transition shadow-soft"
            >
              <Bike className="size-4" /> {t.hero.cta2}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { v: "500+", l: t.hero.stat1 },
              { v: "120+", l: t.hero.stat2 },
              { v: "₹50", l: t.hero.stat3 },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-card/70 border border-border p-3 shadow-soft">
                <div className="text-2xl font-extrabold text-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md aspect-square">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-brand rotate-6 opacity-20" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-card shadow-lift border border-border overflow-hidden">
              <div className="h-full w-full bg-gradient-hero relative">
                <div className="absolute inset-6 rounded-3xl bg-card/80 backdrop-blur-md border border-border p-5 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="size-9 rounded-xl bg-gradient-brand grid place-items-center text-primary-foreground">
                        <Bike className="size-4" />
                      </span>
                      <div>
                        <div className="text-xs text-muted-foreground">Captain</div>
                        <div className="text-sm font-bold">Mukesh ji</div>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">2 min</span>
                  </div>
                  <div className="my-4 h-px bg-border" />
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="size-4 text-primary mt-0.5" />
                      <div><div className="font-semibold">Dangwar</div><div className="text-xs text-muted-foreground">Pickup</div></div>
                    </div>
                    <div className="ml-1.5 h-6 w-px border-l-2 border-dashed border-border" />
                    <div className="flex items-start gap-2">
                      <MapPin className="size-4 text-brand mt-0.5" />
                      <div><div className="font-semibold">Japla</div><div className="text-xs text-muted-foreground">Drop · 8 km</div></div>
                    </div>
                  </div>
                  <div className="mt-auto rounded-2xl bg-gradient-brand text-primary-foreground p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs opacity-80">Fare</div>
                      <div className="text-2xl font-extrabold">₹74</div>
                    </div>
                    <Shield className="size-6 opacity-80" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-4 animate-float bg-card border border-border rounded-2xl shadow-lift px-3 py-2 text-xs font-semibold flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" /> Captain arriving
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

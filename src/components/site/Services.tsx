import { UtensilsCrossed, Pill, ShoppingBag, Globe, Bot } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [UtensilsCrossed, Pill, ShoppingBag, Globe, Bot];

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">{t.services.kicker}</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">{t.services.title}</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={s.t} className="group relative rounded-3xl bg-card border border-border p-7 overflow-hidden hover:-translate-y-1 hover:shadow-lift transition-all">
                <div className="absolute -right-10 -top-10 size-40 rounded-full bg-gradient-sun opacity-0 group-hover:opacity-30 blur-2xl transition-opacity" />
                <div className="relative">
                  <div className="size-12 rounded-2xl bg-secondary grid place-items-center text-primary group-hover:bg-gradient-brand group-hover:text-primary-foreground transition">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

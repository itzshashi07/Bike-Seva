import { Coins, Zap, Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  const items = [
    { Icon: Coins, t: t.about.f1t, d: t.about.f1d, c: "from-primary/15 to-primary/5 text-primary" },
    { Icon: Zap, t: t.about.f2t, d: t.about.f2d, c: "from-brand/20 to-brand/5 text-brand" },
    { Icon: Users, t: t.about.f3t, d: t.about.f3d, c: "from-accent/40 to-accent/10 text-accent-foreground" },
  ];
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">{t.about.kicker}</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">{t.about.title}</h2>
          <p className="mt-5 text-muted-foreground text-lg">{t.about.desc}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {items.map(({ Icon, t: title, d, c }) => (
            <div key={title} className="group rounded-3xl bg-card border border-border p-7 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all">
              <div className={`size-14 rounded-2xl grid place-items-center bg-gradient-to-br ${c}`}>
                <Icon className="size-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

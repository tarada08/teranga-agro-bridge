import { Sprout, Globe2, Wrench, Lightbulb, Truck } from "lucide-react";
import { dict, type Lang } from "@/lib/i18n";

const ICONS = [Sprout, Globe2, Wrench, Lightbulb, Truck];

export function ServicesPage({ lang }: { lang: Lang }) {
  const t = dict[lang].services;
  return (
    <section className="container-page py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.kicker}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{t.lead}</p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((s, i) => {
          const Icon = ICONS[i] ?? Sprout;
          return (
            <article key={s.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:shadow-elegant hover:-translate-y-1">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-gold/20 to-primary/10 blur-2xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-foreground">{s.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

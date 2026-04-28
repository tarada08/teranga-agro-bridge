import { Link } from "@tanstack/react-router";
import { ShieldCheck, Users, BadgeDollarSign, Truck, Leaf } from "lucide-react";
import { dict, routesByLang, type Lang } from "@/lib/i18n";

const ICONS = [ShieldCheck, Users, BadgeDollarSign, Truck, Leaf];

export function CommitmentsPage({ lang }: { lang: Lang }) {
  const t = dict[lang].commitments;
  const r = routesByLang[lang];
  return (
    <section className="container-page py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.kicker}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">{t.title}</h1>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((it, i) => {
          const Icon = ICONS[i] ?? ShieldCheck;
          return (
            <div key={it.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15 text-gold-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-foreground">{it.t}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-10 text-primary-foreground text-center shadow-elegant">
        <h2 className="text-2xl md:text-3xl font-bold">{t.ctaTitle}</h2>
        <p className="mt-3 text-primary-foreground/85">{t.ctaText}</p>
        <Link to={r.contact} className="mt-6 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold">
          {t.ctaBtn}
        </Link>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import about from "@/assets/about.jpg";
import { dict, routesByLang, type Lang } from "@/lib/i18n";

export function AboutPage({ lang }: { lang: Lang }) {
  const t = dict[lang].about;
  const r = routesByLang[lang];
  return (
    <section className="container-page py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.kicker}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">{t.title}</h1>
      </div>
      <div className="mt-12 grid gap-12 md:grid-cols-2 items-center">
        <img src={about} alt="" width={1536} height={1024} loading="lazy" className="rounded-2xl shadow-elegant w-full h-auto object-cover" />
        <div className="space-y-5 text-foreground/85 leading-relaxed">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <Link to={r.contact} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary-glow">
            {t.cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="mt-20 grid gap-6 sm:grid-cols-3">
        {t.stats.map((s) => (
          <div key={s.v} className="rounded-xl border border-border bg-card p-6 text-center shadow-soft">
            <p className="font-display text-4xl font-bold text-primary">{s.k}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

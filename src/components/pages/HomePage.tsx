import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Globe2, Truck, Sprout, Wrench } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { dict, routesByLang, type Lang } from "@/lib/i18n";
import { EventBanner } from "@/components/EventBanner";

export function HomePage({ lang }: { lang: Lang }) {
  const t = dict[lang].home;
  const r = routesByLang[lang];
  const items = [
    { icon: Sprout, title: t.h1, text: t.h1d },
    { icon: Wrench, title: t.h2, text: t.h2d },
    { icon: Globe2, title: t.h3, text: t.h3d },
    { icon: Truck, title: t.h4, text: t.h4d },
  ];
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="" width={1920} height={1080} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="container-page py-28 md:py-40 text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {t.badge}
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl font-bold leading-[1.05]">
            {t.title1}<span className="text-gold">{t.titleHighlight}</span>{t.title2}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">{t.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={r.services} className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5">
              {t.ctaServices} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to={r.contact} className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-8 md:p-14 text-primary-foreground shadow-elegant">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">{t.visionTitle}</h2>
              <p className="mt-4 text-primary-foreground/85 leading-relaxed">{t.visionText}</p>
              <Link to={r.about} className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold">
                {t.visionCta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-3">
              {t.commitments.map((c) => (
                <li key={c} className="flex items-center gap-3 text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  <span className="font-medium">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

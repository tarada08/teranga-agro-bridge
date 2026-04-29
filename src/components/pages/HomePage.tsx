import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Globe2, Truck, Sprout, Wrench, Mail, Phone, MapPin } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { dict, routesByLang, type Lang } from "@/lib/i18n";
import { EventBanner } from "@/components/EventBanner";

export function HomePage({ lang }: { lang: Lang }) {
  const t = dict[lang].home;
  const r = routesByLang[lang];
  const c = dict[lang].contact;
  const items = [
    { icon: Sprout, title: t.h1, text: t.h1d },
    { icon: Wrench, title: t.h2, text: t.h2d },
    { icon: Globe2, title: t.h3, text: t.h3d },
    { icon: Truck, title: t.h4, text: t.h4d },
  ];

  const anchors = [
    { href: "#services", label: dict[lang].nav.services },
    { href: "#commitments", label: dict[lang].nav.commitments },
    { href: "#contact", label: dict[lang].nav.contact },
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
            <a href="#services" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5">
              {t.ctaServices} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
              {t.ctaContact}
            </a>
          </div>

          <nav aria-label="Quick navigation" className="mt-10 flex flex-wrap gap-2">
            {anchors.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/15 hover:text-white"
              >
                {a.label}
                <ArrowRight className="h-3 w-3" />
              </a>
            ))}
          </nav>
        </div>
      </section>


      <EventBanner lang={lang} contactHref={r.contact} />

      <section id="services" className="container-page py-20 scroll-mt-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{dict[lang].services.kicker}</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">{dict[lang].services.title}</h2>
        </div>
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
        <div className="mt-8">
          <Link to={r.services} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            {t.ctaServices} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="commitments" className="container-page pb-20 scroll-mt-24">
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
              {t.commitments.map((cm) => (
                <li key={cm} className="flex items-center gap-3 text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  <span className="font-medium">{cm}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="container-page pb-24 scroll-mt-24">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-soft">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{c.kicker}</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">{c.title}</h2>
              <p className="mt-3 text-muted-foreground">{c.lead}</p>
              <Link to={r.contact} className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
                {c.send} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary shrink-0" /><span>Dakar, Sénégal</span></li>
              <li className="flex items-start gap-3"><Mail className="h-5 w-5 text-primary shrink-0" /><a href="mailto:contact@terangabridgeafrica.com" className="hover:underline">contact@terangabridgeafrica.com</a></li>
              <li className="flex items-start gap-3"><Phone className="h-5 w-5 text-primary shrink-0" /><a href="tel:+221000000000" className="hover:underline">+221 00 000 00 00</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

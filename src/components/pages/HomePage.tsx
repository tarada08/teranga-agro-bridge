import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Globe2, Truck, Sprout, Wrench, Mail, Phone, MapPin, Sparkles, ChevronDown, Quote } from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import heroCommodities from "@/assets/hero-commodities.jpg";
import heroFactory from "@/assets/hero-factory.jpg";
import heroTeam from "@/assets/hero-team.jpg";
import { dict, routesByLang, type Lang } from "@/lib/i18n";
import { EventBanner } from "@/components/EventBanner";
import { CountUp } from "@/components/CountUp";
import { LazyVideo } from "@/components/LazyVideo";

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
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[oklch(0.18_0.04_155)]">
        {/* Mosaic background */}
        <div aria-hidden="true" className="absolute inset-0 -z-20 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-2 gap-1">
          <img src={heroPort} alt="" width={1024} height={1280} fetchPriority="high" decoding="async" className="h-full w-full object-cover md:col-span-2 md:row-span-2 animate-fade-in" />
          <img src={heroCommodities} alt="" width={1024} height={1024} loading="lazy" decoding="async" className="h-full w-full object-cover animate-fade-in" style={{ animationDelay: "0.15s" }} />
          <img src={heroFactory} alt="" width={1024} height={1024} loading="lazy" decoding="async" className="h-full w-full object-cover animate-fade-in" style={{ animationDelay: "0.3s" }} />
          <img src={heroTeam} alt="" width={1024} height={1280} loading="lazy" decoding="async" className="hidden md:block h-full w-full object-cover col-span-2 animate-fade-in" style={{ animationDelay: "0.45s" }} />
        </div>
        {/* Dark overlay for legibility */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-black/80 via-black/65 to-primary/70" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 animate-gradient-pan opacity-60" style={{ background: "var(--gradient-hero)", backgroundSize: "200% 200%" }} />


        {/* Floating decorative orbs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
          <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-float-slower" />
          <div className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-gold/15 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container-page py-28 md:py-40 text-white relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-gold animate-pulse-ring" />
              <span className="relative h-2 w-2 rounded-full bg-gold" />
            </span>
            {t.badge}
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t.title1}
            <span className="shimmer-text">{t.titleHighlight}</span>
            {t.title2}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/85 animate-fade-up" style={{ animationDelay: "0.25s" }}>{t.lead}</p>

          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="#services" className="group inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              {t.ctaServices}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
              <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
              {t.ctaContact}
            </a>
          </div>

          <nav aria-label={lang === "fr" ? "Navigation rapide vers les sections de la page" : "Quick navigation to page sections"} className="mt-10 flex flex-wrap gap-2 animate-fade-up" style={{ animationDelay: "0.55s" }}>
            {anchors.map((a) => (
              <a
                key={a.href}
                href={a.href}
                aria-label={`${lang === "fr" ? "Aller à la section" : "Go to section"} ${a.label}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur transition-all hover:bg-white/15 hover:text-white hover:border-gold/60"
              >
                {a.label}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            ))}
          </nav>

          {/* Scroll cue */}
          <a href="#services" aria-hidden="true" className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <span className="text-[10px] uppercase tracking-[0.2em]">scroll</span>
            <ChevronDown className="h-5 w-5 animate-bounce-subtle" />
          </a>
        </div>
      </section>

      <EventBanner lang={lang} contactHref={r.contact} />

      {/* SLOGAN */}
      <section aria-label={t.sloganKicker} className="container-page pb-4">
        <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-primary via-primary to-primary-glow p-8 md:p-12 text-primary-foreground shadow-elegant">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float-slower" />
          </div>
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
            <Quote className="h-12 w-12 text-gold shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t.sloganKicker}</p>
              <p className="mt-2 font-display text-2xl md:text-4xl font-bold leading-tight">
                « {t.slogan} »
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section aria-labelledby="video-heading" className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.videoKicker}</p>
            <h2 id="video-heading" className="mt-2 text-3xl md:text-4xl font-bold text-foreground">{t.videoTitle}</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-gold" />
            <p className="mt-5 text-muted-foreground leading-relaxed">{t.videoText}</p>
            <p className="mt-4 text-sm font-semibold text-foreground">{t.videoThanks}</p>
          </div>
          <div className="lg:col-span-3">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-border shadow-elegant hover-lift">
              <LazyVideo
                sources={[
                  { src: "/videos/tba.webm", type: "video/webm" },
                  { src: "/videos/tba.mp4", type: "video/mp4" },
                ]}
                poster="/videos/tba-poster.jpg"
                width={464}
                height={832}
                label={lang === "fr" ? "Lire la vidéo de présentation Teranga Bridge Africa" : "Play the Teranga Bridge Africa presentation video"}
                posterAlt={lang === "fr" ? "Aperçu de la vidéo de présentation Teranga Bridge Africa" : "Preview of the Teranga Bridge Africa presentation video"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section aria-labelledby="stats-heading" className="container-page py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.statsKicker}</p>
          <h2 id="stats-heading" className="mt-2 text-3xl md:text-4xl font-bold text-foreground">{t.statsTitle}</h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-gold" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {t.stats.map((s, i) => (
            <div
              key={s.v}
              className="group rounded-xl border border-border bg-card p-5 text-center shadow-soft hover-lift card-glow"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <p className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-gold bg-clip-text text-transparent">
                <CountUp value={s.k} />
              </p>
              <p className="mt-1.5 text-xs md:text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" aria-labelledby="services-heading" className="container-page py-20 scroll-mt-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{dict[lang].services.kicker}</p>
          <h2 id="services-heading" className="mt-2 text-3xl md:text-4xl font-bold text-foreground">{dict[lang].services.title}</h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-gold" />
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {items.map((item, i) => (
            <article
              key={item.title}
              className="group relative rounded-xl border border-border bg-card p-6 shadow-soft hover-lift card-glow"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-gold/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" aria-hidden="true">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground transition-colors group-hover:text-primary">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.text}</p>
              <div className="mt-4 h-px w-0 bg-gradient-to-r from-primary to-gold transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link to={r.services} className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            {t.ctaServices}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section id="commitments" aria-labelledby="commitments-heading" className="container-page pb-20 scroll-mt-24">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-8 md:p-14 text-primary-foreground shadow-elegant">
          {/* Decorative elements */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float-slower" />
          </div>

          <div className="relative grid gap-10 md:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">{dict[lang].commitments.kicker}</p>
              <h2 id="commitments-heading" className="mt-2 text-3xl md:text-4xl font-bold">{t.visionTitle}</h2>
              <p className="mt-4 text-primary-foreground/85 leading-relaxed">{t.visionText}</p>
              <Link to={r.about} className="group mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5">
                {t.visionCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div>
              <h3 className="sr-only">{lang === "fr" ? "Nos engagements clés" : "Our key commitments"}</h3>
              <ul className="space-y-3" aria-label={lang === "fr" ? "Liste de nos engagements" : "List of our commitments"}>
                {t.commitments.map((cm, i) => (
                  <li
                    key={cm}
                    className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur transition-all hover:bg-white/10 hover:border-gold/40 hover:translate-x-1"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                    <span className="font-medium text-primary-foreground">{cm}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" aria-labelledby="contact-heading" className="container-page pb-24 scroll-mt-24">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12 shadow-soft hover-lift">
          <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gradient-to-br from-primary/20 to-gold/15 blur-3xl animate-float-slow" />

          <div className="relative grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{c.kicker}</p>
              <h2 id="contact-heading" className="mt-2 text-3xl md:text-4xl font-bold text-foreground">{c.title}</h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-gold" />
              <p className="mt-4 text-muted-foreground">{c.lead}</p>
              <Link to={r.contact} className="group mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:bg-primary-glow">
                {c.send}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div>
              <h3 className="sr-only">{lang === "fr" ? "Coordonnées" : "Contact details"}</h3>
              <ul className="space-y-3 text-sm text-foreground" aria-label={lang === "fr" ? "Coordonnées" : "Contact details"}>
                <li className="group flex items-start gap-3 rounded-lg border border-border bg-secondary/40 p-3 transition-all hover:border-primary/40 hover:bg-secondary">
                  <MapPin className="h-5 w-5 text-primary shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                  <span>4P - 6, Imm. Elh Omar DIA, Boulevard de l'Est x Rue 9 Point E, Dakar (SN)</span>
                </li>
                <li className="group flex items-start gap-3 rounded-lg border border-border bg-secondary/40 p-3 transition-all hover:border-primary/40 hover:bg-secondary">
                  <Mail className="h-5 w-5 text-primary shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                  <a href="mailto:contact@terangabridgeafrica.com" className="hover:underline">contact@terangabridgeafrica.com</a>
                </li>
                <li className="group flex items-start gap-3 rounded-lg border border-border bg-secondary/40 p-3 transition-all hover:border-primary/40 hover:bg-secondary">
                  <Phone className="h-5 w-5 text-primary shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                  <a href="tel:+221783073636" className="hover:underline">+221 78 307 36 36</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

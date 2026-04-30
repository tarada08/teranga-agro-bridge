import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Target,
  Compass,
  Sparkles,
  Handshake,
  Award,
  MapPin,
  ShieldCheck,
  Globe2,
  Zap,
  CheckCircle2,
} from "lucide-react";
import about from "@/assets/about.jpg";
import { dict, routesByLang, type Lang } from "@/lib/i18n";
import { QuoteForm } from "@/components/QuoteForm";

const valueIcons = [Handshake, Award, ShieldCheck, MapPin];
const whyIcons = [Globe2, MapPin, ShieldCheck, Zap];

export function AboutPage({ lang }: { lang: Lang }) {
  const t = dict[lang].about;
  const r = routesByLang[lang];

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="about-hero-heading"
        className="relative isolate overflow-hidden border-b border-border/60"
      >
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{ background: "var(--gradient-primary)" }}
          aria-hidden="true"
        />
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                {t.kicker}
              </span>
              <h1
                id="about-hero-heading"
                className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground"
              >
                {t.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t.lead}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={r.contact}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
                >
                  {t.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to={r.services}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
                >
                  {dict[lang].nav.services}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 rounded-3xl opacity-30 blur-2xl"
                style={{ background: "var(--gradient-gold)" }}
                aria-hidden="true"
              />
              <img
                src={about}
                alt=""
                width={1536}
                height={1024}
                loading="eager"
                className="rounded-2xl shadow-elegant w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label={lang === "fr" ? "Chiffres clés" : "Key figures"} className="container-page -mt-10">
        <div className="grid gap-4 sm:grid-cols-3 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
          {t.stats.map((s) => (
            <div key={s.v} className="text-center px-4 py-2">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary">{s.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section aria-labelledby="story-heading" className="container-page py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {lang === "fr" ? "Notre histoire" : "Our story"}
            </p>
            <h2
              id="story-heading"
              className="mt-2 text-3xl md:text-4xl font-bold text-foreground"
            >
              {lang === "fr"
                ? "Un partenaire local au service d'une ambition continentale"
                : "A local partner serving a continental ambition"}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-foreground/85 leading-relaxed text-base md:text-lg">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        aria-labelledby="mission-vision-heading"
        className="container-page pb-20 md:pb-24"
      >
        <h2 id="mission-vision-heading" className="sr-only">
          {lang === "fr" ? "Mission et vision" : "Mission and vision"}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10 shadow-soft">
            <div
              className="absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-20"
              style={{ background: "var(--gradient-primary)" }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-foreground">{t.missionTitle}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t.missionText}</p>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-8 md:p-10 text-primary-foreground shadow-elegant">
            <div
              className="absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-20"
              style={{ background: "var(--gradient-gold)" }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-gold backdrop-blur">
                <Compass className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">{t.visionTitle}</h3>
              <p className="mt-3 text-primary-foreground/85 leading-relaxed">{t.visionText}</p>
            </div>
          </article>
        </div>
      </section>

      {/* Values */}
      <section
        aria-labelledby="values-heading"
        className="border-y border-border/60 bg-secondary/40"
      >
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {t.valuesKicker}
            </p>
            <h2
              id="values-heading"
              className="mt-2 text-3xl md:text-4xl font-bold text-foreground"
            >
              {t.valuesTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.map((v, i) => {
              const Icon = valueIcons[i] ?? Sparkles;
              return (
                <article
                  key={v.t}
                  className="group rounded-xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                    <Icon className="h-5 w-5 text-[oklch(0.55_0.14_75)]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section aria-labelledby="why-heading" className="container-page py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.whyKicker}
            </p>
            <h2
              id="why-heading"
              className="mt-2 text-3xl md:text-4xl font-bold text-foreground"
            >
              {t.whyTitle}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {lang === "fr"
                ? "Une approche structurée et exigeante, du sourcing à la livraison, pour des partenariats industriels durables."
                : "A structured, demanding approach from sourcing to delivery, for lasting industrial partnerships."}
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {t.why.map((w, i) => {
                const Icon = whyIcons[i] ?? CheckCircle2;
                return (
                  <li
                    key={w.t}
                    className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-soft"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{w.t}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{w.d}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        aria-labelledby="timeline-heading"
        className="border-t border-border/60 bg-secondary/30"
      >
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.timelineKicker}
            </p>
            <h2
              id="timeline-heading"
              className="mt-2 text-3xl md:text-4xl font-bold text-foreground"
            >
              {t.timelineTitle}
            </h2>
          </div>
          <ol className="mt-12 relative grid gap-8 md:grid-cols-4">
            <div
              className="hidden md:block absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              aria-hidden="true"
            />
            {t.timeline.map((step) => (
              <li key={step.t} className="relative">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-elegant"
                  aria-hidden="true"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                  {step.y}
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground">{step.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quote request form */}
      <section aria-labelledby="quote-heading" className="container-page py-20 md:py-24">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
          <div className="grid md:grid-cols-5">
            <aside className="relative md:col-span-2 bg-gradient-to-br from-primary via-primary to-primary-glow p-10 md:p-12 text-primary-foreground">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--primary-glow) 0, transparent 50%)",
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {dict[lang].about.quote.kicker}
                </p>
                <h2
                  id="quote-heading"
                  className="mt-3 text-3xl md:text-4xl font-bold leading-tight"
                >
                  {dict[lang].about.quote.title}
                </h2>
                <p className="mt-4 text-primary-foreground/85 leading-relaxed">
                  {dict[lang].about.quote.lead}
                </p>
                <ul className="mt-8 space-y-3 text-sm text-primary-foreground/90">
                  <li>📅 {lang === "fr" ? "Réponse sous 24h ouvrées" : "Reply within one business day"}</li>
                  <li>🌍 {lang === "fr" ? "Couverture Afrique de l'Ouest" : "West Africa coverage"}</li>
                  <li>🤝 {lang === "fr" ? "Accompagnement personnalisé" : "Personalized support"}</li>
                </ul>
              </div>
            </aside>
            <div className="md:col-span-3 p-8 md:p-12">
              <QuoteForm lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

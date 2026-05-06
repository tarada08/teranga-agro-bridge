import { Link } from "@tanstack/react-router";
import {
  Sprout,
  Globe2,
  Wrench,
  Lightbulb,
  Truck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Factory,
  Award,
  Clock,
  HeartHandshake,
  Leaf,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dict, routesByLang, type Lang } from "@/lib/i18n";
import heroFactory from "@/assets/hero-factory.jpg";
import heroCommodities from "@/assets/hero-commodities.jpg";
import heroPort from "@/assets/hero-port.jpg";
import heroTeam from "@/assets/hero-team.jpg";

const ICONS = [Sprout, Globe2, Wrench, Lightbulb, Truck];
const SERVICE_IMAGES = [heroCommodities, heroPort, heroFactory, heroTeam, heroPort];

export function ServicesPage({ lang }: { lang: Lang }) {
  const t = dict[lang].services;
  const r = routesByLang[lang];
  const isFr = lang === "fr";

  const stats = isFr
    ? [
        { v: "24h", l: "Réponse moyenne" },
        { v: "15+", l: "Pays sourcés" },
        { v: "100%", l: "Traçabilité" },
        { v: "10+", l: "Années d'expertise" },
      ]
    : [
        { v: "24h", l: "Average response" },
        { v: "15+", l: "Sourcing countries" },
        { v: "100%", l: "Traceability" },
        { v: "10+", l: "Years of expertise" },
      ];

  const differentiators = isFr
    ? [
        { icon: Award, t: "Qualité certifiée", d: "Contrôles indépendants et certificats à chaque étape de la chaîne." },
        { icon: HeartHandshake, t: "Proximité terrain", d: "Une équipe basée en Afrique, présente à vos côtés au quotidien." },
        { icon: Clock, t: "Réactivité", d: "Première proposition sous 24h, exécution sans rupture." },
        { icon: Leaf, t: "Engagement durable", d: "Sourcing responsable et logistique optimisée pour réduire l'empreinte." },
      ]
    : [
        { icon: Award, t: "Certified quality", d: "Independent inspections and certificates at every stage of the chain." },
        { icon: HeartHandshake, t: "On-the-ground proximity", d: "A team based in Africa, present alongside you every day." },
        { icon: Clock, t: "Responsiveness", d: "First proposal within 24h, seamless execution." },
        { icon: Leaf, t: "Sustainable commitment", d: "Responsible sourcing and optimized logistics to reduce footprint." },
      ];

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden text-primary-foreground">
        <img
          src={heroFactory}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float-slower" />
        </div>

        <div className="container-page py-20 md:py-28 relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {t.kicker}
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {t.lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <Link
              to={r.about}
              hash="quote"
              className="group inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-all hover:-translate-y-0.5"
            >
              {t.ctaQuote}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              to={r.contact}
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              {t.ctaContact}
            </Link>
          </div>
        </div>

        {/* Stats band */}
        <div className="relative border-t border-white/10 bg-black/30 backdrop-blur-sm">
          <div className="container-page grid grid-cols-2 gap-6 py-6 md:grid-cols-4 md:py-8">
            {stats.map((s) => (
              <div key={s.l} className="text-center md:text-left">
                <div className="font-display text-3xl md:text-4xl font-bold text-gold">{s.v}</div>
                <div className="mt-1 text-xs md:text-sm uppercase tracking-wider text-primary-foreground/85">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section aria-labelledby="services-list" className="container-page py-20 md:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.kicker}</p>
          <h2 id="services-list" className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
            {isFr ? "Notre offre détaillée" : "Our detailed offering"}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-gold" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((s, i) => {
            const Icon = ICONS[i] ?? Sprout;
            const img = SERVICE_IMAGES[i] ?? heroFactory;
            return (
              <article
                key={s.t}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover-lift card-glow"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute left-5 -bottom-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-elegant transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="relative flex flex-1 flex-col p-7 pt-10">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  <ul className="mt-5 space-y-2" aria-label={s.t}>
                    {s.f.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 h-px w-0 bg-gradient-to-r from-primary to-gold transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section aria-labelledby="why-heading" className="bg-secondary/40 border-y border-border cv-auto">
        <div className="container-page py-20 md:py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {isFr ? "Pourquoi Teranga Bridge Africa" : "Why Teranga Bridge Africa"}
            </p>
            <h2 id="why-heading" className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
              {isFr ? "Une exigence industrielle, une attention humaine" : "Industrial rigor, human attention"}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map(({ icon: Icon, t: title, d }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-soft hover-lift"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-gold/20 to-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section aria-labelledby="process-heading" className="cv-auto">
        <div className="container-page py-20 md:py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.processKicker}</p>
            <h2 id="process-heading" className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
              {t.processTitle}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-gold" />
          </div>

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" aria-label={t.processTitle}>
            {t.process.map((step, i) => (
              <li
                key={step.n}
                className="group relative rounded-xl border border-border bg-card p-6 shadow-soft hover-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold bg-gradient-to-br from-primary to-gold bg-clip-text text-transparent">
                    {step.n}
                  </span>
                  {i < t.process.length - 1 && (
                    <ArrowRight
                      className="hidden lg:block h-5 w-5 text-muted-foreground/40"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="mt-3 text-base font-semibold text-foreground">{step.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTORS */}
      <section aria-labelledby="sectors-heading" className="container-page py-20 md:py-24 cv-auto">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.sectorsKicker}</p>
            <h2 id="sectors-heading" className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
              {t.sectorsTitle}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-gold" />
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {isFr
                ? "Nous adaptons notre approche à la réalité opérationnelle de chaque secteur, pour livrer la juste solution au juste niveau d'exigence."
                : "We adapt our approach to the operational reality of each sector, to deliver the right solution at the right level of requirement."}
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" aria-label={t.sectorsTitle}>
            {t.sectors.map((sector) => (
              <li
                key={sector}
                className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/40 hover:bg-secondary/40 hover:translate-x-1"
              >
                <Factory className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:scale-110" aria-hidden="true" />
                <span className="font-medium text-foreground">{sector}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="bg-secondary/40 border-t border-border cv-auto">
        <div className="container-page py-20 md:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.faqKicker}</p>
            <h2 id="faq-heading" className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
              {t.faqTitle}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-gold" />
          </div>

          <Accordion type="single" collapsible className="max-w-3xl rounded-xl border border-border bg-card shadow-soft">
            {t.faq.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="px-5">
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary">
                  <span className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="services-cta-heading" className="container-page py-20 md:py-24 cv-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-8 md:p-14 text-primary-foreground shadow-elegant">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float-slower" />
          </div>
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <h2 id="services-cta-heading" className="text-3xl md:text-4xl font-bold">
                {t.ctaTitle}
              </h2>
              <p className="mt-4 text-primary-foreground/85 leading-relaxed">{t.ctaText}</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to={r.about}
                hash="quote"
                className="group inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5"
              >
                {t.ctaQuote}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                to={r.contact}
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                {t.ctaContact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

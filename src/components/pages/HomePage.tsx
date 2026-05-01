import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Globe2, Truck, Sprout, Wrench, Mail, Phone, MapPin } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { dict, routesByLang, type Lang } from "@/lib/i18n";
import { EventBanner } from "@/components/EventBanner";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useReveal } from "@/hooks/use-reveal";

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

  // Hero parallax
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const statsRef = useReveal<HTMLElement>();
  const servicesRef = useReveal<HTMLElement>();
  const commitmentsRef = useReveal<HTMLElement>();
  const contactRef = useReveal<HTMLElement>();

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={hero}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover hero-image-anim"
            style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0) scale(1.08)` }}
          />
        </div>
        <div
          className="absolute inset-0 -z-10 gradient-animated"
          style={{ background: "var(--gradient-hero)" }}
        />
        {/* Subtle gold glow accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        />

        <div className="container-page py-28 md:py-40 text-white">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> {t.badge}
          </span>
          <h1 className="reveal reveal-delay-1 mt-5 max-w-3xl text-4xl md:text-6xl font-bold leading-[1.05]">
            {t.title1}<span className="text-gold">{t.titleHighlight}</span>{t.title2}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg text-white/85">{t.lead}</p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <a href="#services" className="group inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              {t.ctaServices}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
              {t.ctaContact}
            </a>
          </div>

          <nav aria-label={lang === "fr" ? "Navigation rapide vers les sections de la page" : "Quick navigation to page sections"} className="reveal reveal-delay-4 mt-10 flex flex-wrap gap-2">
            {anchors.map((a) => (
              <a
                key={a.href}
                href={a.href}
                aria-label={`${lang === "fr" ? "Aller à la section" : "Go to section"} ${a.label}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur transition-all hover:bg-white/15 hover:text-white hover:border-white/40"
              >
                {a.label}
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Stats band with animated counters */}
      <section
        ref={statsRef}
        aria-labelledby="stats-heading"
        className="container-page py-16"
      >
        <h2 id="stats-heading" className="sr-only">{t.statsTitle}</h2>
        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur shadow-soft px-6 py-10 md:px-10 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {t.stats.map((s, i) => (
              <div
                key={s.l}
                className={`reveal reveal-delay-${i + 1} text-center md:text-left`}
              >
                <div className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary-glow bg-clip-text text-transparent">
                  <AnimatedCounter value={s.n} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EventBanner lang={lang} contactHref={r.contact} />

      <section
        ref={servicesRef}
        id="services"
        aria-labelledby="services-heading"
        className="container-page py-20 scroll-mt-24"
      >
        <div className="reveal mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{dict[lang].services.kicker}</p>
          <h2 id="services-heading" className="mt-2 text-3xl md:text-4xl font-bold text-foreground">{dict[lang].services.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {items.map((item, i) => (
            <article
              key={item.title}
              className={`card-premium reveal reveal-delay-${i + 1} rounded-xl border border-border bg-card p-6 shadow-soft`}
            >
              <div className="icon-wrap flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="reveal mt-8">
          <Link to={r.services} className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            {t.ctaServices}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section
        ref={commitmentsRef}
        id="commitments"
        aria-labelledby="commitments-heading"
        className="container-page pb-20 scroll-mt-24"
      >
        <div className="reveal relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-8 md:p-14 text-primary-foreground shadow-elegant">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
          />
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
                    className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-center gap-3 text-primary-foreground`}
                  >
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" aria-hidden="true" />
                    <span className="font-medium">{cm}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={contactRef}
        id="contact"
        aria-labelledby="contact-heading"
        className="container-page pb-24 scroll-mt-24"
      >
        <div className="reveal rounded-2xl border border-border bg-card p-8 md:p-12 shadow-soft transition-shadow hover:shadow-elegant">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{c.kicker}</p>
              <h2 id="contact-heading" className="mt-2 text-3xl md:text-4xl font-bold text-foreground">{c.title}</h2>
              <p className="mt-3 text-muted-foreground">{c.lead}</p>
              <Link to={r.contact} className="group mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
                {c.send}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div>
              <h3 className="sr-only">{lang === "fr" ? "Coordonnées" : "Contact details"}</h3>
              <ul className="space-y-3 text-sm text-foreground" aria-label={lang === "fr" ? "Coordonnées" : "Contact details"}>
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary shrink-0" aria-hidden="true" /><span>Dakar, Sénégal</span></li>
                <li className="flex items-start gap-3"><Mail className="h-5 w-5 text-primary shrink-0" aria-hidden="true" /><a href="mailto:contact@terangabridgeafrica.com" className="hover:underline">contact@terangabridgeafrica.com</a></li>
                <li className="flex items-start gap-3"><Phone className="h-5 w-5 text-primary shrink-0" aria-hidden="true" /><a href="tel:+221000000000" className="hover:underline">+221 00 000 00 00</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

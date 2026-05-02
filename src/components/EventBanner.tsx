import { Calendar, MapPin } from "lucide-react";
import senefood from "@/assets/senefood-2026.webp";
import type { Lang } from "@/lib/i18n";

const content = {
  fr: {
    badge: "Événement · SENEFOOD 2026",
    title: "Acteurs de l'agro-industrie et du packaging, parlons performance.",
    paragraphs: [
      "Du 11 au 13 juin, Teranga Bridge Africa vous donne rendez-vous au SENEFOOD.",
      "Nous accompagnons les industriels en Afrique de l'Ouest dans la sécurisation de leurs approvisionnements et l'optimisation de leurs coûts, de la matière première au produit fini.",
      "Venez découvrir comment nous structurons vos chaînes d'approvisionnement avec des solutions fiables, compétitives et adaptées à vos réalités locales.",
    ],
    date: "11 – 13 juin 2026",
    place: "Centre des Expositions de Diamniadio — Dakar",
    marquee: "NOUS Y SERONS · SENEFOOD & SENEPACK 2026 · DIAMNIADIO · DAKAR · 11 – 13 JUIN",
    cta: "Prendre rendez-vous",
    alt: "Affiche SENEFOOD & SENEPACK 2026 — Teranga Bridge Africa",
  },
  en: {
    badge: "Event · SENEFOOD 2026",
    title: "Food-industry and packaging leaders, let's talk performance.",
    paragraphs: [
      "From June 11 to 13, Teranga Bridge Africa is meeting you at SENEFOOD.",
      "We support West-African industries in securing their supply and optimizing their costs — from raw material to finished product.",
      "Come discover how we structure your supply chains with reliable, competitive solutions tailored to your local realities.",
    ],
    date: "June 11 – 13, 2026",
    place: "Diamniadio Exhibition Center — Dakar",
    marquee: "WE'LL BE THERE · SENEFOOD & SENEPACK 2026 · DIAMNIADIO · DAKAR · JUNE 11 – 13",
    cta: "Book a meeting",
    alt: "SENEFOOD & SENEPACK 2026 poster — Teranga Bridge Africa",
  },
} as const;

export function EventBanner({ lang, contactHref }: { lang: Lang; contactHref: string }) {
  const safeLang: Lang = lang === "en" ? "en" : "fr";
  const t = content[safeLang];
  const marqueeText = `${t.marquee}   ★   ${t.marquee}   ★   `;

  return (
    <section aria-labelledby="event-banner-title" className="container-page py-16">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/60 to-background shadow-elegant">
        {/* Marquee défilant */}
        <div className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="flex whitespace-nowrap py-2.5 animate-marquee">
            <span className="px-6 text-xs sm:text-sm font-semibold tracking-[0.18em]">{marqueeText}</span>
            <span className="px-6 text-xs sm:text-sm font-semibold tracking-[0.18em]" aria-hidden="true">{marqueeText}</span>
            <span className="px-6 text-xs sm:text-sm font-semibold tracking-[0.18em]" aria-hidden="true">{marqueeText}</span>
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-2">
          {/* Image */}
          <div className="relative bg-secondary/40">
            <img
              src={senefood}
              alt={t.alt}
              loading="lazy"
              className="h-full w-full object-contain p-4 md:p-6"
            />
          </div>

          {/* Texte */}
          <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-foreground/90">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {t.badge}
            </span>
            <h2 id="event-banner-title" className="mt-4 font-display text-2xl md:text-3xl font-bold leading-tight text-foreground">
              {t.title}
            </h2>
            <div className="mt-5 space-y-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
              {t.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-3.5">
                <Calendar className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Date</p>
                  <p className="text-sm font-semibold text-foreground">{t.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-3.5">
                <MapPin className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{safeLang === "fr" ? "Lieu" : "Venue"}</p>
                  <p className="text-sm font-semibold text-foreground">{t.place}</p>
                </div>
              </div>
            </div>

            <a
              href={contactHref}
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary-glow"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

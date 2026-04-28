import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Globe2, Truck, Sprout, Wrench } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teranga Bridge Africa — Partenaire d'approvisionnement industriel" },
      { name: "description", content: "Fourniture fiable de matières premières et d'équipements agroalimentaires pour les industries africaines. Basés à Dakar, Sénégal." },
      { property: "og:title", content: "Teranga Bridge Africa" },
      { property: "og:description", content: "Votre partenaire de confiance pour l'approvisionnement industriel en Afrique." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Port industriel africain au lever du soleil"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="container-page py-28 md:py-40 text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Sénégal · Afrique de l'Ouest
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl font-bold leading-[1.05]">
            Votre partenaire de confiance pour l'<span className="text-gold">approvisionnement industriel</span> en Afrique
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Matières premières, équipements agroalimentaires et solutions logistiques sur mesure pour les industries africaines.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5"
            >
              Nos services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Sprout, title: "Matières premières", text: "Produits agroalimentaires sourcés et certifiés." },
            { icon: Wrench, title: "Équipements", text: "Machines industrielles adaptées à vos besoins." },
            { icon: Globe2, title: "Import / Export", text: "Réseau international de partenaires solides." },
            { icon: Truck, title: "Logistique", text: "Chaîne d'approvisionnement maîtrisée." },
          ].map((item) => (
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

      {/* ABOUT TEASER */}
      <section className="container-page pb-20">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-8 md:p-14 text-primary-foreground shadow-elegant">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Une vision africaine de l'industrie</h2>
              <p className="mt-4 text-primary-foreground/85 leading-relaxed">
                Teranga Bridge Africa accompagne les industries locales et régionales en garantissant un approvisionnement fiable, compétitif et adapté à leurs besoins.
              </p>
              <Link to="/a-propos" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-3">
              {["Qualité garantie", "Réseau de partenaires fiables", "Prix compétitifs", "Livraison rapide", "Innovation & durabilité"].map((c) => (
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

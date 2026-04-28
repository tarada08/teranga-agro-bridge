import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Teranga Bridge Africa" },
      { name: "description", content: "Entreprise sénégalaise spécialisée dans la fourniture de matières premières et d'équipements agroalimentaires en Afrique." },
      { property: "og:title", content: "À propos — Teranga Bridge Africa" },
      { property: "og:description", content: "Notre vision: une croissance durable de l'industrie africaine." },
      { property: "og:image", content: about },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">À propos</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">Une passerelle entre l'Afrique et l'industrie</h1>
      </div>
      <div className="mt-12 grid gap-12 md:grid-cols-2 items-center">
        <img src={about} alt="Champs agricoles et installations agroalimentaires en Afrique" width={1536} height={1024} loading="lazy" className="rounded-2xl shadow-elegant w-full h-auto object-cover" />
        <div className="space-y-5 text-foreground/85 leading-relaxed">
          <p>
            <strong className="text-foreground">Teranga Bridge Africa</strong> est une entreprise sénégalaise spécialisée dans la fourniture de matières premières et d'équipements agroalimentaires en Afrique.
          </p>
          <p>
            Grâce à notre expertise et à un réseau de partenaires solides, nous accompagnons les industries locales et régionales en leur garantissant un approvisionnement fiable, compétitif et adapté à leurs besoins.
          </p>
          <p>
            Animés par une vision de croissance durable, nous mettons l'innovation et la qualité au cœur de notre engagement pour contribuer au développement du secteur industriel africain.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary-glow">
            Travaillons ensemble <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-3">
        {[
          { k: "100%", v: "Approvisionnement fiable" },
          { k: "15+", v: "Pays partenaires" },
          { k: "24/7", v: "Support logistique" },
        ].map((s) => (
          <div key={s.v} className="rounded-xl border border-border bg-card p-6 text-center shadow-soft">
            <p className="font-display text-4xl font-bold text-primary">{s.k}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

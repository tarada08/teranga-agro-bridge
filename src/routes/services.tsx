import { createFileRoute } from "@tanstack/react-router";
import { Sprout, Globe2, Wrench, Lightbulb, Truck } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos services — Teranga Bridge Africa" },
      { name: "description", content: "Matières premières, import/export, équipements agroalimentaires, conseil industriel et logistique." },
      { property: "og:title", content: "Nos services — Teranga Bridge Africa" },
      { property: "og:description", content: "Cinq pôles d'expertise pour l'industrie africaine." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Sprout, title: "Matières premières agroalimentaires", text: "Approvisionnement en céréales, oléagineux, additifs et ingrédients industriels conformes aux standards internationaux." },
  { icon: Globe2, title: "Import / Export industriel", text: "Sourcing global, gestion des formalités douanières et coordination des flux internationaux." },
  { icon: Wrench, title: "Équipements agroalimentaires", text: "Lignes de production, machines de transformation et solutions techniques sur mesure." },
  { icon: Lightbulb, title: "Conseil & accompagnement", text: "Audits, études techniques et accompagnement des industriels dans leurs projets de développement." },
  { icon: Truck, title: "Logistique & supply chain", text: "Transport, stockage et distribution maîtrisés sur l'ensemble du continent africain." },
];

function ServicesPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Nos services</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">Des solutions complètes pour l'industrie</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          De la matière première à la livraison finale, nous couvrons toute la chaîne de valeur agroalimentaire.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:shadow-elegant hover:-translate-y-1">
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-gold/20 to-primary/10 blur-2xl" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

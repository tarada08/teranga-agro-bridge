import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Users, BadgeDollarSign, Truck, Leaf } from "lucide-react";

export const Route = createFileRoute("/engagements")({
  head: () => ({
    meta: [
      { title: "Nos engagements — Teranga Bridge Africa" },
      { name: "description", content: "Qualité garantie, partenaires fiables, prix compétitifs, livraison rapide et innovation durable." },
      { property: "og:title", content: "Nos engagements — Teranga Bridge Africa" },
      { property: "og:description", content: "Cinq promesses au service de l'industrie africaine." },
    ],
  }),
  component: EngagementsPage,
});

const items = [
  { icon: ShieldCheck, title: "Qualité garantie", text: "Produits certifiés et contrôles rigoureux à chaque étape." },
  { icon: Users, title: "Partenaires fiables", text: "Un réseau international solide et soigneusement sélectionné." },
  { icon: BadgeDollarSign, title: "Prix compétitifs", text: "Le meilleur rapport qualité-prix grâce à notre sourcing optimisé." },
  { icon: Truck, title: "Livraison rapide", text: "Une logistique efficace pour respecter vos délais industriels." },
  { icon: Leaf, title: "Innovation & durabilité", text: "Des solutions modernes qui respectent l'environnement." },
];

function EngagementsPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Nos engagements</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">Cinq promesses qui font la différence</h1>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15 text-gold-foreground">
              <it.icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-foreground">{it.title}</h2>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-10 text-primary-foreground text-center shadow-elegant">
        <h2 className="text-2xl md:text-3xl font-bold">Prêt à collaborer avec nous&nbsp;?</h2>
        <p className="mt-3 text-primary-foreground/85">Discutons de votre projet d'approvisionnement industriel.</p>
        <Link to="/contact" className="mt-6 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold">
          Démarrer la conversation
        </Link>
      </div>
    </section>
  );
}

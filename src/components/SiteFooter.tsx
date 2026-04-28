import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Teranga Bridge Africa" width={36} height={36} className="h-9 w-9" loading="lazy" />
            <span className="font-display font-bold text-foreground">
              Teranga Bridge <span className="text-primary">Africa</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Partenaire de confiance pour la fourniture de matières premières et d'équipements
            agroalimentaires en Afrique.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/a-propos" className="hover:text-primary">À propos</Link></li>
            <li><Link to="/services" className="hover:text-primary">Nos services</Link></li>
            <li><Link to="/engagements" className="hover:text-primary">Nos engagements</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />Sacré Cœur 3 VDN, 57, Dakar, Sénégal</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><a href="tel:+221338920721" className="hover:text-primary">+221 33 892 07 21</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /><a href="mailto:contact@terangabridgeafrica.com" className="hover:text-primary break-all">contact@terangabridgeafrica.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Teranga Bridge Africa. Tous droits réservés.</p>
          <p>Dakar · Sénégal · Afrique</p>
        </div>
      </div>
    </footer>
  );
}

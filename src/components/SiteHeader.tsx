import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { dict, routesByLang, otherLangPath, type Lang } from "@/lib/i18n";

export function SiteHeader({ lang }: { lang: Lang }) {
  const safeLang: Lang = lang === "en" ? "en" : "fr";
  const [open, setOpen] = useState(false);
  const t = dict[safeLang];
  const r = routesByLang[safeLang];
  const location = useLocation();
  const altPath = otherLangPath(location.pathname, lang);
  const altLabel = lang === "fr" ? "EN" : "FR";

  const links = [
    { to: r.home, label: t.nav.home, exact: true },
    { to: r.about, label: t.nav.about },
    { to: r.services, label: t.nav.services },
    { to: r.commitments, label: t.nav.commitments },
    { to: r.contact, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to={r.home} className="flex items-center gap-2.5 font-display font-bold text-foreground">
          <img src={logo} alt="Teranga Bridge Africa" width={36} height={36} className="h-9 w-9" decoding="async" fetchPriority="high" />
          <span className="hidden sm:inline text-base leading-tight">
            Teranga Bridge <span className="text-primary">Africa</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: !!l.exact }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={altPath}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary"
            aria-label={`Switch language to ${altLabel}`}
          >
            <Globe className="h-3.5 w-3.5" /> {altLabel}
          </a>
          <Link
            to={r.contact}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary-glow"
          >
            {t.nav.quote}
          </Link>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <a href={altPath} className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs font-semibold">
            <Globe className="h-3.5 w-3.5" /> {altLabel}
          </a>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container-page py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-primary" }}
                activeOptions={{ exact: !!l.exact }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

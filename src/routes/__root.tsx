import { Outlet, Link, createRootRoute, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Lang } from "@/lib/i18n";

import appCss from "../styles.css?url";

function detectLang(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Teranga Bridge Africa" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Teranga Bridge Africa" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Teranga Bridge Africa" },
      { property: "og:title", content: "Teranga Bridge Africa" },
      { name: "twitter:title", content: "Teranga Bridge Africa" },
      { name: "description", content: "Teranga Bridge Africa is a professional website for an industrial supply company in Africa." },
      { property: "og:description", content: "Teranga Bridge Africa is a professional website for an industrial supply company in Africa." },
      { name: "twitter:description", content: "Teranga Bridge Africa is a professional website for an industrial supply company in Africa." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1de78035-1bf0-4775-8447-6f4171489ace/id-preview-a0e298c9--f615dbd8-6284-404c-84b5-db294445d4ca.lovable.app-1777382884343.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1de78035-1bf0-4775-8447-6f4171489ace/id-preview-a0e298c9--f615dbd8-6284-404c-84b5-db294445d4ca.lovable.app-1777382884343.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { pathname } = useLocation();
  const lang = detectLang(pathname);
  return (
    <div className="flex min-h-screen flex-col bg-background" lang={lang}>
      <SiteHeader lang={lang} />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter lang={lang} />
      <WhatsAppButton lang={lang} />
    </div>
  );
}

import { dict, type Lang } from "@/lib/i18n";

const SITE = "https://terangabridgeafrica.com";

type Page = "home" | "about" | "services" | "commitments" | "contact";

const paths: Record<Lang, Record<Page, string>> = {
  fr: { home: "/", about: "/a-propos", services: "/services", commitments: "/engagements", contact: "/contact" },
  en: { home: "/en", about: "/en/about", services: "/en/services", commitments: "/en/commitments", contact: "/en/contact" },
};

export function pageMeta(lang: Lang, page: Page) {
  const t = dict[lang].seo[page];
  const altLang: Lang = lang === "fr" ? "en" : "fr";
  const url = SITE + paths[lang][page];
  const altUrl = SITE + paths[altLang][page];
  return {
    meta: [
      { title: t.title },
      { name: "description", content: t.desc },
      { property: "og:title", content: t.title },
      { property: "og:description", content: t.desc },
      { property: "og:locale", content: lang === "fr" ? "fr_FR" : "en_US" },
      { property: "og:locale:alternate", content: altLang === "fr" ? "fr_FR" : "en_US" },
      { property: "og:url", content: url },
      { name: "twitter:title", content: t.title },
      { name: "twitter:description", content: t.desc },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: lang, href: url },
      { rel: "alternate", hrefLang: altLang, href: altUrl },
      { rel: "alternate", hrefLang: "x-default", href: SITE + paths.fr[page] },
    ],
  };
}

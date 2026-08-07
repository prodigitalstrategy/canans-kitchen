import { useEffect } from "react";

const SITE_URL = "https://cananskitchen.com";
const DEFAULT_TITLE =
  "Canan's Kitchen & Bakery | Authentic Turkish Breakfast in Fountain Valley, CA";
const DEFAULT_DESCRIPTION =
  "Experience authentic Turkish breakfast in Fountain Valley, CA. Fresh simit, menemen, Turkish tea & coffee, homemade pastries. Family-owned restaurant with traditional recipes from Türkiye. Call (949) 394-6318 for catering.";

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Per-route document title, meta description, and self-referencing
 * canonical for this SPA. Pass a path like "/menu/soujuk-eggs";
 * omit everything to reset to the homepage defaults.
 */
export function useSEO(options?: {
  title?: string;
  description?: string;
  path?: string;
}) {
  const { title, description, path } = options ?? {};
  useEffect(() => {
    document.title = title ? `${title} | Canan's Kitchen & Bakery` : DEFAULT_TITLE;
    setMeta("description", description ?? DEFAULT_DESCRIPTION);
    setCanonical(path ? `${SITE_URL}${path}` : `${SITE_URL}/`);
  }, [title, description, path]);
}

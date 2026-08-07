import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Single scroll authority for route changes:
 * - path change without hash -> scroll to top
 * - hash present (e.g. /#contact from a sub-page) -> scroll to that
 *   section once it exists, retrying briefly while the page mounts
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    let attempts = 0;
    let timer: number;
    const tryScroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < 20) {
        attempts += 1;
        timer = window.setTimeout(tryScroll, 100);
      }
    };
    tryScroll();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll(): null {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1, // ajusta a “maciez”
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // âncoras suaves
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const el = document.querySelector(href) as HTMLElement | null;
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el, { offset: 0 }); // offset se tiver header fixo
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}

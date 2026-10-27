"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type SiteMotionProps = {
  children: ReactNode;
};

export function SiteMotion({ children }: SiteMotionProps) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      const select = gsap.utils.selector(element);

      gsap.fromTo(
        select("[data-reveal='nav']"),
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, duration: 0.45, ease: "power2.out" },
      );

      gsap.fromTo(
        select("[data-reveal='hero']"),
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.08,
        },
      );

      select("[data-reveal='section']").forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 87%",
              once: true,
            },
          },
        );
      });
    }, element);

    return () => context.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}

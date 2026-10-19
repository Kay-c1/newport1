
"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PortfolioAnimations() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero entrance
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.8,
        },
      });

      intro
        .from("[data-animate='masthead']", {
          y: 16,
          opacity: 0,
        })
        .from(
          "[data-animate='hero']",
          {
            y: 28,
            opacity: 0,
          },
          "-=0.35"
        )
        .from(
          "[data-animate='hero-detail']",
          {
            y: 12,
            opacity: 0,
            stagger: 0.12,
          },
          "-=0.3"
        );

      // Reveal sections as they enter the viewport
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 22,
          opacity: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}

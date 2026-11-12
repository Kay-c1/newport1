
"use client";

import { useEffect, useState } from "react";
import "./CRTIntro.css";

export default function CRTIntro() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState("off");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || sessionStorage.getItem("kds-intro-seen")) {
      return;
    }

    setVisible(true);
    document.body.classList.add("crt-intro-active");

    const timers = [
      window.setTimeout(() => setPhase("power"), 250),
      window.setTimeout(() => setPhase("boot"), 850),
      window.setTimeout(() => setPhase("name"), 1250),
      window.setTimeout(() => finish(), 3000),
    ];

    function finish() {
      sessionStorage.setItem("kds-intro-seen", "true");
      document.body.classList.remove("crt-intro-active");
      setVisible(false);
    }

    return () => {
      timers.forEach(window.clearTimeout);
      document.body.classList.remove("crt-intro-active");
    };
  }, []);

  function skipIntro() {
    sessionStorage.setItem("kds-intro-seen", "true");
    document.body.classList.remove("crt-intro-active");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={`crt-intro crt-${phase}`}>
      <div className="crt-screen">
        <div className="crt-scanlines" />

        <div className="crt-identity">
          <span className="crt-kds">KDS.</span>
          <span className="crt-name">
            KRISTIAN DELOS SANTOS
          </span>
          <span className="crt-role">
            BACKEND · AI · SOFTWARE
          </span>
        </div>
      </div>

      <button
        type="button"
        className="crt-skip"
        onClick={skipIntro}
      >
        SKIP INTRO ↗
      </button>
    </div>
  );
}

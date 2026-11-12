"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Noise from "./Noise";

type Props = {
  title: string;
  videoSrc: string;
  children: ReactNode;
};

export default function ProjectVideoHover({ title, videoSrc, children }: Props) {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    const query = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const update = () => setCanHover(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!active || !canHover) return;
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {});
    return () => video.pause();
  }, [active, canHover, videoSrc]);

  const move = (clientX: number, clientY: number) => {
    const width = Math.min(380, window.innerWidth - 32);
    const height = width * 0.625 + 42;
    setPosition({
      x: Math.max(16, Math.min(clientX + 24, window.innerWidth - width - 16)),
      y: Math.max(16, Math.min(clientY + 20, window.innerHeight - height - 16)),
    });
  };

  return (
    <>
      <article
        data-reveal
        className="group grid gap-8 border-b border-black/25 py-10 md:grid-cols-[1.15fr_1fr] md:gap-12 md:py-14"
        onPointerEnter={(event) => {
          if (!canHover || event.pointerType !== "mouse") return;
          move(event.clientX, event.clientY);
          setActive(true);
        }}
        onPointerMove={(event) => {
          if (canHover && event.pointerType === "mouse") move(event.clientX, event.clientY);
        }}
        onPointerLeave={() => setActive(false)}
        onPointerCancel={() => setActive(false)}
      >
        {children}
        <div className="relative min-w-0 overflow-hidden border border-black/20 bg-black md:col-span-2 lg:hidden">
          <video
            aria-label={`${title} project video preview`}
            className="aspect-video w-full bg-black object-contain"
            src={videoSrc}
            controls
            playsInline
            preload="metadata"
          />
          <Noise opacity={0.24} size={1} fps={24} blendMode="overlay" contrast={0.65} colored={false} dust={0.12} scratches={0.12} scanlines={0.3} flicker={0.1} />
        </div>
      </article>
      {mounted && canHover && active && createPortal(
        <div
          className="pointer-events-none fixed z-[100] overflow-hidden border border-[#010000] bg-[#F4F1E9]"
          style={{ left: position.x, top: position.y, width: "min(380px, calc(100vw - 32px))" }}
          aria-hidden="true"
        >
          <div className="relative overflow-hidden bg-black">
          <video
            key={videoSrc}
            ref={videoRef}
            src={videoSrc}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            className="aspect-[16/10] w-full bg-[#010000] object-contain"
          />
          <Noise opacity={0.24} size={1} fps={24} blendMode="overlay" contrast={0.65} colored={false} dust={0.12} scratches={0.12} scanlines={0.3} flicker={0.1} />
          </div>
          <div className="flex items-center justify-between gap-3 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#010000]">
            <span className="truncate">{title}</span>
            <span className="shrink-0">Preview ↗</span>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

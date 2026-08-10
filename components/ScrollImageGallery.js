"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const IMAGES = [
  "/scroll-img-01.jpg",
  "/scroll-img-02.jpg",
  "/scroll-img-03.jpg",
  "/scroll-img-04.png",
  "/scroll-img-05.jpg",
  "/scroll-img-06.jpg",
];

const N = IMAGES.length;

const SLIDE_H_MOBILE = 250;
const SLIDE_H_SM = 290;
const SLIDE_H_MD = 350;
const SLIDE_H_LG = 400;
const SLIDE_H_XL = 420;

const GAP = 30;

const SPEED_PX_PER_SEC = 85;

function StaticGallery() {
  return (
    <section className="relative bg-white py-10 overflow-hidden">
      <div
        className="mx-auto w-full px-4 sm:px-5 md:px-6"
        style={{ maxWidth: "1800px" }}
      >
        <div style={{ gap: `${GAP}px` }} className="flex flex-col">
          {IMAGES.map((src, idx) => (
            <div
              key={`static-${idx}`}
              className="relative w-full rounded-[18px] sm:rounded-[20px] md:rounded-[22px] lg:rounded-[24px] overflow-hidden"
              style={{
                height: `${SLIDE_H_MOBILE}px`,
              }}
            >
              <div className="hidden sm:block md:hidden" style={{ height: `${SLIDE_H_SM}px` }} />
              <div className="hidden md:block lg:hidden" style={{ height: `${SLIDE_H_MD}px` }} />
              <div className="hidden lg:block xl:hidden" style={{ height: `${SLIDE_H_LG}px` }} />
              <div className="hidden xl:block" style={{ height: `${SLIDE_H_XL}px` }} />
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1800px) 95vw, 1710px"
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-[40%] max-h-[340px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0.88) 72%, rgba(255,255,255,1) 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}

export default function ScrollImageGallery() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const lastTsRef = useRef(0);
  const rafRef = useRef(0);
  const runningRef = useRef(false);
  const sectionRef = useRef(null);

  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setPrefersReduced(mql.matches);
    apply();
    const onChange = (e) => setPrefersReduced(e.matches);
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    if (typeof mql.addListener === "function") {
      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }
  }, []);

  useEffect(() => {
    if (prefersReduced) return undefined;

    const container = containerRef.current;
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!container || !track || !section) return undefined;

    let loopLenPx = 0;

    const computeLoopLen = () => {
      const w = window.innerWidth;
      const slideH =
        w < 640
          ? SLIDE_H_MOBILE
          : w < 768
          ? SLIDE_H_SM
          : w < 1024
          ? SLIDE_H_MD
          : w < 1280
          ? SLIDE_H_LG
          : SLIDE_H_XL;
      loopLenPx = N * (slideH + GAP);
    };
    computeLoopLen();

    const setTrackY = (yPx) => {
      track.style.transform = `translate3d(0, ${yPx}px, 0)`;
    };

    const step = (ts) => {
      if (!runningRef.current) return;
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = Math.min(0.05, (ts - lastTsRef.current) / 1000);
      lastTsRef.current = ts;
      offsetRef.current -= SPEED_PX_PER_SEC * dt;
      if (loopLenPx > 0 && -offsetRef.current >= loopLenPx) {
        offsetRef.current += loopLenPx;
      } else if (offsetRef.current > 0) {
        offsetRef.current -= loopLenPx;
      }
      setTrackY(offsetRef.current);
      rafRef.current = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visible = entry.isIntersecting && entry.intersectionRatio > 0.1;
          if (visible && !runningRef.current) {
            runningRef.current = true;
            lastTsRef.current = 0;
            rafRef.current = requestAnimationFrame(step);
          } else if (!visible && runningRef.current) {
            runningRef.current = false;
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = 0;
          }
        });
      },
      { threshold: [0, 0.1, 0.5, 0.9, 1] }
    );
    io.observe(section);

    const onVisibility = () => {
      if (document.hidden && runningRef.current) {
        runningRef.current = false;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      } else if (
        !document.hidden &&
        !runningRef.current &&
        section
      ) {
        const r = section.getBoundingClientRect();
        const anyVisible =
          r.top < window.innerHeight * 0.9 && r.bottom > 10;
        if (anyVisible) {
          runningRef.current = true;
          lastTsRef.current = 0;
          rafRef.current = requestAnimationFrame(step);
        }
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onResize = () => {
      computeLoopLen();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    setTrackY(0);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      runningRef.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };
  }, [prefersReduced]);

  if (prefersReduced) {
    return <StaticGallery />;
  }

  return (
    <section ref={sectionRef} className="relative bg-white py-10 overflow-hidden">
      <div
        className="mx-auto w-full px-4 sm:px-5 md:px-6"
        style={{ maxWidth: "1800px" }}
      >
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden rounded-[22px]"
          style={{
            height: {
              xs: `${SLIDE_H_MOBILE * 2 + GAP}px`,
            }["xs"],
          }}
        >
          <style>{`
            .sig-viewport {
              height: ${SLIDE_H_MOBILE * 2 + GAP}px;
            }
            @media (min-width: 640px) {
              .sig-viewport { height: ${SLIDE_H_SM * 2 + GAP}px; }
            }
            @media (min-width: 768px) {
              .sig-viewport { height: ${SLIDE_H_MD * 2 + GAP}px; }
            }
            @media (min-width: 1024px) {
              .sig-viewport { height: ${SLIDE_H_LG * 2 + GAP}px; }
            }
            @media (min-width: 1280px) {
              .sig-viewport { height: ${SLIDE_H_XL * 2 + GAP}px; }
            }
            .sig-slide {
              height: ${SLIDE_H_MOBILE}px;
            }
            @media (min-width: 640px) {
              .sig-slide { height: ${SLIDE_H_SM}px; }
            }
            @media (min-width: 768px) {
              .sig-slide { height: ${SLIDE_H_MD}px; }
            }
            @media (min-width: 1024px) {
              .sig-slide { height: ${SLIDE_H_LG}px; }
            }
            @media (min-width: 1280px) {
              .sig-slide { height: ${SLIDE_H_XL}px; }
            }
          `}</style>

          <div className="sig-viewport relative w-full overflow-hidden">
            <div
              ref={trackRef}
              className="relative w-full will-change-transform"
              style={{ display: "flex", flexDirection: "column", gap: `${GAP}px` }}
            >
              {[...IMAGES, ...IMAGES].map((src, i) => (
                <div
                  key={`${i}-${src}`}
                  className="sig-slide relative w-full shrink-0 rounded-[18px] sm:rounded-[20px] md:rounded-[22px] lg:rounded-[24px] overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${(i % N) + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1800px) 95vw, 1710px"
                    className="object-cover"
                    priority={i % N === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className="pointer-events-none absolute left-0 right-0 bottom-0 h-[32%]"
            style={{
              background:
                "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.82) 35%, rgba(255,255,255,0.4) 65%, rgba(255,255,255,0) 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

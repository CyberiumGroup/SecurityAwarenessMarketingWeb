"use client";

import { useEffect, useRef, useState } from "react";

const SCORE_FROM = 285;
const SCORE_TO = 764;
const MAX_SCORE = 1000;
const DURATION = 2400;

const SIZE = 240;
const STROKE_WIDTH = 16;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ResilienceScoreGauge() {
  const [score, setScore] = useState(SCORE_FROM);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setScore(SCORE_TO);
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let startTime: number | null = null;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const t = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setScore(Math.round(SCORE_FROM + (SCORE_TO - SCORE_FROM) * eased));
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started]);

  const dashOffset = CIRCUMFERENCE * (1 - score / MAX_SCORE);

  return (
    <div ref={ref} className="flex flex-col items-center gap-5">
      {/* Ring */}
      <div className="relative">
        <svg
          width={SIZE}
          height={SIZE}
          style={{ transform: "rotate(-90deg)" }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="gauge-fill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          {/* Track */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth={STROKE_WIDTH}
          />
          {/* Fill */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="url(#gauge-fill)"
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
          />
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold text-white tabular-nums leading-none">
            {score}
          </span>
          <span className="mt-1 text-sm text-foreground/50">/ {MAX_SCORE}</span>
        </div>
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-foreground/30">
        Resilience Score
      </p>
    </div>
  );
}

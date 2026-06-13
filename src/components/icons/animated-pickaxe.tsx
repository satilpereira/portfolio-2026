"use client";

import { useEffect, useRef, useState } from "react";
import { Pickaxe, Sparkle } from "lucide-react";

interface SparkIcon {
  id: number;
  // position relative to the section container
  offsetX: number;
  offsetY: number;
  size: number;
  rotate: number;
  opacity: number; // 0–1, decays over time
}

const SWING_MIN = -60;
const SWING_MAX = 20;
const IMPACT_THRESHOLD = 12;

// Fixed scatter positions around the head (top-right area of the 96px container)
const SCATTER: {
  ox: number;
  oy: number;
  rot: number;
  size: number;
}[] = [
  { ox: 14, oy: -18, rot: 15, size: 10 },
  { ox: 26, oy: -6, rot: -20, size: 8 },
  { ox: 22, oy: 10, rot: 40, size: 7 },
  { ox: 4, oy: -8, rot: -10, size: 9 },
];

let globalId = 0;

export default function AnimatedPickaxe() {
  const [angle, setAngle] = useState(-60);
  const [sparks, setSparks] = useState<SparkIcon[]>([]);
  const animRef = useRef<number | null>(null);
  const stateRef = useRef({
    angle: -60,
    direction: 1 as 1 | -1,
    lastImpact: false,
  });
  const iconRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const easeInOut = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  useEffect(() => {
    let swingProgress = 0.35;
    const SWING_DURATION = 0.62;
    let lastTime: number | null = null;

    const spawnSparks = () => {
      if (!iconRef.current || !sectionRef.current) return;

      // Head position relative to the section
      const sRect = sectionRef.current.getBoundingClientRect();
      const iRect = iconRef.current.getBoundingClientRect();
      const headX = iRect.left + iRect.width * 0.82 - sRect.left - 20;
      const headY = iRect.top + iRect.height * 0.18 - sRect.top + 50;

      const newSparks: SparkIcon[] = SCATTER.map((s) => ({
        id: globalId++,
        offsetX: headX + s.ox,
        offsetY: headY + s.oy,
        size: s.size,
        rotate: s.rot,
        opacity: 1,
      }));

      setSparks((prev) => [...prev, ...newSparks]);
    };

    const tick = (ts: number) => {
      if (lastTime === null) lastTime = ts;
      const dt = Math.min((ts - lastTime) / 1000, 0.05);
      lastTime = ts;

      const s = stateRef.current;
      swingProgress += (dt / SWING_DURATION) * s.direction;

      if (swingProgress >= 1) {
        swingProgress = 1;
        s.direction = -1;
      } else if (swingProgress <= 0) {
        swingProgress = 0;
        s.direction = 1;
      }

      const eased = easeInOut(swingProgress);
      const newAngle = SWING_MIN + eased * (SWING_MAX - SWING_MIN);
      s.angle = newAngle;
      setAngle(newAngle);

      const isImpact =
        s.direction === 1 && newAngle >= IMPACT_THRESHOLD;
      if (isImpact && !s.lastImpact) spawnSparks();
      s.lastImpact = isImpact;

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Fade-out sparks
  useEffect(() => {
    if (sparks.length === 0) return;
    const id = requestAnimationFrame(() => {
      setSparks((prev) =>
        prev
          .map((s) => ({ ...s, opacity: s.opacity - 0.06 }))
          .filter((s) => s.opacity > 0),
      );
    });
    return () => cancelAnimationFrame(id);
  }, [sparks]);

  return (
    <section
      ref={sectionRef}
      className='relative flex items-center justify-center w-24 h-24'
    >
      {/* Sparkle icons — positioned relative to the section */}
      {sparks.map((spark) => (
        <span
          key={spark.id}
          style={{
            position: "absolute",
            left: spark.offsetX,
            top: spark.offsetY,
            opacity: spark.opacity,
            transform: `translate(-50%, -50%) rotate(${spark.rotate}deg)`,
            pointerEvents: "none",
            color: "currentColor",
          }}
        >
          <Sparkle size={spark.size} />
        </span>
      ))}

      {/* Pickaxe */}
      <div
        ref={iconRef}
        style={{
          transformOrigin: "15% 85%",
          transform: `rotate(${angle}deg)`,
          willChange: "transform",
          display: "inline-flex",
        }}
      >
        <Pickaxe
          size={64}
          fill='black'
          className='text-background dark:text-foreground dark:invert'
        />
      </div>
    </section>
  );
}

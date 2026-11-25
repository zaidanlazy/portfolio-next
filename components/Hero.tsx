"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

type TagMotion = {
  x: number;
  y: number;
  rotation: number;
};

type TagVelocity = TagMotion;

type DragState = {
  pointerX: number;
  pointerY: number;
  start: TagMotion;
  target: TagMotion;
  followVelocity: TagVelocity;
  bounds: MotionBounds;
  frameTime: number | null;
};

type MotionBounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const integrateMotion = (
  current: TagMotion,
  target: TagMotion,
  velocity: TagVelocity,
  stiffness: number,
  damping: number,
  deltaTime: number,
) => {
  const steps = Math.max(1, Math.ceil(deltaTime / 8));
  const stepTime = deltaTime / steps;
  const next = { ...current };

  for (let step = 0; step < steps; step += 1) {
    velocity.x += ((target.x - next.x) * stiffness - velocity.x * damping) * stepTime;
    velocity.y += ((target.y - next.y) * stiffness - velocity.y * damping) * stepTime;
    velocity.rotation +=
      ((target.rotation - next.rotation) * stiffness -
        velocity.rotation * damping) *
      stepTime;
    next.x += velocity.x * stepTime;
    next.y += velocity.y * stepTime;
    next.rotation += velocity.rotation * stepTime;
  }

  return next;
};

export default function Hero() {
  const [isDragging, setIsDragging] = useState(false);
  const swingRef = useRef<HTMLDivElement>(null);
  const lanyardPathRef = useRef<SVGPathElement>(null);
  const lanyardHighlightRef = useRef<SVGPathElement>(null);
  const motionRef = useRef<TagMotion>({ x: 0, y: 0, rotation: 0 });
  const dragRef = useRef<DragState | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const applyMotion = (motion: TagMotion) => {
    motionRef.current = motion;
    if (swingRef.current) {
      swingRef.current.style.transform = `translate3d(${motion.x}px, ${motion.y}px, 0) rotate(${motion.rotation}deg)`;
    }
    if (lanyardPathRef.current && lanyardHighlightRef.current) {
      const pivotX = (lanyardPathRef.current.ownerSVGElement?.clientWidth ?? 224) / 2;
      const cardHeight = swingRef.current?.offsetHeight ?? 354;
      const clipOffsetY = 5.6 - cardHeight / 2;
      const rotation = (motion.rotation * Math.PI) / 180;
      const horizontalDistance = motion.x - Math.sin(rotation) * clipOffsetY;
      const verticalDistance =
        176 + motion.y + cardHeight / 2 + Math.cos(rotation) * clipOffsetY;
      const distance = Math.max(1, Math.hypot(horizontalDistance, verticalDistance));
      const slack = clamp(10 + (181.6 - distance) * 0.08, 2, 18);
      const normalX = -verticalDistance / distance;
      const normalY = horizontalDistance / distance;
      const control1X = pivotX + horizontalDistance / 3 + normalX * slack;
      const control1Y = verticalDistance / 3 + normalY * slack;
      const control2X = pivotX + (horizontalDistance * 2) / 3 + normalX * slack;
      const control2Y = (verticalDistance * 2) / 3 + normalY * slack;
      const endpointX = pivotX + horizontalDistance;
      const path = `M ${pivotX} 0 C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${endpointX} ${verticalDistance}`;
      lanyardPathRef.current.setAttribute("d", path);
      lanyardHighlightRef.current.setAttribute("d", path);
    }
  };

  const stopAnimation = () => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  const followDrag = (time: number) => {
    const drag = dragRef.current;
    if (!drag) {
      animationFrameRef.current = null;
      return;
    }

    const deltaTime = Math.min(drag.frameTime === null ? 16 : time - drag.frameTime, 24);
    drag.frameTime = time;
    const stiffness = 0.0032;
    const damping = 0.12;
    const next = integrateMotion(
      motionRef.current,
      drag.target,
      drag.followVelocity,
      stiffness,
      damping,
      deltaTime,
    );
    applyMotion(next);

    const settled =
      Math.abs(drag.target.x - next.x) < 0.25 &&
      Math.abs(drag.target.y - next.y) < 0.25 &&
      Math.abs(drag.target.rotation - next.rotation) < 0.25 &&
      Math.abs(drag.followVelocity.x) < 0.02 &&
      Math.abs(drag.followVelocity.y) < 0.02 &&
      Math.abs(drag.followVelocity.rotation) < 0.02;

    if (settled) {
      applyMotion(drag.target);
      drag.followVelocity = { x: 0, y: 0, rotation: 0 };
      animationFrameRef.current = null;
      return;
    }

    animationFrameRef.current = requestAnimationFrame(followDrag);
  };

  const animateTo = (target: TagMotion, initialVelocity: TagVelocity = { x: 0, y: 0, rotation: 0 }) => {
    stopAnimation();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyMotion(target);
      return;
    }

    const velocity = { ...initialVelocity };
    let lastTime: number | null = null;

    const animate = (time: number) => {
      const deltaTime = Math.min(lastTime === null ? 16 : time - lastTime, 32);
      lastTime = time;
      const stiffness = 0.00055;
      const damping = 0.07;

      const next = integrateMotion(
        motionRef.current,
        target,
        velocity,
        stiffness,
        damping,
        deltaTime,
      );
      applyMotion(next);

      const settled =
        Math.abs(target.x - next.x) < 0.2 &&
        Math.abs(target.y - next.y) < 0.2 &&
        Math.abs(target.rotation - next.rotation) < 0.2 &&
        Math.abs(velocity.x) < 0.015 &&
        Math.abs(velocity.y) < 0.015 &&
        Math.abs(velocity.rotation) < 0.015;

      if (settled) {
        applyMotion(target);
        animationFrameRef.current = null;
        return;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(
    () => () => {
      stopAnimation();
    },
    [],
  );

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    stopAnimation();
    event.currentTarget.setPointerCapture(event.pointerId);
    const swing = swingRef.current;
    const rect = swing?.getBoundingClientRect();
    const baseTop = rect ? rect.top - motionRef.current.y : 0;
    const bounds: MotionBounds = {
      minX: -Math.min(720, Math.max(220, window.innerWidth / 2)),
      maxX: Math.min(720, Math.max(220, window.innerWidth / 2)),
      minY: -clamp(baseTop - 48, 90, 280),
      maxY: clamp(
        window.innerHeight - baseTop - (swing?.offsetHeight ?? 354) / 2 - 24,
        220,
        720,
      ),
    };
    dragRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      start: motionRef.current,
      target: motionRef.current,
      followVelocity: { x: 0, y: 0, rotation: 0 },
      bounds,
      frameTime: null,
    };
    setIsDragging(true);
  };

  const moveTag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;

    const deltaX = event.clientX - drag.pointerX;
    const deltaY = event.clientY - drag.pointerY;
    drag.target = {
      x: clamp(drag.start.x + deltaX, drag.bounds.minX, drag.bounds.maxX),
      y: clamp(drag.start.y + deltaY, drag.bounds.minY, drag.bounds.maxY),
      rotation: clamp(drag.start.rotation + deltaX * 0.18, -45, 45),
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyMotion(drag.target);
      return;
    }

    if (animationFrameRef.current === null) {
      animationFrameRef.current = requestAnimationFrame(followDrag);
    }
  };

  const releaseTag = () => {
    const drag = dragRef.current;
    if (!drag) return;
    stopAnimation();
    dragRef.current = null;
    setIsDragging(false);
    animateTo(
      { x: 0, y: 0, rotation: 0 },
      {
        x: clamp(drag.followVelocity.x * 0.04, -0.2, 0.2),
        y: clamp(drag.followVelocity.y * 0.04, -0.2, 0.2),
        rotation: clamp(drag.followVelocity.rotation * 0.04, -0.05, 0.05),
      },
    );
  };

  const moveWithKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 20 : 8;
    if (event.key === "Home") {
      event.preventDefault();
      animateTo({ x: 0, y: 0, rotation: 0 });
      return;
    }

    const delta = {
      ArrowLeft: { x: -step, y: 0, rotation: -2 },
      ArrowRight: { x: step, y: 0, rotation: 2 },
      ArrowUp: { x: 0, y: -step, rotation: 0 },
      ArrowDown: { x: 0, y: step, rotation: 0 },
    }[event.key];
    if (!delta) return;
    event.preventDefault();
    const current = motionRef.current;
    const bounds = {
      minX: -Math.min(720, Math.max(220, window.innerWidth / 2)),
      maxX: Math.min(720, Math.max(220, window.innerWidth / 2)),
      minY: -280,
      maxY: 720,
    };
    animateTo({
      x: clamp(current.x + delta.x, bounds.minX, bounds.maxX),
      y: clamp(current.y + delta.y, bounds.minY, bounds.maxY),
      rotation: clamp(current.rotation + delta.rotation, -45, 45),
    });
  };

  return (
    <section
      id="home"
      className="relative mx-auto flex max-w-[1120px] flex-col items-center px-6 pb-24 pt-36 text-center md:px-10 md:pb-32 md:pt-36"
    >
      <div className="hero-glow" aria-hidden="true" />
      <div
        className="lanyard-wrap relative mb-12"
        onPointerDown={startDrag}
        onPointerMove={moveTag}
        onPointerUp={releaseTag}
        onPointerCancel={releaseTag}
        onLostPointerCapture={releaseTag}
      >
        <svg
          className="lanyard-svg"
          viewBox="0 0 224 530"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            ref={lanyardPathRef}
            id="lanyard-path"
            className="lanyard-path"
            d="M 112 0 C 108 60, 108 121, 112 181.6"
          />
          <path
            ref={lanyardHighlightRef}
            className="lanyard-highlight"
            d="M 112 0 C 108 60, 108 121, 112 181.6"
          />
          <text className="lanyard-label">
            <textPath href="#lanyard-path" startOffset="50%" textAnchor="middle">
              ZAIDAN MAULANA
            </textPath>
          </text>
        </svg>
        <div
          ref={swingRef}
          className={`lanyard-swing${isDragging ? " tag-dragging" : ""}`}
        >
          <div className="lanyard-clip" aria-hidden="true">
            <span />
          </div>
          <div
            className="profile-badge"
            role="button"
            tabIndex={0}
            aria-label="Name tag bisa digeser. Gunakan tombol panah atau tekan Home untuk mengembalikan."
            aria-keyshortcuts="ArrowLeft ArrowRight ArrowUp ArrowDown Home"
            onKeyDown={moveWithKeyboard}
          >
            <div className="badge-portrait">
              <Image
                src="/images/zaidan-id-card.png"
                alt="Desain kartu identitas biru dengan foto dan nama Zaidan"
                fill
                priority
                sizes="(max-width: 640px) 210px, 220px"
              />
            </div>
            <span className="badge-hole" aria-hidden="true" />
          </div>
        </div>
      </div>

      <h1 className="font-display text-[clamp(2.2rem,7vw,4.2rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white">
        <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
          Welcome to
        </span>
        <span className="mt-1 block">My Portfolio</span>
      </h1>
      <p className="typing-line mt-3 font-display text-xl font-medium text-blue-200 md:text-2xl">
        <span className="typing-word">Web Developer</span>
      </p>
      <p className="mt-7 max-w-[620px] text-[15px] leading-7 text-inkSoft md:text-[16px]">
        Lulusan SMKN 1 Bontang jurusan RPL yang senang membangun sesuatu
        dari nol — dari struktur data sampai antarmuka yang enak dipakai.
        Terbiasa kerja mandiri, teliti, dan berpikir realistis soal apa
        yang benar-benar perlu dibangun.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="#proyek"
          className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-10px_#3478f6] transition hover:-translate-y-0.5 hover:bg-blue-400"
        >
          Lihat Proyek <ArrowDown size={16} />
        </a>
        <a
          href="#kontak"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-blue-300/50 hover:bg-white/[0.08]"
        >
          Hubungi Saya <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="mt-8 flex items-center gap-5 text-[13px] text-inkFaint">
        <span className="section-kicker !text-[10px]">Temukan saya</span>
        <a
          href="https://github.com/zaidanlazy"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/zaidan-maulana-alghifari-839270370/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}

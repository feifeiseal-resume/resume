import { createNoise3D } from 'simplex-noise';
import { useEffect, useRef, useCallback } from 'react';

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

const PARTICLE_PROP_COUNT = 9;
const BASE_TTL = 50;
const RANGE_TTL = 150;
const RANGE_HUE = 100;
const NOISE_STEPS = 3;
const X_OFF = 0.00125;
const Y_OFF = 0.00125;
const Z_OFF = 0.0005;
const TAU = Math.PI * 2;

function rand(n: number) { return Math.random() * n; }
function randRange(n: number) { return n - rand(2 * n); }
function fadeInOut(t: number, m: number) {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
}
function lerp(n1: number, n2: number, speed: number) {
  return (1 - speed) * n1 + speed * n2;
}

export default function Vortex({
  children,
  className,
  containerClassName,
  particleCount = 700,
  rangeY = 100,
  baseHue = 220,
  baseSpeed = 0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = '#000000',
}: VortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const particlePropsLength = particleCount * PARTICLE_PROP_COUNT;

  const initParticle = useCallback(
    (
      particleProps: Float32Array,
      i: number,
      noise3D: ReturnType<typeof createNoise3D>,
      center: [number, number],
      canvas: HTMLCanvasElement,
    ) => {
      const x = rand(canvas.width);
      const y = center[1] + randRange(rangeY);
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = BASE_TTL + rand(RANGE_TTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(RANGE_HUE);
      particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
      void noise3D; // satisfy linter
    },
    [rangeY, baseSpeed, rangeSpeed, baseRadius, rangeRadius, baseHue],
  );

  const drawParticle = useCallback(
    (
      x: number,
      y: number,
      x2: number,
      y2: number,
      life: number,
      ttl: number,
      radius: number,
      hue: number,
      ctx: CanvasRenderingContext2D,
    ) => {
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineWidth = radius;
      ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    [],
  );

  const updateParticle = useCallback(
    (
      particleProps: Float32Array,
      i: number,
      noise3D: ReturnType<typeof createNoise3D>,
      center: [number, number],
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D,
      tick: number,
    ) => {
      const i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i,
        i9 = 8 + i;

      const x = particleProps[i];
      const y = particleProps[i2];
      const n =
        noise3D(x * X_OFF, y * Y_OFF, tick * Z_OFF) * NOISE_STEPS * TAU;
      const vx = lerp(particleProps[i3], Math.cos(n), 0.5);
      const vy = lerp(particleProps[i4], Math.sin(n), 0.5);
      let life = particleProps[i5];
      const ttl = particleProps[i6];
      const speed = particleProps[i7];
      const x2 = x + vx * speed;
      const y2 = y + vy * speed;
      const radius = particleProps[i8];
      const hue = particleProps[i9];

      drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

      life++;
      particleProps[i] = x2;
      particleProps[i2] = y2;
      particleProps[i3] = vx;
      particleProps[i4] = vy;
      particleProps[i5] = life;

      if (
        life > ttl ||
        x2 < 0 ||
        x2 > canvas.width ||
        y2 < 0 ||
        y2 > canvas.height
      ) {
        initParticle(particleProps, i, noise3D, center, canvas);
      }
    },
    [drawParticle, initParticle],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const noise3D = createNoise3D();
    const particleProps = new Float32Array(particlePropsLength);
    let center: [number, number] = [0, 0];
    let tick = 0;

    const resize = () => {
      const { offsetWidth: w, offsetHeight: h } = container;
      canvas.width = w;
      canvas.height = h;
      center = [w / 2, h / 2];
      ctx.drawImage(canvas, 0, 0);
    };

    const initParticles = () => {
      for (let i = 0; i < particlePropsLength; i += PARTICLE_PROP_COUNT) {
        initParticle(particleProps, i, noise3D, center, canvas);
      }
    };

    const drawParticles = () => {
      for (let i = 0; i < particlePropsLength; i += PARTICLE_PROP_COUNT) {
        updateParticle(particleProps, i, noise3D, center, canvas, ctx, tick);
      }
    };

    const renderGlow = () => {
      ctx.save();
      ctx.filter = 'blur(8px) brightness(200%)';
      ctx.globalCompositeOperation = 'lighter';
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
      ctx.save();
      ctx.filter = 'blur(4px) brightness(200%)';
      ctx.globalCompositeOperation = 'lighter';
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
    };

    const renderToScreen = (offscreen: HTMLCanvasElement) => {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.drawImage(offscreen, 0, 0);
      ctx.restore();
    };

    const offscreen = document.createElement('canvas');
    const offCtx = offscreen.getContext('2d');

    const draw = () => {
      tick++;
      offscreen.width = canvas.width;
      offscreen.height = canvas.height;

      if (!offCtx) return;

      offCtx.fillStyle = backgroundColor;
      offCtx.fillRect(0, 0, offscreen.width, offscreen.height);

      for (let i = 0; i < particlePropsLength; i += PARTICLE_PROP_COUNT) {
        updateParticle(particleProps, i, noise3D, center, offscreen, offCtx, tick);
      }

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.filter = 'blur(8px) brightness(200%)';
      ctx.globalCompositeOperation = 'lighter';
      ctx.drawImage(offscreen, 0, 0);
      ctx.restore();

      ctx.save();
      ctx.filter = 'blur(4px) brightness(200%)';
      ctx.globalCompositeOperation = 'lighter';
      ctx.drawImage(offscreen, 0, 0);
      ctx.restore();

      renderToScreen(offscreen);

      rafRef.current = requestAnimationFrame(draw);
    };

    // suppress unused variable warnings
    void drawParticles;
    void renderGlow;

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    resize();
    initParticles();
    draw();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [
    particlePropsLength,
    backgroundColor,
    initParticle,
    updateParticle,
  ]);

  return (
    <div
      ref={containerRef}
      className={containerClassName}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />
      {children && (
        <div
          className={className}
          style={{ position: 'relative', zIndex: 1 }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

import { useEffect, useRef } from 'react';

interface Circle {
  x: number;
  y: number;
  mouseX: number;
  mouseY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
  phase: number;
  floatSpeed: number;
  rgb: [number, number, number];
}

interface ParticlesBgProps {
  color?: string;
  accentColor?: string;
  accentRatio?: number;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  backgroundColor?: string;
  backgroundColorLight?: string;
  drift?: number;
  floatAmount?: number;
}

function hexToRgb(hex: string): [number, number, number] {
  let normalized = hex.replace('#', '');
  if (normalized.length === 3) {
    normalized = normalized
      .split('')
      .map((char) => char + char)
      .join('');
  }
  const hexInt = Number.parseInt(normalized, 16);
  return [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255];
}

function mixRgb(
  a: [number, number, number],
  b: [number, number, number],
  t: number,
): string {
  const r = Math.round(a[0] + (b[0] - a[0]) * t);
  const g = Math.round(a[1] + (b[1] - a[1]) * t);
  const bl = Math.round(a[2] + (b[2] - a[2]) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

function lightenRgb(rgb: [number, number, number], amount: number): [number, number, number] {
  return [
    Math.min(255, Math.round(rgb[0] + (255 - rgb[0]) * amount)),
    Math.min(255, Math.round(rgb[1] + (255 - rgb[1]) * amount)),
    Math.min(255, Math.round(rgb[2] + (255 - rgb[2]) * amount)),
  ];
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

function remapValue(
  value: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number,
): number {
  const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
  return remapped > 0 ? remapped : 0;
}

function getFloatOffset(circle: Circle, time: number, floatAmount: number) {
  return {
    x: Math.sin(time * circle.floatSpeed + circle.phase) * floatAmount,
    y:
      Math.cos(time * circle.floatSpeed * 0.85 + circle.phase * 1.6) * floatAmount,
  };
}

export default function ParticlesBg({
  color = '#92a4e8',
  accentColor,
  accentRatio = 0.25,
  quantity = 120,
  staticity = 50,
  ease = 50,
  size = 2.5,
  backgroundColor = '#080e22',
  backgroundColorLight,
  drift = 0.4,
  floatAmount = 16,
}: ParticlesBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dark = hexToRgb(backgroundColor);
    const light = backgroundColorLight
      ? hexToRgb(backgroundColorLight)
      : lightenRgb(dark, 0.35);

    const updateBackground = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        maxScroll <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / maxScroll));
      container.style.background = mixRgb(dark, light, smoothstep(progress));
    };

    window.addEventListener('scroll', updateBackground, { passive: true });
    window.addEventListener('resize', updateBackground);
    updateBackground();

    return () => {
      window.removeEventListener('scroll', updateBackground);
      window.removeEventListener('resize', updateBackground);
    };
  }, [backgroundColor, backgroundColorLight]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const primaryRgb = hexToRgb(color);
    const accentRgb = accentColor ? hexToRgb(accentColor) : primaryRgb;
    const mouse = { x: 0, y: 0 };
    let canvasSize = { w: 0, h: 0 };
    let circles: Circle[] = [];
    let tick = 0;
    let rafId = 0;

    const pickRgb = (): [number, number, number] =>
      accentColor && Math.random() < accentRatio ? accentRgb : primaryRgb;

    const createCircle = (): Circle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = drift * (0.4 + Math.random() * 0.6);
      return {
        x: Math.floor(Math.random() * canvasSize.w),
        y: Math.floor(Math.random() * canvasSize.h),
        mouseX: 0,
        mouseY: 0,
        size: Math.floor(Math.random() * 2) + size,
        alpha: 0,
        targetAlpha: Number.parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        magnetism: 0.1 + Math.random() * 4,
        phase: Math.random() * Math.PI * 2,
        floatSpeed: 0.5 + Math.random() * 0.9,
        rgb: pickRgb(),
      };
    };

    const drawCircle = (circle: Circle, translateX: number, translateY: number) => {
      const [r, g, b] = circle.rgb;
      ctx.translate(translateX, translateY);
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${circle.alpha})`;
      ctx.fill();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const clearCanvas = () => {
      ctx.clearRect(0, 0, canvasSize.w, canvasSize.h);
    };

    const initParticles = () => {
      clearCanvas();
      circles = Array.from({ length: quantity }, createCircle);
      for (const circle of circles) {
        const { x, y } = getFloatOffset(circle, 0, floatAmount);
        drawCircle(circle, x, y);
      }
    };

    const resizeCanvas = () => {
      canvasSize = {
        w: container.offsetWidth,
        h: container.offsetHeight,
      };

      canvas.width = canvasSize.w * dpr;
      canvas.height = canvasSize.h * dpr;
      canvas.style.width = `${canvasSize.w}px`;
      canvas.style.height = `${canvasSize.h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initParticles();
    };

    const updateMouse = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left - canvasSize.w / 2;
      const y = clientY - rect.top - canvasSize.h / 2;
      const inside =
        x < canvasSize.w / 2 &&
        x > -canvasSize.w / 2 &&
        y < canvasSize.h / 2 &&
        y > -canvasSize.h / 2;
      if (inside) {
        mouse.x = x;
        mouse.y = y;
      }
    };

    const onMouseMove = (e: MouseEvent) => updateMouse(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) updateMouse(touch.clientX, touch.clientY);
    };

    const animate = () => {
      tick++;
      clearCanvas();
      const time = tick * 0.018;
      const { w, h } = canvasSize;

      for (let i = circles.length - 1; i >= 0; i--) {
        const circle = circles[i];

        circle.mouseX +=
          (mouse.x / (staticity / circle.magnetism) - circle.mouseX) / ease;
        circle.mouseY +=
          (mouse.y / (staticity / circle.magnetism) - circle.mouseY) / ease;

        const { x: floatX, y: floatY } = getFloatOffset(circle, time, floatAmount);
        const translateX = circle.mouseX + floatX;
        const translateY = circle.mouseY + floatY;

        const edge = [
          circle.x + translateX - circle.size,
          w - circle.x - translateX - circle.size,
          circle.y + translateY - circle.size,
          h - circle.y - translateY - circle.size,
        ];
        const fade = remapValue(Math.min(...edge), 0, 20, 0, 1);

        if (fade > 1) {
          circle.alpha = Math.min(circle.alpha + 0.02, circle.targetAlpha);
        } else {
          circle.alpha = circle.targetAlpha * fade;
        }

        circle.x += circle.dx;
        circle.y += circle.dy;

        if (tick % 90 === i % 90) {
          circle.dx += (Math.random() - 0.5) * 0.04;
          circle.dy += (Math.random() - 0.5) * 0.04;
          circle.dx = Math.max(-drift, Math.min(drift, circle.dx));
          circle.dy = Math.max(-drift, Math.min(drift, circle.dy));
        }

        drawCircle(circle, translateX, translateY);

        if (
          circle.x < -circle.size ||
          circle.x > w + circle.size ||
          circle.y < -circle.size ||
          circle.y > h + circle.size
        ) {
          circles[i] = createCircle();
          const replacement = circles[i];
          const offset = getFloatOffset(replacement, time, floatAmount);
          drawCircle(replacement, offset.x, offset.y);
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    resizeCanvas();
    animate();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      cancelAnimationFrame(rafId);
    };
  }, [
    color,
    accentColor,
    accentRatio,
    quantity,
    staticity,
    ease,
    size,
    drift,
    floatAmount,
  ]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}

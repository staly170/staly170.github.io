"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let animId: number;
    let time = 0;
    let mouseX = w / 2;
    let mouseY = h / 2;

    const NODE_COUNT = Math.min(90, Math.floor(w / 18));
    const CONNECTION_DISTANCE = 170;
    const MOUSE_RADIUS = 200;

    const nodes: Node[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.5 + 0.5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      time += 1;

      // Update node positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        // Bounce
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x));
        n.y = Math.max(0, Math.min(h, n.y));
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Mouse-node connections (stronger)
        const mdx = a.x - mouseX;
        const mdy = a.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < MOUSE_RADIUS) {
          const opacity = (1 - mDist / MOUSE_RADIUS) * 0.45;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(mouseX, mouseY);
          ctx!.strokeStyle = `rgba(94, 234, 212, ${opacity})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }

        // Node-node connections
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity = Math.pow(1 - dist / CONNECTION_DISTANCE, 1.5) * 0.4;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `rgba(20, 184, 166, ${opacity})`;
            ctx!.lineWidth = 0.6;
            ctx!.stroke();
          }
        }
      }

      // Draw nodes (small dots)
      for (const n of nodes) {
        const twinkle = Math.sin(time * 0.02 + n.phase) * 0.3 + 0.7;

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(94, 234, 212, ${twinkle * 0.75})`;
        ctx!.fill();

        if (n.r > 1.2) {
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, n.r * 2.5, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(20, 184, 166, ${twinkle * 0.08})`;
          ctx!.fill();
        }
      }

      // Mouse cursor glow
      const mouseGrad = ctx!.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 40);
      mouseGrad.addColorStop(0, "rgba(94, 234, 212, 0.15)");
      mouseGrad.addColorStop(1, "rgba(20, 184, 166, 0)");
      ctx!.fillStyle = mouseGrad;
      ctx!.fillRect(mouseX - 40, mouseY - 40, 80, 80);

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(animId);
      else draw();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}

import { useEffect, useRef } from "react";

/** Local canvas fallback inspired by radial-liquid visuals; it does not use React Bits Pro source. */
export default function RadialLiquid() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frame, pointer = { x: 0.5, y: 0.5 }, time = 0;
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resize = () => { const dpr = Math.min(window.devicePixelRatio, 2); const { width, height } = canvas.getBoundingClientRect(); canvas.width = width * dpr; canvas.height = height * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const move = (event) => { const r = canvas.getBoundingClientRect(); pointer = { x: (event.clientX - r.left) / r.width, y: (event.clientY - r.top) / r.height }; };
    const draw = () => { const { width, height } = canvas.getBoundingClientRect(); if (!width || !height) { frame = requestAnimationFrame(draw); return; } const cx = width * (.5 + (pointer.x - .5) * .11); const cy = height * (.5 + (pointer.y - .5) * .11); const radius = Math.min(width, height) * .47; ctx.clearRect(0, 0, width, height); ctx.fillStyle = "#050507"; ctx.fillRect(0, 0, width, height); for (let i = 6; i > 0; i--) { const wobble = Math.sin(time * .7 + i * 1.9) * 14; const r = radius * (i / 6) + wobble; const g = ctx.createRadialGradient(cx - r * .22, cy - r * .28, r * .03, cx, cy, r); g.addColorStop(0, `rgba(255,255,255,${.055 + i * .012})`); g.addColorStop(.48, "rgba(35,35,41,.18)"); g.addColorStop(.77, "rgba(235,235,240,.16)"); g.addColorStop(.88, "rgba(255,255,255,.025)"); g.addColorStop(1, "rgba(5,5,7,0)"); ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(cx + Math.cos(time + i) * 8, cy + Math.sin(time * .8 + i) * 8, r * 1.1, r * .78, time * .1 + i * .12, 0, Math.PI * 2); ctx.fill(); } const shine = ctx.createRadialGradient(cx - radius * .28, cy - radius * .38, 1, cx - radius * .28, cy - radius * .38, radius * .8); shine.addColorStop(0,"rgba(255,255,255,.48)"); shine.addColorStop(.09,"rgba(255,255,255,.1)"); shine.addColorStop(.42,"rgba(255,255,255,0)"); ctx.fillStyle=shine; ctx.fillRect(0,0,width,height); if (!reduceMotion) { time += .012; frame=requestAnimationFrame(draw); } };
    resize(); draw(); window.addEventListener("resize", resize); if (!reduceMotion) canvas.addEventListener("pointermove", move); return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); canvas.removeEventListener("pointermove", move); };
  }, []);
  return <canvas ref={canvasRef} className="radial-liquid" aria-hidden="true" />;
}

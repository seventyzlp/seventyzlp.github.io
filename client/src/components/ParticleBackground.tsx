/*
Design: Cyberpunk Futurism
Particle system using Canvas for performance
White particles with radial gradient floating upward, inspired by Arknights official website
*/

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  maxY: number;
  originalVx: number;
  originalVy: number;
}

function createParticle(): Particle {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const vx = (Math.random() - 0.5) * 0.3;
  const vy = Math.random() * 0.5 + 0.3;
  return {
    x: Math.random() * width,
    y: height + Math.random() * height,
    vx,
    vy,
    radius: Math.random() * 2 + 1,
    opacity: 1,
    maxY: Math.random() * height * 0.5,
    originalVx: vx,
    originalVy: vy,
  };
}

interface MousePosition {
  x: number;
  y: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  const mouseRef = useRef<MousePosition>({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initialize particles
    const particleCount = window.innerWidth < 768 ? 60 : 120;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }
    particlesRef.current = particles;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Mouse interaction
        const mouse = mouseRef.current;
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150;

        if (distance < interactionRadius) {
          // Repulsion effect - push particles away from mouse
          const angle = Math.atan2(dy, dx);
          const force = (interactionRadius - distance) / interactionRadius;
          particle.vx = Math.cos(angle) * force * 2 + particle.originalVx * 0.3;
          particle.vy = Math.sin(angle) * force * 2 + particle.originalVy * 0.3;
        } else {
          // Return to original velocity
          particle.vx += (particle.originalVx - particle.vx) * 0.05;
          particle.vy += (particle.originalVy - particle.vy) * 0.05;
        }

        // Update position
        particle.x += particle.vx;
        particle.y -= particle.vy;

        // Fade out near max height
        if (particle.y < particle.maxY + particle.maxY * 0.2) {
          particle.opacity -= 0.005;
        }

        // Reset particle if it's out of bounds
        if (particle.y <= particle.maxY - particle.radius * 2 || particle.opacity <= 0) {
          particlesRef.current[index] = createParticle();
        }

        // Draw particle with radial gradient
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${particle.opacity * 0.1})`);

        ctx.globalAlpha = Math.max(0, Math.min(1, particle.opacity));
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: 'transparent' }}
    />
  );
}

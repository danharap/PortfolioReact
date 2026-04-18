import React, { useEffect, useRef, useState } from 'react';

const ParticleBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqNarrow = window.matchMedia('(max-width: 768px)');
    const setR = () => setReduceMotion(mqReduce.matches);
    const setN = () => setIsNarrow(mqNarrow.matches);
    setR();
    setN();
    mqReduce.addEventListener('change', setR);
    mqNarrow.addEventListener('change', setN);
    return () => {
      mqReduce.removeEventListener('change', setR);
      mqNarrow.removeEventListener('change', setN);
    };
  }, []);

  useEffect(() => {
    if (!darkMode || reduceMotion) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.35 + 0.12;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#60a5fa';
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      const divisor = isNarrow ? 28000 : 22000;
      const particleCount = Math.min(
        48,
        Math.floor((canvas.width * canvas.height) / divisor)
      );
      for (let i = 0; i < particleCount; i += 1) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 90) {
            ctx.save();
            ctx.globalAlpha = ((90 - distance) / 90) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.restore();
          }
        });
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const onResize = () => {
      resizeCanvas();
      initParticles();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
    };
  }, [darkMode, reduceMotion, isNarrow]);

  if (!darkMode || reduceMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: isNarrow ? 0.25 : 0.35 }}
      aria-hidden
    />
  );
};

export default ParticleBackground;

import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    const colors = ['#818cf8', '#c084fc', '#2dd4bf', '#f472b6', '#818cf8'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.baseSpeedX = (Math.random() - 0.5) * 0.5;
        this.baseSpeedY = (Math.random() - 0.5) * 0.5;
        this.speedX = this.baseSpeedX;
        this.speedY = this.baseSpeedY;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Strong attraction towards mouse (increased from 150 to 200)
        if (dist < 200 && dist > 0) {
          const force = Math.max(0, (200 - dist) / 200) * 0.015;
          this.speedX += dx * force * 0.05;
          this.speedY += dy * force * 0.05;
        }

        // Flee effect when mouse is very close
        if (dist < 50 && dist > 0) {
          const fleeForce = (50 - dist) / 50 * 0.03;
          this.speedX -= dx * fleeForce / dist;
          this.speedY -= dy * fleeForce / dist;
        }

        // Apply velocity with damping
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedX *= 0.95;
        this.speedY *= 0.95;

        // Keep base drift alive
        this.speedX += this.baseSpeedX * 0.02;
        this.speedY += this.baseSpeedY * 0.02;

        // Boundary bounce
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -0.8;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -0.8;
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      resize();
      particles = [];
      const numParticles = Math.min(100, Math.floor(canvas.width * canvas.height / 12000));
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#818cf8';
            ctx.globalAlpha = 0.1 * (1 - dist / 120);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default ParticleBackground;

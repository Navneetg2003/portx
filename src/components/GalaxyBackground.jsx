import { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let shootingStars = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class for twinkling stars
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.color = this.getStarColor();
      }

      getStarColor() {
        const colors = [
          'rgba(255, 255, 255, ',
          'rgba(200, 220, 255, ',
          'rgba(255, 220, 200, ',
          'rgba(200, 200, 255, ',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.opacity += this.twinkleSpeed;
        if (this.opacity > 1 || this.opacity < 0) {
          this.twinkleSpeed *= -1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + Math.max(0, Math.min(1, this.opacity)) + ')';
        ctx.fill();

        // Add glow for bigger stars
        if (this.size > 1.5) {
          ctx.shadowBlur = 5;
          ctx.shadowColor = this.color + '0.5)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    // Shooting star class
    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height / 2;
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 10 + 6;
        this.opacity = 1;
        this.angle = Math.PI / 4;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity -= 0.02;

        if (this.opacity <= 0 || this.x > canvas.width || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        const gradient = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.strokeStyle = gradient;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        ctx.stroke();
        ctx.restore();
      }
    }

    // Create stars
    const createStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };
    createStars();

    // Create shooting stars
    for (let i = 0; i < 3; i++) {
      shootingStars.push(new ShootingStar());
    }

    // Draw nebula clouds
    const drawNebula = () => {
      const nebulaClouds = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 300, color: 'rgba(138, 43, 226, 0.15)' },
        { x: canvas.width * 0.7, y: canvas.height * 0.5, size: 400, color: 'rgba(75, 0, 130, 0.12)' },
        { x: canvas.width * 0.5, y: canvas.height * 0.7, size: 350, color: 'rgba(25, 25, 112, 0.1)' },
        { x: canvas.width * 0.8, y: canvas.height * 0.2, size: 250, color: 'rgba(72, 61, 139, 0.13)' },
      ];

      nebulaClouds.forEach(cloud => {
        const gradient = ctx.createRadialGradient(
          cloud.x, cloud.y, 0,
          cloud.x, cloud.y, cloud.size
        );
        gradient.addColorStop(0, cloud.color);
        gradient.addColorStop(0.5, cloud.color.replace(/[\d.]+\)/, '0.05)'));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    // Draw galaxy spiral (subtle)
    const drawGalaxySpiral = () => {
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.5;
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.max(canvas.width, canvas.height) * 0.6
      );
      gradient.addColorStop(0, 'rgba(100, 100, 255, 0.08)');
      gradient.addColorStop(0.3, 'rgba(138, 43, 226, 0.04)');
      gradient.addColorStop(0.6, 'rgba(25, 25, 112, 0.02)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Animation loop
    const animate = () => {
      // Create deep space background
      ctx.fillStyle = 'rgba(5, 5, 15, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw galaxy elements
      drawGalaxySpiral();
      drawNebula();

      // Draw and update stars
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      // Draw and update shooting stars
      shootingStars.forEach(star => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default GalaxyBackground;

import { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrameId;
    let stars = [];

    // Offscreen layer for the deep-space background + nebula + spiral.
    // Every value in renderStaticLayer() is a function of canvas width/
    // height only, never of time, so it's rendered once here instead of
    // being recomputed from scratch on every animation frame.
    const staticLayer = document.createElement('canvas');
    const staticCtx = staticLayer.getContext('2d');

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

    const createStars = () => {
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 4500);
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    const renderStaticLayer = () => {
      staticCtx.fillStyle = 'rgba(5, 5, 15, 1)';
      staticCtx.fillRect(0, 0, staticLayer.width, staticLayer.height);

      // Galaxy spiral
      const centerX = staticLayer.width * 0.5;
      const centerY = staticLayer.height * 0.5;
      const spiralGradient = staticCtx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.max(staticLayer.width, staticLayer.height) * 0.6
      );
      spiralGradient.addColorStop(0, 'rgba(56, 189, 248, 0.07)');
      spiralGradient.addColorStop(0.3, 'rgba(59, 130, 246, 0.035)');
      spiralGradient.addColorStop(0.6, 'rgba(30, 58, 138, 0.02)');
      spiralGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      staticCtx.fillStyle = spiralGradient;
      staticCtx.fillRect(0, 0, staticLayer.width, staticLayer.height);

      // Nebula clouds — kept within one hue family (sky/blue) instead of
      // spanning purple/indigo, and toned down so it reads as ambient
      // depth rather than a decorative centerpiece.
      const nebulaClouds = [
        { x: staticLayer.width * 0.2, y: staticLayer.height * 0.3, size: 300, color: 'rgba(56, 189, 248, 0.10)' },
        { x: staticLayer.width * 0.7, y: staticLayer.height * 0.5, size: 400, color: 'rgba(59, 130, 246, 0.08)' },
        { x: staticLayer.width * 0.5, y: staticLayer.height * 0.7, size: 350, color: 'rgba(30, 58, 138, 0.07)' },
        { x: staticLayer.width * 0.8, y: staticLayer.height * 0.2, size: 250, color: 'rgba(14, 116, 144, 0.08)' },
      ];

      nebulaClouds.forEach(cloud => {
        const gradient = staticCtx.createRadialGradient(
          cloud.x, cloud.y, 0,
          cloud.x, cloud.y, cloud.size
        );
        gradient.addColorStop(0, cloud.color);
        gradient.addColorStop(0.5, cloud.color.replace(/[\d.]+\)/, '0.05)'));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        staticCtx.fillStyle = gradient;
        staticCtx.fillRect(0, 0, staticLayer.width, staticLayer.height);
      });

      createStars();
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      staticLayer.width = window.innerWidth;
      staticLayer.height = window.innerHeight;
      renderStaticLayer();
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.drawImage(staticLayer, 0, 0);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      // Single static frame: background + fixed stars, no twinkle, no
      // shooting stars, no requestAnimationFrame loop.
      ctx.drawImage(staticLayer, 0, 0);
      stars.forEach(star => star.draw());
    } else {
      animate();
    }

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

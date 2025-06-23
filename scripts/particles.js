/**
 * Particles Animation for JSRobot Login Page
 * Creates an interactive particle background with parallax effect
 */

class ParticlesAnimation {
  constructor(options = {}) {
    this.canvas = options.canvas || document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = options.width || window.innerWidth;
    this.height = options.height || window.innerHeight;
    this.particleCount = options.particleCount || 100;
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseRadius = options.mouseRadius || 120;
    this.colors = options.colors || [
      "#ff79c6",
      "#50fa7b",
      "#8be9fd",
      "#bd93f9",
      "#f1fa8c",
    ];
    this.maxSize = options.maxSize || 5;
    this.minSize = options.minSize || 1;
    this.speed = options.speed || 1;
    this.parallaxIntensity = options.parallaxIntensity || 20;
    this.connectParticles =
      options.connectParticles !== undefined ? options.connectParticles : true;
    this.connectionDistance = options.connectionDistance || 120;
    this.connectionWidth = options.connectionWidth || 0.6;

    this.init();
  }

  init() {
    // Set canvas size
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    // Create particles
    this.createParticles();

    // Add event listeners
    window.addEventListener("resize", this.resize.bind(this));
    window.addEventListener("mousemove", this.mouseMove.bind(this));

    // Start animation loop
    this.animate();
  }

  createParticles() {
    this.particles = [];

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * (this.maxSize - this.minSize) + this.minSize,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        speedX: Math.random() * this.speed * 2 - this.speed,
        speedY: Math.random() * this.speed * 2 - this.speed,
        parallaxFactor: Math.random() * 0.8 + 0.2, // Random factor between 0.2 and 1.0
      });
    }
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.createParticles();
  }

  mouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i];

      // Update position
      p.x += p.speedX;
      p.y += p.speedY;

      // Boundary check with wrapping
      if (p.x > this.width) p.x = 0;
      if (p.x < 0) p.x = this.width;
      if (p.y > this.height) p.y = 0;
      if (p.y < 0) p.y = this.height;

      // Parallax effect based on mouse position
      const dx = this.mouseX - this.width / 2;
      const dy = this.mouseY - this.height / 2;
      const parallaxX =
        (dx / this.width) * this.parallaxIntensity * p.parallaxFactor;
      const parallaxY =
        (dy / this.height) * this.parallaxIntensity * p.parallaxFactor;

      // Apply parallax offset for drawing
      const drawX = p.x - parallaxX;
      const drawY = p.y - parallaxY;

      // Mouse interaction - particles move away from cursor
      const distX = this.mouseX - p.x;
      const distY = this.mouseY - p.y;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < this.mouseRadius) {
        const angle = Math.atan2(distY, distX);
        const force = (this.mouseRadius - distance) / this.mouseRadius;
        p.x -= Math.cos(angle) * force * 2;
        p.y -= Math.sin(angle) * force * 2;
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.fill();

      // Connect particles with lines if enabled
      if (this.connectParticles) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dx = drawX - (p2.x - parallaxX);
          const dy = drawY - (p2.y - parallaxY);
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < this.connectionDistance) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = p.color;
            this.ctx.globalAlpha = 1 - dist / this.connectionDistance;
            this.ctx.lineWidth = this.connectionWidth;
            this.ctx.moveTo(drawX, drawY);
            this.ctx.lineTo(p2.x - parallaxX, p2.y - parallaxY);
            this.ctx.stroke();
            this.ctx.globalAlpha = 1;
          }
        }
      }
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}

// Initialize particles when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Only initialize on the login page
  if (document.querySelector(".login-container")) {
    const canvas = document.createElement("canvas");
    canvas.id = "particles-canvas";
    document.body.insertBefore(canvas, document.body.firstChild);

    // Apply styles to the canvas
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none";

    // Initialize the particles animation
    new ParticlesAnimation({
      canvas: canvas,
      particleCount: 120,
      connectParticles: true,
      maxSize: 3,
      minSize: 1,
      speed: 0.5,
      mouseRadius: 150,
      parallaxIntensity: 30,
      connectionDistance: 150,
    });
  }
});

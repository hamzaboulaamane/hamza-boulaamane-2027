/* ================================
   CYBERSECURITY DYNAMIC BACKGROUND
   Node network with traveling data packets.
   Fixed full-page canvas, mouse-reactive,
   respects prefers-reduced-motion.
   ================================ */

(function () {
    const canvas = document.getElementById('cyber-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let width, height, dpr;
    let nodes = [];
    let packets = [];
    const mouse = { x: null, y: null, active: false };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const NODE_COLOR = '#06b6d4';
    const NODE_GLOW = 'rgba(6, 182, 212, 0.9)';
    const LINE_COLOR = 'rgba(34, 197, 94, 0.5)';
    const PACKET_COLOR = '#22c55e';
    const LINK_DIST = 150;
    const MOUSE_RADIUS = 160;

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        initNodes();
    }

    function initNodes() {
        const density = 9000; // px^2 per node
        const count = Math.max(25, Math.min(110, Math.floor((width * height) / density)));
        nodes = [];
        for (let i = 0; i < count; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                r: Math.random() * 1.4 + 1.2
            });
        }
    }

    function maybeSpawnPacket() {
        if (nodes.length < 2 || Math.random() > 0.02) return;

        const a = nodes[Math.floor(Math.random() * nodes.length)];
        let closest = null;
        let closestDist = Infinity;
        for (const b of nodes) {
            if (b === a) continue;
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < LINK_DIST && d < closestDist) {
                closestDist = d;
                closest = b;
            }
        }
        if (closest) {
            packets.push({ a, b: closest, t: 0, speed: 0.012 + Math.random() * 0.012 });
        }
    }

    function step() {
        for (const n of nodes) {
            n.x += n.vx;
            n.y += n.vy;

            if (n.x < 0 || n.x > width) n.vx *= -1;
            if (n.y < 0 || n.y > height) n.vy *= -1;

            if (mouse.active) {
                const dx = n.x - mouse.x;
                const dy = n.y - mouse.y;
                const dist = Math.hypot(dx, dy);
                if (dist < MOUSE_RADIUS && dist > 0.01) {
                    const force = (1 - dist / MOUSE_RADIUS) * 0.6;
                    n.x += (dx / dist) * force;
                    n.y += (dy / dist) * force;
                }
            }
        }

        packets = packets.filter(p => p.t < 1);
        for (const p of packets) p.t += p.speed;

        maybeSpawnPacket();
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        // links
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const a = nodes[i], b = nodes[j];
                const dist = Math.hypot(a.x - b.x, a.y - b.y);
                if (dist < LINK_DIST) {
                    ctx.globalAlpha = (1 - dist / LINK_DIST) * 0.5;
                    ctx.strokeStyle = LINE_COLOR;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }
        ctx.globalAlpha = 1;

        // nodes
        for (const n of nodes) {
            ctx.beginPath();
            ctx.fillStyle = NODE_COLOR;
            ctx.shadowColor = NODE_GLOW;
            ctx.shadowBlur = 6;
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.shadowBlur = 0;

        // traveling packets
        for (const p of packets) {
            const x = p.a.x + (p.b.x - p.a.x) * p.t;
            const y = p.a.y + (p.b.y - p.a.y) * p.t;
            const alpha = Math.sin(p.t * Math.PI);
            ctx.beginPath();
            ctx.fillStyle = PACKET_COLOR;
            ctx.shadowColor = PACKET_COLOR;
            ctx.shadowBlur = 8;
            ctx.globalAlpha = alpha;
            ctx.arc(x, y, 2.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
        ctx.shadowBlur = 0;
    }

    function loop() {
        step();
        draw();
        requestAnimationFrame(loop);
    }

    window.addEventListener('resize', resize);

    // Mouse tracked on the whole document since the canvas spans the full page
    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    });
    document.addEventListener('mouseleave', () => { mouse.active = false; });

    resize();

    if (prefersReducedMotion) {
        draw(); // static single frame, no animation loop
    } else {
        loop();
    }
})();

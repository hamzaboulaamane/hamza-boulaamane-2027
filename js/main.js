const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

/* =========================
   INTERACTIVE TERMINAL
   ========================= */

const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

const commands = {

    help: () => `
        <div class="terminal-info">Available commands:</div>
        <div>whoami      → Identity</div>
        <div>about       → About me</div>
        <div>skills      → Technical skills</div>
        <div>projects    → My projects</div>
        <div>interests   → Current interests</div>
        <div>education   → Education</div>
        <div>mission     → My mission</div>
        <div>contact     → Contact information</div>
        <div>clear       → Clear terminal</div>
    `,

    whoami: () => `
        <div class="terminal-success">hamza-boulaamane</div>
        <div>Cybersecurity Student</div>
    `,

    about: () => `
        <div class="terminal-info">Name:</div>
        <div>Hamza Boulaamane</div>
        <br>
        <div class="terminal-info">Role:</div>
        <div>Cybersecurity Student</div>
        <br>
        <div class="terminal-info">Focus:</div>
        <div>Artificial Intelligence</div>
        <div>Machine Learning</div>
        <div>Defensive Security</div>
    `,

    skills: () => `
        <div class="terminal-info">Technical Skills:</div>
        <div class="terminal-success">[✓] Python</div>
        <div class="terminal-success">[✓] Machine Learning</div>
        <div class="terminal-success">[✓] Cybersecurity</div>
        <div class="terminal-success">[✓] Flask</div>
        <div class="terminal-success">[✓] SQL</div>
        <div class="terminal-success">[✓] Git / GitHub</div>
        <div class="terminal-success">[✓] Malware Detection</div>
    `,

    projects: () => `
        <div class="terminal-info">Featured Projects:</div>
        <br>
        <div><span class="terminal-success">01.</span> ML-Based Malware Detection</div>
        <div><span class="terminal-success">02.</span> PhishGuard-AI</div>
        <div><span class="terminal-success">03.</span> FraudShield-AI</div>
    `,

    interests: () => `
        <div class="terminal-info">Current Interests:</div>
        <div>→ Malware Analysis</div>
        <div>→ Fraud Detection</div>
        <div>→ Phishing Detection</div>
        <div>→ Network Security</div>
        <div>→ Threat Intelligence</div>
        <div>→ AI & Machine Learning</div>
    `,

    education: () => `
        <div class="terminal-info">Education:</div>
        <br>
        <div>Computer Science / Applied Computer Science</div>
        <div>Focus: Cybersecurity</div>
    `,

    mission: () => `
        <div class="terminal-info">Mission:</div>
        <div>Building intelligent cybersecurity</div>
        <div>solutions capable of detecting</div>
        <div>modern cyber threats.</div>
    `,

    contact: () => `
        <div class="terminal-info">Contact:</div>
        <div>Email → your@email.com</div>
        <div>GitHub → github.com/yourusername</div>
        <div>LinkedIn → linkedin.com/in/yourusername</div>
    `
};


if (input) {

    input.addEventListener("keydown", function(event) {

        if (event.key !== "Enter") {
            return;
        }

        const command = input.value.trim().toLowerCase();

        if (!command) {
            return;
        }

        const commandLine = document.createElement("div");

        commandLine.classList.add("terminal-line");

        commandLine.innerHTML = `
            <span class="prompt">hamza@cybersec:~$</span>
            <span class="terminal-command">${command}</span>
        `;

        output.appendChild(commandLine);

        if (command === "clear") {
            output.innerHTML = "";
            input.value = "";
            return;
        }

        if (commands[command]) {

            const result = document.createElement("div");

            result.classList.add("terminal-line");

            result.innerHTML = commands[command]();

            output.appendChild(result);

        } else {

            const error = document.createElement("div");

            error.classList.add("terminal-error");

            error.innerHTML =
                `bash: ${command}: command not found`;

            output.appendChild(error);
        }

        input.value = "";

        const terminalBody =
            document.querySelector(".terminal-body");

        terminalBody.scrollTop =
            terminalBody.scrollHeight;

    });

}

document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("terminal-input");
    const output = document.getElementById("terminal-output");
    const terminalBody = document.getElementById("terminal-body");

    if (!input || !output) {
        console.error("Terminal elements not found.");
        return;
    }

    const commands = {

        help: `
            <div class="terminal-info">Available commands:</div>
            <div>whoami      → Identity</div>
            <div>about       → About me</div>
            <div>skills      → Technical skills</div>
            <div>projects    → My projects</div>
            <div>interests   → Current interests</div>
            <div>education   → Education</div>
            <div>mission     → My mission</div>
            <div>contact     → Contact information</div>
            <div>clear       → Clear terminal</div>
        `,

        whoami: `
            <div class="terminal-success">
                hamza-boulaamane
            </div>
            <div>Cybersecurity Student</div>
        `,

        about: `
            <div class="terminal-info">Name:</div>
            <div>Hamza Boulaamane</div>

            <br>

            <div class="terminal-info">Role:</div>
            <div>Cybersecurity Student</div>

            <br>

            <div class="terminal-info">Focus:</div>
            <div>Artificial Intelligence</div>
            <div>Machine Learning</div>
            <div>Defensive Security</div>
        `,

        skills: `
            <div class="terminal-info">Technical Skills:</div>
            <div class="terminal-success">[✓] Python</div>
            <div class="terminal-success">[✓] Machine Learning</div>
            <div class="terminal-success">[✓] Cybersecurity</div>
            <div class="terminal-success">[✓] Flask</div>
            <div class="terminal-success">[✓] SQL</div>
            <div class="terminal-success">[✓] Git / GitHub</div>
            <div class="terminal-success">[✓] Malware Detection</div>
        `,

        projects: `
            <div class="terminal-info">Featured Projects:</div>

            <br>

            <div>
                <span class="terminal-success">01.</span>
                ML-Based Malware Detection
            </div>

            <div>
                <span class="terminal-success">02.</span>
                PhishGuard-AI
            </div>

            <div>
                <span class="terminal-success">03.</span>
                FraudShield-AI
            </div>
        `,

        interests: `
            <div class="terminal-info">Current Interests:</div>

            <div>→ Malware Analysis</div>
            <div>→ Fraud Detection</div>
            <div>→ Phishing Detection</div>
            <div>→ Network Security</div>
            <div>→ Threat Intelligence</div>
            <div>→ AI & Machine Learning</div>
        `,

        education: `
            <div class="terminal-info">Education:</div>

            <br>

            <div>
                Computer Science / Applied Computer Science
            </div>

            <div>
                Focus: Cybersecurity
            </div>
        `,

        mission: `
            <div class="terminal-info">Mission:</div>

            <div>
                Building intelligent cybersecurity
            </div>

            <div>
                solutions capable of detecting
            </div>

            <div>
                modern cyber threats.
            </div>
        `,

        contact: `
            <div class="terminal-info">Contact:</div>

            <div>Email → your@email.com</div>
            <div>GitHub → github.com/yourusername</div>
            <div>LinkedIn → linkedin.com/in/yourusername</div>
        `
    };


    input.addEventListener("keydown", function(event) {

        if (event.key !== "Enter") {
            return;
        }

        const command = input.value.trim().toLowerCase();

        if (command === "") {
            return;
        }


        // Display typed command
        const commandLine = document.createElement("div");

        commandLine.className = "terminal-line";

        commandLine.innerHTML = `
            <span class="prompt">hamza@cybersec:~$</span>
            <span class="terminal-command">${command}</span>
        `;

        output.appendChild(commandLine);


        // Clear terminal
        if (command === "clear") {

            output.innerHTML = `
                <div class="terminal-success">
                    Terminal cleared.
                </div>
                <br>
            `;

            input.value = "";
            return;
        }


        // Execute command
        if (commands[command]) {

            const result = document.createElement("div");

            result.className = "terminal-line";

            result.innerHTML = commands[command];

            output.appendChild(result);

        } else {

            const error = document.createElement("div");

            error.className = "terminal-error";

            error.innerHTML =
                `bash: ${command}: command not found`;

            output.appendChild(error);
        }


        // Clear input
        input.value = "";


        // Scroll terminal
        terminalBody.scrollTop = terminalBody.scrollHeight;

    });


    // Automatically focus terminal
    input.focus();

});

(function () {

    const canvas = document.getElementById("cyber-canvas");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const hero = document.querySelector(".hero");

    if (!hero) return;

    let width;
    let height;
    let dpr;

    let nodes = [];
    let packets = [];

    const mouse = {
        x: null,
        y: null,
        active: false
    };

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    const NODE_COLOR = "#06b6d4";

    const NODE_GLOW =
        "rgba(6, 182, 212, 0.9)";

    const LINE_COLOR =
        "rgba(34, 197, 94, 0.55)";

    const PACKET_COLOR = "#22c55e";

    const LINK_DIST = 150;

    const MOUSE_RADIUS = 160;


    /* ===============================
       RESIZE
       =============================== */

    function resize() {

        dpr = Math.min(
            window.devicePixelRatio || 1,
            2
        );

        width = hero.clientWidth;

        height = hero.clientHeight;

        canvas.width = width * dpr;

        canvas.height = height * dpr;

        canvas.style.width = width + "px";

        canvas.style.height = height + "px";

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

        initNodes();
    }


    /* ===============================
       CREATE NETWORK NODES
       =============================== */

    function initNodes() {

        const density = 9000;

        const count = Math.max(
            20,
            Math.min(
                90,
                Math.floor(
                    (width * height) / density
                )
            )
        );

        nodes = [];

        for (let i = 0; i < count; i++) {

            nodes.push({

                x: Math.random() * width,

                y: Math.random() * height,

                vx:
                    (Math.random() - 0.5) *
                    0.25,

                vy:
                    (Math.random() - 0.5) *
                    0.25,

                r:
                    Math.random() * 1.4 +
                    1.2

            });

        }
    }


    /* ===============================
       CREATE DATA PACKETS
       =============================== */

    function maybeSpawnPacket() {

        if (nodes.length < 2) return;

        if (Math.random() > 0.02) return;

        const a =
            nodes[
                Math.floor(
                    Math.random() *
                    nodes.length
                )
            ];

        let closest = null;

        let closestDist = Infinity;

        for (const b of nodes) {

            if (b === a) continue;

            const distance =
                Math.hypot(
                    a.x - b.x,
                    a.y - b.y
                );

            if (
                distance < LINK_DIST &&
                distance < closestDist
            ) {

                closestDist = distance;

                closest = b;
            }
        }

        if (closest) {

            packets.push({

                a: a,

                b: closest,

                t: 0,

                speed:
                    0.012 +
                    Math.random() *
                    0.012

            });
        }
    }


    /* ===============================
       UPDATE
       =============================== */

    function step() {

        for (const node of nodes) {

            node.x += node.vx;

            node.y += node.vy;


            /* Bounce from edges */

            if (
                node.x < 0 ||
                node.x > width
            ) {

                node.vx *= -1;
            }

            if (
                node.y < 0 ||
                node.y > height
            ) {

                node.vy *= -1;
            }


            /* Mouse interaction */

            if (mouse.active) {

                const dx =
                    node.x - mouse.x;

                const dy =
                    node.y - mouse.y;

                const distance =
                    Math.hypot(dx, dy);

                if (
                    distance < MOUSE_RADIUS &&
                    distance > 0.01
                ) {

                    const force =
                        (1 -
                            distance /
                                MOUSE_RADIUS) *
                        0.6;

                    node.x +=
                        (dx / distance) *
                        force;

                    node.y +=
                        (dy / distance) *
                        force;
                }
            }
        }


        /* Update packets */

        packets =
            packets.filter(
                packet =>
                    packet.t < 1
            );

        for (const packet of packets) {

            packet.t += packet.speed;
        }

        maybeSpawnPacket();
    }


    /* ===============================
       DRAW
       =============================== */

    function draw() {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        /* ---------------------------
           NETWORK CONNECTIONS
           --------------------------- */

        for (
            let i = 0;
            i < nodes.length;
            i++
        ) {

            for (
                let j = i + 1;
                j < nodes.length;
                j++
            ) {

                const a = nodes[i];

                const b = nodes[j];

                const distance =
                    Math.hypot(
                        a.x - b.x,
                        a.y - b.y
                    );

                if (
                    distance < LINK_DIST
                ) {

                    ctx.globalAlpha =
                        (1 -
                            distance /
                                LINK_DIST) *
                        0.5;

                    ctx.strokeStyle =
                        LINE_COLOR;

                    ctx.lineWidth = 1;

                    ctx.beginPath();

                    ctx.moveTo(
                        a.x,
                        a.y
                    );

                    ctx.lineTo(
                        b.x,
                        b.y
                    );

                    ctx.stroke();
                }
            }
        }

        ctx.globalAlpha = 1;


        /* ---------------------------
           NETWORK NODES
           --------------------------- */

        for (const node of nodes) {

            ctx.beginPath();

            ctx.fillStyle =
                NODE_COLOR;

            ctx.shadowColor =
                NODE_GLOW;

            ctx.shadowBlur = 6;

            ctx.arc(
                node.x,
                node.y,
                node.r,
                0,
                Math.PI * 2
            );

            ctx.fill();
        }

        ctx.shadowBlur = 0;


        /* ---------------------------
           DATA PACKETS
           --------------------------- */

        for (const packet of packets) {

            const x =
                packet.a.x +
                (packet.b.x -
                    packet.a.x) *
                    packet.t;

            const y =
                packet.a.y +
                (packet.b.y -
                    packet.a.y) *
                    packet.t;

            const alpha =
                Math.sin(
                    packet.t *
                        Math.PI
                );

            ctx.beginPath();

            ctx.fillStyle =
                PACKET_COLOR;

            ctx.shadowColor =
                PACKET_COLOR;

            ctx.shadowBlur = 8;

            ctx.globalAlpha =
                alpha;

            ctx.arc(
                x,
                y,
                2.2,
                0,
                Math.PI * 2
            );

            ctx.fill();

            ctx.globalAlpha = 1;
        }

        ctx.shadowBlur = 0;
    }


    /* ===============================
       ANIMATION LOOP
       =============================== */

    function loop() {

        step();

        draw();

        requestAnimationFrame(loop);
    }


    /* ===============================
       MOUSE
       =============================== */

    hero.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                hero.getBoundingClientRect();

            mouse.x =
                event.clientX -
                rect.left;

            mouse.y =
                event.clientY -
                rect.top;

            mouse.active = true;
        }
    );


    hero.addEventListener(
        "mouseleave",
        function () {

            mouse.active = false;
        }
    );


    /* ===============================
       INITIALIZE
       =============================== */

    window.addEventListener(
        "resize",
        resize
    );

    resize();


    if (prefersReducedMotion) {

        draw();

    } else {

        loop();
    }

})();
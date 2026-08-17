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
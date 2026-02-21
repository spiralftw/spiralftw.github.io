async function initBackground() {
    await loadSlim(tsParticles);

    await tsParticles.load("tsparticles", {
        fpsLimit: 120,
        particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: ["#4831d4", "#a100ff", "#ff007f"] },
            shape: { type: "circle" },
            opacity: {
                value: { min: 0.5, max: 0.9 },
                animation: { enable: true, speed: 1, sync: false }
            },
            size: { value: { min: 3, max: 6 } },
            // --- THIS SECTION CREATES THE GLOW ---
            shadow: {
                enable: true,
                color: "random",
                blur: 15
            },
            // -------------------------------------
            move: {
                enable: true,
                speed: 0.7,
                direction: "none",
                outModes: { default: "out" }
            }
        },
        interactivity: {
            events: { onHover: { enable: true, mode: "bubble" } },
            modes: { bubble: { distance: 200, size: 12, duration: 0.3, opacity: 1 } }
        }
    });

    document.addEventListener("mousemove", (e) => {
        const title = document.querySelector(".intro-title");
        if (!title) return;

        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        title.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });

    const words = [
        "Bachelor of Science, Computer Science",
        "Master's Student, Computer Science",
        "Cybersecurity Enthusiast",
        "TammerSec Organizer",
        "Cyber Compliance Developer"
    ];
    let index = 0;
    const flipper = document.getElementById("text-flipper");

    function rotateText() {
        if (!flipper) return;

        // 1. Slide out
        flipper.classList.add("flip-out");

        setTimeout(() => {
            // 2. Change text
            index = (index + 1) % words.length;
            flipper.textContent = words[index];

            // 3. Prepare slide in
            flipper.classList.remove("flip-out");
            flipper.classList.add("flip-in");

            // 4. Remove class after a tiny delay so the animation runs
            setTimeout(() => flipper.classList.remove("flip-in"), 50);
        }, 400); // Matches CSS transition time
    }

    setInterval(rotateText, 3000);
}

document.querySelectorAll(".glass-link").forEach((link) => {
    link.addEventListener("mousemove", (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const dx = x - xc;
        const dy = y - yc;

        link.style.transform = `translateY(-5px) rotateX(${-dy / 10}deg) rotateY(${dx / 10}deg)`;
    });

    link.addEventListener("mouseleave", () => {
        link.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    });
});

initBackground();
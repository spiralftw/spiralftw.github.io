const flipper = document.getElementById("text-flipper");
const words = [
    "Bachelor of Science, Computer Science",
    "Master's Student, Computer Science",
    "Cybersecurity Enthusiast",
    "TammerSec Organizer"
];

if (flipper && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let index = 0;

    setInterval(() => {
        flipper.classList.add("flip-out");

        setTimeout(() => {
            index = (index + 1) % words.length;
            flipper.textContent = words[index];
            flipper.classList.remove("flip-out");
            flipper.classList.add("flip-in");
            setTimeout(() => flipper.classList.remove("flip-in"), 50);
        }, 400);
    }, 3000);
}

const revealTargets = [...document.querySelectorAll(".rmx__step, .scroll-reveal")];

if (revealTargets.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach((target) => target.classList.add("scroll-reveal"));
    document.body.classList.add("reveal-ready");

    function revealVisibleItems() {
        const revealLine = window.innerHeight * 0.88;

        revealTargets.forEach((target) => {
            if (target.getBoundingClientRect().top < revealLine) {
                target.classList.add("is-visible");
            }
        });

        if (revealTargets.every((target) => target.classList.contains("is-visible"))) {
            window.removeEventListener("scroll", revealVisibleItems);
            window.removeEventListener("resize", revealVisibleItems);
        }
    }

    window.addEventListener("scroll", revealVisibleItems, { passive: true });
    window.addEventListener("resize", revealVisibleItems);
    revealVisibleItems();
}
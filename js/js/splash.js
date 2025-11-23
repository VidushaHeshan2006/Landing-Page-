document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash-screen");
    const main = document.getElementById("main-content");

    setTimeout(() => {
        splash.style.opacity = "0";

        setTimeout(() => {
            splash.style.display = "none";
            main.style.opacity = "1";
        }, 300);
    }, 900);
});
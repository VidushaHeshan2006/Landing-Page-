<<<<<<< HEAD
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
=======
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
>>>>>>> d75e7a4a9fefbebdc8c52d8b176447761664cbda
});
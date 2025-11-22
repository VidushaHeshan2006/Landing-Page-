// Scroll animation
const elements = document.querySelectorAll(".fade");

function checkFade() {
  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}
// Scroll animation for Mission & Vision
const missionCards = document.querySelectorAll('.mission-vision-section .card');

function revealMissionVision() {
  missionCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealMissionVision);
window.onload = revealMissionVision;

window.addEventListener("scroll", checkFade);
window.onload = checkFade;

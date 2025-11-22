// =========================
// SHOW / HIDE COMPARISON
// =========================
const toggle = document.getElementById("compareToggle");
const comparisonSection = document.getElementById("comparisonTable");

toggle.addEventListener("change", () => {
  comparisonSection.style.display = toggle.checked ? "block" : "none";
});



// CARD HIGHLIGHT SELECTOR

const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".select-btn");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    cards.forEach(card => card.classList.remove("selected"));
    cards[index].classList.add("selected");
  });
});

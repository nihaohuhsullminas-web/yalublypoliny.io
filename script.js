// Маленькие интерактивности для открытки 💌
document.addEventListener("DOMContentLoaded", () => {
  const surpriseButton = document.getElementById("surpriseButton");
  const surpriseMessage = document.getElementById("surpriseMessage");

  if (surpriseButton && surpriseMessage) {
    surpriseButton.addEventListener("click", () => {
      surpriseMessage.hidden = false;
      surpriseButton.textContent = "с любовью, полечка ♡";
      surpriseButton.disabled = true;
      burstHearts();
    });
  }


  const secretButton = document.getElementById("secretButton");
  const secretPassword = document.getElementById("secretPassword");
  const secretMessage = document.getElementById("secretMessage");
  const secretError = document.getElementById("secretError");
  if (secretButton && secretPassword && secretMessage && secretError) {
    secretButton.addEventListener("click", () => {
      if (secretPassword.value.trim().toLowerCase() === "любовь") {
        secretMessage.hidden = false;
        secretError.hidden = true;
        secretButton.textContent = "с любовью, полечка ♡";
        secretPassword.disabled = true;
        secretButton.disabled = true;
        burstHearts();
      } else {
        secretError.hidden = false;
        secretPassword.focus();
      }
    });
    secretPassword.addEventListener("keydown", (event) => {
      if (event.key === "Enter") secretButton.click();
    });
  }

  function burstHearts() {
    const symbols = ["♡", "♥", "🧡", "✦"];
    for (let i = 0; i < 24; i++) {
      const item = document.createElement("span");
      item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      item.style.cssText = `
        position: fixed; z-index: 20; left: ${Math.random() * 100}vw;
        bottom: -30px; color: ${Math.random() > .5 ? "#f47c35" : "#f3b18b"};
        font-size: ${14 + Math.random() * 24}px; pointer-events: none;
        animation: floatHeart ${3 + Math.random() * 3}s ease-out forwards;
      `;
      document.body.appendChild(item);
      setTimeout(() => item.remove(), 6500);
    }
  }

  const style = document.createElement("style");
  style.textContent = `@keyframes floatHeart {
    to { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
  }`;
  document.head.appendChild(style);
});

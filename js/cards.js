document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const overlay = document.querySelector(".overlay");

  overlay.style.display = "none";

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      const clonedCard = card.cloneNode(true);
      const zoomedCard = document.createElement("div");
      zoomedCard.classList.add("zoomed-card");

      zoomedCard.appendChild(clonedCard);

      overlay.innerHTML = "";
      overlay.appendChild(zoomedCard);
      overlay.style.display = "flex";

      setTimeout(() => {
        zoomedCard.classList.add("enlarged");
      }, 50);

      zoomedCard.addEventListener("click", (event) => {
        event.stopPropagation();
        zoomedCard.classList.toggle("flipped");
      });
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.style.display = "none";
    }
  });
});

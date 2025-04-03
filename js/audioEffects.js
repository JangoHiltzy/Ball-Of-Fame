document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const sounds = {
    bombers: new Audio("audio/bombers.mp3"),
    thieves: new Audio("audio/thieves.mp3"),
    cornerstones: new Audio("audio/cornerstones.mp3"),
    rangers: new Audio("audio/rangers.mp3"),
    flamethrowers: new Audio("audio/flamethrowers.mp3"),
    backstops: new Audio("audio/backstops.mp3"),
  };

  let currentSound = null;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");

      if (category && sounds[category]) {
        if (currentSound) {
          currentSound.pause();
          currentSound.currentTime = 0;
        }

        currentSound = sounds[category];

        currentSound
          .play()
          .catch((error) => console.error("Audio error:", error));
      }
    });
  });
});

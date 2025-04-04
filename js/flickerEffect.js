function flickerMainTitle() {
  const mainTitle = document.getElementById("main-title");

  const randomInterval = Math.floor(Math.random() * 4000) + 4000;

  setInterval(() => {
    mainTitle.style.animation = "none";
    void mainTitle.offsetWidth;
    mainTitle.style.animation = `flicker 0.6s ease-in-out`;
  }, randomInterval);
}

window.onload = flickerMainTitle;

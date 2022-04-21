// EVENT LISTENERS
const mobileHero = document.querySelector(".mobile-hero");
const mobileHamburger = document.querySelector(".nav-hamburger");
const mobileMenu = document.querySelector(".nav-menu");

// CHANGE BACKGROUND URL ON MOBILE MENU
window.onload = function () {
  mobileHero && slideBackground();
};

const slideBackground = () => {
  let count = 0;
  setInterval(() => {
    count = (count + 1) % 3;
    const backgroundStyle = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('./src/img/mobile-bg-${count}.jpg')`;
    mobileHero.style.background = backgroundStyle;
    mobileHero.style.backgroundPosition = "center";
    mobileHero.style.backgroundRepeat = "no-repeat";
    mobileHero.style.backgroundSize = "cover";
  }, 3000);
};

// OPEN AND HIDE MOBILE MENU ON CLICK
mobileHamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

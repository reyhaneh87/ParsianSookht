$(document).ready(function () {
    const button_up = document.querySelector(".button-up");
  
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
  
      if (scrollY > 100) {
        button_up.classList.add("animation-button-up");
      } else {
        button_up.classList.remove("animation-button-up");
      }
    });
});
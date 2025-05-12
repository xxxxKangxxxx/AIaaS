// script.js
const screens = document.querySelectorAll(".screen");
let current = 0;

setInterval(() => {
  screens[current].classList.remove("active");

  if (screens[current].classList.contains("scroll-screen")) {
    screens[current].style.animation = "none";
    screens[current].offsetHeight; // reflow
    screens[current].style.animation = null;
  }

  current = (current + 1) % screens.length;
  screens[current].classList.add("active");
}, 5000);

// ✅ header-scroll.js
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ✅ scroll-animation.js
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // 한 번만 보여지도록
      }
    });
  });

  document.querySelectorAll('.scroll-fade-in, .scroll-fade-up').forEach(el => {
    observer.observe(el);
  });
});

// // ✅ screen-slider.js
// const screens = document.querySelectorAll(".screen-carousel .screen");
// let currentIndex = 0;

// setInterval(() => {
//   screens[currentIndex].classList.remove("active");
//   currentIndex = (currentIndex + 1) % screens.length;
//   screens[currentIndex].classList.add("active");
// }, 3000);
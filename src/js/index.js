  // Burger menus
  document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

// Initialization for ES Users
// import {
//     Carousel,
//     initTE,
//   } from "../../node_modules/tw-elements/dist/plugin.cjs"; //tw-elements
  
//   initTE({ Carousel });

  const carousel = document.querySelector(".media-scroller");

  let isDragStart = false, prevPageX, prevScrollLeft;

  const dragStart = (e) => {
      isDragStart = true;
      prevPageX = e.pageX;
      prevScrollLeft = carousel.scrollLeft;
  }

  const dragging = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      let positionDiff = e.pageX -prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
  }

  const dragStop = () => {
      isDragStart = false;
  }

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  carousel.addEventListener("mouseup", dragStop);



  
  const slidesContainer = document.querySelector(".slides-container");
  const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  
  nextButton.addEventListener("click", () => {
    slidesContainer.scrollLeft += slideWidth;
  });
  
  prevButton.addEventListener("click", () => {
    slidesContainer.scrollLeft -= slideWidth;
  });


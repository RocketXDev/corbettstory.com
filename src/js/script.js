window.addEventListener('DOMContentLoaded', () => {

  let map;

  window.onload = async function initMap() {
    // The location of Uluru
    const position = { lat: 48.231686, lng: -101.275500 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
      zoom: 14,
      center: position,
      mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Uluru",
    });
  }

  // Home button functionality
  const mainLogo = document.querySelector('.title');

  if (document.querySelector('.advertisment-section')) {
      mainLogo.addEventListener('click', () => {
        window.location="../index.html"
      })
  } else {
    mainLogo.addEventListener('click', () => {
        window.location="./index.html"
      })
  }

  // Hamburger functionality

  if (window.matchMedia("(max-width: 1299px)").matches) {
    
    const menu = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav.mobile');

    menu.addEventListener('click', () => {
      menu.classList.toggle('active');
      nav.classList.toggle('active');
    })
  }

  if (window.matchMedia("(min-width: 1300px)").matches) {
    const wrapper = document.querySelector('.process-wrapper');
    const carousel = wrapper.querySelector('.carousel');
    const btnPrev = wrapper.querySelector('.prev');
    const btnNext = wrapper.querySelector('.next');

    // Scroll one image left/right
    function scrollNext() {
      // If at the end → go back to start
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
      }
    }

    function scrollPrev() {
      // If at the start → go to the end
      if (carousel.scrollLeft <= 5) {
        carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
      }
    }

    btnPrev.addEventListener('click', scrollPrev);
    btnNext.addEventListener('click', scrollNext);

    // ----- AUTO SCROLL -----
    let autoScrollDelay = 6000; // 4 seconds
    let autoScroll;

    function startAutoScroll() {
      autoScroll = setInterval(scrollNext, autoScrollDelay);
    }

    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    // Start on load
    startAutoScroll();

    // Pause autoscroll when user interacts
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);
    carousel.addEventListener('touchstart', stopAutoScroll);
    carousel.addEventListener('touchend', startAutoScroll);
  }



});

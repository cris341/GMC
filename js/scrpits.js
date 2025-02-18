function toggleMenu(element) {
  // Buscar el contenido con el ID específico dentro del elemento clickeado
  const menu = element.querySelector("#menu");

  if (menu) {
    // Alternar visibilidad del menú
    menu.classList.toggle("hidden");

    // Aplicar transición suave
    if (!menu.classList.contains("hidden")) {
      // Si el menú está visible, usar una altura automática para mostrarlo suavemente
      menu.style.maxHeight = menu.scrollHeight + "px";
    } else {
      // Si el menú está oculto, ocultarlo suavemente
      menu.style.maxHeight = "0";
    }
  } else {
    console.error("No se encontró el elemento con ID menu");
  }
}

let currentIndex = 0;
function updateCarousel(type, num) {
  // const parents = thiElement.parentElement
  // console.log(parents);

  const carousel = document.getElementById("carousel-" + num);
  const totalSlides = document.querySelectorAll(".carousel-item-" + num).length;

  if (type == "nextBtn") {
    currentIndex = (currentIndex + 1) % totalSlides; // Avanzar al siguiente slide
    // updateCarousel();
  } else if (type == "prevBtn") {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Retroceder al slide anterior
    // updateCarousel();
  }

  const translateXValue = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateXValue}%)`;
}

function openModal(name, img) {
  // Actualizar el título del modal
  document.querySelector("#modal h2").textContent = name;

  // Actualizar la imagen del modal
  document.querySelector("#modal img").src = img;

  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function menuToggle(type) {
  mobileMenu.classList.toggle(type);
}

function menuToggle(show) {
  console.log("ejecuto la funicon");

  const mobileMenu = document.getElementById("mobile-menu");
  if (show) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
}



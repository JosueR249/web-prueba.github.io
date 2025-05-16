//================ BARRA NAVEGACION AUTOESCONDERSE =====================================================================

const navbar = document.getElementById("navbar");
const contactBtn = document.getElementById("maincontact");
let lastScroll = 0;
let isPastButton = false;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const btnRect = contactBtn.getBoundingClientRect();

  // 1. Verificar si hemos pasado el botón (su posición Y relativa al viewport)
  isPastButton = btnRect.top < 300; // Cuando el botón ya no es visible (pasó hacia arriba)

  // 2. Comportamiento basado en dirección
  if (currentScroll <= 0) {
    // Top de la página -> mostrar
    navbar.classList.remove("hide");
  } else if (currentScroll < lastScroll) {
    // Scroll hacia ARRIBA -> mostrar
    navbar.classList.remove("hide");
  } else if (isPastButton && currentScroll > lastScroll) {
    // Scroll hacia ABAJO + ya pasamos el botón -> ocultar
    navbar.classList.add("hide");
  }

  lastScroll = currentScroll;
});

//======================= RESPONSIVE NAVBAR =================================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");

  // Crear elemento "X" (lo mantenemos en el DOM pero oculto inicialmente)
  const closeIcon = document.createElement("i");
  closeIcon.className = "fas fa-times";
  closeIcon.style.display = "none";
  hamburger.appendChild(closeIcon);

  hamburger.addEventListener("click", function () {
    const barsIcon = hamburger.querySelector(".fa-bars");
    const timesIcon = hamburger.querySelector(".fa-times");

    navbar.classList.toggle("mobile-open");

    if (navbar.classList.contains("mobile-open")) {
      barsIcon.style.display = "none";
      timesIcon.style.display = "block";
    } else {
      barsIcon.style.display = "block";
      timesIcon.style.display = "none";
    }
  });
});
// navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  // Detecta la profundidad de la carpeta actual
  const depth = window.location.pathname.split("/").length - 2; 
  let prefix = "";
  for (let i = 0; i < depth; i++) prefix += "../";

  navbar.innerHTML = `
    <div class="nav-logo">
      <a href="${prefix}index.html">
        <img class="logo1" src="${prefix}images/Logo.jpeg" alt="Logo de Yes Reset" />
      </a>
    </div>
    <div class="nav-left">
      <ul class="nav-links">
        <li><a href="${prefix}index.html#hero">Inicio</a></li>
        <li><a href="${prefix}index.html#productos-nuevos">Productos</a></li>
        <li><a href="${prefix}servicio.html">Servicios</a></li>
        <li><a href="${prefix}accesorios/index.html">Accesorios</a></li>       
        <li><a href="${prefix}index.html#contacto">Contacto</a></li>
      </ul>
      <button class="hamburger" aria-label="Abrir menú">&#9776;</button>
      <div class="cart" aria-label="Carrito de compras"></div>
    </div>
  `;

  // Menú hamburguesa
  const hamburger = navbar.querySelector('.hamburger');
  const navLinks = navbar.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});

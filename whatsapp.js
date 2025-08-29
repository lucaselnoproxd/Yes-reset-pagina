// whatsapp.js

document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los botones de compra
  const botonesComprar = document.querySelectorAll('.btn-primary');

  botonesComprar.forEach(boton => {
    boton.addEventListener('click', (e) => {
      e.preventDefault(); // Evita que se abra el link por defecto

      let producto = "";

      // 1️⃣ Primero, intentamos tomar el producto del atributo data-producto
      if (boton.dataset.producto) {
        producto = boton.dataset.producto.trim();
      } else {
        // 2️⃣ Si no hay data-producto, buscamos el título en hero-product
        const heroProduct = boton.closest('.hero-product');
        if (heroProduct) {
          const titulo = heroProduct.querySelector('.hero-title');
          if (titulo) producto = titulo.innerText.trim();
        }

        // 3️⃣ Si aún no encontramos nombre, buscamos el título global
        if (!producto) {
          const tituloGlobal = document.querySelector('.hero-title');
          if (tituloGlobal) producto = tituloGlobal.innerText.trim();
        }
      }

      // Si no se encuentra título, usamos un nombre genérico
      if (!producto) producto = "el producto";

      // Número de WhatsApp (sin + ni espacios)
      const numeroWA = "5491159293444";

      // Mensaje personalizado
      const mensaje = `Hola, vengo por ${producto}. ¿Aún está disponible?`;

      // Codificamos el mensaje para URL
      const mensajeCodificado = encodeURIComponent(mensaje);

      // Creamos el link de WhatsApp
      const urlWA = `https://wa.me/${numeroWA}?text=${mensajeCodificado}`;

      // Abrimos WhatsApp en una nueva pestaña
      window.open(urlWA, '_blank');
    });
  });
});

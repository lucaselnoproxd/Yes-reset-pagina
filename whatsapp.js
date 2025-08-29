// whatsapp.js

document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los botones de compra
  const botonesComprar = document.querySelectorAll('.btn-primary');

  botonesComprar.forEach(boton => {
    boton.addEventListener('click', (e) => {
      e.preventDefault(); // Evita que se abra el link por defecto

      // Intentamos tomar el nombre del producto
      let producto = "";

      // Buscamos un título dentro de la sección hero-product
      const heroProduct = boton.closest('.hero-product');
      if (heroProduct) {
        const titulo = heroProduct.querySelector('.hero-title');
        if (titulo) producto = titulo.innerText.trim();
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

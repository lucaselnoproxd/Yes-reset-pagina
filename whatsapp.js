// whatsapp.js
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los botones de compra
  const botonesComprar = document.querySelectorAll('.btn-primary');

  botonesComprar.forEach(boton => {
    boton.addEventListener('click', (e) => {
      e.preventDefault(); // Evita que se abra el link por defecto

      let producto = "el producto"; // valor por defecto

      // Buscamos el título dentro de la sección hero
      const hero = boton.closest('.hero') || document;
      const titulo = hero.querySelector('.hero-title');
      if (titulo && titulo.innerText.trim() !== "") {
        producto = titulo.innerText.trim();
      }

      // Número de WhatsApp
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

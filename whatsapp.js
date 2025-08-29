// whatsapp.js
document.addEventListener("DOMContentLoaded", () => {
  // Número de WhatsApp
  const numeroWA = "5491159293444";

  // Tomamos el título del producto (primer h1.hero-title)
  const titulo = document.querySelector('.hero-title');
  const nombreProducto = titulo ? titulo.innerText.trim() : "el producto";

  // Seleccionamos todos los botones de compra
  const botonesComprar = document.querySelectorAll('.btn-primary');

  botonesComprar.forEach(boton => {
    boton.addEventListener('click', (e) => {
      e.preventDefault(); // Evita que se abra el link por defecto

      // Creamos el mensaje
      const mensaje = `Hola, vengo por ${nombreProducto}. ¿Aún está disponible?`;

      // Codificamos el mensaje para URL
      const mensajeCodificado = encodeURIComponent(mensaje);

      // Creamos el link de WhatsApp
      const urlWA = `https://wa.me/${numeroWA}?text=${mensajeCodificado}`;

      // Abrimos WhatsApp en una nueva pestaña
      window.open(urlWA, '_blank');
    });
  });
});

// whatsapp.js
document.addEventListener("DOMContentLoaded", () => {
  const numeroWA = "5491159293444";

  // Seleccionamos todos los botones de compra
  const botonesComprar = document.querySelectorAll('.btn-primary');

  botonesComprar.forEach(boton => {
    boton.addEventListener('click', (e) => {
      e.preventDefault(); // Evita que se abra el link por defecto

      let nombreProducto = "el producto";

      // Buscamos el contenedor padre que tenga la clase 'hero' o 'hero-product'
      const contenedorHero = boton.closest('.hero') || boton.closest('.hero-product');

      if (contenedorHero) {
        // Dentro de ese contenedor, buscamos el título del producto
        const titulo = contenedorHero.querySelector('.hero-title');
        if (titulo && titulo.innerText.trim()) {
          nombreProducto = titulo.innerText.trim();
        }
      }

      // Creamos el mensaje personalizado
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

//WQAAAOS
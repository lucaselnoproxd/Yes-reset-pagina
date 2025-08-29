// rotador.js

document.addEventListener("DOMContentLoaded", () => {
  const imgCelular = document.getElementById("hero-img-celular");
  if (!imgCelular) return;

  // Tomamos las rutas de las imágenes desde el atributo data-images
  const images = imgCelular.dataset.images.split(",").map(src => src.trim());
  if (images.length === 0) return;

  let index = 0;

  // Función para cambiar la imagen
  const cambiarImagen = () => {
    index = (index + 1) % images.length;
    imgCelular.style.opacity = 0;

    // Pequeña transición
    setTimeout(() => {
      imgCelular.src = images[index];
      imgCelular.style.opacity = 1;
    }, 300);
  };

  // Cambiar cada 5 segundos
  setInterval(cambiarImagen, 5000);
});

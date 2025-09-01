// rotador.js

document.addEventListener("DOMContentLoaded", () => {
  const imgCelular = document.getElementById("hero-img-celular");
  if (!imgCelular) return;

  const images = imgCelular.dataset.images.split(",").map(src => src.trim());
  if (images.length === 0) return;

  let index = 0;

  // Estilos iniciales para animación 3D
  imgCelular.style.transition = "transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.8s ease";
  imgCelular.style.transformOrigin = "center center";
  imgCelular.style.display = "block";
  imgCelular.style.willChange = "transform, opacity";

  const cambiarImagen = () => {
    index = (index + 1) % images.length;

    // Animación de salida
    imgCelular.style.transform = "rotateY(90deg) scale(0.7)";
    imgCelular.style.opacity = "0";

    setTimeout(() => {
      // Cambio de imagen
      imgCelular.src = images[index];

      // Animación de entrada
      imgCelular.style.transform = "rotateY(0deg) scale(1)";
      imgCelular.style.opacity = "1";
    }, 400);
  };

  setInterval(cambiarImagen, 3000);
});

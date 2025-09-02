document.addEventListener("DOMContentLoaded", () => {

  // Menú hamburguesa
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('show'));

  // Datos de productos nuevos
  const productosNuevos = [
    {
      nombre: "iPhone 16 Series",
      img: "images/Iphone nuevos/iPHONE 16.png",
      enlaces: [
        { texto: "Normal", url: "iPHONES NUEVOS/iphone 16/normal/pagina.html" },
        { texto: "Plus", url: "iPHONES NUEVOS/iphone 16/plus/pagina.html" },
        { texto: "Pro", url: "iPHONES NUEVOS/iphone 16/pro/pagina.html" },
        { texto: "Pro Max", url: "iPHONES NUEVOS/iphone 16/pro max/pagina.html" }
      ]
    },
    {
      nombre: "iPhone SE (3ra generación)",
      img: "iPHONES NUEVOS/iphone 16/se/blanco.png",
      enlaces: [{ texto: "Más detalles...", url: "iPHONES NUEVOS/iphone 16/se/index.html" }]
    },
    {
      nombre: "iPhone 15 Series",
      img: "images/Iphone nuevos/iPHONE 15.png",
      enlaces: [
        { texto: "Normal", url: "iPHONES NUEVOS/iphone 15/normal/pagina.html" },
        { texto: "Plus", url: "iPHONES NUEVOS/iphone 15/plus/pagina.html" },
        { texto: "Pro", url: "iPHONES NUEVOS/iphone 15/pro/pagina.html" },
        { texto: "Pro Max", url: "iPHONES NUEVOS/iphone 15/pro max/pagina.html" }
      ]
    },
    {
      nombre: "iPhone 14 Series",
      img: "images/Iphone nuevos/iPHONE 14.png",
      enlaces: [
        { texto: "Normal", url: "iPHONES NUEVOS/iphone 14/normal/pagina.html" },
        { texto: "Plus", url: "iPHONES NUEVOS/iphone 14/plus/pagina.html" },
        { texto: "Pro", url: "iPHONES NUEVOS/iphone 14/pro/pagina.html" },
        { texto: "Pro Max", url: "iPHONES NUEVOS/iphone 14/pro max/pagina.html" }
      ]
    },
    {
      nombre: "iPhone 13 Series",
      img: "images/Iphone nuevos/iPHONE 13.png",
      enlaces: [
        { texto: "Mini", url: "iPHONES NUEVOS/iphone 13/phone mini/pagina.html" },
        { texto: "Normal", url: "iPHONES NUEVOS/iphone 13/phone normal/pagina.html" },
        { texto: "Pro", url: "iPHONES NUEVOS/iphone 13/phone pro/pagina.html" },
        { texto: "Pro Max", url: "iPHONES NUEVOS/iphone 13/phone pro max/pagina.html" }
      ]
    }
  ];

  // Datos de productos usados
  const productosUsados = [
    { nombre: "iPhone 14 Pro Max 128GB dorado", img: "images/Iphone/Iphone 14 pro max dorado.jpg", url: "./celulares/iphone_14_pro_max_dorado_128gb/index.html", estado: "detalles" },
    { nombre: "iPhone 13 128GB blanco", img: "images/Iphone/i13n.jpg", url: "./celulares/iphone_13_blanco_128gb/index.html", estado: "En Stock" },
    { nombre: "iPhone 11 128GB blanco", img: "images/Iphone/iphone 11 blanco.jpg", url: "./celulares/iphone_11_blanco_128gb/index.html", estado: "detalles" },
    { nombre: "iPhone 11 Pro 64GB dorado", img: "images/Iphone/iphone11 pro dorado.jpg", url: "./celulares/iphone_11_pro_dorado_64gb/", estado: "detalles" },
    { nombre: "iPhone 11 Pro 64GB blanco", img: "images/Iphone/iphone 11 pro  blanco.jpg", url: "./celulares/iphone_11_pro_blanco_64gb/", estado: "detalles" },
    { nombre: "iPhone 13 Pro 128GB blanco", img: "images/Iphone/i13p1.jpg", url: "./celulares/iphone_13_pro_blanco_128gb/", estado: "En Stock" },
    { nombre: "iPhone X 64GB blanco", img: "images/Iphone/Iphone X blanco.jpg", url: "./celulares/iphone_X_blanco_64gb/index.html", estado: "detalles" },
    { nombre: "iPhone XS 64GB blanco", img: "images/Iphone/Iphone xs blanco.jpg", url: "./celulares/iphone_XS_blanco_64gb/index.html", estado: "detalles" },
    { nombre: "iPhone XS 64GB dorado", img: "images/Iphone/iPHONE XS dorado.jpg", url: "./celulares/iphone_XS_dorado_64gb/index.html", estado: "detalles" },
    { nombre: "iPhone XS Max 64GB blanco", img: "images/Iphone/Iphone XS max.jpg", url: "./celulares/iphone_XSMax_blanco_64gb/index.html", estado: "detalles" },
    { nombre: "iPhone 11 64GB blanco", img: "images/Iphone/i11n.jpg", url: "./celulares/iphone_11_negro_128gb/index.html", estado: "En Stock" }
  ];

  // Función para crear cards
  function crearCard(producto, usado = false) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = producto.img;
    img.alt = producto.nombre;
    img.loading = "lazy";
    card.appendChild(img);

    const p = document.createElement("p");
    p.textContent = producto.nombre;
    card.appendChild(p);

    if (usado) {
      const btn = document.createElement("a");
      btn.textContent = producto.estado;
      btn.href = producto.url;
      btn.classList.add("btn-primary");
      card.appendChild(btn);
    } else {
      const ul = document.createElement("ul");
      producto.enlaces.forEach(enlace => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = enlace.url;
        a.innerHTML = `<u>${enlace.texto}</u>`;
        li.appendChild(a);
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }

    return card;
  }

  // Render productos nuevos
  const contenedorNuevos = document.getElementById("productos-nuevos");
  productosNuevos.forEach(prod => contenedorNuevos.appendChild(crearCard(prod)));

  // Render productos usados
  const contenedorUsados = document.getElementById("productos-usados");
  productosUsados.forEach(prod => contenedorUsados.appendChild(crearCard(prod, true)));

  // Colores dinámicos en botones
  document.querySelectorAll('.btn-primary').forEach(el => {
    const text = el.textContent.trim().toLowerCase();

    if (text === "en stock") {
      el.style.backgroundColor = "green";
      el.style.color = "white";
      el.addEventListener("mouseenter", () => el.style.backgroundColor = "#0d7a0d");
      el.addEventListener("mouseleave", () => el.style.backgroundColor = "green");

    } else if (text === "agotado") {
      el.style.backgroundColor = "red";
      el.style.color = "white";
      el.style.cursor = "not-allowed";
      el.addEventListener("click", e => e.preventDefault());
      el.addEventListener("mouseenter", () => el.style.backgroundColor = "#a40000");
      el.addEventListener("mouseleave", () => el.style.backgroundColor = "red");

    } else {
      el.style.backgroundColor = "black";
      el.style.color = "white";
      el.addEventListener("mouseenter", () => el.style.backgroundColor = "#333");
      el.addEventListener("mouseleave", () => el.style.backgroundColor = "black");
    }
  });

});

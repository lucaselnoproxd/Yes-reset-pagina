// social.js
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Detecta la profundidad de la carpeta actual
  const depth = window.location.pathname.split("/").length - 2; 
  let prefix = "";
  for (let i = 0; i < depth; i++) prefix += "../";

  const socialHTML = `
    <div class="social-float">
      <div class="social-links">
        <a href="https://wa.me/5491159293444" target="_blank" aria-label="WhatsApp">
          <img src="${prefix}images/wasap.png" alt="WhatsApp" />
        </a>
        <a href="prox.html" target="_blank" aria-label="Instagram">
          <img src="${prefix}images/ig.png" alt="Instagram" />
        </a>
        <a href="prox.html" target="_blank" aria-label="TikTok">
          <img src="${prefix}images/tiktok.png" alt="Tiktok" />
        </a>
        <a href="prox.html" target="_blank" aria-label="Facebook">
          <img src="${prefix}images/facebook.png" alt="Facebook" />
        </a>
        <a href="prox.html" target="_blank" aria-label="X (Twitter)">
          <img src="${prefix}images/X.webp" alt="X" />
        </a>
      </div>

      <label class="main-btn">
        <img src="${prefix}images/redes.png" alt="Menú redes sociales" />
      </label>
    </div>
  `;

  body.insertAdjacentHTML("beforeend", socialHTML);
});

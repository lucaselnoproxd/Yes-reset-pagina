// footer.js
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");

  footer.innerHTML = `
    <div class="footer-content">
      <div class="footer-col">
        <h4>Yes Reset</h4>
        <p>
          Oficina comercial:<br>
          Avenida Rivadavia 3600 Capital federal<br><br>
          Sucursal Almagro:<br>
          Avenida Diaz Velez 4010 Capital federal<br><br>
          linea de contacto: +54 911 592 9344 <br>
          yesreset.apple@gmail.com
        </p>
      </div>

      <div class="footer-col">
        <h4>Links útiles</h4>
        <ul>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contacto directo</h4>
        <form action="mailto:yesreset.apple@gmail.com" method="post" enctype="text/plain">
          <input type="text" name="nombre" placeholder="Tu nombre" required>
          <input type="text" name="asunto" placeholder="Asunto" required>
          <input type="email" name="email" placeholder="Tu correo" required>
          <textarea name="mensaje" rows="4" placeholder="Escribe tu mensaje..." required></textarea>
          <button type="submit">Enviar</button>
          <button type="reset">Limpiar</button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 Yes Reset - Todos los derechos reservados</p>
    </div>
  `;
});

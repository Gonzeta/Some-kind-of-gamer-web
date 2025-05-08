// Lista de imágenes y descripciones
const juegos = [
    { imagen: "IMG/juego1.jpg", titulo: "R.E.P.O", descripcion: "es una experiencia de horror en línea cooperativa que te mantendrá al borde del asiento, donde tú y hasta cinco compañeros se zambullen en lugares escalofriantes para buscar artefactos extraños para un benefacto", precio: "$5.79" },
    { imagen: "IMG/juego2.jpg", titulo: "Schedule 1", descripcion: "Desde un pequeño traficante de drogas hasta un capo, fabrica y distribuye una amplia gama de drogas por la desaliñada ciudad de Hyland Point. Expande tu imperio con propiedades, negocios, empleados y mucho más.", precio: "$10.49" },
    { imagen: "IMG/juego3.jpg", titulo: "Kingdome Come: Deliverance 2", descripcion: "Un emocionante RPG de acción con mucha narrativa y un exuberante mundo abierto situado en la Europa medieval del siglo XV. No te pierdas la aventura medieval definitiva donde vivirás un viaje de proporciones épicas de la mano del joven Henry", precio: "$44.99" }
];

let indiceActual = 0;

// Función para cambiar de juego en el carrusel
function cambiarSlide(direccion) {
    indiceActual += direccion;

    if (indiceActual >= juegos.length) {
        indiceActual = 0;
    } else if (indiceActual < 0) {
        indiceActual = juegos.length - 1;
    }

    document.getElementById("slide").src = juegos[indiceActual].imagen;
    document.getElementById("titulo-juego").innerText = juegos[indiceActual].titulo;
    document.getElementById("descripcion-juego").innerText = juegos[indiceActual].descripcion;
    document.querySelector(".precio").innerText = juegos[indiceActual].precio;
}

// Cambio automático cada 3 segundos
setInterval(() => cambiarSlide(1), 10000);



const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevenimos envío real por mailto

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      feedback.style.color = "orange";
      feedback.textContent = "Por favor, completá todos los campos.";
      return;
    }

    if (!validateEmail(email)) {
      feedback.style.color = "red";
      feedback.textContent = "El correo electrónico no es válido.";
      return;
    }

    // feedback positivo
    feedback.style.color = "limegreen";
    feedback.textContent = "¡Gracias por tu mensaje!";

    form.reset(); // borra el contenido
  });

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
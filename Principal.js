let indiceActual = 0;
const imagenes = document.querySelectorAll(".imagenes img");
const circulos = document.querySelectorAll(".circulo");

function mostrarImagen(n) {
    // Ocultar todas las imágenes
    imagenes.forEach(img => img.classList.remove("activa"));
    circulos.forEach(circ => circ.classList.remove("activo"));

    // Mostrar la imagen correspondiente
    imagenes[n].classList.add("activa");
    circulos[n].classList.add("activo");
}

// Cambiar imagen con flechas
function cambiarImagen(direccion) {
    indiceActual += direccion;

    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    } else if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }

    mostrarImagen(indiceActual);
}

// Ir a una imagen específica con los círculos
function irAImagen(n) {
    indiceActual = n;
    mostrarImagen(indiceActual);
}

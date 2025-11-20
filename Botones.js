// Función principal para cambiar los colores
function cambiarColores(colorFondo, colorTexto) {
    // 1. Obtener una referencia al elemento <body> del documento.
    const cuerpo = document.body;

    // 2. Aplicar el color de fondo.
    cuerpo.style.backgroundColor = colorFondo;

    // 3. Aplicar el color del texto.
    cuerpo.style.color = colorTexto;
}

// Nota: No se requiere código adicional aquí, ya que la función se llama
// directamente desde el atributo onclick de los botones en el HTML.
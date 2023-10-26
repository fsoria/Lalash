function updateCourseDetails() {
    var modalidadSelect = document.getElementById("modalidadSelect");
    var precioCurso = document.getElementById("precioCurso");

    var selectedModalidad = modalidadSelect.value;

    if (selectedModalidad === "semipresencial") {
        precioCurso.innerText = "$17.000";
        // Puedes actualizar otros detalles aquí.
    } else if (selectedModalidad === "personalizado") {
        precioCurso.innerText = "$30.000";
        // Puedes actualizar otros detalles aquí.
    }
}

function updateCourseDetails(courseNumber) {
    var modalidadSelect = document.getElementById("modalidadSelect" + courseNumber);
    var precioCurso = document.getElementById("precioCurso" + courseNumber);
    var estudiantesCurso = document.getElementById("estudiantesCurso" + courseNumber);

    var selectedModalidad = modalidadSelect.value;

    if (selectedModalidad === "semipresencial") {
        precioCurso.innerText = "$30.000";
        estudiantesCurso.innerText = "4 estudiantes";
    } else if (selectedModalidad === "personalizado") {
        precioCurso.innerText = "$45.000";
        estudiantesCurso.innerText = "1 estudiante";
    }
}

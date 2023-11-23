function updateCourseDetails(courseNumber) {
    var modalidadSelect = document.getElementById("modalidadSelect" + courseNumber);
    var precioCurso = document.getElementById("precioCurso" + courseNumber);
    var estudiantesCurso = document.getElementById("estudiantesCurso" + courseNumber);

    var selectedModalidad = modalidadSelect.value;

    if (courseNumber === 1) {
        if (selectedModalidad === "Personalizado") {
            precioCurso.innerText = "$60.000";
            estudiantesCurso.innerText = "1 estudiante";
        } else if (selectedModalidad === "Grupal") {
            precioCurso.innerText = "$45.000";
            estudiantesCurso.innerText = "5 estudiantes";
        }
        else if (selectedModalidad === "100% Online") {
        precioCurso.innerText = "$30.000";
        estudiantesCurso.innerText = "30 estudiantes";
        }
        
    } else if (courseNumber === 2) {
        if (selectedModalidad === "100% Online") {
            precioCurso.innerText = "$15.000";
            estudiantesCurso.innerText = "30 estudiantes"
        }
    }
    else if (courseNumber === 3) {
        if (selectedModalidad === "Presencial") {
            precioCurso.innerText = "$40.000";
            estudiantesCurso.innerText = "3 estudiantes";
        } else if (selectedModalidad === "Semipresencial") {
            precioCurso.innerText = "$32.000";
            estudiantesCurso.innerText = "3 estudiantes";
        }
        else if (selectedModalidad === "100% Online") {
        precioCurso.innerText = "$26.000";
        estudiantesCurso.innerText = "30 estudiantes";
        }
    }
    else if (courseNumber === 4) {
        if (selectedModalidad === "Grupal") {
            precioCurso.innerText = "$17.000";
            estudiantesCurso.innerText = "5 estudiantes"
        }
        else if (selectedModalidad === "Personalizado") {
            precioCurso.innerText = "$30.000";
            estudiantesCurso.innerText = "3 estudiantes";
        }
    }
}
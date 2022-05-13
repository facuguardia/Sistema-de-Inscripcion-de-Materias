//Este sistema te avisará si estas inscripto correctamente a la materia que elijas.
let materias = {
        fisica: ["Perez","Pedro","Pepito","Facu","Maria"],
        programacion: ["Guardia","Pedro","Juan","Pepito"],
        logica: ["Gonzalez","Pedro","Juan","Pepito","Facu","Maria"],
        quimica: ["Rodriguez","Pedro","Juan","Pepito","Facu","Maria"]
   }

const inscribir = (alumno,materia)=>{
    let personas = materias[materia];
    personas.shift();
    let alumnos = personas;
    if (alumno.length >= 20) {
           document.write (`Lo siento ${alumno}, las clases de ${materia} ya estan llenas`)
    }else {
        alumnos.push(alumno)
        if(materia == "fisica") {
            materias = {
                fisica: alumnos,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
           }
        }
        else if(materia == "programacion") {
            materias = {
                fisica: materias['fisica'],
                programacion: alumnos,
                logica: materias['logica'],
                quimica: materias['quimica']
           }
        }
        else if(materia == "logica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: alumnos,
                quimica: materias['quimica']
           }
        }
        else if(materia == "quimica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: alumnos
           }
        }
        document.write(`¡Felicidades <b style="color:red">${alumno}</b>! te has inscripto a <b style="color:red">${materia}</b> correctamente.`);
    }
}

(inscribir("Facu","programacion"))
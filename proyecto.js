let estudiante = {
    nombre: "",
    edad: 0,
    grado: "",
    curso: "",
    notas: []
};

// Registrar estudiante
function registrarEstudiante() {
    estudiante.nombre = document.getElementById("nombre").value;
    estudiante.edad = Number(document.getElementById("edad").value);
    estudiante.grado = document.getElementById("grado").value;
    estudiante.curso = document.getElementById("curso").value;

    // split → convertir texto a arreglo
    let textoNotas = document.getElementById("notas").value;
    estudiante.notas = textoNotas.split(",").map(n => Number(n));

    mostrarDatos();
}

// Calcular promedio
function calcularPromedio() {
    let suma = 0;

    for (let i = 0; i < estudiante.notas.length; i++) {
        suma += estudiante.notas[i];
    }

    return suma / estudiante.notas.length;
}

// Validar aprobación
function aprobo(promedio) {
    return promedio >= 61;
}

// Fecha actual
function obtenerFecha() {
    let fecha = new Date();
    return `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`;
}

// Mostrar datos
function mostrarDatos() {

    let promedio = calcularPromedio();
    let estado = aprobo(promedio);

    // STRING METHODS
    let nombreMayus = estudiante.nombre.toUpperCase();
    let posicion = estudiante.curso.indexOf("a");
    let subTexto = estudiante.curso.substring(0, 5);

    // ARRAY METHODS
    let notasTexto = estudiante.notas.join("-");

    document.getElementById("resultado").innerHTML = `
        <h3>Datos del Estudiante</h3>
        Nombre: ${nombreMayus} <br>
        Edad: ${estudiante.edad} <br>
        Grado: ${estudiante.grado} <br>
        Curso: ${estudiante.curso} <br>
        Notas: ${notasTexto} <br>
        Promedio: ${promedio.toFixed(2)} <br>
        Aprobado: ${estado} <br>
        Fecha: ${obtenerFecha()} <br><br>

        <b>Pruebas de texto:</b><br>
        substring: ${subTexto} <br>
        indexOf: ${posicion}
    `;
}

// push()
function agregarNota() {
    let nueva = Number(prompt("Ingrese nueva nota"));
    estudiante.notas.push(nueva);
    mostrarDatos();
}

// pop()
function eliminarNota() {
    estudiante.notas.pop();
    mostrarDatos();
}

// sort()
function ordenarNotas() {
    estudiante.notas.sort((a, b) => a - b);
    mostrarDatos();
}
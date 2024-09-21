//se solicita las 3 notas al usuario 
var nota1 = parseFloat(prompt("Ingresa la nota 1 (40%):"));
var nota2 = parseFloat(prompt("Ingresa la nota 2 (30%):"));
var nota3 = parseFloat(prompt("Ingresa la nota 3 (30%):"));

//se calcula el promedio
var promedio = (nota1 * 0.40) + (nota2 * 0.30) + (nota3 * 0.30);

//se muestra el promedio al usuario
alert("El promedio ponderado es: " + promedio);

//se muestra si reprueba, va a examen o se exime
if(promedio < 3.95) {
    alert("Has reprobado la asignatura.");
} else if(promedio >= 3.95 && promedio < 4.95) {
    alert("Tienes que ir a examen.");
} else {
    alert("Te has eximido de la asignatura.");
}

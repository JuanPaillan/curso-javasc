//se solicita al usuario que ingrese un numero
var numero = prompt("Ingresa un número:");

// Convertir el valor ingresado a un número
numero = parseInt(numero);

// Verificar si el número es par o impar
if (numero % 2 === 0) {
    alert(numero + " es un número par.");
} else {
    alert(numero + " es un número impar.");
}
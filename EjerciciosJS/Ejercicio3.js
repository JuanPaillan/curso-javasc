//variables iniciales
var numero = 500;
var sumatoria = 0;
var esPar = true; //para alternar entre sumar y restar

//bucle para calcular la sumatoria
while (numero <= 800) {
    //se suma el número actual a la sumatoria
    sumatoria += numero;

    //se alterna entre sumar 10 o restar 2
    if (esPar) {
        numero += 10;  //se suman 10 si es par
    } else {
        numero -= 2;   //se restan 2 si es impar
    }

    //se cambia el estado de paridad
    esPar = !esPar;
}

//se imprime la sumatoria
console.log("La sumatoria es: " + sumatoria);
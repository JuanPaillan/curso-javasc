let texto = prompt("Introduce una cadena de texto:").toLowerCase();

let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

for (let i = 0; i < texto.length; i++) {
  let caracter = texto[i];

  if (caracter === 'a') {
    contadorA++;
  } else if (caracter === 'e') {
    contadorE++;
  } else if (caracter === 'i') {
    contadorI++;
  } else if (caracter === 'o') {
    contadorO++;
  } else if (caracter === 'u') {
    contadorU++;
  }
}

console.log(`Vocal 'a' aparece: ${contadorA} veces`);
console.log(`Vocal 'e' aparece: ${contadorE} veces`);
console.log(`Vocal 'i' aparece: ${contadorI} veces`);
console.log(`Vocal 'o' aparece: ${contadorO} veces`);
console.log(`Vocal 'u' aparece: ${contadorU} veces`);
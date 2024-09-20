//NULL
console.log();
let numero_nuevo = null;
console.log(numero_nuevo);

//Objeto lineal
let usuario = {
    name: "Mateo"
    age: 30,
    city: "Osorno",
    "correo electronico": "mateo@gmail.com"
};

//agregando una propiedad (o clave) nueva al Objeto Literal (En este caso un booleano)
usuario.provincia : "Provincia de Osorno";
usuario.estado= true;
usuario.pais = "Chile";
usuario.genero = "Masculino"; 

//accediendo a una propiedad del objeto 
console.log(usuario["correo electronico"]);

//eliminando una propiedad del objeto
delete usuario.estado;

console.log(usuario);

//si deseo saber el tipo de dato
console.log()



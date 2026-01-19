function capitalizar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""

/*
hola mundo <<< Lo que recibo
['hola', 'mundo'] <<< Tras aplicar el split(" ")
['Hola', 'Mundo'] arrayMapeado <<< tras mapear
Hola Mundo <<< Tras aplicar el join(" ")
*/
function capitalizarCadaPalabra(string) {
  return string.split(" ").map(capitalizar).join(" ");
}

console.log(capitalizarCadaPalabra("hola mundo")); // "Hola Mundo"
console.log(capitalizarCadaPalabra("make it real")); // "Make It Real"
console.log(capitalizarCadaPalabra("")); // ""

/* NOTAS FINALES

- STRINGS tienen funcionalidades extra

  - charAr(index) -> Esto devuelve el caracter en el indice especificado
  - slice(?startIndex, ?endIndex) -> Esto recorta el string usando los indices especificados
  - split(?separator) -> Esto recorta el string partiendo en los sitios donde encuentra el separador especificado, esto nos devuelve un array

- ARRAYS tienen funcionalidades extra

  - join(?separator) -> Junta todos los elementos del array, usando el separador entre ellos (si se especifica) y devuelve un String
  - map(callback) -> Es una funcion de los arrays para convertir los elementos de un array (los que haya) en otros. Es decir, lo que hace el map es ejecutar el callback por cada uno de los elementos de mi array.
*/

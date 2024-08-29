const imprimirArreglo = (...array) => {
  let parametros = "";
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index == 0) {
      parametros = parametros + element;
    } else {
      parametros = parametros + "\n" + element;
    }
  }
  return parametros;
};

console.log(imprimirArreglo(1, "Hola", 2, "Mundo"));
// 1
// Hola
// 2
// Mundo

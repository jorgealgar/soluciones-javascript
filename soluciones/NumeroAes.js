const numeroDeAes = (cadena) => {
  let contador = 0;

  for (let index = 0; index < cadena.length; index++) {
    if (cadena[index].toLowerCase() === "a") {
      contador++;
    }
  }
  return contador;
};
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0
console.log(numeroDeAes("Hola")); // 1
console.log(numeroDeAes("Hola como estas")); // 2

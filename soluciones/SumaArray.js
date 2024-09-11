function sumarArreglo(arreglo, inicio, fin) {
  let suma = 0;

  for (let i = inicio; i <= fin; i++) {
    suma += arreglo[i];
  }
  return suma;
}

console.log(sumarArreglo([1, 2, 3], 1, 2)); // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)); // 0

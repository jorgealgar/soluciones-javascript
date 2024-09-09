const sumarArreglo = (array) => {
  let suma = 0;
  for (let index = 0; index < array.length; index++) {
    suma += array[index];
  }
  return suma;
};

console.log(sumarArreglo([3, 1, 2])); // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
console.log(sumarArreglo([])); // 0

const removerCeros = (array) => {
  let newArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] !== 0) {
      newArray.push(array[index]);
    }
  }
  return newArray;
};
console.log(removerCeros([0, 1, 0, 2, 0, 3])); // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])); // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])); // []

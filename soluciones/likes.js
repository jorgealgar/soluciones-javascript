const likes = (number) => {
  if (number < 1000) {
    return number.toString();
  } else if (number >= 1000 && number < 1000000) {
    return Math.floor(number / 1000) + "K";
  } else if (number >= 1000000) {
    return Math.floor(number / 1000000) + "M";
  }
};

// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"
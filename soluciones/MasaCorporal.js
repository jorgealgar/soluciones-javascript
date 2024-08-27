const bmi = (peso, altura) => {
  let calculoMasa = peso / altura ** 2;
  if (calculoMasa < 18.5) {
    return "Bajo de peso";
  } else if (calculoMasa >= 18.5 && calculoMasa <= 24.9) {
    return "Normal";
  } else if (calculoMasa >= 25 && calculoMasa <= 29.9) {
    return "Sobrepeso";
  } else if (calculoMasa >= 30) {
    return "Obeso";
  }
};

console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); //  "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"

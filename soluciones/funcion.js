// escribe tu respuesta acá
const contrasena = "2Fj(jjbFsuj";
const contrasena2 = "eoZiugBf&g9";
function contrasenaValida(string) {
  return (contrasena == string || contrasena2 == string);
}

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")); // true
console.log(contrasenaValida("eoZiugBf&g9")); // true
console.log(contrasenaValida("hola")); // false
console.log(contrasenaValida("")); // false

// Diseñar un programa que me solicite ingresar n cantidad de números por teclado,
//   luego de ingresar los números el programa me debe solicitar que operación deseo
// realizar:
// a.Sumar los números
// b.Contar los números primos
// c.Contar los números pares
// d.Calcular el promedio de los números primos
// e. Calcular el promedio de números pares


let numeros = []; // se establece la variable "numeros" como un Arreglo para almacenar los números

// Variables para almacenar los resultados
let suma = 0;
let primos = 0;
let pares = 0;
let sumaPrimos = 0; // Suma de los números primos
let sumaPares = 0; // Suma de los números pares

// Solicitar al usuario la cantidad de números a ingresar
let cantidad = parseInt(prompt("¿Cuántos números deseas ingresar?"));

// Ingresar los números
for (let i = 0; i < cantidad; i++) {
  var num = parseInt(prompt("Ingrese un número:")); // Parsear el número ingresado
  numeros.push(num); // Agregar el número al arreglo
  suma += num; // Sumar el número a la suma total

  // Verificar si el número es par
  if (num % 2 === 0) {
    pares++; // Aumentar la cantidad de pares
    sumaPares += num; // Sumar a la suma de pares
  }

  // Verificar si el número es primo y aumentar la cantidad de primos y la suma de primos
  if (esPrimo(num)) {
    primos++; // Aumentar la cantidad de primos
    sumaPrimos += num; // Sumar a la suma de primos
  }
}

// Función para verificar si un número es primo
function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {// se usa el metodo estatico sqrt para verifica si el numero es primo 
    if (num % i === 0) return false;// se utiliza el metodo modulo para verificar si el numero es primo
  }
  return true;// se retorna verdadero
}

// Solicitar la operación a realizar
alert("¿Qué operación deseas realizar?");
var operacion = prompt("a. Sumar los números\nb. Contar los números primos\nc. Contar los números pares\nd. Calcular el promedio de los números primos\ne. Calcular el promedio de números pares");// se solicita la operacion que se desea realizar usando un prompt y se guarda en la variable operacion, que luego se utiliza para realizar la operacion

// Realizar la operación seleccionada
if (operacion === "a") {// se utiliza la sentencia para realizar la operacion
  console.log("La suma de los números es:", suma);// se muestra la suma y la operacion
} else if (operacion === "b") {
  console.log("La cantidad de números primos es:", primos);//aqui se muestra la cantidad de numeros primos
} else if (operacion === "c") {
  console.log("La cantidad de números pares es:", pares);//aqui se muestra la cantidad de numeros pares
} else if (operacion === "d") {
  console.log("El promedio de números primos es:", primos > 0 ? sumaPrimos / primos : "No hay números primos.");// se muestra el promedio de numeros primos 
} else if (operacion === "e") {// se muestra el promedio de numeros pares siendo estrictamente igual a 0
  console.log("El promedio de números pares es:", pares > 0 ? sumaPares / pares : "No hay números pares.");// se muestra el promedio de numeros pares 
} else {
  console.log("Operación no reconocida.");// se muestra que la operacion no es reconocida
}

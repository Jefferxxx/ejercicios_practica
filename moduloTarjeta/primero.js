// 1. Diseñar un programa que permita validar el tipo de tarjeta de crédito que
// registra el operador, para ello debemos tener en cuenta que las diferentes
// tarjetas tienen diferentes nomenclaturas:
//  American Express: 15 dígitos y empieza por(34 – 37)
//  Diners Club: tiene 14 dígitos y empieza por(300 – 305 o 36 - 38)
//  Discover: tiene 16 dígitos y empieza por(6011)
//  Mastercard: tiene 16 dígitos y empieza por(51 – 55)
//  Visa: tiene: 16 dígitos y empieza por(4)
// El programa solo se debe permitir el ingreso de enteros positivos y máximo
// 16 caracteres, si el operador ingresa un carácter no permitido se debe
// mostrar por pantalla el error y solicitar nuevamente el número de su tarjeta
// de crédito.
// Para este ejercicio se solicita trabajar con módulos, expresiones regulares y
// condicionales.Si está permitido solicitar al operador el tipo de su tarjeta de
// crédito


export function validarTarjeta(tarjeta) {//esta es la funcion que recibe el numero de la tarjeta y valida 
  // Expresión regular que permite solo dígitos y hasta 16 caracteres
  const regex = /^[0-9]{1,16}$/; 
  let tipoTarjeta = ""; // Variable para almacenar el tipo de tarjeta

  // Verifica si el número de tarjeta cumple con la expresión regular
  if (!regex.test(tarjeta)) {
      return "Error: Ingrese solo números enteros positivos y hasta 16 dígitos."; // Mensaje de error si no es válida la tarjeta
  }

  // Validación para American Express: 15 dígitos, comienza con 34 o 37
  if (/^34|37/.test(tarjeta) && tarjeta.length === 15) {
      tipoTarjeta = "American Express";
  } 
  // Validación para Diners Club: 14 dígitos, comienza con 300-305 o 36-38
  else if (/^300|301|302|303|304|305|36|38/.test(tarjeta) && tarjeta.length === 14) {
      tipoTarjeta = "Diners Club";
  } 
  // Validación para Discover: 16 dígitos, comienza con 6011
  else if (/^6011/.test(tarjeta) && tarjeta.length === 16) {
      tipoTarjeta = "Discover";
  } 
  // Validación para Mastercard: 16 dígitos, comienza con 51-55
  else if (/^5[1-5]/.test(tarjeta) && tarjeta.length === 16) {
      tipoTarjeta = "Mastercard";
  } 
  // Validación para Visa: 16 dígitos, comienza con 4
  else if (/^4/.test(tarjeta) && tarjeta.length === 16) {
      tipoTarjeta = "Visa";
  } 
  // Si no se reconoce la tarjeta, devuelve un mensaje de error
  else {
      return "Tarjeta no válida o no reconocida.";// se muestra que la tarjeta no es valida 
  }

  // Devuelve el tipo de tarjeta validada
  return `La tarjeta es de tipo: ${tipoTarjeta}`;// se muestra el tipo de tarjeta
}












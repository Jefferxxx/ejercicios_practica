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

let tarjeta = prompt("Ingrese el número de su tarjeta de crédito");
function validacionTarjeta() {

  while (isNaN(tarjeta)) {
    +
    alert("El número de la tarjeta debe ser un número");
    tarjeta = prompt("Ingrese el número de su tarjeta de crédito");
  }

  while (tarjeta.length > 16) {
    alert("El número de la tarjeta debe tener 16 dígitos");
    tarjeta = prompt("Ingrese el número de su tarjeta de crédito");
  }
  while (tarjeta.length < 16) {
    alert("El número de la tarjeta debe tener 16 dígitos");
    tarjeta = prompt("Ingrese el número de su tarjeta de crédito");
  }

  if (tarjeta.length == 16) {
    if (tarjeta.substring(0, 2) == "34" || tarjeta.substring(0, 2) == "37") {
      alert("su tarjeta es de american express")
    }
  } else if (tarjeta.substring(0, 3) == "300" || tarjeta.substring(0, 3) == "305" || tarjeta.substring(0, 3) == "36" || tarjeta.substring(0, 3) == "38") { 
    alert("su tarjeta es de Dinners club")

  } else if (tarjeta.substring(0, 4) == "6011") {
    alert("su tarjeat es Discover")

  } else if (tarjeta.substring(0, 2) == "51" || tarjeta.substring(0, 2) == "52" || tarjeta.substring(0, 2) == "53" || tarjeta.substring(0, 2) == "54" || tarjeta.substring(0, 2) == "55") {
    alert("su tarjeta es de mastercard")

  }else if 
    
  }










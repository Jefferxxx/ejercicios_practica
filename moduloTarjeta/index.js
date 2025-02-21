import { validarTarjeta } from "./primero.js";


const numeroTarjeta = prompt("Ingrese el número de su tarjeta de crédito:");// se solicita al usuario que ingrese el numero de su tarjeta de credito
const resultado = validarTarjeta(numeroTarjeta);// se llama a la funcion validarTarjeta y se guarda el resultado
// Muestra el resultado en un cuadro de alerta
alert(resultado);
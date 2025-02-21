// Diseñar un programa que me permita ingresar n cantidad de palabras por teclado, al
// finalizar la carga, se debe enviar como a una función expresada como único
// parámetro rest donde nos responderá cuál de las palabras ingresadas es mayor a
// todas las anteriores.

let palabras = [];// se establece la variable "palabras" como un Arreglo para almacenar las palabras y tambien se utiliza el operador rest para pasar las palabras al arreglo

// Solicitar al usuario la cantidad de palabras a ingresar
let cantidad = parseInt(prompt("¿Cuántas palabras deseas ingresar?"));

// este es un bucle for para solicitar las palabras al usuario y se guarda en la variable palabra, si no se cumple la condicion se sale del ciclo
for (let i = 0; i < cantidad; i++) {
  var palabra = prompt("Ingrese unicamente una palabra:");// se solicita ingresar una palabra y se guarda en la variable palabra
  palabras.push(palabra);// se agrega la palabra al arreglo y se solicita la palabra, si no se cumple la condicion se sale del ciclo
}

// Encontrar la palabra mayor y mostrarla y se utiliza el metodo console.log para mostrar la palabra
let palabraMayor = encontrarPalabraMayor(...palabras);// se llama a la funcion para encontrar la palabra mayor y se le pasa las palabras al arreglo, se llama a la funcion y se le pasa las palabras

console.log("La palabra mayor es:", palabraMayor);// se muestra la palabra mayor y se utiliza el metodo console.log para mostrar la palabra

// esta es una Función para encontrar la palabra mayor y se utiliza el operador rest para pasar las palabras al arreglo
function encontrarPalabraMayor(...palabras) {
  let palabraMayor = palabras[0];// se establece la variable "palabraMayor" como la primera palabra ingresada, se utiliza el operador rest para pasar las palabras al arreglo

  for (let i = 1; i < palabras.length; i++) {// se utiliza un bucle for para recorrer el arreglo de palabras y se  verifica si la alongitud de la palabra es actual es mayor a la longitud de la palabra mayor
    if (palabras[i].length > palabraMayor.length) {// se verifica si la longitud de la palabra actual es mayor a la longitud de la palabra mayor
      palabraMayor = palabras[i]; // se actualiza la palabra mayor con la palabra actual
    }
  }

  return palabraMayor;// se retorna la palabra mayor
}



// Diseñar un programa que me solicite por teclado n cantidad de números, al finalizar
//   la carga de los números el programa debe enviar los números a una función
//   expresada como único parámetro rest donde serán ordenados de mayor a menor
//   para luego mostrarlos en una tabla por consola
// se solicita trabajar con módulos, expresiones regulares y
// condicionales


// Función que ordena los números de mayor a menor
const ordenarNumeros = (...numeros) => {// se define la funcion que recibe los numeros y los ordena llamada ordenarNumeros y se utiliza el operador rest para pasar los numeros al arreglo
  const numerosIngresados = [];// se establece la variable "numerosIngresados" como un Arreglo para almacenar los números
  for (let i = 0; i < 5; i++) {// se utiliza un bucle for para solicitar 5 numeros y se guarda en la variable num, si no se cumple la condicion se sale del ciclo
    let num = parseInt(prompt("Ingrese un número:"));// se solicita ingresar un numero y se guarda en la variable num, se utiliza el metodo parseInt para convertir el numero ingresado en un entero
    numerosIngresados.push(num);// se agrega el numero al arreglo y se solicita el numero usando push y se utiliza el metodo parseInt para convertir el numero ingresado en un entero
  }

  const numerosOrdenados = [...numerosIngresados].sort((a, b) => b - a);// se utiliza el metodo sort para ordenar los numeros de mayor a menor ya que el metodo sort ordena los numeros de menor a mayor

  console.log("Números ordenados de mayor a menor:");// se muestra los numeros ordenados
  console.log(numerosOrdenados);// se muestra los numeros ordenados y se utiliza el metodo console.log para mostrar los numeros

  return numerosOrdenados; // Opcional: Retorna el array ordenado para su uso posterior y se utiliza el metodo return para retornar el array
};

// ordenarNumeros(); // Llama a la función para ejecutarlay tambien se utiliza el metodo ordenarNumeros para llamar a la funcion
console.table(ordenarNumeros(1, 2, 3, 4, 5));
//  Diseñar un módulo llamado calculadora, en este módulo debe exportar una clase
// con los siguientes métodos:
// a.Suma
// b.Resta
// c.Multiplicación
// d.División

// Al momento de realizar cada operación el sistema debe validar que no se presenten
// errores, si al momento de su ejecución se presenta algún error, el sistema debe
// enviar un mensaje personalizado indicando el tipo de error para que el usuario lo
// solucione y continue realizando los cálculos básicos de las matemáticas.

export function Calculadora(Calculadora) {// se exporta la clase
  
  return {
    suma: (a, b) => a + b,// se define la operacion
    resta: (a, b) => a - b,// se define la operacion
    multiplicacion: (a, b) => a * b,//
    division: (a, b) => {
      if (b === 0) {// se utiliza un if para verificar si b es igual a cero y si lo es se lanza un error
        throw new Error("No se puede dividir entre cero.");// se muestra un error si se intenta dividir entre cero y throw es para lanzar el error
      }
      return a / b;
    },
  };
}

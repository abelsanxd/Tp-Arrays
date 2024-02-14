function determinarParidad(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

let numero = 7;
let resultado = determinarParidad(numero);
console.log("El número es " + resultado);

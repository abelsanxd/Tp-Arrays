function calcularPerimetro(ladoA, ladoB) {
  return 2 * (ladoA + ladoB);
}

let ladoA = parseFloat(
  prompt("Ingrese la longitud del lado A del rectángulo:")
);
let ladoB = parseFloat(
  prompt("Ingrese la longitud del lado B del rectángulo:")
);

let perimetro = calcularPerimetro(ladoA, ladoB);

console.log("El perímetro del rectángulo es:", perimetro);

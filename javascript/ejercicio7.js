function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

let numeroIngresado = parseInt(
  prompt("Ingrese un número para generar su tabla de multiplicar del 1 al 10:")
);

if (!isNaN(numeroIngresado)) {
  console.log(`Tabla de multiplicar del ${numeroIngresado}:`);
  tablaMultiplicar(numeroIngresado);
} else {
  console.log("Por favor, ingrese un número válido.");
}

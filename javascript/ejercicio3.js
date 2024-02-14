function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

let conteoSumas = new Array(11).fill(0);

for (let i = 0; i < 50; i++) {
  let dado1 = lanzarDado();
  let dado2 = lanzarDado();
  let suma = dado1 + dado2;
  conteoSumas[suma - 2]++;
}

console.log("Apariciones de cada suma:");
for (let i = 2; i <= 12; i++) {
  console.log(`Suma ${i}: ${conteoSumas[i - 2]} veces`);
}

let ciudades = [];
function agregarCiudade(cuidad) {
  if (ciudades) {
    ciudades.push(ciudad);
  }
}

function mostrarInformacion() {
  console.log(`Longitud del array: ${ciudades.length}`);

  console.log("Primera posición:", ciudades[0]);
  console.log("Tercera posición:", ciudades[2]);
  console.log("Última posición:", ciudades[ciudades.length - 1]);

  ciudades.push("Buenos aires");
  console.log("Ciudad añadida:", ciudades[ciudades.length - 1]);

  console.log("Segunda posición:", ciudades[1]);

  ciudades[1] = "Cordoba";
  console.log("Segunda posición actualizada:", ciudades[1]);

  console.log("Lista de ciudades actualizada:", ciudades);
}

function obtenerCiudad() {
  const ciudad = prompt("Ingrese una ciudad (o cancenlar para terminar):");
  if (ciudad && ciudad.toLowerCase() !== "cancelar") {
    agregarCiudade(ciudad);
    return true;
  } else {
    return false;
  }
}
while (obtenerCiudad());

mostrarInformacion();

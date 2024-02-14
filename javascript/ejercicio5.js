function analizarTexto(texto) {
  if (texto === texto.toUpperCase()) {
    console.log("El texto está formado solo por mayúsculas");
  } else if (texto === texto.toLowerCase()) {
    console.log("El texto está formado solo por minúsculas");
  } else {
    console.log(
      "El texto está formado por una mezcla de mayúsculas y minúsculas"
    );
  }
}

let cadena1 = "SOLO MAYÚSCULAS";
analizarTexto(cadena1);

let cadena2 = "solo minúsculas";
analizarTexto(cadena2);

let cadena3 = "Mezcla De Mayúsculas Y Minúsculas";
analizarTexto(cadena3);

function meses() {
  const mesesDelanio = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  document.write(`<h2>Lista de Meses:</h2>`);
  for (let i = 0; i < mesesDelanio.length; i++) {
    document.write(`<p>- ${mesesDelanio[i]}</p>`);
  }
}
meses();

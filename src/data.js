/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
// const example = () => {
//   return 'example';
// };
// window.example = example;

// console.log(WORLDBANK);

// Funcion para mostrar indicadores
const bancoMundial = (data) => {
  let IndicadorArr = [];
  for (let i = 0; i < data.length; i++) {
    IndicadorArr.push({
      indicador: data[i].indicatorName,
    }); 
  } return IndicadorArr;
}; 
bancoMundial(WORLDBANK.PER.indicators);
console.log(bancoMundial(WORLDBANK.PER.indicators));

window.bancoMundial = bancoMundial;

// Funcion cuando el usuario selecciona el pais
const paisSeleccionado = (data) => {
  let paisArr = [];
  paisArr = Object.keys(data);
  return paisArr;
};
console.log(paisSeleccionado);

/* funcion para obtener los indicadores
 const nombreIndicador = (indicadorArr, ind) => {
  let indicadorNombreArr = [];
  indicadorNombreArr = indicadorArr.filter(elemento => elemento.indicatorCode === ind);
  return indicadorNombreArr;
};
const tituloInd = (ind) => {
  const dato = WORLDBANK.PER.indicators;
  let indicadorNombreArr1 = [];
  indicadorNombreArr1 = dato.filter(elemento => elemento.indicatorCode === ind);
  return (indicadorNombreArr1[0].indicatorName);
}; 
console.log(nombreIndicador); */
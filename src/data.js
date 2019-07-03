/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
console.log('archivo datajs');
console.log(WORLDBANK);


const example = () => {
  return 'example';
};

window.example = example;

/*const worldBankJS = (data) => {
  const arrayData = [];
  for (const nombre in data) { 

  }
};*/

//funcion para obtener los indicadores
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

console.log(nombreIndicador);
/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
// const example = () => {
//   return 'example';
// };
// window.example = example;

console.log(WORLDBANK);

const seleccionPais = prompt('Selecciona un Pais PER, MEX, CHL, BRA'); // FUNCION PARA ACTIVAR LOS BOTONES DE PAISES EN HTML

const indicadorPorPais = (pais) => { // Funcion cuando el usuario selecciona el pais
  const arrayIndicadores = WORLDBANK[pais].indicators;
  return arrayIndicadores;
};

// console.log(indicadorPorPais(seleccionPais));

const nombreIndicadorPorPais = (array) => { // Función para mostrar indicadores
  const newArrayNombreIndicador = [];
  for (let i = 0; i < array.length; i++) {
    newArrayNombreIndicador.push(array[i].countryCode + '-' + array[i].indicatorName);
  }
  return newArrayNombreIndicador;
};

console.log(nombreIndicadorPorPais(indicadorPorPais(seleccionPais))); // inner para que se visualice en html

window.nombreIndicadorPorPais = nombreIndicadorPorPais; // se agrega la función a nuestro objeto global window

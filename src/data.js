/* Manejo de data */
// Funcion para acceder a los indicadores cuando el usuario escoge un pais
const indicadorPorPais = (pais) => { 
  const arrayIndicadores = WORLDBANK[pais].indicators;
  return arrayIndicadores;
};
// Función para mostrar los nombres indicadores en un nuevo array
const nombreIndicadorPorPais = (array) => { 
  let arregloNombreIndicador = [];
  for (let i = 0; i < array.length; i++) {
    arregloNombreIndicador.push(array[i].countryCode + '-' + array[i].indicatorName);
  }
  return arregloNombreIndicador;
};

const indicadorData = (pais, indicador) => { 
  let indicadorData = WORLDBANK[pais].indicators[indicador]; 
  return indicadorData;
};

// Funcion Ordenar Ascendente
const asdValor = (data) =>{
  return data.sort((valor1, valor2) => {
    if (valor1.value > valor2.value) return 1;
    if (valor1.value < valor2.value) return -1;
    return 0;
  });
};
// Funcion Ordenar Descendente
const desValor = (dataD) =>{
  return dataD.sort((valor1, valor2) => {
    if (valor1.value > valor2.value) return -1;
    if (valor1.value < valor2.value) return 1;
    return 0;
  });
};
/* Funcion para obtener promedio*/
let suma = 0;
let acum = 0;
const calcularProm = (array) => {
  array.forEach(elem => {
    suma += elem.value; 
    acum ++; // numero de valores 
  });
  return (suma / acum).toFixed(2);
};
// se agrega las funciones a nuestro objeto global window
window.bancoMundial = {
  indicadorPorPais: indicadorPorPais,
  indicadorData: indicadorData,
  asdValor: asdValor,
  desValor: desValor,
  nombreIndicadorPorPais: nombreIndicadorPorPais, 
  calcularProm: calcularProm,
};

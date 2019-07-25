/* Manejo de data */
// Funcion para acceder a los indicadores en un array de objetos cuando el usuario escoge un pais
const indicadorPorPais = (data, pais) => { 
  const arregloIndicadores = data[pais].indicators;
  return arregloIndicadores;
};
// Función para mostrar los nombres de indicadores en un nuevo array de string
const nombreIndicadorPorPais = (array) => { 
  let arregloNombreIndicador = [];
  for (let i = 0; i < array.length; i++) {
    arregloNombreIndicador.push(array[i].countryCode + '-' + array[i].indicatorName);
  }
  return arregloNombreIndicador;
};
// Función para acceder a los datos del indicador seleccionado
const indicadorData = (data, pais, indice) => { 
  let indicadorData = data[pais].indicators[indice]; 
  return indicadorData;
};
// Funcion Ordenar Ascendente
const asdValor = (array) =>{
  return array.sort((valor1, valor2) => {
    if (valor1.value > valor2.value) return 1;
    else
      return -1;
  });
};
// Funcion Ordenar Descendente
const desValor = (array) =>{
  return array.sort((valor1, valor2) => {
    if (valor1.value > valor2.value) return -1;
    else
      return 1;
  });
};
/* Funcion para obtener promedio de los datos*/
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

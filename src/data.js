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


// Funcion para mostrar los valores por los años seleccionados
// const rangoFecha = (fechaInicial, fechaFinal, objAno) => {
//   let rango = [];
//   // const arrFecha = Object.keys(objAno);
//   console.log(Object.keys(objAno));
//   const arrDato = Object.values(objAno);
//   for (let i = 0; i <= arrFecha.length; i++) {
//     if (arrFecha[i] >= fechaInicial && arrYears[i] <= fechaFinal) {
//       rango.push([arrFecha[i], arrDato[i]]);
//     } 
//   }
//   return rango;
// };

/* Funcion para ordenar datos*/
const ordenarDatos = (objeto) => {
  const arrayOrdenado = Object.entries(objeto); 
  return arrayOrdenado.sort((a,b) => {
    return a - b;
  })};

/* Funcion para obtener promedio*/
const calcularProm = (array) => {
  let prom = [];
  array.forEach(elemento => {
   let suma = elemento.reduce((previo, actual) => {
     return (parseInt(previo) + parseInt(actual))},0); 
  let formulaPromedio = suma/elemento.length;
  prom.push(formulaPromedio.toFixed(2))
  });
}

// se agrega las funciones a nuestro objeto global window
window.bancoMundial = {
  indicadorPorPais: indicadorPorPais,
  nombreIndicadorPorPais: nombreIndicadorPorPais, 
  indicadorData: indicadorData,
  // rangoFecha: rangoFecha,
  ordenarDatos: ordenarDatos,
  calcularProm: calcularProm,
};

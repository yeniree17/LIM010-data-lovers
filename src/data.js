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

/* Funcion para mostrar tabla*/
// Funcion para mostrar los valores por los años seleccionados
const rangoFecha = (fechaInicial, fechaFinal, objAno) => {
  let rango = [];
  const arrFecha = Object.keys(objAno);
  const arrDato =Object.values(objAno);
  for (let i = 0; i <= arrFecha.length; i++) {
      if(arrFecha[i] >= fechaInicial && arrYears[i] <= fechaFinal){
          rango.push([arrFecha[i],arrDato[i]]);
      } 
  }
  return rango;
}
// se agrega las funciones a nuestro objeto global window
window.bancoMundial = {
nombreIndicadorPorPais: nombreIndicadorPorPais, 
indicadorPorPais : indicadorPorPais,
rangoFecha : rangoFecha,
}
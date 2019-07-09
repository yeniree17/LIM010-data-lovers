/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
// const example = () => {
//   return 'example';
// };
// window.example = example;

// console.log(WORLDBANK);
const opcionPaises = (arrayPaises) => {// Función para activar los input de paises de forma dinámica
  let paisesL = '';
  for (let i = 0; i < arrayPaises.length; i++) {
    paisesL += `<input type="radio" class="pais ${arrayPaises[i].code}" name="paises" value='${arrayPaises[i].code}'/><label>${arrayPaises[i].pais}</label>`;
  }
  return paisesL;
};
/* funcion que despliega los nombres de los indicadores de forma dinámica cuando el usuario selecciona el país */
const opcionesLista = (opcion) => {
  let nombreIndicadores = '<option disabled selected>----Seleccione un indicador----</option>';
  for (let i = 0; i < opcion.length; i++) {
    nombreIndicadores += `<option value='${opcion[i].split('-')[0]}-${i}'>${opcion[i]}</option>`;
  }
  return nombreIndicadores;
};
// Funcion para acceder a los indicadores cuando el usuario escoge un pais
const indicadorPorPais = (pais) => { 
  const arrayIndicadores = WORLDBANK[pais].indicators;
  return arrayIndicadores;
};
// Función para mostrar los nombres indicadores en un nuevo array
const nombreIndicadorPorPais = (array) => { 
  let newArrayNombreIndicador = [];
  for (let i = 0; i < array.length; i++) {
    newArrayNombreIndicador.push(array[i].countryCode + '-' + array[i].indicatorName);
  }
  return newArrayNombreIndicador;
};
/* Funcion para establecer la primera fecha o rango de fecha en el input*/
const listaFecha1 = (opcion) => {
  let rangoDesde = '<option disabled selected>--Año--</option>';
  for (let i = 0; i < opcion.length; i++) {
    rangoDesde += `<option value='${opcion[i].split('-')[0]}'>${opcion[i].split('-')[0]}</option>`;
  }
  return rangoDesde;
};
/* Funcion para establecer la segunda fecha o rango de fecha en el input*/
const listaFecha2 = (opcion) => {
  let rangoHasta = '<option disabled selected>--Año--</option>';
  for (let i = 0; i < opcion.length; i++) {
    rangoHasta += `<option value='${opcion[i]}'>${opcion[i]}</option>`;
  }
  return rangoHasta;
};
// se agrega las funciones a nuestro objeto global window
window.opcionPaises = opcionPaises;
window.opcionesLista = opcionesLista;
window.nombreIndicadorPorPais = nombreIndicadorPorPais; 
window.indicadorPorPais = indicadorPorPais;
window.listaFecha1 = listaFecha1;
window.listaFecha2 = listaFecha2;
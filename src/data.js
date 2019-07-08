/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
// const example = () => {
//   return 'example';
// };
// window.example = example;

// console.log(WORLDBANK);
const opcionPaises = (arrayPaises) => {// FUNCION PARA ACTIVAR LOS BOTONES DE PAISES EN HTML
  let paisesL = '';
  for (let i = 0; i < arrayPaises.length; i++) {
    paisesL += `<input type="radio" class="pais ${arrayPaises[i].code}" name="paises" value='${arrayPaises[i].code}'/><label>${arrayPaises[i].pais}</label>`;
  }
  return paisesL;
};
/* funcion que despliega los nombres de los indicadores */
const opcionesLista = (opcion) => {
  let nombreIndicadores = '<option disabled selected>----Seleccione un indicador----</option>';
  for (let i = 0; i < opcion.length; i++) {
    nombreIndicadores += `<option value='${opcion[i]}'>${opcion[i]}</option>`;
  }
  return nombreIndicadores;
};
const indicadorPorPais = (pais) => { // Funcion para acceder a los indicadores cuando el usuario escoge un pais
  const arrayIndicadores = WORLDBANK[pais].indicators;
  return arrayIndicadores;
};

// console.log(indicadorPorPais(seleccionPais));

const nombreIndicadorPorPais = (array) => { // Función para mostrar los nombres indicadores en un nuevo array
  let newArrayNombreIndicador = [];
  for (let i = 0; i < array.length; i++) {
    newArrayNombreIndicador.push(array[i].countryCode + '-' + array[i].indicatorName);
  }
  return newArrayNombreIndicador;
};

/* const seleccionarFecha = (data) => { // Funcion para establecer fecha o rango de fecha
  const arrayFecha = WORLDBANK[pais].indicators[i].data;
  return arrayFecha;
}; */


// console.log(nombreIndicadorPorPais(indicadorPorPais(seleccionPais))); // YA SE HIZO inner para que se visualice en html
window.opcionPaises = opcionPaises;
window.opcionesLista = opcionesLista;
window.nombreIndicadorPorPais = nombreIndicadorPorPais; // se agrega la función a nuestro objeto global window
window.indicadorPorPais = indicadorPorPais;
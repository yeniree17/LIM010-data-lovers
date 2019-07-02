/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
console.log('archivo datajs');
console.log(WORLDBANK);
const saludar = (persona) => {
  return 'hola como estas' + persona ;
};

const example = () => {
  return 'example';
};

window.example = example;
window.aaa = 'hola';
window.diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
const worldBankJS = (data) => {
  const arrayData = [];
  for (const nombre in data) { 

  }
};
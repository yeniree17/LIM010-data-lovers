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

<<<<<<< HEAD
  console.log(dataValor);
  let valorData = `<tr>
    <th>año</th>
    <th>porcentaje</th>
  </tr>`;
  const input1 = document.getElementsByName(listaFecha1);
  const imput2 = document.getElementsByName(listaFecha2);
  if (imput1 >= 1960  ) {
    
  for (let i = 0; i < dataValor.length; i++) {
    valorData += `<tr>
      <td>${dataValor[i]}</td>
      <td>${data[dataValor[i]] === '' ? 'no tiene valor' : data[dataValor[i]] }</td>
    </tr>`;
  // console.log(datos[i]);
  }
  return valorData;
};
}


=======
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
>>>>>>> a1bef8be820fa81ccb7b9a439aac0314f7b27343
// se agrega las funciones a nuestro objeto global window
window.bancoMundial = {
nombreIndicadorPorPais: nombreIndicadorPorPais, 
indicadorPorPais : indicadorPorPais,
rangoFecha : rangoFecha,
}
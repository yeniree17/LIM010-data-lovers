/* Manejo del DOM */
google.charts.load('current', { packages: ['corechart', 'line'] });
/* Display de pantalla */
const logueo = document.getElementById('logueo');
const bienvenida = document.getElementById('bienvenida');
const portalDatos = document.getElementById('portal-datos');
const piePagina = document.getElementById('pie-pagina');
const encabezado = document.getElementById('encabezado');

/* Obtención de parámetros del portal de Datos */
const listaPaises = document.getElementById('lista-paises');
const listaIndicadores = document.getElementById('lista-indicadores');
const arrayPaises = [{
  pais: 'Perú',
  code: 'PER'
}, {
  pais: 'Brasil',
  code: 'BRA'
}, {
  pais: 'Mexico',
  code: 'MEX'
}, {
  pais: 'Chile',
  code: 'CHL'
}];
const fechaDesde = document.getElementById('fecha1');
const fechaHasta = document.getElementById('fecha2');
const mostrarTabla = document.getElementById('consultar');
const areaResultado = document.getElementById('resultado');
const areaTabla = document.getElementById('tabla');
const botonesOrdenar = document.getElementById('botones-ordenar');
const btnAscend = document.getElementById('btn-ascend');
const btnDescend = document.getElementById('btn-descend');
const areaPromedio = document.getElementById('boton-promedio');
const btnPromedio = document.getElementById('promedio');
const resultadoPromedio = document.getElementById('valor-promedio');
const btnGrafico = document.getElementById('chart');
// const mostrarGrafico = document.getElementById('grafico');
/* DATA */
let dataIndicador;
/* Login del Usuario*/
const enter = document.getElementById('contrasena');

enter.addEventListener('keyup', (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById('ingresar').click();
  }
});

const ingreso = document.getElementById('ingresar');
let intento = 0;
ingreso.addEventListener('click', () => {
  const nombre = document.getElementById('usuario').value;
  const contrasena = document.getElementById('contrasena').value;
  const clave = 'LABORATORIA';
  const nombreUsuario = 'LABORATORIA';

  if (contrasena === clave && nombreUsuario === nombre) {
    logueo.classList.add('ocultar'); // se oculta la seccion de inicio
    bienvenida.classList.remove('ocultar');// muestra la seccion de bienvenida
    piePagina.classList.remove('ocultar');// muestra el footer
    encabezado.classList.remove('ocultar');// muestra el encabezado y navegador
    document.getElementById('body').classList.toggle('fondo2');
    intento = 0;
  } else if (nombre === '' || contrasena === '') {
    document.getElementById('usuario').focus();
    document.getElementById('contrasena').focus();
    document.getElementById('error').innerHTML = 'Debes completar los campos';
  } else if (intento > 1) {
    document.getElementById('error').innerHTML = 'Acceso Bloqueado!';
    nombre.disabled = true;
    contrasena.disabled = true;
    ingreso.disabled = true;
  } else {
    document.getElementById('error').innerHTML = 'Contraseña Incorrecta!';
    intento++;
  }
});
/* Funcionalidad del navegador para desplegar las pestañas en la pantalla de bienvenida */
const mostrarOcultar = (event) => {
  const tabSeleccionado = event.target.dataset.tabSeleccionado;
  const tabUno = document.getElementById('info-tab1');
  const tabDos = document.getElementById('info-tab2');
  const tabTres = document.getElementById('info-tab3');
  if (tabSeleccionado === 'tab-1') { // se oculta tab-2 y tab-3 y se muestra tab-1
    // tabUno.classList.remove('ocultar');
    tabDos.classList.add('ocultar');
    tabTres.classList.add('ocultar');
    tabUno.classList.toggle('mostrar');
  } else if (tabSeleccionado === 'tab-2') {// se oculta tab-1 y tab-3
    // tabDos.classList.remove('ocultar');
    tabDos.classList.toggle('mostrar');
    tabUno.classList.add('ocultar');
    tabTres.classList.add('ocultar');
  } else if (tabSeleccionado === 'tab-3') {// se muestra la 3era pestaña
    // tabTres.classList.remove('ocultar');
    tabTres.classList.toggle('mostrar');
    tabDos.classList.add('ocultar');
    tabUno.classList.add('ocultar');
  }
};
const cargarPagina = () => {
  const elementosTab = document.getElementsByClassName('tab');
  for (let i = 0; i < elementosTab.length; i++) {
    elementosTab[i].addEventListener('click', mostrarOcultar);
  };
};
cargarPagina();

/* Funcionalidad del navegador para desplegar las pestañas en la pantalla de portal de datos */
const mostrarOcultar1 = (event) => {
  const tabSeleccionado = event.target.dataset.tabSeleccionado;
  const tabUno = document.getElementById('info-tab4');
  const tabDos = document.getElementById('info-tab5');
  const tabTres = document.getElementById('info-tab6');
  if (tabSeleccionado === 'tab-1') { // se oculta tab-2 y tab-3 y se muestra tab-1
    // tabUno.classList.remove('ocultar');
    tabDos.classList.add('ocultar');
    tabTres.classList.add('ocultar');
    tabUno.classList.toggle('mostrar');
  } else if (tabSeleccionado === 'tab-2') {// se oculta tab-1 y tab-3
    // tabDos.classList.remove('ocultar');
    tabDos.classList.toggle('mostrar');
    tabUno.classList.add('ocultar');
    tabTres.classList.add('ocultar');
  } else if (tabSeleccionado === 'tab-3') {// se muestra la 3era pestaña
    // tabTres.classList.remove('ocultar');
    tabTres.classList.toggle('mostrar');
    tabDos.classList.add('ocultar');
    tabUno.classList.add('ocultar');
  }
};
const cargarPagina1 = () => {
  const elementosTab = document.getElementsByClassName('tab');
  for (let i = 0; i < elementosTab.length; i++) {
    elementosTab[i].addEventListener('click', mostrarOcultar1);
  };
};
cargarPagina1();

/* Segunda Pantalla-Bienvenida */
const explorar = document.getElementById('explorar');
explorar.addEventListener('click', () => {
  bienvenida.classList.add('ocultar'); // se oculta la seccion de bienvenida
  portalDatos.classList.remove('ocultar');// muestra la seccion de buscador
  document.getElementById('body').classList.remove('fondo1', 'fondo2');
  document.getElementById('body').classList.add('fondo3');
  listaPaises.innerHTML = opcionPaises(arrayPaises); // muestra los inputs de paisesLatam
});

/* Parametros del portal de datos */
// Función para activar los input de paises de forma dinámica
const opcionPaises = (arrayPaises) => {
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

/* funcion para capturar la seleccion del pais desde el input radio */
//  Devuelve los paises para seleccionarlos con radio 
listaPaises.addEventListener('change', (event) => { // Funcion para acceder a los indicadores cuando el usuario escoge un pais
  const paisSeleccionado = event.target.value;
  listaIndicadores.innerHTML = opcionesLista(nombreIndicadorPorPais(indicadorPorPais(WORLDBANK, paisSeleccionado)));
  // console.log(paisSeleccionado);
  // output de test de nombreIndicadorPorPais
  // console.log(nombreIndicadorPorPais(indicadorPorPais(WORLDBANK, paisSeleccionado)));
});

/* funcion para vincular los indicadores con la data de años en el html */
listaIndicadores.addEventListener('change', (event) => {
  const indicadorSeleccionado = event.target.value;
  const pais = indicadorSeleccionado.split('-')[0];
  const intervalo = indicadorSeleccionado.split('-')[1];
  // console.log(indicadorSeleccionado);
  // console.log(intervalo);

  /* Funcion para establecer la primera fecha o rango de fecha en el input*/
  const listaFecha1 = (data) => {
    let rangoDesde = '<option disabled selected>--Año--</option>';
    for (let i = 0; i < data.length; i++) {
      rangoDesde += `<option value='${data[i]}'>${data[i]}</option>`;
    }
    return rangoDesde;
  };
  /* Funcion para establecer la segunda fecha o rango de fecha en el input*/
  const listaFecha2 = (data) => {
    let rangoHasta = '<option disabled selected>--Año--</option>';
    for (let i = 0; i < data.length; i++) {
      rangoHasta += `<option value='${data[i]}'>${data[i]}</option>`;
    }
    return rangoHasta;
  };
  // const dataAnios = WORLDBANK[pais].indicators[intervalo].data; 
  dataIndicador = indicadorData(WORLDBANK, pais, intervalo);
  // test de la funcion indicador data
  // console.log(indicadorData(WORLDBANK, pais, intervalo));
  const dataAnios = dataIndicador.data;
  const arrayAnios = Object.keys(dataAnios);
  // console.log(arrayAnios);
  fechaDesde.innerHTML = listaFecha1(arrayAnios);
  fechaHasta.innerHTML = listaFecha2(arrayAnios);
});
// Creamos un array que va a contener la data del indicador con el rango de fecha seleccionado
let nuevoArray = [];
// variables que van a contener el año seleccionado
let input1 = '';
let input2 = '';
/* Evento para mostrar resultados en tabla cuando el usuario da click a Consultar*/
mostrarTabla.addEventListener('click', () => {
  nuevoArray = [];
  areaResultado.classList.remove('ocultar');// muestra la seccion de resultados  
  areaTabla.classList.remove('ocultar');// muestra la tabla resultante
  botonesOrdenar.classList.remove('ocultar');
  areaPromedio.classList.remove('ocultar');
  // console.log(fechaHasta.value);
  input1 = parseInt(fechaDesde.value);
  // console.log(fechaDesde.value);
  input2 = parseInt(fechaHasta.value);
  const tituloIndicador = dataIndicador.indicatorName;
  let valorData = `<caption>${tituloIndicador}</caption>
  <tr>
  <th>Año</th>
  <th>Dato</th>
  </tr>`;
  // iteracion de la data considerando el rango de años seleccionado
  Object.entries(dataIndicador.data).forEach(([key, value]) => {
    if (key >= input1 && key <= input2) {
      valorData += `<tr>
      <td>${key}</td>
      <td>${value === '' ? 'S/I' : value.toFixed(2)}</td>
      </tr>`;
      nuevoArray.push({ 
        key: key, 
        value: value 
      });
    }
    // nuevoArray[key] = value;
    // nuevoArray.push({key: key, value: value});
  });
  areaTabla.innerHTML = valorData;
  // console.log(nuevoArray);
});
/* Eventos de los botones para ordenar*/
btnAscend.addEventListener('click', () => {
  areaTabla.innerHTML = '';
  const tituloIndicador = dataIndicador.indicatorName;
  let strYears = `<caption>${tituloIndicador}</caption>
  <tr>
  <th>Año</th>
  <th>Dato</th>
  </tr>`;
  const newArr = asdValor(nuevoArray);
  for (let x = 0; x < newArr.length; x++) {
    strYears += `<tr>
      <td>${newArr[x].key}</td>
      <td>${newArr[x].value === '' ? 'S/I' : newArr[x].value.toFixed(2)}</td>
      </tr>`;
  }
  areaTabla.innerHTML = strYears;
});

btnDescend.addEventListener('click', () => {
  const tituloIndicador = dataIndicador.indicatorName;
  areaTabla.innerHTML = '';
  let strYears = `<caption>${tituloIndicador}</caption>
  <tr>
  <th>Año</th>
  <th>Dato</th>
  </tr>`;
  const newArr = desValor(nuevoArray);
  for (let x = 0; x < newArr.length; x++) {
    strYears += `<tr>
      <td>${newArr[x].key}</td>
      <td>${newArr[x].value === '' ? 'S/I' : newArr[x].value.toFixed(2)}</td>
      </tr>`;
  }
  areaTabla.innerHTML = strYears;
  // console.log(desValor(nuevoArray));
});

/* Evento para calcular el promedio de los datos*/
btnPromedio.addEventListener('click', () => {
  resultadoPromedio.innerHTML = `El Promedio es: ${calcularProm(nuevoArray)} %` ;
});

// Limpiar seleccion 
const limpiarSeleccion = () => {
  location.reload();
};
const limpiarInfo = document.getElementById('borrar');
limpiarInfo.addEventListener('click', limpiarSeleccion);
// Función para gráfico

// muestra el grafico utilizando los datos en arrays
btnGrafico.addEventListener('click', () => {
  let arrayGrafico = new Array(Object.entries(nuevoArray));
  let rango = arrayGrafico[0];
  rango.forEach((elemento, indice) => {
    elemento[0] = (rango[indice][0]);
    elemento[1] = parseFloat(rango[indice][1]);
  });
  let data = new google.visualization.DataTable();
  data.addColumn('string', 'X');
  data.addColumn('number', '% ');
  data.addRows(rango);
  const options = {
    hAxis: {
      title: 'AÑOS'
    },
    vAxis: {
      title: 'PORCENTAJE'
    }
  };
  const chart = new google.visualization.LineChart(document.getElementById('grafico'));
  chart.draw(data, options); 
});

// tgoogle.load('visualization', '1.0', { 'packages': ['corechart'] });

// grafico.addEventListener('click', () => {
//   google.setOnLoadCallback(grafico); 
// });

// const generarGrafico = (datos) => {
//   const dibujarTabla = new google.visualization.DataTable();
//   dibujarTabla.addColumn('string', 'Nombre');
//   dibujarTabla.addColumn('string', 'Año');
//   dibujarTabla.addColumn('number', 'Valor');
// };

// const chart = new google.visualization.LineChart(document.getElementById('grafico'));
// chart.draw(data, opciones);

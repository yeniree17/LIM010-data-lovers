/* Manejo del DOM */
/* Display de pantalla */
const logueo = document.getElementById('logueo');
const bienvenida = document.getElementById('bienvenida');
const portalDatos = document.getElementById('portal-datos');
const piePagina = document.getElementById('pie-pagina');
const encabezado = document.getElementById('encabezado');

/* Obtención de parámetros del portal de Datos */
const listaPaises = document.getElementById('lista-paises');
const listaIndicadores = document.getElementById('lista-indicadores');
const arrayPaises = [{pais: 'Perú',
  code: 'PER'}, {pais: 'Brasil',
  code: 'BRA'}, {pais: 'Mexico',
  code: 'MEX'}, {pais: 'Chile',
  code: 'CHL'}];
const fechaDesde = document.getElementById('fecha1');
const fechaHasta = document.getElementById('fecha2');
const mostrarTabla = document.getElementById('consultar');
const areaResultado = document.getElementById('resultado');
const areaTabla = document.getElementById('tabla');
const btnDescend = document.getElementById('btn-Descend');
const btnAscend = document.getElementById('btn-Ascend');

/* DATA */
let dataIndicador;

/* Login del Usuario*/
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
/* Funcionalidad del navegador para desplegar las pestañas */
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

/* funcion para capturar la seleccion del pais desde el input radio */
//  Devuelve los paises para seleccionarlos con radio 
listaPaises.addEventListener('change', (event) => { // Funcion para acceder a los indicadores cuando el usuario escoge un pais
  const paisSeleccionado = event.target.value;
  listaIndicadores.innerHTML = opcionesLista(nombreIndicadorPorPais(indicadorPorPais(paisSeleccionado)));
  // console.log(paisSeleccionado);
});
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
    rangoHasta += `<option value='${opcion[i].split('-')[0]}'>${opcion[i].split('-')[0]}</option>`;
  }
  return rangoHasta;
};
/* funcion para vincular los indicadores con la data de años en el html */
listaIndicadores.addEventListener('change', (event) => {
  const indicadorSeleccionado = event.target.value;
  const pais = indicadorSeleccionado.split('-')[0];
  const intervalo = indicadorSeleccionado.split('-')[1];
  

  // const dataAnios = WORLDBANK[pais].indicators[intervalo].data; 
  dataIndicador = indicadorData(pais, intervalo);

  const dataAnios = dataIndicador.data; 
  const arrayAnios = Object.keys(dataAnios);

  fechaDesde.innerHTML = listaFecha1(arrayAnios);
  fechaHasta.innerHTML = listaFecha2(arrayAnios);
});

  
/* Evento para mostrar resultados en tabla*/      
// const mostrarTabla = document.getElementById('consultar');
mostrarTabla.addEventListener('click', (event) => {
  areaResultado.classList.remove('ocultar');// muestra la seccion de resultados  
  areaTabla.classList.remove('ocultar');// muestra la tabla resultante
  botonesOrdenar.classList.remove('ocultar');

  let input1 = parseInt(fechaDesde.value);
  console.log(fechaDesde.value);

  let input2 = parseInt(fechaHasta.value);
  console.log(fechaHasta.value);

  let valorData = `<tr>
  <th>Año</th>
  <th>Dato</th>
  </tr>`;

  console.log(dataIndicador.data);
  // console.log(dataValor);
  Object.entries(dataIndicador.data).forEach(([key, value]) => { 
    if (key >= input1 && key <= input2) {
      valorData += `<tr>
      <td>${key}</td>
      <td>${value === '' ? 'S.I' : value.toFixed(2)}</td>
    </tr>`;
    }
  });
  areaTabla.innerHTML = valorData;
});
/* Evento del boton para ordenar*/
// btnAscend.addEventListener('click', (event) => {
//   let arrayValoresOrdenados = '';
// });



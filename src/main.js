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
    portalDatos.classList.remove('ocultar');// muestra la seccion de buscador
    piePagina.classList.remove('ocultar');// muestra el footer
    encabezado.classList.remove('ocultar');// muestra el encabezado y navegador
    listaPaises.innerHTML = opcionPaises(arrayPaises); // muestra los inputs de paisesLatam
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
/* Parametros del portal de datos */
/* const buscadorDatos = {
  seleccionPais1: (pais) => {
    const paisesArr = document.getElementsByName(pais);
    let seleccionUsuario = '';
    for (let i = 0; i < paisesArr.length; i++) {
      if (paisesArr[i].checked === true) {
        seleccionUsuario = paisesArr[i].value;
        return seleccionUsuario;
      }
    }
  },
/* funcion para capturar la seleccion del pais desde el input radio */
//  Devuelve los paises para seleccionarlos con radio 
listaPaises.addEventListener('change', (event) => { // Funcion para acceder a los indicadores cuando el usuario escoge un pais
  const paisSeleccionado = event.target.value;
  listaIndicadores.innerHTML = opcionesLista(nombreIndicadorPorPais(indicadorPorPais(paisSeleccionado)));
  // console.log(paisSeleccionado);
});

/* funcion para vincular los indicadores con la data de años en el html */
listaIndicadores.addEventListener('change', (event) => {
  const indicadorSeleccionado = event.target.value;
  const pais = indicadorSeleccionado.split('-')[0];
  const intervalo = indicadorSeleccionado.split('-')[1];
  console.log(pais);
  console.log(intervalo);
  // const fecha = WORLDBANK[pais].indicators[indicadorSeleccionado]['data'][intervalo]; // aqui tengo q hacer el split_AQUI QUEDE OJOOO
  const fecha = WORLDBANK[pais].indicators[intervalo].data;
  const dataFecha = Object.keys(fecha);
  console.log(dataFecha);
  fechaDesde.innerHTML = listaFecha1(dataFecha);
  fechaHasta.innerHTML = listaFecha2(dataFecha);
});

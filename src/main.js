/* Manejo del DOM */
/* Display de pantalla */
const logueo = document.getElementById('logueo');
const bienvenida = document.getElementById('bienvenida');
const portalDatos = document.getElementById('portal-datos');
const piePagina = document.getElementById('pie-pagina');
const encabezado = document.getElementById('encabezado');
const listaPaises = document.getElementById('lista-paises');
const listaIndicadores = document.getElementById('lista-indicadores');
/* Login del Usuario*/
const ingreso = document.getElementById('ingresar');
let intento = 0;
const arrayPaises = [{pais: 'Perú',
  code: 'PER'}, {pais: 'Brasil',
  code: 'BRA'}, {pais: 'Mexico',
  code: 'MEX'}, {pais: 'Chile',
  code: 'CHL'}];
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
    listaPaises.innerHTML = opcionPaises(arrayPaises);
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
  /*seleccionFecha: (desde, hasta)*/
/* funcion para capturar la seleccion del pais desde el input radio */
//  Devuelve los paises para seleccionarlos con radio 

listaPaises.addEventListener('change', (event) => { // Funcion para acceder a los indicadores cuando el usuario escoge un pais
  const paisSeleccionado = event.target.value;
  listaIndicadores.innerHTML = opcionesLista(nombreIndicadorPorPais(indicadorPorPais(paisSeleccionado)));
  console.log(paisSeleccionado);
});
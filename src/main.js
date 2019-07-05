/* Manejo del DOM */
/* Display de pantalla */
const logueo = document.getElementById('logueo');
const bienvenida = document.getElementById('bienvenida');
const portalDatos = document.getElementById('portal-datos');
const piePagina = document.getElementById('pie-pagina');
const encabezado = document.getElementById('encabezado');
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
const buscadorDatos = {
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
};

/* funcion que despliega los nombres de los indicadores */
const listaIndicadores = document.getElementById('lista-indicadores');
const opcionesLista = (opcion) => {
    let nombreIndicadores = `<option disabled selected>----Seleccione un indicador----</option>`;
    for (let i = 0; i < opcion.length; i++) {
        nombreIndicadores += `<option value='${opcion[i]}'>${opcion[i]}</option>`
    }
    return nombreIndicadores;
};
/* funcion para capturar la seleccion del pais desde el input radio */
listaIndicadores.innerHTML = opcionesLista(nombreIndicadorPorPais(indicadorPorPais(seleccionPais))); //Devuelve los paises para seleccionarlos con radio

const listaPaises = document.getElementById('paises');
const opcionPaises = (paisesLatam) => {
  let paisesLatam = '';
    for (let i = 0; i < paisesLatam.length; i++) {
        paisesLatam += `<input type="radio" class="pais ${paisesLatam[i]}" name="paises" value='${paisesLatam[i]}'/><label>${paisesLatam[i]}</label>`;
    }
    return paisesLatam;
};

listaPaises.innerHTML = opcionPaises(DATABANK.seleccionPais(WORLDBANK))
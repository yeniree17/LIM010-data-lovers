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
  const listaPaises = document.getElementById('paises');
  const listaIndicadores = document.getElementById('lista-indicadores');

  if (contrasena === clave && nombreUsuario === nombre) {
    logueo.classList.add('ocultar'); // se oculta la seccion de inicio
    portalDatos.classList.remove('ocultar');// muestra la seccion de buscador
    piePagina.classList.remove('ocultar');// muestra el footer
    encabezado.classList.remove('ocultar');// muestra el encabezado y navegador
    listaPaises.innerHTML = (opcionPaises(indicadorPorPais(seleccionPais)));
    // listaPaises.innerHTML = (nombreIndicadorPorPais(indicadorPorPais(seleccionPais)));
    listaIndicadores.innerHTML = opcionesLista(nombreIndicadorPorPais(indicadorPorPais(seleccionPais)));

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
  seleccionPais: (pais) => {
    const paisesArr = document.getElementsByName(pais);
    let seleccionUsuario = '';
    for (let i = 0; i < paisesArr.length; i++) {
      if (paisesArr[i].checked === true) {
        seleccionUsuario = paisesArr[i].value;
        return seleccionUsuario;
      }
    }
  },
  /* seleccionFecha: (desde, hasta) */
};

/* funcion que despliega los nombres de los indicadores */

const opcionesLista = (opcion) => {// VERIFICADO YA ME FUNCIONA YEIIIIII
  let nombreIndicadores = '<option disabled selected>----Seleccione un indicador----</option>';
  for (let i = 0; i < opcion.length; i++) {
    nombreIndicadores += `<option value='${opcion[i]}'>${opcion[i]}</option>`;
  }
  return nombreIndicadores;
};

// const seleccionPais = document.getElementById('paises');
/* funcion para capturar la seleccion del pais desde el input radio */
// const seleccionPais = prompt('Selecciona un Pais PER, MEX, CHL, BRA'); // FUNCION PARA ACTIVAR LOS BOTONES DE PAISES EN HTML
let paisesL = '';
const opcionPaises = (paisesLatam) => {
  // listaIndicadores.innerHTML = opcionesLista(nombreIndicadorPorPais(indicadorPorPais(seleccionPais))); /* Devuelve los paises para seleccionarlos con radio*/
  for (let i = 0; i < paisesLatam.length; i++) {
    paisesL += `<input type="radio" class="pais ${paisesLatam[i]}" name="paises" value='${paisesLatam[i]}'/><label>${paisesLatam[i]}</label>`;
  }
  return paisesL;
};
/* listaPaises.innerHTML = opcionPaises(DATABANK.seleccionPais(WORLDBANK)); */
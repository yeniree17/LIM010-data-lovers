/* Manejo del DOM */
/* Display de pantalla */
const logueo = document.getElementById('logueo');
const buscador = document.getElementById('buscador');
/* Login del Usuario*/
const ingreso = document.getElementById('ingresar');
let intento = 0;
ingreso.addEventListener('click', (evento) => {
  evento.preventDefault();
  console.log(WORLDBANK);
  const nombre = document.getElementById('usuario').value;     
  const contraseña = document.getElementById('contraseña').value; 
  const clave = 'LABORATORIA';
  const nombreUsuario = 'LABORATORIA';
  
  if (contraseña === clave && nombreUsuario === nombre) {
    logueo.classList.add('hide'); // se oculta la seccion de inicio
    buscador.classList.remove('hide');// muestra la seccion de buscador
    intento = 0;
  } else if (nombre === '' || contraseña === '') {
    document.getElementById('usuario').focus();
    document.getElementById('contraseña').focus();
    document.getElementById('error').innerHTML = 'Debes completar los campos';
  } else if (intento > 1) {
    document.getElementById('error').innerHTML = 'Acceso Bloqueado!';
    nombre.disabled = true;
    contraseña.disabled = true;
    ingreso.disabled = true;
  } else {
    document.getElementById('error').innerHTML = 'Contraseña Incorrecta! al 3er intento, ya no podrás ingresar';
    intento++;
  }
});
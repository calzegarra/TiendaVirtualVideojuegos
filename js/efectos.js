
document.addEventListener('DOMContentLoaded', function () {
  const radRecordar = document.getElementById('rdRecordar');
  const btnEnviarCorreo = document.getElementById('btnEnviarCorreo');

  radRecordar.addEventListener('change', function () {
    btnEnviarCorreo.style.display = radRecordar.checked ? 'block' : 'none';
  });
});

function Autenticar() {
  let usuario = document.getElementById('txtusuario').value;
  let pass = document.getElementById('txtclave').value;

  var name;
  if (usuario.trim() === '') {
    alert("Debe ingresar el usuario");
  } else {
    switch (usuario) {
      case 'czegarra':
        name = 'Christopher Zegarra Mendez'
        break;
      case 'lveramendi':
        name = 'Luis Orlando Veramendi Antunez'
        break;
      case 'ymauricio':
        name = 'Yerssin Leandro Mauricio Cruz'
        break;
      case 'hpajuelo':
        name = 'Heinz Alberto Pajuelo Julca'
        break;
      case 'jamaya':
        name = 'Jose Enrique Amaya Campos'
        break;
      default:
        alert(usuario + " no esta registrado en el sistema ");
        break;
    }
    if (name) {
      window.location.href = '../index.html';
      alert("Bienvenido " + name);
    }
  }
}

function validarCorreo() {
  let usuario = document.getElementById('txtusuario').value;

  var name, email;
  if (usuario.trim() === '') {
    alert("Debe ingresar el usuario");
  } else {
    switch (usuario) {
      case 'czegarra':
        name = 'Christopher Zegarra Mendez'
        email = 'chris2014@gmail.com'
        break;
      case 'lveramendi':
        name = 'Luis Orlando Veramendi Antunez'
        email = 'LVA2022@gmail.com'
        break;
      case 'ymauricio':
        name = 'Yerssin Leandro Mauricio Cruz'
        email = 'jmauri.2707@gmail.com'
        break;
      case 'hpajuelo':
        name = 'Heinz Alberto Pajuelo Julca'
        email = 'Heinze2025@gmail.com'
        break;
      case 'jamaya':
        name = 'Jose Enrique Amaya Campos'
        email = 'Enrike_985@gmail.com'
        break;
      default:
        alert(usuario + " no esta registrado en el sistema ");
        break;
    }
    if (name) {
      alert("Estimado " + name + ", estamos enviando tu nueva contraseña al correo registrado como " + email);
    }
  }
}


// Nueva función para la creación de cuentas
document.getElementById('crearCuentaForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let nombres = document.getElementById('txtNombres').value;
  let apellidos = document.getElementById('txtApellidos').value;
  let dni = document.getElementById('txtDNI').value;
  let direccion = document.getElementById('txtDireccion').value;
  let correo = document.getElementById('txtCorreo').value;
  let nuevoUsuario = document.getElementById('txtNuevoUsuario').value;
  let nuevaClave = document.getElementById('txtNuevaClave').value;
  let confirmarClave = document.getElementById('txtConfirmarClave').value;

  if (nombres.trim() === '' || apellidos.trim() === '' || dni.trim() === '' || direccion.trim() === '' || correo.trim() === '' || nuevoUsuario.trim() === '' || nuevaClave.trim() === '' || confirmarClave.trim() === '') {
    alert("Por favor, complete todos los campos.");
    return;
  }

  if (nuevaClave !== confirmarClave) {
    alert("Las contraseñas no coinciden. Intente nuevamente.");
    return;
  }

  // lógica para enviar los datos de creación de cuenta al servidor

  alert("Cuenta creada exitosamente. ¡Bienvenido a FUTURE!");

  // Limpia los campos después de crear la cuenta
  document.getElementById('txtNombres').value = '';
  document.getElementById('txtApellidos').value = '';
  document.getElementById('txtDNI').value = '';
  document.getElementById('txtDireccion').value = '';
  document.getElementById('txtCorreo').value = '';
  document.getElementById('txtNuevoUsuario').value = '';
  document.getElementById('txtNuevaClave').value = '';
  document.getElementById('txtConfirmarClave').value = '';
});
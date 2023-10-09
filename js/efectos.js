
document.addEventListener('DOMContentLoaded', function () {
    const radRecordar = document.getElementById('rdRecordar');
    const btnEnviarCorreo = document.getElementById('btnEnviarCorreo');

    radRecordar.addEventListener('change', function () {
      btnEnviarCorreo.style.display = radRecordar.checked ? 'block' : 'none';
    });
  });

  function Autenticar(){
    let usuario = document.getElementById('txtusuario').value;
    let pass = document.getElementById('txtclave').value;

    var name;
    if(usuario.trim() === ''){
      alert("Debe ingresar el usuario");
    }else{
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
            alert( usuario + " no esta registrado en el sistema ");
            break; 
      }
      if(name){
        window.location.href = '../index.html';
        alert("Bienvenido "+ name);
      }
    }
}

function validarCorreo(){
    let usuario = document.getElementById('txtusuario').value;

    var name, email;
    if(usuario.trim() === ''){
      alert("Debe ingresar el usuario");
    }else{
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
              alert( usuario + " no esta registrado en el sistema ");
              break; 
        }
        if(name){
          alert("Estimado "+ name + ", estamos enviando tu nueva contraseña al correo registrado como " + email);
        }
    }
}
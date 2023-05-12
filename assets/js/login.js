//Llamar validacion de Login usuario
const btnEnviar = document.querySelector("#enviar-login");
btnEnviar.addEventListener("click", (evento) => {
  evento.preventDefault();
  loginUsuario();
})

const loginUsuario = () => {
  const correoIngresado = document.querySelector("[data-form-usuario]").value;
  const contrasenaIngresada = document.querySelector("[data-form-contrasenia]").value;
  console.log(correoIngresado);
  console.log(contrasenaIngresada);
  var user = "admin";
  var pass = "admin2468";

  if (correoIngresado === user && contrasenaIngresada === pass) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Login Exitoso',
      showConfirmButton: false,
      timer: 1500
    })

    setTimeout(function () {
      window.location.href = "../screens/adminProductos.html";
    }, 2000);

  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Datos incorrectos',
    })
  }
}
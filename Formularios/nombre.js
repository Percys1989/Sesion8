function Validar_Formulario() {
    var nombre,usuario,password,email;
    nombre = document.getElementById("txtnombre").value;
    usuario = document.getElementById("txtusuario").value;
    password = document.getElementById("txtpassword").value;
    email = document.getElementById("txtemail").value;

    if (usuario.length == 0 || usuario.length < 8) {
        alert("Ingresar nombre de usuario");
    }

    var regular = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ; // validar la estructura, expresion regular
    if (!email.match(regular) || email.length == 0) {
        alert("Ingresa un correo valido");
    }
    if (password.length = 0 || password.length < 8) {
        alert("Ingresa una contraseña valida")
    }
    
}
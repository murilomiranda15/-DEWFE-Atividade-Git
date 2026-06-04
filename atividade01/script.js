function mostrar_ocultar() {
    var senha = document.getElementById("password");
    if (senha.type === "password") {
        senha.type = "text";
    }
    else {
        senha.type = "password";
    }
}

function aparecer() {
    var escondido = document.getElementById("escondido");
    if (escondido.style.display === "none") {
        escondido.style.display = "block";
    }
    else {
        escondido.style.display = "none";
    }
}

function validar() {
    var senha = document.getElementById("password");
    var texto = document.querySelector("label[for='password']");
    if (senha.value.length <= 8) {
        senha.style.border = "2px solid red";
        texto.style.color = "red";
    }
    else {
        senha.style.border = "2px solid black";
        texto.style.color = "black";    
    }
}
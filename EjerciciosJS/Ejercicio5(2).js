class verificarContraseña {
    constructor(contraseña) {
        this.contraseña = contraseña;
    }

    longitudMinima() {
        return this.contraseña.length >= 8; 
    }

    regexMayuscula() {
        return /[A-Z]/.test(this.contraseña);
    }

    regexNumero() {
        return /[0-9]/.test(this.contraseña);
    }

    regexEspecial(){
        return /[!@#$%^&*()_+\-{}\[\]:;<>.,?~\\]/.test(this.contraseña);
    }

    esValida() {
        return this.longitudMinima() && this.regexMayuscula() && this.regexNumero() && this.regexEspecial();
    }
}

function ejecutarVerificacion() {
    let contraseña = prompt("Ingresa una contraseña:");

    let verificador = new verificarContraseña(contraseña);

    if(verificador.esValida()) {
        alert("¡La contraseña es valida!");
    } else {
        alert(`La contraseña: "${contraseña}" no cumple con uno o más requisitos. Recuerda que debe tener al menos 8 caracteres, incluir una mayúscula, un número y un carácter especial.`);
    }
}

ejecutarVerificacion();

const operacion = () => {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let opc = document.getElementById("opc").value;

    if(opc == 1) {
        let resultado = parseInt(n1) + parseInt(n2);
        document.getElementById("resultado").innerHTML = resultado;
    } else if(opc == 2) {
        let resultado = parseInt(n1) - parseInt(n2);
        document.getElementById("resultado").innerHTML = resultado;
    } else if(opc == 3){
        let resultado = parseInt(n1) * parseInt(n2);
        document.getElementById("resultado").innerHTML = resultado;
    }
}


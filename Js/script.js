const cifraDC = document.getElementById('cifraDC');
const base64 = document.getElementById('base64');
const box1 = document.getElementById('box1');
const number2 = document.getElementById('number2');
const codificador = document.getElementById('codificador');
const decodificar = document.getElementById('decodificar');
const box2 = document.getElementById('box2');
const enviar = document.getElementById('enviar');
const incremento = document.getElementById('incremento');


function trocaTexto(){
if(codificador.checked){
    enviar.innerText = 'Codificar';
}  else{
    enviar.innerText = 'Decodificar';
}
}

function mostraIncremento(){
    if (cifraDC.checked){
        incremento.style.display = 'block';
    }
    else{ incremento.style.display = 'none';

    }
}










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

function cifraBase(){
    if (base64.checked) {
        base();   
    }
    else if (cifraDC.checked){
        cifra();

    }
    else{}
    }

function base(){
    let mensagem = "";
    if (codificador.checked){
        mensagem = window.btoa(box1.value); 
    }
    else{
        mensagem = window.atob(box1.value);
    }
    box2.innerHTML = mensagem;
}

function cifra(){
    const alfa = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const acentos = 'áéíóúâêîôûàèìòùã'.split('');
    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const maiusculasAcentos = 'ÁÉÍÓÚÃÀÈÌÒÙÕ'.split('');
    const respostaFinal = [];
    const x = parseInt(incremento.value);

    if (codificador.checked){
        for (let i=0; i<box1.value.length;i++){
            for ( let n=0; n<alfa.length;n++){
                if (box1.value[i] == alfa[n]){
                    respostaFinal[i] = alfa[(n+x)%alfa.length]
                    break;
                }
            }
        }
        box2.value = respostaFinal.join('');
    }
        else if (decodificador.checked){

    }
    
    else {}



}








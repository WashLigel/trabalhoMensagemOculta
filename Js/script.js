function trocaTexto() {
    const codificador = document.getElementById('codificador');
    const enviar = document.getElementById('enviar');

    if (codificador.checked) {
        enviar.innerText = 'Codificar';
    }
    else {
        enviar.innerText = 'Decodificar';
    }
}

function mostraIncremento() {
    const cifraDC = document.getElementById('cifraDC');
    const incremento = document.getElementById('incremento');

    if (cifraDC.checked) {
        incremento.style.display = 'block';
    }
    else {
        incremento.style.display = 'none';

    }
}

function cifraBase() {
    const cifraDC = document.getElementById('cifraDC');
    const base64 = document.getElementById('base64');

    if (base64.checked) {
        base();
    }
    else if (cifraDC.checked) {
        cifra();
    }
    else {
        alert("Escolha entre Base 64 ou Cifra de César.")
    }
}

function base() {
    const codificador = document.getElementById('codificador');
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');

    let mensagem = "";
    if (codificador.checked) {
        mensagem = window.btoa(box1.value);
    }
    else {
        mensagem = window.atob(box1.value);
    }
    box2.innerHTML = mensagem;
}

function cifra() {
    const incremento = document.getElementById('number2');
    const box1 = document.getElementById('box1');
    const codificador = document.getElementById('codificador');
    const decodificar = document.getElementById('decodificar');
    const box2 = document.getElementById('box2');
    const alfa = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const acentos = 'áéíóúâêîôûàèìòùã'.split('');
    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const maiusculasAcentos = 'ÁÉÍÓÚÃÀÈÌÒÙÕ'.split('');
    const respostaFinal = [];
    const x = parseInt(incremento.value);

    if (codificador.checked) {
        for (let i = 0; i < box1.value.length; i++) {
            for (let n = 0; n < alfa.length; n++) {
                if (box1.value[i] == alfa[n]) {
                    respostaFinal[i] = alfa[(n + x) % alfa.length];
                    break;
                } else if (box1.value[i] == acentos[n]) {
                    respostaFinal[i] = acentos[(n + x) % acentos.length];
                    break;
                } else if (box1.value[i] == maiusculas[n]) {
                    respostaFinal[i] = maiusculas[(n + x) % maiusculas.length];
                    break;
                } else if (box1.value[i] == maiusculasAcentos[n]) {
                    respostaFinal[i] = maiusculasAcentos[(n + x) % maiusculasAcentos.length];
                    break;
                } else {
                    respostaFinal[i] = box1.value[i];
                }
            }
        }
        box2.innerHTML = respostaFinal.join('');
    }
    else if (decodificar.checked) {
        for (let i = 0; i < box1.value.length; i++) {
            for (let n = 0; n < alfa.length; n++) {
                if (box1.value[i] == alfa[n]) {
                    let neg = n - x;
                    for (let pos = neg; pos < 0; pos++) {
                        neg += 26;
                        pos = neg;
                    }
                    respostaFinal[i] = alfa[neg];
                    break;
                } else if (box1.value[i] == acentos[n]) {
                    let neg = n - x;
                    for (let pos = neg; pos < 0; pos++) {
                        neg += 26;
                        pos = neg;
                    }
                    respostaFinal[i] = alfa[neg];
                    break;
                } else if (box1.value[i] == maiusculas[n]) {
                    let neg = n - x;
                    for (let pos = neg; pos < 0; pos++) {
                        neg += 26;
                        pos = neg;
                    }
                    respostaFinal[i] = alfa[neg];
                    break;
                } else if (box1.value[i] == maiusculasAcentos[n]) {
                    let neg = n - x;
                    for (let pos = neg; pos < 0; pos++) {
                        neg += 26;
                        pos = neg;
                    }
                    respostaFinal[i] = alfa[neg];
                    break;
                } else {
                    respostaFinal[i] = box1.value[i];
                }
            }
        }
        box2.innerHTML = respostaFinal.join('');
    }
}








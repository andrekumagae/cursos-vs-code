"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let devePrintar = true;
let frase;
frase = 'O valor é: ';
function adicionarNumero(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar)
        console.log(frase + resultado);
    return numero1 + numero2;
}
if (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}

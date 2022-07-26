let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
let devePrintar = true;
let frase: string;
frase =  'O valor é: ';

function adicionarNumero(numero1: number, numero2: number, devePrintar: boolean, frase: string): number{
    let resultado = numero1 + numero2;
    if (devePrintar) console.log(frase + resultado);
    return numero1 + numero2;
}
if (button) {
    button?.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(
                adicionarNumero
                    (Number(input1.value), Number(input2.value), devePrintar, frase))
        }
    })
}

function somarValoresETratar(numero1: number, numero2: number, callback: (numero3: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number {
    return numero / numero;
}

console.log(somarValoresETratar(1,3, aoQuadrado));
console.log(somarValoresETratar(1,3, dividirPorEleMesmo));

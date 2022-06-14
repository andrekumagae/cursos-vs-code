function validaArrays(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parametros!");
        if (typeof arr != 'object') throw new TypeError("Array precisa ser do tipo object!");
        if (typeof num != 'number') throw new TypeError("Número precisa ser do tipo number!");
        if (arr.length !== num) throw new RangeError("Tamanho do array deve ser igual ao número!");
        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este é um Reference Error!");
            console.log(e.message);
        }
        else if (e instanceof TypeError) {
            console.log("Este é um TypeError!");
            console.log(e.message);        }
        else if (e instanceof RangeError) {
            console.log("Este é um RangeError!");
            console.log(e.message);
        }else{
            console.log("Erro não esperado" + e);
        }
    }
}

let array = [1, 2, 3];
let tamanho = 1;
console.log(validaArrays(array,tamanho));
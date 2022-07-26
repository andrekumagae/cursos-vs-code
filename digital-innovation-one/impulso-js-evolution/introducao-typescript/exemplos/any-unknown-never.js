"use strict";
let valorAny;
valorAny = 'teste';
valorAny = 1;
let valorUnknown;
valorUnknown = 'teste';
valorUnknown = 1;
let texto;
texto = valorAny;
/* Não funciona
texto = valorUnknown; */
/* Funciona */
if (typeof valorUnknown === 'string') {
    texto = valorUnknown;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);

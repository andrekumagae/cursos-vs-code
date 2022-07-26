let valorAny : any;
valorAny = 'teste';
valorAny = 1;

let valorUnknown : unknown;
valorUnknown = 'teste';
valorUnknown = 1;

let texto : string;
texto = valorAny;
/* Não funciona
texto = valorUnknown; */

/* Funciona */
if (typeof valorUnknown === 'string') {
    texto = valorUnknown;
}

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500);
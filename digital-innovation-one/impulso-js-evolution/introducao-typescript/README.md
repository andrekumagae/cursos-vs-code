# Introdução ao Typescript

Aula para aprender conceitos de typescript.

# Passo-a-passo

Inicializar o node e suas dependências:

```
npm init
npm install -g typescript
npm install -g lite-server
```

Adicione um script para inicializar o lite-server no arquivo package.json:

```
"start": "lite-server"
```

Para executá-lo, basta digitar:

```
npm start
```

Para criar o arquivo tsconfig.json:

```
tsc --init
```

E crie um script watch para compilar erros em tempo real:

```
"watch": "tsc --watch"
```

Para rodá-lo, use o comando:

```
npm run watch
```

## Sintaxe em typescript

Quando atribuimos um elemento por id, temos que informar que está vindo de um HTML, como os exemplos do arquivo app.ts:

```
let input1 = document.getElementById('input1') as HTMLInputElement;
```

A tipagem em parâmetros de função é ao contrário do que normalmente usamos em outras linguagens. O retorno dela é declarado depois de fechar os parênteses:

```
function adicionarNumero(
   numero1: number, 
   numero2: number, 
   devePrintar: boolean, 
   frase: string): number{}
```
## Callback

Podemos inserir funções como parâmetreos dentro de funções. Perceba no trecho abaixo:´

```
function somarValoresETratar(numero1: number, numero2: number, callback: (numero3: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
```

O terceiro parâmetro callback pode ser uma função qualquer, que recebe um número e retorna outro número. Usamos como exemplo as duas funções abaixo:

```
function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number {
    return numero / numero;
}
```

E mostramos no log chamando a 1ª função criada:

```
console.log(somarValoresETratar(1,3, aoQuadrado));
console.log(somarValoresETratar(1,3, dividirPorEleMesmo));
```

## Diferença entre tipo any e unknown

Os tipos any e unkwnown podem receber qualquer outro tipo:

```
let valorAny : any;
valorAny = 'teste';
valorAny = 1;

let valorUnknown : unknown;
valorUnknown = 'teste';
valorUnknown = 1;
```

Porém, o tipo unknown só pode atribuir seu valor a otroutra variável através de uma asserção (teste):

```
let texto : string;
texto = valorAny;
/* Não funciona
texto = valorUnknown; */

/* Funciona */
if (typeof valorUnknown === 'string') {
    texto = valorUnknown;
}
```

## Tipo never

Usamos o retorno never quando pensamos em uma situação que não ocorra, como por exemplo um erro.

```
function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500);
```

## Propriedades do arquivo tsconfig.json

### target

Usado para configurar para qual versão do ECMA Script rodará o seu código. Importante para que tenha compatibilidade com navegadores desatualizados.
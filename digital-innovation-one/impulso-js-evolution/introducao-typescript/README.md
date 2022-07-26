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

A tipagem em parâmetros de função é ao contrário do que normalmente usamos em outras linguagens:

```
function adicionarNumero(
   numero1: number, 
   numero2: number, 
   devePrintar: boolean, 
   frase: string)
```

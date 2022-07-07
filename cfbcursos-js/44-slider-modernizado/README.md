# Exercício 44 - Slider modernizado

Nesse exercício pratiquei a otimização do exercício 43 do slider, aplicando algumas funções.

Link: [Curso de Javascript #44 - Modernizando o Slider
](https://www.youtube.com/watch?v=yMV-7evi9U0)

## Código



### Variáveis

**vetorImagens** = Vetor que carrega as imagens do nosso slide;

**slider** = Controla a div **dvSlider** pelo método **getReferenceByID**;

**imagemAtual** = Valor da imagem atual no vetor;

**máximoDeImagens** = Valor máximo de imagens que vou ter no meu vetor;

**tempoDeCarregamento** =  Irá incrementar a porcentagem de carregamento da div dvBarra para dar um efeito visual de loading de tempo entre uma imagem e outra;

**statusBarra** = Controla a div **dvBarra** pelo método **getReferenceByID**;

**tempoTroca** = Controla o tempo de mudança das imagens;



### preCarregamento()

Carrega as imagens em um array através de um loop for;



### carregaImagens()

Usa essas imagens como fundo da div.



### inicia()

* Chama a função preCarregamento;
* Define qual é o valor inicial de **imagemAtual** e o **máximoDeImagens** com base no tamanho do vetor;
* Pega a referência da div **dvSlider **pelo id e guarda na variável **slider** para que ela possa controlar as imagens de fundo do nosso slide;
* Pega a referência da div **dvBarra **pelo id e guarda na variável **nívelBarra** para que ela possa controlar o nível de carregamento da barra na função troca;
* Chama a função carregaImagens usando como argumento a variável **imagemAtual**;
* Inicia a variável **tempoTroca** com 0 após carregamento da imagem e chama a função **anima()** para a animação da barra e das imagens;



### troca(dir)

* Inicia o **tempoTroca** para 0 quando é chamada, para que a barra de loading zere;
* Incrementa a **imagemAtual** com o argumento **dir** passado, que vem dos botões como -1  para recuar ou 1 para avançar imagem;
* Estrutura if-else para saber a posição da **imagemAtual**. Caso seja maior que o **máximoDeImagens**, volta pro início. Caso seja menor que 0, vai pra posição **máximoDeImagens**, que é a última.
* Chama a função **carregaImagens** passando a **imagemAtual** como argumento;



### anima()

* Incrementa o **tempoTroca**;
* Se ele for maior que 500, passsa a valer 0 e passa o argumento 1 para a função troca para que avance uma imagem.
* A variável **tempoDeCarregamento** divide a variável **tempoTroca** por 5. Isso serve para ter um valor decimal;
* Esse valor será passado para a div pela variável **statusBarra** e fará este efeito de loading;
* Chama a função **window.requestAnimationFrame** recursivamente para que a anima realize este efeito de loading até atingir 500, que no caso é o width máximo.



### window.addEventListener

Função que carrega a função inicia antes do loading da página.



### body

Possui divs com os seguintes ids:

**dvSlider** = container do slide;

**btSlider** = Botões de recuar e avançar imagens.

**dvLoad** = Container da barra de loading;

**dvBarra** = Estilização da barra que carrega conforme a função **anima()**;
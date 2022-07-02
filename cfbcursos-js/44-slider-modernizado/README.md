# Exercício 44 - Slider modernizado

Nesse exercício pratiquei a otimização do exercício 43 do slider, aplicando algumas funções.

Link: [Curso de Javascript #44 - Modernizando o Slider
](https://www.youtube.com/watch?v=yMV-7evi9U0)

## Funções



### preCarregamento

Carrega as imagens em um array através de um loop for;



### carregaImagens

Usa essas imagens como fundo da div.



### inicia

* Chama a função preCarregamento;
* Define qual é o valor inicial de imagemAtual e o máximoDeImagens com base no tamanho do vetor;
* Aplica o id divslider à variável slider;
* Chama a função carregaImagens;
* Aplica o temporizador de 2 segundos através da função troca.



### troca

* A função recebe um parâmetro inteiro para informar qual é a direção das imagens, seja avançá=las ou recuá-las;
* Zera a variável de contador;
* Incrementa imagemAtual com o parâmetro passado da função;
* Verifica se chegou a última imagem para ficar em looping;
* Carrega a próxima imagem através da função carregaImagens passando como parâmetro a variável imagemAtual que informa o índice dela.



### window.addEventListener

Função que carrega a função inicia antes do loading da página.
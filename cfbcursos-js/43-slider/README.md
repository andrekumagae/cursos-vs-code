# Exercício 43 - Slider

Nesse exercício pratiquei a criação de um slider de imagens com temporizador de 2 segundos.

Link: [Curso de Javascript #43 - Slider em Javascript
](https://www.youtube.com/watch?v=ASQbj_0qC7w)

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

* Incrementa imagemAtual para passar para a próxima imagem do vetor;
* Verifica se chegou a última imagem para ficar em looping;
* Carrega a próxima imagem através da função carregaImagens passando como parâmetro a variável imagemAtual que informa o índice dela.



### window.addEventListener

Função que carrega a função inicia antes do loading da página.
programa {
  funcao inicio() {
    //Declaração de variaveis
    inteiro pontuacao
    //Entrada de dados
    escreva("Qual foi sua pontuação? ")
    leia(pontuacao)
    se( pontuacao <= 10){
      escreva("Se deu mal")
    }
    se(pontuacao > 10 e pontuacao <= 100){
       escreva("Eu acredito que voce pode ser melhor do que isso :D")
    }
    se(pontuacao > 100 e pontuacao <= 200){
      escreva("Muito bem!")
    }
    se( pontuacao > 200){
      escreva("SUPIMPA!!!")
    }
  }
}

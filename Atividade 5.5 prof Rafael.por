programa {
  funcao inicio() {
    //Declaração de variaveis
    real prova1, prova2, prova3, peso1 = 0.4, peso2 = 0.6, peso3 = 1, calculo, mediaFinal, divisoria = 2
    //Entrada de dados
    escreva("Qual foi sua nota na primeira prova? ")
    leia(prova1)
    escreva("Qual foi sua nota na segunda prova? ")
    leia(prova2)
    escreva("Qual foi sua nota na terceira prova? ")
    leia(prova3)

    //Processamento, calculo
    calculo = prova1 * peso1 + prova2 * peso2 + prova3 * peso3
    mediaFinal = calculo / divisoria
    //Saida de dados
    escreva("Sua media final é: ", mediaFinal)
    se(mediaFinal >= 7){
      escreva("\nParabens você foi aprovado!")
    }senao{
      escreva("\nVocê reprovou!")
    }
  }
}

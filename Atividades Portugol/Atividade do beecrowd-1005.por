programa {
  funcao inicio() {
    //Declaraçao de variaveis
    real nota1, nota2, somaMedia, pontuacaoAvaliacao1 = 3.5, pontuacaoAvaliacao2 = 7.5, divisoria = 11, media
    
    //Entrada de dados
    escreva("Sua nota na primeira avaliação foi: ")
    leia(nota1)

    escreva("sua nota na segunda avaliação foi: ")
    leia(nota2)

    //Processamento, calculo, logica
    somaMedia = nota1 * pontuacaoAvaliacao1 + nota2 * pontuacaoAvaliacao2
    media = somaMedia / divisoria


    //Saida de dados
    escreva("MEDIA = ",media)



  }
}

programa {
  funcao inicio() {

    //Declaração de variaveis
    real a, b, c, somaMedia, media

    //Entrada de dados
    escreva("Primeira nota do aluno: ")
    leia(a)

    escreva("Segunda nota do aluno: ")
    leia(b)

    escreva("Terceira nota do aluno: ")
    leia(c)

    //Processamento, calculo
    somaMedia = a * 2 + b * 3 + c * 5
    media = somaMedia / 10 

    //Saida de dados
    escreva("MEDIA = ", media)
  }
}

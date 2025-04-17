//Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), 
//faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!".

programa {
  funcao inicio() {
    
    //Declaração de variaveis
    real notaAvaliacao1, notaAvaliacao2, notaAvaliacao3
    real media
    inteiro divisoria = 3
    real resultado
    //Entrada de dados
    escreva("Digite sua primeira nota: ")
    leia(notaAvaliacao1)
    escreva("Digite sua segunda nota: ")
    leia(notaAvaliacao2)
    escreva("Digite sua terceira nota: ")
    leia(notaAvaliacao3)

    //Saida de dados
    resultado = notaAvaliacao1 + notaAvaliacao2 + notaAvaliacao3 
    media = resultado / divisoria
    se(media >= 7){
      escreva("Aprovado!")
    }
    }

  }
}

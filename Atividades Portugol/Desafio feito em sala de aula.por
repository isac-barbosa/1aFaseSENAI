
programa {
  funcao inicio() {
    //Declaração de variaveis
    real maca = 1.5, laranja = 2, banana = 1.2, pera = 0.5, bergamota = 1, recibo, calculo
    inteiro quantidadeMaca, quantidadeLaranja, quantidadePera, quantidadeBanana, quantidadeBergamota

    //Entrada de dados
    escreva("Quantas maçãs voce pegou? ")
    leia(quantidadeMaca)

    escreva("Quantas laranjas voce pegou? ")
    leia(quantidadeLaranja)

    escreva("Quantas bananas voce pegou? ")
    leia(quantidadeBanana)

    escreva("Quantas peras voce pegou? ")
    leia(quantidadePera)

    escreva("Quantas bergamotas voce pegou? ")
    leia(quantidadeBergamota)


    calculo = maca * quantidadeMaca + laranja * quantidadeLaranja + bergamota * quantidadeBergamota
    recibo = banana * quantidadeBanana + pera * quantidadePera + calculo
    //Saida de dados
    se(quantidadeMaca == 1){
      escreva("Voce comprou então: ","\n", quantidadeMaca, " maçã ", "= ", quantidadeMaca * maca, "R$")
    }senao{
        se(quantidadeMaca > 0){
          escreva("Voce comprou então: ","\n", quantidadeMaca, " maçãs ", "= ", quantidadeMaca * maca, "R$")
        }
    }
    se(quantidadeLaranja == 1){
      escreva("\n",quantidadeLaranja,  " laranja ", "= ", quantidadeLaranja * laranja, "R$")
    }senao{
      se(quantidadeLaranja > 0){
        escreva("\n",quantidadeLaranja,  " laranjas ", "= ", quantidadeLaranja * laranja, "R$")
      }
    }
    se(quantidadeBanana == 1){
      escreva("\n", quantidadeBanana, " banana ", "= ", quantidadeBanana * banana, "R$")
    }senao{
      se(quantidadeBanana > 0){
        escreva("\n", quantidadeBanana, " bananas ", "= ", quantidadeBanana * banana, "R$")
      }
    }
    se(quantidadePera == 1){
      escreva("\n", quantidadePera, " pera ", "= ", quantidadePera * pera, "R$")
    }senao{
      se(quantidadePera > 0){
        escreva("\n", quantidadePera, " peras ", "= ", quantidadePera * pera, "R$")
      }
    }
    se(quantidadeBergamota == 1){
      escreva("\n", quantidadeBergamota, " bergamota ", "= ", quantidadeBergamota * bergamota, "R$")
    }senao{
      se(quantidadeBergamota > 0){
        escreva("\n", quantidadeBergamota, " bergamotas ", "= ", quantidadeBergamota * bergamota, "R$")
      }
    }
    escreva("\nSua compra deu o total de: (R$)", recibo)
    se(recibo > 0){
      escreva("\nOBRIGADO PELA COMPRA!")
    }
  }
}

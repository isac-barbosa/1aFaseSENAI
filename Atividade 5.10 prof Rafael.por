programa {
  funcao inicio() {
    inteiro maca 
    real menosDeUmaDuzia, maisDeUmaDuzia
    escreva("Quantas maçãs voce vai comprar? ")
    leia(maca)
    se(maca < 12){
      menosDeUmaDuzia = maca * 0.30
      escreva("Sua compra deu o total de: ", menosDeUmaDuzia,"(R$)")
    }senao{ se(maca >=12){
      maisDeUmaDuzia = maca * 0.25
      escreva("Sua compra deu o total de: ", maisDeUmaDuzia, "(R$)")
    }
    }
  }
}

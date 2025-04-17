programa {
  funcao inicio() {
    real alturaEmMetros, masculino = 72.7, feminino = 62.1, calculo, calculoTotal, genero, calculoFeminino, calculoMasculino, divisoriaMasc = 58
    //Entrada de dados
    escreva("Digite seu genero sendo (1) para (feminino) e (2) para (masculino): ")
    leia(genero)
    escreva("Digite a sua altura: ")
    leia(alturaEmMetros)
    se(genero == 1){
      calculoFeminino = (feminino * alturaEmMetros) - 44.7
      escreva("Seu peso ideal é: ", calculoFeminino)
    }senao{
      calculoMasculino = 72.7 * alturaEmMetros
      calculoTotal = calculoMasculino - 58
      escreva("Seu peso ideal é: ", calculoTotal)
    }
  }
}

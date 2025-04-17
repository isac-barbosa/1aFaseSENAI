programa {
  funcao inicio() {
    inteiro lados
    real medidaEmCentimetros, calculoTriangulo, calculoQuadrado, calculoPentagono, base
    escreva("Quantos lados tem o seu poligono? ")
    leia(lados)
    se(lados < 5){
      escreva("Quanto mede a lateral em centimetros: ")
    leia(medidaEmCentimetros)
    }
    se(lados == 3 ){
      calculoTriangulo = (medidaEmCentimetros * medidaEmCentimetros) / 2
      escreva("TRIANGULO \nÁrea: ", calculoTriangulo,"cm2")
    }
    se(lados == 4){
      calculoQuadrado = lados * lados
      escreva("QUADRADO\nÁrea: ", calculoQuadrado,"cm")
    }
    se(lados == 5){
      escreva("PENTÁGONO!")
    }
    se(lados < 3){
      escreva("NÃO É UM POLÍGONO")
    }
    se(lados > 5){
      escreva("POLÍGONO NÃO IDENTIFICADO")
    }
  } 
}

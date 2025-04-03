programa {
  funcao inicio() {
    inteiro l1, l2, l3
    escreva("Digite quanto mede o primeiro lado do seu triangulo: ")
    leia(l1)
    escreva("Digite quanto mede o segundo lado: ")
    leia(l2)
    escreva("Digite quanto mede o terceiro lado: ")
    leia(l3)
    se(l1==l2 e l1==l3){
      escreva("Equilatero")
    }
    se(l1!=l2 e l1!=l3 e l2!=l3){
      escreva("Escaleno")
    }
    se(l1!=l2 e l2==l3 ou 
      l2!=l1 e l1==l3 ou 
      l3!=l1 e l1==l2){
      escreva("Isóceles")
    }
  }
}
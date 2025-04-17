programa {
  funcao inicio() {
    inteiro mesDoAno
    escreva("Digite um mes do ano: ")
    leia(mesDoAno)
    se(mesDoAno == 3 ou mesDoAno == 4 ou mesDoAno == 5){
      escreva("Nesta época do ano a estação predominante é o outono")
    }senao{
      se(mesDoAno == 6 ou mesDoAno == 7 ou mesDoAno == 8){
        escreva("Nesta época do ano a estação predominante é o inverno")
      }senao{
        se(mesDoAno == 9 ou mesDoAno == 10 ou mesDoAno == 11){
          escreva("Nesta época do ano a estação predominante é a primavera")
        }senao{
          se(mesDoAno == 12 ou mesDoAno == 1 ou mesDoAno == 2){
            escreva("Nesta época do ano a estação predominante é o verão")
          }
        }
      }
    }
  }
}

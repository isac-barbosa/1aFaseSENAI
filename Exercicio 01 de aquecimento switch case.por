programa {
  funcao inicio() {
    inteiro diaDaSemana

    escreva("Digite um numero de 1 a 7: ")
    leia(diaDaSemana)
    se(diaDaSemana == 1){
      escreva("Domingo")
    }senao{
      se(diaDaSemana == 2){
        escreva("Segunda-feira")
      }senao{
        se(diaDaSemana == 3){
          escreva("Terça-feira")
        }senao{
          se(diaDaSemana== 4){
            escreva("Quarta-feira")
          }senao{
            se(diaDaSemana == 5){
              escreva("Quinta-feira")
            }senao{
              se(diaDaSemana == 6){
                escreva("Sexta-feira")
              }senao{
                se(diaDaSemana == 7)
                escreva("Sabado")
              }
            }
          }
        }
      }
    }

  }
}

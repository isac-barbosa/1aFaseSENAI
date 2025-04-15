programa {
  funcao inicio() {
    inteiro valor1, valor2, valor3
    escreva("Digite um numero: ")
    leia(valor1)
    escreva("Digite um segundo numero: ")
    leia(valor2)
    escreva("Digite um terceiro numero: ")
    leia(valor3)

    se(valor1 > valor2 e valor1 > valor3){
      escreva("O maior numero é: ", valor1)
    }senao{
      se(valor2 > valor1 e valor2 > valor3){
        escreva("O maior número é: ", valor2)
      }senao{
        se(valor3 > valor2 e valor3 > valor1){
          escreva("O maior numero é: ", valor3)
        }
      }
    }
  }
}

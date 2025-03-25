programa {
  funcao inicio() {
    //Declaração de variaveis
    inteiro numeroRegistro, horasTrabalhadas
    real valorHoraTrabalhada, salario

    //Entrada de dados
    escreva("Digite seu numero de registro: ")
    leia(numeroRegistro)

    escreva("Digite quantas horas voce trabalha: ")
    leia(horasTrabalhadas)

    escreva("Digite o seu salario por hora: ")
    leia(valorHoraTrabalhada)

    //Processamento, calculo
    salario = horasTrabalhadas * valorHoraTrabalhada

    //Saida de dados
    escreva("Numero = ",numeroRegistro,"\n")
    escreva("Salario = R$ ", salario)







  }
}

//Faça um programa que solicite o salário e os anos de serviço de um funcionário. 
//Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

programa {
  funcao inicio() {
    real salario
    inteiro anosDeServico
    real salarioNovo
    real percentualSalario
    escreva("Digite o seu salario R$: ")
    leia(salario)
    escreva("Quantos anos de serviço voce tem? ")
    leia(anosDeServico)

    se(anosDeServico >5){
     salarioNovo = salario / 100
     percentualSalario = salarioNovo * 5 + salario
      escreva("Parabéns voce ganhou um bonus de 5%  \nSeu salario seu salario atual é: R$", percentualSalario)


    }
  }
}

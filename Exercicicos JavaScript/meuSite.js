function exercicio1(){
    let num1 = Number(prompt("Digite um numero"))
    let num2 = Number(prompt("Digite outro numero"))
    let soma = num1 + num2
    alert(`A soma destes números é: ${soma}`)
}
function exercicio2(){
    let num1 = Number(prompt("Digite um numero"))
    let num2 = Number(prompt("Digite outro numero"))
    let media = (num1 + num2) / 2
    alert(`A media destes números é: ${media}`)
}
function exercicio1Lista(){
    let nome = prompt("Digite seu nome:")
    alert(`Olá ${nome} Seja muito bem-vindo(a)!` )
}
function exercicio2Lista(){
    let num1 = Number(prompt("Digite um numero"))
    let num2 = Number(prompt("Digite outro numero"))
    let soma = num1 + num2
    alert(`A soma destes números é: ${soma}`)
}
function exercicio3(){
let farenheit
let celsius = prompt("Digite uma temperatura em graus celsius")
farenheit = (celsius * 9/5) + 32
alert(`Esta temperatura é ${farenheit} graus farenheit`)
}
function exercicio4(){
    let num = Number(prompt("Digite um numero"))
    if(num % 2 == 0){
        alert("Número par")
    }
    else{
        alert("Número ímpar")
    }
}
function exercicio5(){
    let num1 = Number(prompt("Digite sua primeira nota"))
    let num2 = Number(prompt("Digite sua segunda nota"))
    let num3 = Number(prompt("Digite sua ultima nota"))
    let media = (num1 + num2 + num3) / 3
    alert(`A media desse aluno é: ${media}`)
}
function exercicio6(){
    let peso = prompt("Digite seu peso")
    let altura = prompt("Digite sua altura")
    calculo = altura^2
    imc = peso / calculo
    alert(`O seu imc é de: ` + imc)
}
function exercicio8(){
    let ano = Number(prompt("Insira um ano"))
    if(ano % 4 == 0 || ano % 400 == 0){
        alert("Ano bissexto")
    }
    else{
        alert("Não é ano bissexto")
    }
}
function exercicio1Lista2(){
}
function exercicio3Lista2(){
    let min = 1
    let max = 4
    let frase1 = "Brabox"
    let frase2 = "Pika de cachorro"
    let frase3 = "Galatico"
    //Math.cell()-> Arredonda pra cima
    //Math.floor()-> Aredonda pra baixo
    //Math.round()-> Arredonda pro mais proximo
    let numero = Math.floor(Math.random() * (max - min) + min)
    let nome = prompt("Digite seu nome para ganhar um apelido")
    if(numero == 1){
        alert(nome + frase1)
    }
    else if(numero == 2){
        alert(nome + frase2)
    }
    else if(numero == 3){
        alert(nome + frase3)
    }
}
function exercicio4Lista2(){
    let signo = prompt("Digite seu signo: ")
    if(signo == "leão"){
        alert("Hoje é um ótimo dia para buscar novos desafios, Leão!")
    } 
    if(signo == "aries"){
        alert("Não espere acontecer faça acontecer impulso é seu sobrenome, Áries!")
    }
    else if(signo == "capricornio"){
        alert("Enquanto uns sonham com sucesso trabalhe por ele, Capricórnio!")
    }
    else{
        alert("Hoje não é seu dia")
    }
}
function exercicio10Lista2(){
    let soma
    let escolha = (prompt("Escolha par ou ímpar"))
    let num = Number(prompt("Digite um numero de 0 a 10"))
    let numero = Math.random() * 100
    let formula = Math.floor(Math.random() * (100 - 0) + 0)
    soma = num + formula
    alert("A soma deles é "+ soma)
    if(escolha == "par" && soma % 2 == 0){
        alert("Parabens voce ganhou")
    }
    else if(escolha == "ímpar" && soma % 2 !== 0){
        alert("Parabens voce ganhou")
    }
    else{
        alert("Voce perdeu")
    }
}
function exercicio14Lista2(){

}
function exercicio15Lista2(){
    let max = 100
    let min = 1
    let numeroaleatorio = Math.floor(Math.random() * (max - min) + min)
    let numero = Number(prompt("Tente adivihar o numero sorteado de (1 a 100)"))
    if(numeroaleatorio == numero){
        alert("Parabéns voce acertou")
    }
    else if( numeroaleatorio != numero){
        alert("Tente novamente")
    }
}

alert("Bem vindo a mini calculadora")
let numero1 = Number(prompt("Digite um numero:"))
let numero2 = Number(prompt("Digite outro numero"))
let operação = prompt("Qual operação voce deseja realizar: soma, multiplicação, subtração ou divisão?")
let resultado
if(operação == "soma" ){
    resultado = numero1 + numero2
    console.log("O resultado da sua soma é: ", resultado)
}else if(operação == "multiplicação"){
    resultado = numero1 * numero2
    console.log("O resultado da sua multiplicação é: ", resultado)
}else if(operação == "subtração"){
    resultado = numero1 - numero2
    console.log("O resultado da sua subtração é: ", resultado)
}else if(operação == "divisão"){
    resultado = numero1 / numero2
    console.log("O resultado da sua divisão é: ", resultado)
}else{
    console.log("Operação invalida")
}
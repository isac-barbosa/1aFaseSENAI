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
let contador = 0
function exercicio14Lista2(){
    contador++
}
function continuaçãoExercicioLista2(){
    alert("Voce clicou " + contador + "vezes")
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
function gerarcaracter(){
    const caracteres = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
    let numeroaleatorio = Math.floor(Math.random() * caracteres.length)
    return caracteres.charAt(numeroaleatorio)
}
function gerarsenha(){
    //Sem estrutura de repetição
let quantidade = Number(prompt("Informe quantos caracteres sua senha deve ter"))
    if(quantidade ==1){
    alert("Senha: "
        +gerarcaracter())
    }else if(quantidade == 2){
        alert("Senha: "
            +gerarcaracter()
            +gerarcaracter())
    }else if (quantidade == 3){
        alert("Senha: "
            +gerarcaracter()
            +gerarcaracter()
            +gerarcaracter())
    }else if (quantidade == 4){
        alert("Senha: "
            +gerarcaracter()
            +gerarcaracter()
            +gerarcaracter()
            +gerarcaracter())
    }else if (quantidade == 5){
        alert("Senha: "
            +gerarcaracter()
            +gerarcaracter()
            +gerarcaracter()
             +gerarcaracter()
             +gerarcaracter())
    }else if (quantidade == 6){
        alert("Senha: "
            +gerarcaracter()
            +gerarcaracter()
            +gerarcaracter()
            +gerarcaracter()
            +gerarcaracter()
            +gerarcaracter())
}   else if(quantidade > 6){
    alert("Senha indisponivel")
}
}
function exercicio20Lista2(){
}
function exercicio22Lista2(){
    let resposta1 = prompt(`Quantos anos tem o Planeta Terra
                          (a) 13,8 bilhões de anos
                          (b) 14,5 bilhões de anos
                          (c) 15 bilhões de anos`)
    let resposta2 = prompt(`Qual o maior osso do corpo humano
                          (a) rádio
                          (b) calcâneo
                          (c) fêmur `)
    let resposta3 = prompt(`Qual o animal que carrega a casa nas costas
                          (a) tartaruga
                          (b) caracol
                          (c) tatu`)
    if(resposta1 == "a" && resposta2 == "c" && resposta3 == "b"){
        alert("Parabéns você acertou 3/3")
    }
    else if(resposta1 != "a" && resposta2 == "c" && resposta3 == "b" || resposta1 == "a" && resposta2 !="c" && resposta3 == "b" || resposta1 == "a" && resposta2 == "c" && resposta3 != "b"){
        alert("Você acertou 2/3")
    }
    else if(resposta1 != "a" && resposta2 != "c" && resposta3 == "b" || resposta1 != "a" && resposta2 =="c" && resposta3 != "b" || resposta1 == "a" && resposta2 != "c" && resposta3 != "b"){
        alert("Você acertou 1/3")
    }
}
function exercicio30Lista2(){
    let frase1 = "Acredite em si mesmo!"
    let frase2 = "Não desista supere!"
    let frase3 = "A persistência leva ao sucesso"
    let numero = Math.floor(Math.random() * (4 - 1) + 1)
    if( numero == 1){
        alert(frase1)
    }
    else if(numero == 2){
        alert(frase2)
    }
    else if (numero == 3){
        alert(frase3)
    }
}
function exercicio32Lista2(){
    let opcao1 = "sim"
    let opcao2 = "não"
    let opcao3 = "talvez"
    let = prompt("Faça perguntas de (sim) e (não)")
    let numero = Math.floor(Math.random() * (4 - 1) + 1)
    if( numero == 1){
        alert(opcao1)
    }
    else if(numero == 2){
        alert(opcao2)
    }
    else if (numero == 3){
        alert(opcao3)
    }
}
function mostrarnumerospares(){
    let contador = 2
    while(contador <= 20){
        alert("Contador igual a "+ contador)
        contador += 2

    }
}
function mostrarnumerosimpares(){
    let contador = 1
    while(contador <= 20){
        alert("Contador igual a "+ contador)
        contador += 2

    }

}
function olamundo(){
    let contador = 1
    while(contador <= 5){
        alert("Ola mundo")
        contador++            
    }   
}
function contarde5em5(){
    let contador = 0
    while(contador <= 50){
        alert("Contador igual a "+ contador)
        contador += 5

    }
}
function diminuirde10em10(){
    let contador = 100
    while(contador >= 0){
        alert("Contador igual a "+ contador)
        contador -= 10
    }
}
function mostrarmultiplosde3(){
    let contador = 3
    while(contador % 3 == 0 && contador <= 30){
        alert("Contador igual a "+ contador)
        contador += 3
    }
    
}
function mostrarnumerosaoquadrado(){
    let contador = 0
    while (contador <= 10){
        alert("Número " + contador + "\n" + "Número elevado ao quadrado: " + contador **2)
        contador++
    }

}
function mostrarnumerosaocubo(){
    let contador = 0
    while (contador <= 10){
        alert("Número " + contador + "\n" + "Número elevado ao cubo: " + contador **3)
        contador++
    }

}
function contarde1a15mostrandopar(){
    let contador = 1
    while(contador <=15){
        if(contador % 2 == 0){
        alert("Número " + contador + " par")
        }else (alert("Número " + contador + " ímpar"))
        contador++
    }
}
function imprimirdivisiveispor4(){
    let contador = 1
    while(contador <=100){
        let resultado
        resultado = contador % 4
        if(resultado == 0){
            alert("O número " + contador + " é divisivel por 4")
            }
        contador++
    }
}
function loop(){
    let contador = 1
    while(contador <= 10){
        alert("Contador igual a "+ contador)
        contador ++
    }
}
function contaate20efrasemultiplosde3(){
    let contador = 0
    while(contador <= 20){
        if(contador % 3 == 0)
        alert(contador + " FIZZ")
        else{
            alert(contador)
        }
        contador ++

    }
}
function contaate20efrasemultiplosde5(){
    let contador = 0
    while(contador <= 20){
        if(contador % 5 == 0)
        alert(contador + " BUZZ")
        else{
            alert(contador)
        }
        contador ++
    }
}
function somadosnumerosde1a10(){
    let contador = 1
    let soma = 0

    while(contador <= 10){
        soma =  soma + contador
        alert("Contador: " + contador + " soma: " +soma)

        contador++
   }
   alert(soma)
}
function calcularmultiplicaçãode1a5(){
    let contador = 1
    let soma = 1

    while(contador <= 5){
        soma =  soma * contador
        alert("Contador: " + contador + " resultado: " +soma)

        contador++
    }
}
function numerosparesde1a50(){
    let contador = 1
    let soma = 1
    while(contador <= 50){ 
        alert("Os numeros: " + contador + " existem: " + soma + " numeros pares")
        if(contador % 2 == 0){
            soma++
        
        }
        contador ++   
    }
}
function multiplosde6ate100(){
let soma6 = 0
let contador = 1
    while(contador <= 100){ 
        alert("contagem: " + contador + " multiplos de 6: "  + soma6)
        if(contador % 6 == 0 ){
        soma6++
        }
        contador++
    }
}
function contarpulandoosmultiplosde4(){
let contador = 1
    while(contador <= 30){
        if(contador % 4 != 0){ 
        alert(contador)
        }
        else{

        }
        contador++
    }
}
function somarde1a100sempassarde400(){
let contador = 1
let soma = 0
    while(contador <= 100 && soma <= 400){
        console.log(contador)
        soma = soma + contador
        alert(`contador: ` + contador + ` soma: ` + soma)

        contador++
    }
    alert("Soma: " + soma)
}
function simularumasenha(){
}



function contarate50(){
    let contador = 1
    while(contador <=30){
        alert(contador)
        contador++
    } 
}
function exibirmensagemno50(){
    let contador = 1
        while(contador <= 100){
            if(contador == 50){
                alert("De seu 100% mesmo não estando 100%")
            }else{
                alert(contador)
            }
            contador++
        }
}
function contarate10(){
    let contador = 10
    while(contador >= 0){
        alert(contador)
        contador -= 1
    }
    alert("LANÇAMENTO") 
}
function contarate30exibindomensagem(){


    let contador = 1
        while(contador <= 30){
            if(contador % 7 == 0){
                alert("Pulando")
            }else{
                alert(contador)
            } 
            contador++
        }
}
function contarde1a20commensagem(){
    let contador = 1
        while(contador <= 20){
            if(contador % 2 == 0 || contador % 3 == 0){
                alert("ESPECIAL")
            }else{
                alert(contador)
            }
            contador++
        }
}
function dizerseémenorque5(){
    let contador = 1
    while( contador <= 10){
        if(contador < 5){
            alert(contador + ` menor que 5`)
        }else if(contador == 5){
            alert(contador + ` igual a 5`)
        } if(contador > 5){
            alert(contador + ` maior que 5`)
        }
        contador++
    }
}
function fazerumloopatenumeroaleatorio(){
}
function mostrardivisoresdo24(){
    let contador = 1
        while(contador <= 50){
            if(contador % 5 == 0){
                alert(contador + ` é divisivel por 5`)
            }else{
                alert(contador)
            }
            contador++
        }
}
function somarnumerosimpares(){
    let contador = 1
    let soma = 0
    while(contador <=20){
        if(contador % 2 != 0){
            soma = soma + contador
            alert(`contagem: `+ contador + ` soma: `+ soma)
        }
        contador += 2
    }
}
function contarmultiplosde9entre1e100(){
    let contador = 1
        while(contador <= 100){
            if(contador % 9 == 0){
                alert(contador + ` é multiplo de 9`)
        }
        contador++
    }
}
function contarde50a0osquenãosãomultiplosde5(){
    let contador = 50
    while(contador >= 0){
        if(contador % 5 !== 0 ){
            alert(contador)
        }
        contador -=1
    }
}

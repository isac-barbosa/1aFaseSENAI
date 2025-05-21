function cadastrar(){
    let nome = document.getElementById("name").value
    let idade = document.getElementById("age").value
    let tagresultado = document.getElementById("resultado")

    tagresultado.innerText = "Bem vindo ao nosso sistema "+ nome+ "," + " você tem "+ idade + "anos. " + "É um prazer ter você aqui!"
}
function calcularnotas(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    calculo = nota1 + nota2 + nota3 + nota4
    media = calculo / 4

    let resultadotag = document.getElementById("resultadomedia")
    resultadotag.innerText = "Sua média é: " + media
}
function calcularnotaepeso(){
    let nota1 = Number(document.getElementById("prova1").value)
    let peso1 = Number(document.getElementById("peso1").value)
    let nota2 = Number(document.getElementById("prova2").value)
    let peso2 = Number(document.getElementById("peso2").value)
    let nota3 = Number(document.getElementById("prova3").value)
    let peso3 = Number(document.getElementById("peso3").value)
    let nota4 = Number(document.getElementById("prova4").value)
    let peso4 = Number(document.getElementById("peso4").value)
  
    let soma = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4) 
    let somapeso = peso1 + peso2 + peso3 + peso4
    let total = soma  / somapeso
   
    let mediatag = document.getElementById("mediaresultado")
    mediatag.innerText = "Sua média total é: " + total
}
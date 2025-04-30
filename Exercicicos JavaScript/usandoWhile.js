
    let contador = 0
    while(contador <= 5){
        alert("Contador igual a "+ contador)
        contador += 1.5
    }
    alert("Voce ultrapassou o numero 5")

function gerarcaracter(){
    const caracteres = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
    let numeroaleatorio = Math.floor(Math.random() * caracteres.length)
    return caracteres.charAt(numeroaleatorio)
}//Exercicio 7 do meu site usando a estrutura de repetição
function gerarsenha(){
    let quantidade = Number(prompt("Informe quantos caracteres sua senha deve ter"))
    let senha = ``

    while(quantidade > 0){
        senha += gerarcaracter()
        quantidade--
    }
    alert("A senha é: " + senha)
}
    

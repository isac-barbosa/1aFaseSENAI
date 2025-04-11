let quantidadeDeItens = prompt("Quantos itens voce comprou?")
let valorDaCompra = prompt("Qual o valor da sua compra?")
if(quantidadeDeItens > 3 || valorDaCompra > 100){
    console.log("Desconto aplicado!")
}else{
    console.log("Sem desconto desta vez")
}


const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const produtos = [
 { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
 { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
 { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
 { nome: "Meias", preco: 9.9, categoria: "Roupas" },
 { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
]

//NUMEROS

//1
let numerosFiltrados = numeros.filter((numero) => numero > 10);
console.log(numerosFiltrados);
 
//2
let dobro = numeros.map( elemento => elemento * 2)
console.log(numeros)
console.log(dobro)

//3
let soma = numeros.reduce((acumulado,valoratural) => acumulado+valoratural, 0)
console.log(soma)

//4
let maiorNum = Math.max(...numeros)
console.log(maiorNum)

//5
let menorNum = Math.min(...numeros)
console.log(menorNum)

//6
let ordemCrescente = numeros.sort((a,b)=> a-b) //Pro .sort() funcionar é necessario realizar o calculo dentro do parenteses
console.log(ordemCrescente)

//7
let numerosImpares = numeros.filter((numero) => numero % 2 !== 0)
console.log(numerosImpares)

//8
let numerosMaiorQueTres = numeros.every(elemento => elemento > 3)
console.log(numerosMaiorQueTres)

//9
let numeroMaiorQue100 = numeros.some(elemento => elemento > 100)
console.log(numeroMaiorQue100)

//10
function calcularMedia(array){
    let soma = array.reduce((acumulador, atual) => acumulador += atual ,0)
    console.log( soma)
    return soma/array.length
}
console.log(calcularMedia(numeros))


//NOMES 

//1
nomes.sort()
console.log(nomes)

//2
let nomesFiltrados = nomes.filter( (elemento) => elemento.length > 5)
console.log(nomesFiltrados)

//3
let nomesMinusculo = nomes.map(palavra => {
    let [primeira, ...restante] = palavra
    let novaletra = primeira.toLowerCase()
    return novaletra + restante.join('') 
})
console.log(nomesMinusculo)

//4


//5
let Daniel = nomes
console.log(nomes.indexOf('Daniel'))


//6
// let quantidadeLetras = nomes[1].length
let somaLetras =nomes[0].length+nomes[1].length + nomes[2].length + nomes[3].length + nomes[4].length + nomes[5].length 
console.log(somaLetras)

//7
console.log(nomes.join(', '))


//PRODUTOS
//1
let produtosEletronicos = produtos.filter(produto => produto.categoria === "Eletrônicos");
console.log(produtosEletronicos)


//2
let nomesProduto = produtos.map(elemento => elemento.nome)
console.log(nomesProduto)

//3
let produtosDesconto = produtos.map(produtos => {
    return{
        nome:produtos.nome, 
        produtosDesconto: produtos.preco * 0.9
    }
})
console.log(produtosDesconto)

//4

total = (produtos[0].preco) + (produtos[1].preco) + (produtos[2].preco) + (produtos[3].preco)+ (produtos[4].preco)
console.log(total)
//5
let maiorValor = Math.max(...produtos.map(p => p.preco))
console.log(maiorValor)


//6

let valoresProdutos = produtos.map((elemento) => elemento.preco)
let numCresc = valoresProdutos.sort((a,b)=> a-b)
console.log(numCresc)


//7

//8
function buscarCategoria(Roupas){
    return produtos.filter(produtos => produtos.categoria === Roupas)
}
console.log(buscarCategoria)

//10
let valores = (produtos.map( elementos => elementos.preco))
maiorque5 = valores.every(elemento => elemento > 5)
console.log(maiorque5)



//Bonus

//4
let tudoJunto = [...nomes, ...numeros]
console.log(tudoJunto)
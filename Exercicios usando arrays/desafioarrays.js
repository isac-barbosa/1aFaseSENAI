
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
console.log(nomes[4])


//6
let quantidadeLetras = nomes[1].length
let soma =length+nomes[1].length + nomes[2].length + nomes[3].length + nomes[4].length + nomes[5].length 
console.log(quantidadeLetras)
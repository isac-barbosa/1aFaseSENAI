let nomes = ["João", "Clara", "Jonas", "Isac", "Beraldo", "Patrick"]
console.log(nomes[5]) /*Usei para pegar o nome na posição 5, lembrando que sempre começa do 0*/ 

console.log(nomes.length)/*Usei para pegar quantos elementos tem dentro da minha variavel */

nomes.forEach((element, index) => /*Uso para fazer uma interação denrto da minha variavel*/ 
{
    console.log(element + "@gmail.com")
})

nomesComSobrenome = nomes.map((nome) => { /*Usado para criar uma variavel com a nova mudança que você fez, nesse caso adicionei sobrenome pra todos eles*/ 
    return nome + " dos Santos"
})
console.log(nomesComSobrenome)
//12
let nomesFiltrados = nomes.filter((nome) => nome.length > 5) /*Usado para filtrar da forma que eu quiser*/
let findNome = nomes.find((nome) => nome.length > 5)
console.log(nomesFiltrados);

let numeros1 = [10,20,30,40,50,60,70,80,90, 100]
let numerosMultiplicado = numeros1.map(elemento => elemento *2)
console.log(numeros1)
console.log(numerosMultiplicado)
//14
// reduce ele tambem é de interação nós usamos (variavel acumulativo, valoratual) => interação que vai fazer, como que vai começar)
let soma = numeros1.reduce((acumulado,valoratual) => acumulado+valoratual, 0) 
console.log(soma)

let nomes2 = ["João", "Clara", "Jonas", "Isac", "Beraldo", "Patrick"]

let nomesvirgula = nomes2.reduce((acumulado, valoratual) => acumulado + "," + valoratual)
console.log(nomesvirgula)

let numeros = [10,20,30,40,50,60,70,80,90, 100]
let numerosinvertidos = numeros.map((elemento, index)=> {
    let tamanho = numeros.length - 1
   return numeros[tamanho-index]
})
console.log(numerosinvertidos)


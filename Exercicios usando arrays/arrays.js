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


// 15. Encontre o maior número de um array.
let numeros2 = [23,3,5,6,4,2,55,90,45,40,30,20,10]
let maiorNumero = Math.max(...numeros2) //Math.max pra encontrar o maior numero
console.log(maiorNumero)
//16. Encontre o menor número de um array.
let menorNumero = Math.min(...numeros2) //Math.min para encontrar o menor numero
console.log(menorNumero)

//18. Junte dois arrays em um só usando spread [...].
let array1 = ['teste', 'teste2']
let array2 = ['teste3', 'teste4']
let arrayJuntao = [...array1, ...array2]
//O spread serve pra separar a palavra de letra em letra criando um array com as letras separadas
console.log(arrayJuntao)

//19. Ordene um array de strings em ordem alfabética.

let palavras = ['casa', 'banana', 'abacate']; 
palavras.sort();

console.log(palavras)

//20. Ordene um array de números do maior para o menor.
let numeros3 = [10, 20 ,1000 ,90 ,50 ,60]
let numeros3Desc = []
console.log(numeros3Desc)
numeros3.sort((a,b)=> b-a)
console.log(numeros3)

// 21. Remova valores duplicados de um array.
let valores = ['Alex', 'Alex', 'João', 'João', 'Claudia', 'Maria']
let removerDuplicados = new Set([...valores])
let novoArray = [...removerDuplicados]
console.log(novoArray)

let arraySemDuplicados = []
for(let i=0; i< valores.length; i++){
    if(!arraySemDuplicados.includes(valores[i])){
        arraySemDuplicados.push(valores[i])
    }
}
console.log(arraySemDuplicados)

//22. Conte quantas vezes um valor aparece em um array.
let valores2 = ['Alex', 'Alex', 'João', 'João', 'Claudia', 'Maria']
let contador= 0
for(let i=0; i< valores.length; i++){
    if(valores2[i] == 'Alex'){
       contador++
    }
}
let quantasVezesApareceAlex = valores2.filter(valor=> valor === 'Alex').length
console.log(contador, quantasVezesApareceAlex)

// 23. Transforme todos os itens do array em uma única string separada por vírgulas com .join().
let usuarios = ['Alex', 'Joana', 'Carlos', 'João', 'Claudia', 'Maria']
console.log(usuarios.join(', '))


// 24. Substitua todas as ocorrências de "banana" por "maçã" em um array.
let frutas = ['Abacaxi', 'Laranja', 'Kiwi', 'Banana', 'Banana', 'Maçã']
let frutasNovo = frutas.map(fruta => fruta === 'Banana' ? 'Maçã' : fruta)
console.log(frutasNovo)

// 25. Encontre o índice de um valor específico com .indexOf().
let frutas2 = ['Abacaxi', 'Laranja', 'Kiwi', 'Caqui', 'Banana', 'Maçã']
console.log(frutas.indexOf('Kiwi'))

// 26. Crie um novo array contendo apenas as strings de um array com tipos mistos.
let mistos = ['Abacaxi', 'Laranja', 34, 322, {nome:'Alex', idade:22}]
let strings = mistos.filter(valor=> typeof valor === "string")
console.log(strings)

//27 Coloque a pimeira letra de cada palavra em maiuscula
let palavras2 = ["joão", "clara", "jonas", "isac", "beraldo", "patrick"]
let palavrasMaiusculo = palavras2.map(palavra => {
    let [primeira, ...restante] = palavra
    let novaletra = primeira.toUpperCase()
    return novaletra + restante.join('') //O join serve pra separar o valor seja por virgula hifen ou qualquer outro
})
console.log(palavrasMaiusculo)

//28 Verificar se todos os elementos são numeros com .every()
//O .every testa se todos os elementos atendem a regra
let elementos = [3,4,5,6,7,8]
let saonumeros = elementos.every(elemento => typeof elemento === "number")
console.log(saonumeros)

//29 Verifique se ao menos um numero é maior que 100 usando .some()
//.some usado pra testar se pelo menos um elemento atende a regra
let elementos2 = [33, 45, 500, 6, 7, 8]
let teste = elementos2.some(elemento => elemento > 100)
console.log(teste)

//30 "Achatamento": transforme um array com subarrays em um unico array plano (um nivel só)
let arraysdearrays = [32,54,67,[44,765,89]]
let arrayunico = arraysdearrays.flat() //Sem valor ele vai ate o nivel de profundidade 1 mas eu posso colocar quantos niveis de profundidade precisar
console.log(arrayunico)

//32 Crie uma função que recebe um array de numeros e retorna media 
let notas = [5,6,7,8]
function calcularMedia(array){
    let soma = array.reduce((acumulador, atual) => acumulador += atual ,0)
    console.log(soma)
    return soma/array.length
}
console.log(calcularMedia(notas))

//34 Rotacione os elementos de um array uma posição a direita
function rotacionar(array){
    array.unshift(array.pop()) //O pop remove o ultimo array e retorna qual foi o valor removido
    //E o unshift serve pra adicionar um numero na primeira posição fazendo rotacionar
    return array
}
console.log(rotacionar(notas))

//37 Conte as vogais em cada string de um array
function contarVogais(palavra) {
    return (palavra.match(/[aeiou]/gi) || []).length
}
let meuarray = ['palavra', 'teste', 'oi']
console.log(meuarray.map(palavra => {
    return{
        palavra: palavra,
        vogais: contarVogais(palavra)
    }
}))
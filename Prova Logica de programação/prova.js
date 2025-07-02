
//1
const palavras =[ "desenvolvimento", "web", "javasccript", "logica", "frontend" ]

let conversao = palavras.filter(palavra => palavra.length > 7).sort()
let Maiusculo = conversao.map((palavras) => palavras.toUpperCase())
console.log(Maiusculo)


// const alunos = [
//     {nome: "Carlos", notas: [7,9,3]},
//     {nome:"Ana", notas: [8.5, 5, 6]},
// ]
// let soma = [alunos, ...notas]
// console.log(soma)
// .reduce((acumulador, atual) => acumulador += atual, 0)


//3
const transacoes = [
    {tipo: "entrada", valor: 100}, 
    {tipo: "saida", valor: 60},
    {tipo: "entrada", valor: 50},
    {tipo: "saida", valor: 30}
]
let entrada = transacoes.filter(element => element.tipo == "entrada" )
let adicao = (entrada[0].valor) + (entrada[1].valor)
let saida = transacoes.filter(element => element.tipo == "saida" )
let subtracao = (saida[0].valor) + (saida[1].valor)
let calculo = adicao - subtracao
console.log(calculo)


//4
// const produto = [
//     {nome: "cadeira",valor: 150 },
//     {nome: "lapis", valor: 5}  
// ]
// let filtrado = produto.filter(element => element.valor > 100)
// console.log(filtrado)
// function desconto(){
//     if(produto.filter((element) => element.valor > 100)){
//         let desconto = valor * 0.9
//         return desconto
//     }
// }
// console.log(desconto())





//5
const usuarios =[
    {nome: "Ana", logado: true},
    {nome: "Lucas", logado: false},
    {nome: "Beatriz", logado: true},
]
let verificar = usuarios.some(element => element.logado == true)
console.log(verificar)
let verificacao = usuarios.every(element => element.logado == true)
console.log(verificacao)

//6
const produtos = [
    {nome: "Notebook", preco: 3000},
    {nome: "Mouse", preco: 50},

]
function buscarProduto(Notebook){
    return produtos.filter(produto => produto.nome === "Notebook")
}
let resultado = buscarProduto("Notebook")
console.log(resultado)



//7
let tarefas = [
    {descricao: "Estudar JS", concluida: true},
    {descricao: "Fazer prova", concluida: false},
    {descricao: "Enviar projeto", concluida: false},
]
function prefixo(){
    return tarefas.filter(tarefa => tarefa.concluida === false).map(element => element + "prefixo")
}
let resultados = prefixo()
console.log(resultados)
// let filtro = tarefas.filter(element => element.concluida == false )
// console.log(filtro)
// let pendente = " descricao: 'Fazer prova', concluida: false,pendente"
// let arrayjunto = [...tarefas,...pendente]
// console.log(arrayjunto)




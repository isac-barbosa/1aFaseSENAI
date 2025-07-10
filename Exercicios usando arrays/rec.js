//1
const palavras = ["Artes", "Ti", "Desenvolvimento", "Logica", "Matematica"]
let palavrasMod = palavras.map( palavra => palavra.toLowerCase())
let decrescente = palavrasMod.sort((a, b) => a-b)
console.log(decrescente)



//3
const movimentacoes = [
    {operacao: "compra", quantidade: 200},
    {operacao: "venda", quantidade: 50},
    {operacao: "compra", quantidade: 120},
    {operacao: "venda", quantidade: 30},
]
const movimentacoesMod = movimentacoes.reduce(acumulador, valoratual =>{
    if(valoratual.operacao === "compra"){
        acumulador += valoratual.quantidade
    }
    else{
        acumulador -= valoratual.quantidade
    }
    return acumulador
}, 0)
console.log(movimentacoesMod)




//4
const cursos = [
    {nome: "Front-End", cargaHoraria: 50},
    {nome: "Excel", cargaHoraria: 20},
]
    let calculoDesconto = cursos.map(cursos =>{
        return{
            nome:cursos.nome,
            calculoDesconto: cursos.cargaHoraria * 0.8
        }
    })
console.log(calculoDesconto)

//5
const usuarios = [
    {nome: "Ana", ativo: true, admin: false},
    {nome: "Paulo", ativo: true, admin: true},
    {nome: "Joana", ativo: true, admin: false}
    
]
let admin = usuarios.some(usuario => usuario.admin == true)
console.log(admin)
let ativos = usuarios.every(usuario => usuario.ativo == true)
console.log(ativos)


//6
// const curso = [
//     {nome: "Logica de Programação", nivel: "Basico"},
//     {nome: "React", nivel: "Intermediario"},
// ]


// function buscarCurso(curso){
//     // return curso.filter( curso => curso.)
    
// }
// let resultado = buscarCurso("Logica de Programação")
// console.log(resultado)

//7
const tarefas = [
    {nome: "Fazer compras", concluido: false},
    {nome: "Lavar a roupa", concluido: true},
    {nome: "Estudar para a prova", concluido: false},
    {nome: "Preparar apresentação", concluido: true},
]
console.log(tarefas.map((tarefa)=> {
    if(tarefa.concluido === false){
        return "Ação necessaria: " + tarefa.nome
    } else return null
}).filter(tarefa => tarefa !== null))


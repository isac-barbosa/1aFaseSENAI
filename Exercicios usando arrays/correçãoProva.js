
//1
const palavras = ["desenvolvimento", "web","frontend", "javascript",  ]
const palavrasNovo = palavras.filter(palavra => palavra.length > 7).map(palavra => palavra.toUpperCase()).sort()
console.log(palavrasNovo)

//2
const alunos = [
    {nome: "Ana", notas: [8,9,10]},
    {nome: "Carlos", notas: [6,7,5]}
]
const alunosMedia = alunos.map(aluno =>{
    const nome = aluno.nome
    const media = aluno.notas.reduce((a,b) => a+b, 0) / alunos.notas.length
    return{
        nome: nome,
        media: media
    }
})
console.log(alunosMedia)


//3
const transacoes = [
    {tipo: "entrada", valor: 100},
    {tipo: "saida", valor: 60},
    {tipo: "entrada", valor: 50},
    {tipo: "saida", valor: 30}
]
const transacoesFinal = transacoes.reduce(acumulador, valoratual =>{
    if(valoratual.tipo === "entrada"){
        acumulador + valoratual.valor
    }
    else{
        acumulador -= valoratual.valor
    }
    return acumulador
}, 0)
console.log(transacoesFinal)

/*Parte 1 – Arrays
Criação de Array:
Crie um array chamado frutas contendo as seguintes frutas: "maçã", "banana", "laranja".

Acesso de Elemento:
Mostre no console a segunda fruta do array.

Adicionar Elemento:
Adicione "uva" ao final do array.

Remover Elemento:
Remova o primeiro elemento do array.

Percorrer com loop:
Use um for para imprimir todas as frutas do array, uma por uma.

Parte 2 – Objetos
Criação de Objeto:
Crie um objeto chamado aluno com as propriedades:

nome (string)

idade (número)

notas (array com 3 notas)

Acesso a Propriedades:
Mostre no console o nome do aluno e a média das notas.

Adicionar Propriedade:
Adicione ao objeto uma propriedade chamada aprovado com valor true ou false dependendo da média.

Objeto em Array:
Crie um array chamado turma que contenha 3 objetos aluno.

Percorrer e Filtrar:
Imprima apenas os nomes dos alunos da turma que estão aprovados.*/


//ARRAYS

//1 Mostre no console a segunda fruta do array.
const frutas = [ "maça", "banana", "laranja"]
console.log(frutas[1])


//2 Adicione "uva" ao final do array.
frutas.push('uva')
console.log(frutas)

//3
frutas.shift() //Usado para remover o primeiro item do array
console.log(frutas)


//4  Use um for para imprimir todas as frutas do array, uma por uma.
for(let i = 0; i<frutas.length; i++){
        console.log(frutas[i])
}

//OBJETOS

const alunos = {
    nome: "isac",
    idade: 17,
    notas: [10,8,7]
}
//1 Mostre no console o nome do aluno e a média das notas.

console.log(alunos.nome)
let calculo = alunos.notas[0] + alunos.notas[1] + alunos.notas[2]
console.log(calculo)
let media = calculo / 3
console.log(media)

//2 Adicione ao objeto uma propriedade chamada aprovado com valor true ou false dependendo da média.
    if(media < 7){
        alunos.aprovado = false 
    }
    else{
        alunos.aprovado = true
    }
console.log(alunos)


//3 Crie um array chamado turma que contenha 3 objetos aluno.
const turma =[
    {aluno: "isac", idade: 17, notas: [8,9,5]},
    {aluno: "pedro", idade: 17, notas: [4,10,7]},
    {aluno: "eduardo", idade: 17, notas: [2,7,6]}
]
//4 Imprima apenas os nomes dos alunos da turma que estão aprovados.
for(let i = 0; i < turma.length; i++){
    let alunoAtual = turma[i]
    let calculo = alunoAtual.notas[0] + alunoAtual.notas[1] + alunoAtual.notas[2]
    let media = calculo / 3
    if(media < 7){
        console.log(alunoAtual.aluno , ": REPROVADO")
    }
    else{
        console.log(alunoAtual.aluno, ": APROVADO")
    }
}




const numeros = [4, 8, 15, 16, 23, 42];

let maiorque10 = numeros.filter(n => n > 10)
console.log(maiorque10)


let soma = numeros.reduce((acumulado,valoratual) => acumulado + valoratual, 0)
console.log(soma)
let multiplicado = numeros.map(n => n* 2)
console.log(multiplicado)


const filme = {
  titulo: "Vingadores: Ultimato",
  ano: 2019,
  diretor: "Anthony e Joe Russo",
  duracao: 181,
  genero: "Ação"
};

console.log("O filme Vingadores: Ultimato, do gênero Ação, foi lançado em 2019.")
filme["nota"] = 9.5;
console.log(filme)
filme["duracao"] = 182
console.log(filme)



const alunos2 = [
  { nome: "Lucas", notas: [7, 8, 6.5] },
  { nome: "Julia", notas: [9, 10, 9.5] },
  { nome: "Mateus", notas: [4, 5.5, 6] }
];

for(let i = 0; i<alunos2.length; i++){
    let alunoatual = alunos2[i]
        let calculo = alunoatual.notas[0] + alunoatual.notas[1] + alunoatual.notas[2]
        console.log(calculo)
        let soma = calculo / 3
        if(soma < 7){
            console.log( alunoatual , "media:",soma, "Reprovado")
        }
        else{
            console.log(alunoatual, "media:",soma, "Aprovado")
        }
    }

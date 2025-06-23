//1
let numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
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

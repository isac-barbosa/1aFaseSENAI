let temDinheiro = prompt("João tem dinheiro?")
let estaComFome = prompt("João esta com fome?")
let hojeÉSexta = prompt("Hoje é sexta?")
if(temDinheiro == "sim" && estaComFome == "sim"){
    console.log("Vamos pedir pizza!")
}else if(hojeÉSexta == "sim"){
    console.log("Vamos pedir pizza!")
}else{
    console.log("Hoje não é dia de pedir pizza")
}
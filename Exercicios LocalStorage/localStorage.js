
//1
let contador = 0
if(localStorage.getItem("contador")){ //Verifica se ja existe algum valor salvo
    contador = parseInt(localStorage.getItem("contador")) //parseInt converte de string para numero
}
document.getElementById("contador").textContent = contador //textContent serve para alterar o texto dentro de um elemento HTML

function add(){
    contador++
    atualizarContador()
}
function diminuir(){
    contador--
    atualizarContador()
}
function atualizarContador(){
    document.getElementById("contador").textContent = contador
    localStorage.setItem("contador", contador)
}
//2
const textarea = document.getElementById("textoDigitado") //Pega o elemento <textarea>
const textoSalvo = localStorage.getItem("texto") //Verifica se tem algo salvo no localStorage
if(textoSalvo){ // Se tiver, coloca no textarea
    textarea.value = textoSalvo
}

//addEventListener Serve para criar uma function a partir do que a pessoa fizer sendo input, click etc
//nesse caso ele esta ouvindo o que a função esta fazendo quando o ususario usa o input

textarea.addEventListener("input", function () { 
  localStorage.setItem("texto", textarea.value);
})

//3 
const tarefa1 = document.getElementById("tarefa1")
const tarefa2 = document.getElementById("tarefa2")
const tarefa4 = document.getElementById("tarefa4")

if(localStorage.getItem("tarefa1") == "true"){
    tarefa1.checked = true
}
else{
    tarefa1.checked = false
}
if(localStorage.getItem("tarefa2") == "true"){
    
    tarefa2.checked = true
}
else{
    tarefa2.checked = false
}
if(localStorage.getItem("tarefa4") == "true"){
    tarefa4.checked = true
}
else{
    tarefa4.checked = false
}

tarefa1.addEventListener("change",function(){
    localStorage.setItem("tarefa1", tarefa1.checked.toString())

}) 
tarefa2.addEventListener("change",function(){
    localStorage.setItem("tarefa2", tarefa2.checked.toString())

}) 
tarefa4.addEventListener("change",function(){
    localStorage.setItem("tarefa4", tarefa4.checked.toString())

}) 
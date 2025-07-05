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
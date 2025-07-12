
/*1  Crie um <textarea> onde o texto digitado seja salvo
automaticamente no localStorage a cada digitação. Ao
recarregar a página, o texto deve reaparecer.*/  
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
/*2  Crie um <textarea> onde o texto digitado seja salvo
automaticamente no localStorage a cada digitação. Ao
recarregar a página, o texto deve reaparecer.*/

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

/*3 Faça uma lista de tarefas com checkboxes. Ao marcar uma
tarefa como feita, essa informação deve ser salva no
localStorage.*/ 
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


/*4 Ao acessar a página, pergunte o nome do usuário (via prompt
ou input). Salve esse nome e cumprimente o usuário nas
visitas seguintes: “Olá, [nome]!”*/

let nomeSalvo = localStorage.getItem("nomeUsuario");

if (nomeSalvo === null) {
    let nome = prompt("Qual seu nome?");
    localStorage.setItem("nomeUsuario", nome);
    console.log("Olá, " + nome );
} else {
    console.log("Olá, " + nomeSalvo );
}

/* 5. Escolha de Cor
Crie três botões com cores diferentes. Quando o usuário clicar
em uma cor, o fundo da página muda e essa preferência é
salva no localStorage.*/

    window.addEventListener('DOMContentLoaded', () => {
      const corSalva = localStorage.getItem('corFundo')
      if (corSalva) {
        document.body.style.backgroundColor = corSalva
      }
    })

    function mudarCor(cor) {
      document.body.style.backgroundColor = cor
      localStorage.setItem('corFundo', cor)
    }

/*6.Modo Noturno
Adicione um botão “Modo Escuro”. Quando ativado, o fundo e
os textos da página mudam, e essa escolha é salva para
manter o tema mesmo após recarregar a página.*/ 

window.addEventListener("DOMContentLoaded", () => {
  let modoSalvo = localStorage.getItem("modo")
  console.log("Modo salvo no localStorage:", modoSalvo)
  if (modoSalvo !== "claro" && modoSalvo !== "escuro") {
    modoSalvo = "claro"
  }
  aplicarModo(modoSalvo)
})

function aplicarModo(modo) {
    document.body.classList.remove("modo-claro", "modo-escuro")
    document.body.classList.add(`modo-${modo}`)
    document.body.style.backgroundColor = "" 
    localStorage.setItem("modo", modo)
}

function alternarModo() {
    const modoAtual = localStorage.getItem("modo") === "escuro" ? "claro" : "escuro"
    aplicarModo(modoAtual)
}

/*7. Visita Diária
Mostre uma mensagem como “Bem-vindo de volta!” caso a
última visita tenha sido no mesmo dia, e “Saudades de você!”
se foi em outro dia. Use localStorage para salvar a data.*/


const hoje = new Date().toDateString()
const ultimaVisita = localStorage.getItem("ultimaVisita");

    if (ultimaVisita === hoje) {
      document.getElementById("msg").textContent = "Bem-vindo de volta!";
    } else {
      document.getElementById("msg").textContent = "Saudades de você!";
      localStorage.setItem("ultimaVisita", hoje);
    }

/*8. Última Visita
Salve a data e hora da última visita do usuário e mostre-a ao
entrar novamente na página: “Última visita: 29/06/2025 22:30”.
*/ 
const agora = new Date().toLocaleString();
const ultima = localStorage.getItem("ultimaVisita");
if (ultima) {
    document.getElementById("ultimaVisita").textContent = `Última visita: ${ultima}`
}else {
    document.getElementById("ultimaVisita").textContent = "Esta é sua primeira visita!"
}
localStorage.setItem('ultimaHora', agora)

/*Crie um campo de texto onde o usuário digita uma mensagem
de boas-vindas. Essa mensagem deve ser exibida no topo da
página e salva no localStorage.*/ 

const input = document.getElementById("mensagemInput")
const mensagem = localStorage.getItem("mensagemBoasVindas") 
if (mensagem) {
    document.getElementById("mensagemTopo").textContent = mensagem
}

input.addEventListener("input", () => {
    document.getElementById("mensagemTopo").textContent = input.value
    localStorage.setItem("mensagemBoasVindas", input.value)
})

/* 10. Número Secreto
Gere um número aleatório entre 1 e 10 e salve no localStorage.
O usuário deve tentar adivinhar o número. Mesmo que ele
feche o navegador, o número continua sendo o mesmo até ele
acertar.*/
let numero = localStorage.getItem("numeroSecreto")
if (!numero) {
    numero = Math.floor(Math.random() * 10) + 1;
    localStorage.setItem("numeroSecreto", numero);
}

function adivinharNumero() {
    const palpite = parseInt(document.getElementById("palpite").value);
    let numero = localStorage.getItem("numeroSecreto");

    if (palpite === parseInt(numero)) {
        resposta.textContent = "Parabéns! Você acertou o número! O número era " + numero + ". Um novo número será gerado."
        numero = Math.floor(Math.random() * 10) + 1;
        localStorage.setItem("numeroSecreto", numero);
    } else {
        resposta.textContent = "Errou! Tente novamente!"
    }
}
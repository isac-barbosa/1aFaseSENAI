// let nome, email, senha
// document.getElementById('inpLogNome')
inicializar()
let usuario = {
    nome: 'isac',
    email: '222@gmail.com',
    senha: 'nuvem'
}
function cadastrar(){
    usuario.nome = document.getElementById('inpCadNome').value
    usuario.email = document.getElementById('inpCadEmail').value
    usuario.senha = document.getElementById('inpCadSenha').value
    alert("Cadastrado com sucesso")
    console.log(usuario)
    mostrarlogin()
}
function logar(){
    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value
    if(nome === usuario.nome && senha === usuario.senha){
        alert("Login efetuado com sucesso")
        mostrarProdutos()
        limparInputs()
    }else{
        alert("Login não efetuado")
    }
}
function mostrarlogin(){
esconderTodas()
    document.getElementById('login').style.display = 'flex'
    document.getElementById('inpLogNome').focus()
}
function mostrarCadastro(){
esconderTodas()
    document.getElementById('cadastro').style.display = 'flex'
    document.getElementById('inpCadNome').focus()
}
function mostrarProdutos(){
    esconderTodas()
    document.getElementById('produtos').style.display = 'flex'
}
function esconderTodas(){
document.getElementById('login').style.display = 'none'
document.getElementById('cadastro').style.display = 'none'
document.getElementById('produtos').style.display = 'none'
//esconder novas pàginas
}
function limparInputs(){
    document.getElementById('inpCadNome').value = '',
    document.getElementById('inpCadEmail').value = '',
    document.getElementById('inpCadSenha').value = '',
    
    document.getElementById('inpLogNome').value = '',
    document.getElementById('inpLogSenha').value = ''
}
function inicializar(){
    mostrarlogin()
}
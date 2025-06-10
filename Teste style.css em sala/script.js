// let nome, email, senha
// document.getElementById('inpLogNome')
inicializar()
let usuarios = []
// let nomesTeste = ["Usuario 1" , "Usuario 2"]


function cadastrar(){
    let usuario = {
        nome: document.getElementById('inpCadNome').value,
        email:document.getElementById('inpCadEmail').value,
        senha: document.getElementById('inpCadSenha').value
    }

    usuarios.push(usuario)
    limparInputs()
    mostrarlogin()

    alert("Cadastrado com sucesso")

    console.log(usuarios)
}
function logar(){
    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value
    for(let i = 0; i<usuarios.length; i++){
        if((nome === usuarios[i].nome || nome === usuarios[i].email) && senha === usuarios[i].senha){
            alert("Login efetuado com sucesso")
            limparInputs()
            mostrarProdutos()
        }else{
            alert("Login não efetuado")
        }
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
    document.getElementById('navbar').style.display = 'flex' /*faz a navbar aparecer*/
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
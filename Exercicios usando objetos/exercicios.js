
//1
const produtos =[
    {
        nome: "chocolate", 
        preco: 10.00, 
        categoria:"comida",
        
        nome: "coca cola",
        preco: 12.00,
        categoria:"bebidas",
        informarProdutos: function(){
        return this.nome[0], this.nome[1]
        } 
    }
]

// produtos.informarProdutos();


//2
const livro = {
    titulo: "Romeu e julieta",
    autor: "William Shakespare",

    // titulo: "Dom quixote",
    // autor: "Miguel de Cervantes",

}
function emprestar(livro, status){
    livro.titulo = status
}
emprestar(livro, )
console.log(livro.status)
const produtos =[
    {
    nome: "chocolate",
    preco: 10.00,
    categoria:"comida",
    },
    {
        nome: "coca cola",
        preco: 12.00,
        categoria:"bebidas",
    }
]
function informarProduto(){
    let informarProdutos = produtos.map(elemento => elemento.categoria)
    return produtos.nome
}
console.log(produtos.nome)
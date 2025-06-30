
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
    emprestado: false,

    // titulo: "Dom quixote",

    // autor: "Miguel de Cervantes",


    emprestar: function(){
        if(this.emprestado){
            console.log("O livro ja foi emprestado")
        }
        else{
            this.emprestado = false
            console.log("Livro emprestado com sucesso")
        }
    },
    devolver: function(){
        if(!this.emprestado){
            console.log("O livro ja esta disponivel")
        }else{
            this.emprestado = false
            console.log("Livro devolvido com sucesso")
        }
    }
}
livro.emprestar()
livro.emprestar()
livro.devolver()
livro.devolver()
    

const conversor ={

    celsiusParaFarenheit: function(celsius){ 
        return (celsius * 9/5) + 32
    },
    farenheitParaClesius: function(farenheit){
        return(farenheit - 32) * 5/9
    }
}
console.log(conversor.celsiusParaFarenheit())
console.log(conversor.farenheitParaClesius())


//1
const produtos = [
  { nome: 'Camiseta', preco: 29.90 },
  { nome: 'Calça', preco: 49.90 },
  { nome: 'Tênis', preco: 89.90 },
]

function buscarProduto(nome) {
  return produtos.find(produto => produto.nome === nome);
}

console.log (buscarProduto('Camiseta'))//nome do produto que deseja procurar


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
    
//3
const conversor ={

    celsiusParaFarenheit: function(celsius){ 
        return (celsius * 9/5) + 32
    },
    farenheitParaClesius: function(farenheit){
        return(farenheit - 32) * 5/9
    }
}
console.log(conversor.celsiusParaFarenheit())
console.log(conversor.farenheitParaClesius());

//4

const agenda = {
  // Lista de contatos
  contatos: [
    { nome: "Eduardo", contato: 489999 },
    { nome: "Angelica", contato: 478502 },
    { nome: "Isac", contato: 90745 },
    { nome: "Pedro", contato: 856748 },
    { nome: "Isabelle", contato: 124567 }
  ],

  // Método para adicionar um novo contato
    adicionarContato: function (contato) {
    this.contatos.push(contato);
    console.log(`${contato.nome} foi adicionado à agenda.`);
  },

  // Método para remover um contato pelo nome
    removerContato: function (nome) {
    const tamanhoAntes = this.contatos.length;
    this.contatos = this.contatos.filter(c => c.nome !== nome);

    if (this.contatos.length < tamanhoAntes) {
      console.log(`${nome} foi removido da agenda.`);
    } else {
      console.log(`Contato "${nome}" não encontrado.`);
    }
  },
  listar: function(){
    if (this.contato.lenght === 0){
      console.log ("Agenda vazia.")
      return
    }else{
      console.log ("Lista de contatos")
      this.contatos.forEach ((contato, i) => {
        console.log(`${i + 1}. ${contato.nome} - Tel: ${contato.telefone} - Email: ${contato.email}`)
      })
    }
}}

agenda.listar()
agenda.adicionarContato({ nome: "Julia", telefone: "(31) 99999-9999" , email: "julia@gmail.com"})
agenda.removerContato("Isabelle")
agenda.listar()
//5

const aluno = {
    portugues: 7.5,
    matematica: 6,
    biologia: 9,

    media: function(){
        return (this.biologia + this.matematica + this.portugues) / 3
    }
}
console.log(aluno.media())

//6
const carrinho = {
  itens: [],

  adicionarItem(item){
    const itemExiste = this.itens.find (i => i.nome === item.nome)
    if (itemExiste){
      itemExiste.quantidade += item.quantidade 
      console.log (`Quantidade do item ${item.nome} atualizada para ${itemExiste.quantidade}`)
    }else{
      this.itens.push(item)
      console.log (`Item ${item.nome} adicionado ao carrinho.`)
    }
  },

  removerItem(nome){
    const index = this.itens.findIndex (i => i.nome  === nome)
    if (index !== -1){
      console.log (`Item ${nome} removido do carrinho.`)
    }else{
      console.log (`Item ${nome} não encontrado.`)
    }
  },

  total(){
    const total = this.itens.reduce ((soma, item) => {
      return soma + (item.valor * item.quantidade)}, 0)
      return total
  },

  listarItens(){
    if (this.itens.lenght === 0 ){
      console.log ("Carrinho vazio.")
    }else{
      console.log ("Itens do carrinho: ")
      this.itens.forEach((item, i) =>{
        console.log (`${i + 1}. ${item.nome} | Qtnd: ${item.quantidade} | Valor: R$ ${item.valor}`)
      })
      console.log(`Total: R$ ${this.total()}`)
    }
  }
}

carrinho.adicionarItem({nome: "Pão", quantidade: 4, valor: 0.5})
carrinho.adicionarItem({nome: "Aipim", quantidade: 9, valor: 2})
carrinho.adicionarItem({nome: "Café", quantidade: 2, valor: 30})
carrinho.listarItens()
carrinho.removerItem("Pão")
carrinho.listarItens()

//7
const alunos = [
    {nome: "Beatriz", nota: 9.5},
    {nome: "Isac", nota: 8.5},
    {nome: "Pedro", nota: 5},
    {nome: "Isabelle", nota: 2},
]
let aprovados = alunos.filter(aluno => aluno.nota > 6).map(aluno => aluno.nome)
console.log(aprovados)


//8
const moeda = {
  taxas: {
    BRL: 1,
    USD: 0.18,
    EUR: 0.17,
    BTC: 0.0000026 //peguei os valores do google usando o real brasileiro como base
  },

  converter(valor, de, para){
    if (!this.taxas[de] || !this.taxas[para]){
      console.log ("Moeda inválida")
      return null
    }

    const emReais = valor / this.taxas[de]
    const convertido = emReais * this.taxas[para]
    return convertido
  }
}

const valor = 100;
const de =  "BRL"
const para = "USD"

const valorConvertido = moeda.converter(valor, de, para) // coloca na ordem (valor, de(moeda que quer converter), para(a moeda que deseja saber o valor convertido))
console.log (`${de}: ${valor} = ${para}: ${valorConvertido}`)


//1
const banco = {
  contas: [
    {nome: "Pedro", saldo: 1000,},
    {nome: "Clara", saldo: 1500,}
  ],

  depositar(nome, valor){
    const conta = this.contas.find (conta => conta.nome === nome)
    if(conta){
      conta.saldo += valor
      console.log (`${nome} depositou R$ ${valor}. Saldo atual: R4 ${conta.saldo}`)
    }else{
      console.log ("Conta não encontrada.")
    }
  },

  retirar(nome, valor){
    const conta = this.contas.find (conta => conta.nome === nome)
    if(conta && valor > conta.saldo){
      conta.saldo += valor
      console.log (`${nome} não possui saldo suficiente ${valor}.`)
    }else if (conta){
      conta.saldo -= valor
      console.log (`${nome} sacou R$: ${valor}. Valor restante: R$: ${conta.saldo}.`)
    }else{
      console.log ("Conta não encontrada.")
    }
  },

  relatorio(){
    let total = 0
    this.contas.forEach (conta => {
      console.log (`Conta: ${conta.nome}  | Saldo: R$ ${conta.saldo}`)
      total += conta.saldo
    })
    console.log (`Saldo total no banco: R$ ${total}`)
  }
}

banco.depositar ("Pedro", 500)
banco.retirar ("Clara", 1000)
banco.relatorio()


//2
const sistemaVotacao = {
  candidatos: {
    candidato1: 0,
    candidato2: 0 
  },

  votar(nome){
    if (this.candidatos[nome] !== undefined){
      this.candidatos[nome]++
    }else{
      console.log(`Candidato ${nome} não existe.`)
    }
  },

  maisVotado(){
    let vencedor = null
    let maiorVoto = -1

    for (let nome in this.candidatos){
      if (this.candidatos[nome] > maiorVoto){
        maiorVoto = this.candidatos[nome]
        vencedor = nome
      }
    }
    return vencedor
  }
}

sistemaVotacao.votar("candidato1")
sistemaVotacao.votar("candidato2")
sistemaVotacao.votar("candidato1")

console.log("Candidato mais votado " + sistemaVotacao.maisVotado())



//3
const agendaSemanal = {
  Segunda: [],
  Terça: [],
  Quarta: [],
  Quinta: [],
  Sexta: [],
  Sabado: [],
  Domingo: [],

  adicionar(dia, compromisso){
    if (this[dia] === undefined) {
      console.log(`Dia ${dia} inválido`)
      return
    }
    this[dia].push(compromisso)
  },

  remover(dia, compromisso){
    if (this[dia] === undefined){
      console.log (`Dia ${dia} inválido`)
      return
    }

    const index = this[dia].indexOf(compromisso)
    if (index !== -1) {
      this[dia].splice(index, 1)
      console.log(`Compromisso "${compromisso}" removido do ${dia}.`)
    } else {
      console.log(`Compromisso "${compromisso}" não encontrado no ${dia}.`)
    }
  },
}

agendaSemanal.adicionar("Segunda", "Reunião com o cliente")
agendaSemanal.adicionar("Terça", "Consulta médica")
agendaSemanal.adicionar("Quarta", "Treino de futebol")
agendaSemanal.adicionar("Quinta", "Reunião de equipe")

agendaSemanal.remover("Quarta", "Treino de futebol")
agendaSemanal.remover("Sexta", "Reunião de equipe") // (não existe esse dia na agenda)


//4
function gerarPersonagem(nome) {
  const forca = Math.floor(Math.random() * 20) + 1; // Força entre 1 e 20
  const destreza = Math.floor(Math.random() * 20) + 1; // Destreza entre 1 e 20
  const vida = Math.floor(Math.random() * 100) + 1; // Vida entre 1 e 100

  return {
    forca,
    destreza,
    vida,
    descrever() {
      return `Força: ${this.forca}, Destreza: ${this.destreza}, Vida: ${this.vida}`;
    }
  };
}
const personagens = [];

function criarPersonagem(qntd) {
  for (let i = 0; i < qntd; i++) {
    const nome = `Personagem ${i + 1}`;
    const personagem = gerarPersonagem(nome);
    personagens.push(personagem);
  }
}

criarPersonagem(5);

personagens.forEach((personagem, index) => {
  console.log(`Personagem ${index + 1}: ${personagem.descrever()}`);
});


//5
function validarFormulario(dados) {
  const erros = {};

  // Validação do nome
  if (!dados.nome || dados.nome.length < 3) {
    erros.nome = "Nome inválido. Deve ter pelo menos 3 caracteres.";
  }

  // Validação do email
  if (!dados.email || !dados.email.includes("@")) {
    erros.email = "Email inválido.";
  }

  // Validação da idade
  if (!dados.idade || dados.idade < 0) {
    erros.idade = "Idade inválida.";
  }

  return {
    valido: Object.keys(erros).length === 0,
    erros
  };
}

console.log(validarFormulario({ nome: "João", email: "joão@example.com", idade: 25 }));


//6
const projeto = {
  nome: "Desenvolvimento de Site",
  status: "Em andamento",
  tarefas: [
    { nome: "Planejamento", data: "2023-10-01", status: "Concluída" },
    { nome: "Desenvolvimento", data: "2023-10-05", status: "Em andamento" },
    { nome: "Testes", data: "2023-10-10", status: "Pendente" }
  ],

  alterarStatusTarefa(nomeTarefa, novoStatus) {
    const tarefa = this.tarefas.find(t => t.nome === nomeTarefa);
    if (tarefa) {
      tarefa.status = novoStatus;
      console.log(`Status da tarefa "${nomeTarefa}" alterado para "${novoStatus}".`);
    } else {
      console.log(`Tarefa "${nomeTarefa}" não encontrada.`);
    }
  },

  listarTarefasPorStatus(status) {
    const tarefasFiltradas = this.tarefas.filter(t => t.status === status);
    console.log(`Tarefas com status "${status}":`);
    tarefasFiltradas.forEach(t => console.log(`- ${t.nome} (Data: ${t.data})`));
  }
};

console.log(`Projeto: ${projeto.nome}`);
console.log(`Status: ${projeto.status}`);
projeto.alterarStatusTarefa("Desenvolvimento", "Concluída");
projeto.listarTarefasPorStatus("Concluída");


//7
const jogoDeDados = {
  historico: [],
  rolarDados() {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    this.historico.push({ dado1, dado2 });
    return { dado1, dado2 };
  },
  contarOcorrencias(numero) {
    return this.historico.filter(resultado => resultado.dado1 === numero || resultado.dado2 === numero).length;
  }
};
const resultado = jogoDeDados.rolarDados();
console.log(`Rolagem: Dado 1: ${resultado.dado1}, Dado 2: ${resultado.dado2}`);
console.log(`Histórico:`, jogoDeDados.historico); 
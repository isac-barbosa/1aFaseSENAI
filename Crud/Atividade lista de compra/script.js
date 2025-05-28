function chamarCadastro() {
    document.getElementById("containercadastro").style.display = "flex"
    document.getElementById("containerprincipal").style.display = "none"

}
function voltarInicio() {
    document.getElementById("containercadastro").style.display = "none"
    document.getElementById("containerprincipal").style.display = "flex"
}
function adicionarItem() {
    let itemAdicionar = document.getElementById("nome").value
    let lista = document.getElementById("minhalista")
    let li = document.createElement("li")
    let conteudo = `<li>${itemAdicionar} <svg class="editar" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000"viewBox="0 0 256 256">
                        <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z">
                        </path>
                    </svg>
                    <svg class="deletar" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000"
                        viewBox="0 0 256 256">
                        <path
                            d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z">
                        </path>
                    </svg>`
    li.innerHTML = conteudo
    lista.appendChild(li) /*Essa função serve pra colocar os itens dentro da LI no caso colocando o LI dentro do OL*/
}
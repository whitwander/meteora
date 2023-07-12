const btnCategorias = document.querySelectorAll('.btn-categorias')

btnCategorias.forEach((categoria) => {
    categoria.addEventListener('click', filtraCategoria)
})

function filtraCategoria() {
    const elementoClicado = document.getElementById(this.id)
    let valorCategoria = elementoClicado.dataset.value
    let filtro = produtos.filter(produto => produto.nome == valorCategoria)
    exibirProdutos(filtro)
    limpaEstilos()
}

function limpaEstilos() {
    elementoHtml.classList.remove('produtos__grid')
    elementoHtml.classList.add('categoria__clique')
}




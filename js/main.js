let produtos = []
const endApi = 'https://whitwander.github.io/api-produtos/produtos.json'
const elementoHtml = document.getElementById('produtos')
getPodutos()

async function getPodutos() {
    const resp = await fetch(endApi)
    produtos = await resp.json() 
    exibirProdutos(produtos)
}

function exibirProdutos(lista) {
    elementoHtml.innerHTML = ''
    lista.forEach(produto => {
        elementoHtml.innerHTML += `
        <div class="produtos__mostra">
            <img class="produtos__foto" src="${produto.img}" alt="${produto.titulo}">
            <div class="produtos__descrição">
                <h3 class="produtos__titulo">${produto.titulo}</h3>
                <p class="produtos__texto">${produto.descricao}</p>
                <p class="produtos__preço">R$ ${produto.preco}</p>
                <button class="produtos__link">Ver mais</button>
            </div>
        </div>
        `
    })
}

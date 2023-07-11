let produtos = []
const endApi = 'https://whitwander.github.io/api-produtos/produtos.json'
getPodutos()

async function getPodutos(){
    const resp = await fetch(endApi)
    produtos = await resp.json()
    console.table(produtos)
}

const modalHtml = document.getElementById('modal-produtos')

function consultaBotao() {
    const botoesModal = document.querySelectorAll('.produtos__link')
    botoesModal.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            modalHtml.innerHTML += `
            <div class="modal__completo">
                    <div class="modal-content" id="modal-content">
                        <div class="modal__cabeçalho">
                            <div class="modal__cabeçalho-titulo">
                                <img src="assets/Vector.svg" alt="">
                                <h4 class="modal__titulo">Confira detalhes sobre o produto</h4>
                            </div>
                            <button type="button" class="modal__botão-fechar"></button>
                        </div>
                        <div class="modal__principal">
                            <div>
                                <img class="modal__imagem" src="${produtos[indice].img}" alt="${produtos[indice].nome}">
                            </div>
                            <form class="formulário">
                                <h5 class="modal__titulo-descrição">${produtos[indice].titulo}</h5>
                                <p class="modal__descrição">${produtos[indice].descricao}</p>
                                <h3 class="modal__preço">R$ ${produtos[indice].preco}</h3>
                                <a class="modal__link"
                                    href="https://www.riachuelo.com.br/?gclid=Cj0KCQjwtO-kBhDIARIsAL6LorfeU0ZXIScCkCdXPg7f1havRLVr_vqte-VQAGusW4ja5Y8CccWI7D4aAjf-EALw_wcB">Vendido
                                    e entregue por Riachuelo</a>
                                <p class="titulo__seletores">Cores:</p>
                                <fieldset class="seletores">
                                    <div class="seletores-items">
                                        <input type="radio" name="cor" id="azcl">
                                        <label for="azcl">Azul Claro</label>
                                    </div>
                                    <div class="seletores-items">
                                        <input type="radio" name="cor" id="ofwh">
                                        <label for="ofwh">Offwhite</label>
                                    </div>
                                    <div class="seletores-items">
                                        <input type="radio" name="cor" id="pret">
                                        <label for="pret">Preto</label>
                                    </div>
                                </fieldset>
                                <p class="titulo__seletores">Tamanho:</p>
                                <fieldset class="seletores2">
                                    <div class="seletores-items">
                                        <input type="radio" name="tam" id="p">
                                        <label for="p">P</label>
                                    </div>
                                    <div class="seletores-items">
                                        <input type="radio" name="tam" id="p">
                                        <label for="p">PP</label>
                                    </div>
                                    <div class="seletores-items">
                                        <input type="radio" name="tam" id="p">
                                        <label for="p">M</label>
                                    </div>
                                    <div class="seletores-items">
                                        <input type="radio" name="tam" id="p">
                                        <label for="p">G</label>
                                    </div>
                                    <div class="seletores-items">
                                        <input type="radio" name="tam" id="p">
                                        <label for="p">GG</label>
                                    </div>
                                </fieldset>
                                <button type="button" class="botão__modal">Adicionar à
                                    sacola</button>
                            </form>
                        </div>
                    </div>
                </div>
            `
            fechaModalProdutos()
        })
    })
}

function fechaModalProdutos() {
    const botaoX = document.querySelector('.modal__botão-fechar')
    const sacola = document.querySelector('.botão__modal')

    botaoX.addEventListener('click', () => {
        modalHtml.innerHTML = ''
    })

    sacola.addEventListener('click', () => {
        modalHtml.innerHTML = ''
    })
}


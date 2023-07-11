const form = document.querySelector('.form-cadastro')
const input = document.getElementById('cadastro-input')
const btn = document.getElementById('cadastro-btn')
const modal = document.getElementById('cadastro-modal')
const close = document.getElementById('fecha-modal')
const errorMsg = document.getElementById('error-msg')
const cadastroMsg = document.querySelector('.cadastro__modal-desc')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (validaEmail(input.value) !== true) {
        errorMsg.classList.remove('hide')
        input.classList.add('erro')
    } else {
        adicionaTexto()
        input.value = ''
        modal.classList.remove('hide-modal')
        errorMsg.classList.add('hide')
        input.classList.remove('erro')
        fechaModalWindow()
    }
})

close.addEventListener('click', (e) => {
    fechaModal()
})

function fechaModalWindow() {
    window.addEventListener('click', (e) => {  
        if (e.target !== btn) {
            fechaModal()
        }
    })
}

function fechaModal() {
    modal.classList.add('hide-modal')
}

function validaEmail(input) {
    const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/;
    return emailRegex.test(input)
}

function adicionaTexto() {
    cadastroMsg.innerHTML = `
    <p class="cadastro__modal-desc-texto">Obrigado! Em breve você receberá novidades exclusivas da Meteora no e-mail: <span>${input.value}</span></p>
    `
}
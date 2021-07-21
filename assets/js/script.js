let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let nomeOk = false
let emailOK = false
let mensagemOK = false

nome.style.width = '100%'
email.style.width = '100%'
mensagem.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')
    if (mensagem.value.length >= 100) {
        txtMensagem.innerHTML = 'Texto muito grande. Digite no máximo 100 caracteres.'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
    }else{
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert ('Prontinho! Você receberá um pack de fotos novinho em breve!')
    }else{
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}



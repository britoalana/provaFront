const modal = document.querySelector('.modal')
const btnModal = document.querySelector('#myModal')
const fechar = document.querySelector('#cancelar')


btnModal.addEventListener('click', () => {
    modal.style.display = "block"
})
fechar.addEventListener('click', () => {
    modal.style.display = "none"
})


const likeBtn = document.querySelectorAll('#likeBtn')
const likeImg = document.querySelectorAll('#likeImg')
let isLiked = false

likeBtn.forEach((elementos, index) => {
    elementos.addEventListener('click', () => {
        isLiked = !isLiked
        if (isLiked) {
            likeImg[index].src = "./assets/icones/CoracaoVermelho.svg"
        } else {
            likeImg[index].src = "./assets/icones/Coracao.svg"
        }
    })
})

const  email = document.getElementById('email')
const  numero = document.getElementById('numero')
const  nome = document.getElementById('nome')
const  mensagem = document.getElementById('mensagem')
const  enviar = document.getElementById('enviar')

enviar.addEventListener('click', (event, submit)=>{
   

    if(email.value === "" || nome.value === "" || mensagem.value === "" || numero.value === ""){
        alert("Preencha todos os campos")
        event.preventDefault()

    }
})

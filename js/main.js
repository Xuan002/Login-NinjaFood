var input = document.querySelector('#int')

var span = document.querySelector('.span')

const btn = document.querySelector("#btn-submit")

btn.addEventListener("click", function(event){
    event.preventDefault();
    valor = input.value
    if(valor.length == 0){
        span.classList.add('erro')
        span.textContent = 'O Campo Esta Vazio!'
    }
})


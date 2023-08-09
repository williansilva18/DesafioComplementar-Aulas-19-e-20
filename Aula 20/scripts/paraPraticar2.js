let inputValue1 = document.querySelector('#valor1')
let inputValue2 = document.querySelector('#valor2')
let resultado = document.querySelector('#resultado')
 

function limpaInput() {
    inputValue1.value = ''
    inputValue2.value = ''
}

function somar() {
    resultado.innerHTML = parseInt(inputValue1.value) + parseInt(inputValue2.value)
   limpaInput()
}

function subtrair() {
    resultado.innerHTML = parseInt(inputValue1.value) - parseInt(inputValue2.value)
   limpaInput()

}

function dividir() {
    resultado.innerHTML = parseInt(inputValue1.value) / parseInt(inputValue2.value)
   limpaInput()
}

 function multiplicar() {
    resultado.innerHTML = parseInt(inputValue1.value) * parseInt(inputValue2.value)
   limpaInput()
}

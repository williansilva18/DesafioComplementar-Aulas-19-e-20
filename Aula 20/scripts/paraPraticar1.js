let inputNome = document.querySelector('#nome')
let inputIdade = document.querySelector('#idade')

const nomes = []
const idades = []

const informacoes = []

function salvar() {
    informacoes.push({
        nome: inputNome.value,
        idade: inputIdade.value
    })
    // nomes.push(inputNome.value)
    // idades.push(inputNome.value
    inputNome.value = ''
    inputIdade.value = ''
}

function visualizar() {
    console.log(informacoes)
}

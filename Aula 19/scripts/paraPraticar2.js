
let num1 = 5
let num2 = 7

function subtrair (num1,num2){
    let resultado = num1 - num2
    if (num1 < num2) {
        console.log('Nao foi possivel subtrair')
    } else {
        return resultado
    }
}

function dividir (num1,num2){
    let resultado = num1 / num2
    if (num2 < 0) {
        console.log('Nao foi possivel dividir')
    } else {
        return resultado
    }
}

console.log(subtrair (num1,num2))
console.log(subtrair (10,5))

console.log(dividir (10,5))
console.log(dividir (10,-1))
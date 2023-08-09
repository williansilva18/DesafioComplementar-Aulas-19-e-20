const frutas = [
    {
        nome: 'Morango',
        cor: 'vermelha',
        peso: '30g',
        tipo: 'Fruta'
    },
    {
        nome: 'Banana',
        cor: 'amarela',
        peso: '80g',
        tipo: 'Fruta'
    },
    {
        nome: 'Pera',
        cor: 'verde',
        peso: '100g',
        tipo: 'Fruta'
    },
    {
        nome: 'Laranja',
        cor: 'laranja',
        peso: '150g',
        tipo: 'Fruta'
    }

]

//mostra o nome de cada fruta
frutas.forEach((fruit) =>{
    console.log(fruit.nome)
})

//conta a quantidade do tipo - fruta
frutas.forEach((fruit) =>{
    console.log(fruit.tipo)
})


const count = frutas.filter(function(item) {
    return item.tipo === 'Fruta';
  });
  
  console.log(count.length);
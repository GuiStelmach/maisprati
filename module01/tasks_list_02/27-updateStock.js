// Criando um array de objetos estoque com produto, quantidade e mínimo
const estoque = [
    { produto: 'Mousepad', quantidade: 5, minimo: 10 },
    { produto: 'Notebook', quantidade: 8, minimo: 5 },
    { produto: 'Headset', quantidade: 3, minimo: 5 },
    { produto: 'Mouse', quantidade: 12, minimo: 10 }
]

// Usa forEach para iterar sobre o array de estoque
estoque.forEach(item => {
    // Verifica se a quantidade está abaixo do mínimo
    if (item.quantidade < item.minimo) {
        // Dobra a quantidade do produto
        item.quantidade *= 2
    }
})

// Exibe o estoque atualizado no console
console.log(estoque)

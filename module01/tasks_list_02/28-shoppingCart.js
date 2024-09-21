// Criando o objeto carrinho com uma propriedade itens, que é um array de objetos
const carrinho = {
    itens: [
        { produto: 'Mousepad', quantidade: 2, precoUnitario: 30 },
        { produto: 'Notebook', quantidade: 1, precoUnitario: 2500 },
        { produto: 'Headset', quantidade: 1, precoUnitario: 200 },
        { produto: 'Mouse', quantidade: 3, precoUnitario: 150 },
        { produto: 'Teclado', quantidade: 1, precoUnitario: 250 },
        { produto: 'Webcam', quantidade: 1, precoUnitario: 180 }
    ]
}

// Inicializa o valor total do carrinho em 0
let valorTotalCarrinho = 0

// Usa forEach para iterar sobre o array de itens no carrinho
carrinho.itens.forEach(item => {
    // Calcula o valor total de cada produto (quantidade * precoUnitario)
    const valorItem = item.quantidade * item.precoUnitario
    // Soma o valor do item ao total do carrinho
    valorTotalCarrinho += valorItem
})

// Exibe o valor total do carrinho no console
console.log(`O valor total do carrinho é: R$ ${valorTotalCarrinho}`)

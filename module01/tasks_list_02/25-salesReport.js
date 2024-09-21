// Criando um array de objetos vendas com produto, quantidade e valor
let vendas = [
    { produto: 'Carregador', quantidade: 2, valor: 1500 },
    { produto: 'Teclado', quantidade: 1, valor: 3500 },
    { produto: 'Mousepad', quantidade: 3, valor: 200 },
    { produto: 'Headset', quantidade: 4, valor: 100 }
]

// Inicializa o total de vendas em 0
let totalVendas = 0

// Usa forEach para iterar sobre o array vendas
vendas.forEach(venda => {
    // Calcula o valor total de cada venda
    const valorVenda = venda.quantidade * venda.valor
    // Soma o valor da venda ao total de vendas
    totalVendas += valorVenda
})

// Exibe o valor total de vendas no console
console.log(`O valor total de vendas é: R$ ${totalVendas}`)

let produtos = [
    { nome: "Cafeteira", preco: 250, desconto: 0.1 },
    { nome: "Notebook", preco: 3000, desconto: 0.1 },
    { nome: "Monitor", preco: 2000, desconto: 0.1 }
]

produtos.forEach(produto => {
    let descontoAplicado = produto.preco * produto.desconto
    let novoPreco = produto.preco - descontoAplicado
    console.log(`O novo preço de ${produto.nome} com 10% de desconto é R$${novoPreco}`)
})

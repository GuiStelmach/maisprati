// Criação de um array de objetos, onde cada objeto representa um produto com nome, preço e desconto
let produtos = [
    { nome: "Cafeteira", preco: 250, desconto: 0.1 },
    { nome: "Notebook", preco: 3000, desconto: 0.1 },
    { nome: "Monitor", preco: 2000, desconto: 0.1 }
]

// Utiliza o método forEach para iterar sobre cada produto no array 'produtos'
produtos.forEach(produto => {
    // Calcula o valor do desconto aplicando a porcentagem de desconto ao preço
    let descontoAplicado = produto.preco * produto.desconto
    
    // Subtrai o desconto aplicado do preço original para obter o novo preço
    let novoPreco = produto.preco - descontoAplicado
    
    // Exibe o nome do produto e seu novo preço com o desconto aplicado
    console.log(`O novo preço de ${produto.nome} com 10% de desconto é R$${novoPreco}`)
})
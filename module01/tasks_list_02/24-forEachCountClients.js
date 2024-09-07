// Criação de um array de objetos, onde cada objeto representa um cliente com nome, idade e cidade
let clientes = [
    { nome: "Alcemar", idade: 35, cidade: "Porto Alegre" },
    { nome: "Jairinho", idade: 77, cidade: "Curitiba" },
    { nome: "Davi", idade: 29, cidade: "São Paulo" }
]

// Inicializa uma variável para contar quantos clientes têm mais de 30 anos
let contagemMaisDe30 = 0

// Utiliza o método forEach para iterar sobre cada cliente no array 'clientes'
clientes.forEach(cliente => {
    // Verifica se a idade do cliente é maior que 30
    if (cliente.idade > 30) {
        // Incrementa o contador se a condição for verdadeira
        contagemMaisDe30++
    }
})

// Exibe o número de clientes com mais de 30 anos
console.log(`Número de clientes com mais de 30 anos: ${contagemMaisDe30}`)
// Criando um array de objetos, onde cada objeto representa uma pessoa
let pessoas = [
    { nome: "Alice", idade: 25, cidade: "São Paulo" }, // Primeiro objeto: pessoa 1
    { nome: "Bruno", idade: 30, cidade: "Rio de Janeiro" }, // Segundo objeto: pessoa 2
    { nome: "Carlos", idade: 22, cidade: "Curitiba" }, // Terceiro objeto: pessoa 3
    { nome: "Diana", idade: 28, cidade: "Belo Horizonte" } // Quarto objeto: pessoa 4
]

// Usando for...of para iterar sobre o array de pessoas
for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`) // Exibe as informações de cada pessoa
}

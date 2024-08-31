// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para verificar se os lados formam um triângulo e determinar o tipo
function checkTriangle() {
    // Solicita ao usuário para digitar os três lados do triângulo
    const a = parseFloat(prompt('Digite o lado A: ')) // Lê e converte a entrada do usuário para um número decimal
    const b = parseFloat(prompt('Digite o lado B: ')) // Lê e converte a entrada do usuário para um número decimal
    const c = parseFloat(prompt('Digite o lado C: ')) // Lê e converte a entrada do usuário para um número decimal

    // Verifica se os lados fornecidos podem formar um triângulo
    if (a < b + c && b < a + c && c < a + b) {
        // Verifica o tipo de triângulo
        if (a === b && b === c) {
            console.log('Triângulo Equilátero') // Imprime 'Triângulo Equilátero' se todos os lados forem iguais
        } else if (a === b || b === c || a === c) {
            console.log('Triângulo Isósceles') // Imprime 'Triângulo Isósceles' se exatamente dois lados forem iguais
        } else {
            console.log('Triângulo Escaleno') // Imprime 'Triângulo Escaleno' se todos os lados forem diferentes
        }
    } else {
        console.log('Não é um triângulo') // Imprime mensagem se os lados não formarem um triângulo
    }
}

// Chama a função para executar o código
checkTriangle()

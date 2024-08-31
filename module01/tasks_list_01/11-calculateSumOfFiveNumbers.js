// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para solicitar 5 números e calcular a soma total
function calculateSumOfFiveNumbers() {
    let totalSum = 0 // Inicializa a variável que armazenará a soma total

    // Usa um loop for para solicitar 5 números ao usuário
    for (let i = 0; i < 5; i++) {
        const number = parseFloat(prompt(`Digite o número ${i + 1}: `)) // Solicita um número e o converte para decimal
        totalSum += number // Adiciona o número à soma total
    }

    // Exibe a soma total dos números
    console.log(`A soma total dos números é: ${totalSum}`) // Imprime a soma total
}

// Chama a função para executar o código
calculateSumOfFiveNumbers()

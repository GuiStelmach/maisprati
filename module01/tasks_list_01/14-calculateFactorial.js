// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para calcular o fatorial de um número
function calculateFactorial() {
    // Solicita ao usuário para digitar um número inteiro
    let number = parseInt(prompt('Digite um número inteiro para calcular o fatorial: ')) // Lê e converte a entrada para um número inteiro

    let factorial = 1 // Inicializa a variável que armazenará o fatorial

    // Usa um loop while para calcular o fatorial
    while (number > 1) { // O loop continua enquanto o número for maior que 1
        factorial *= number // Multiplica o fatorial pelo número atual
        number-- // Decrementa o número
    }

    // Exibe o resultado do fatorial
    console.log(`O fatorial é: ${factorial}`) // Imprime o fatorial calculado
}

// Chama a função para executar o código
calculateFactorial()

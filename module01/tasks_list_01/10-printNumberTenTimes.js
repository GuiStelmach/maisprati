// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para ler um número inteiro e escrevê-lo 10 vezes na tela
function printNumberTenTimes() {
    // Solicita ao usuário para digitar um número inteiro
    let number = prompt('Digite um número inteiro: ') // Lê a entrada do usuário como string

    // Verifica se o número é um inteiro válido
    while (!Number.isInteger(parseFloat(number))) {
        console.log('Por favor, digite um número inteiro válido.') // Exibe uma mensagem de erro se o número não for um inteiro
        number = prompt('Digite um número inteiro: ') // Solicita ao usuário para digitar o número novamente
    }

    number = parseInt(number) // Converte a string para um número inteiro

    // Usa um loop for para exibir o número 10 vezes
    for (let i = 0; i < 10; i++) {
        console.log(number) // Imprime o número fornecido pelo usuário
    }
}

// Chama a função para executar o código
printNumberTenTimes()

// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para verificar se o número é par ou ímpar
function verificarParImpar() {
    // Solicita ao usuário para digitar um número inteiro
    const numero = parseInt(prompt('Digite um número inteiro: ')) // Lê e converte a entrada do usuário para um número inteiro

    // Verifica se o número é par
    if (numero % 2 === 0) {
        console.log(`${numero} é par`) // Imprime que o número é par se a condição for verdadeira
    } else {
        console.log(`${numero} é ímpar`) // Imprime que o número é ímpar se a condição for falsa
    }
}

// Chama a função para executar o código
verificarParImpar()

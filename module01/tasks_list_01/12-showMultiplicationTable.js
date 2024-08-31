// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para exibir a tabuada de um número
function showMultiplicationTable() {
    // Solicita ao usuário para digitar um número
    const number = parseFloat(prompt('Digite um número para ver a tabuada: ')) // Lê e converte a entrada do usuário para um número decimal

    // Usa um loop for para gerar a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`) // Imprime o resultado da multiplicação
    }
}

// Chama a função para executar o código
showMultiplicationTable()

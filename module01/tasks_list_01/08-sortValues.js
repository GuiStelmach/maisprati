// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para ler dois valores e exibi-los em ordem crescente
function sortValues() {
    // Solicita ao usuário para digitar o primeiro valor
    const value1 = parseFloat(prompt('Digite o primeiro valor: ')) // Lê e converte a entrada do usuário para um número decimal
    
    // Solicita ao usuário para digitar o segundo valor
    const value2 = parseFloat(prompt('Digite o segundo valor: ')) // Lê e converte a entrada do usuário para um número decimal

    // Verifica e exibe os valores em ordem crescente
    if (value1 < value2) {
        console.log(`Ordem crescente: ${value1}, ${value2}`) // Imprime os valores em ordem crescente se o primeiro for menor que o segundo
    } else {
        console.log(`Ordem crescente: ${value2}, ${value1}`) // Imprime os valores em ordem crescente se o segundo for menor que o primeiro
    }
}

// Chama a função para executar o código
sortValues()

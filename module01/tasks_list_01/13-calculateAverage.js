// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para calcular a média aritmética de números fornecidos
function calculateAverage() {
    let sum = 0 // Inicializa a variável para armazenar a soma dos números
    let count = 0 // Inicializa a variável para contar quantos números foram digitados
    let number // Declara a variável que armazenará cada número digitado

    // Usa um loop while para continuar recebendo números até que o usuário digite 0
    do {
        number = parseFloat(prompt('Digite um número decimal (ou 0 para terminar): ')) // Solicita um número decimal

        if (number !== 0) { // Verifica se o número não é 0
            sum += number // Adiciona o número à soma total
            count++ // Incrementa o contador de números
        }

    } while (number !== 0) // O loop continua enquanto o número digitado não for 0

    // Calcula a média aritmética se algum número diferente de 0 foi digitado
    if (count > 0) {
        const average = sum / count // Calcula a média
        console.log(`A média aritmética dos números digitados é: ${average}`) // Imprime a média aritmética
    } else {
        console.log('Nenhum número válido foi digitado.') // Mensagem caso o primeiro número digitado seja 0
    }
}

// Chama a função para executar o código
calculateAverage()

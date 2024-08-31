// Importa a biblioteca prompt-sync para manter o padrão
const prompt = require('prompt-sync')()

// Define a função para exibir a contagem regressiva
function countdown() {
    // Usa um loop for para iniciar a contagem de 10 até 1
    for (let i = 10; i >= 1; i--) {
        console.log(i) // Imprime o valor atual de i na contagem regressiva
    }
}

// Chama a função para executar o código
countdown()

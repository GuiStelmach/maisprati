// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para calcular o valor total da compra de maçãs
function calculateAppleCost() {
    console.log('Maça apenas R$ 0,30 a unidade (R$ 0,25 acima de 12un.')
    // Solicita ao usuário para digitar o número de maçãs compradas
    const numApples = parseInt(prompt('Digite o número de maçãs compradas: ')) // Lê e converte a entrada do usuário para um número inteiro

    // Define o preço das maçãs com base na quantidade comprada
    let pricePerApple
    if (numApples >= 12) {
        pricePerApple = 0.25 // Preço por maçã se forem compradas 12 ou mais
    } else {
        pricePerApple = 0.30 // Preço por maçã se forem compradas menos de 12
    }

    // Calcula o valor total da compra
    const totalCost = numApples * pricePerApple // Multiplica o número de maçãs pelo preço por maçã

    // Exibe o valor total da compra
    console.log(`Valor total da compra: R$ ${totalCost.toFixed(2)}`) // Imprime o valor total formatado com duas casas decimais
}

// Chama a função para executar o código
calculateAppleCost()

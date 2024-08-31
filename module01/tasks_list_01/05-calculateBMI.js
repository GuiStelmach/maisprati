// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para calcular o IMC e determinar a categoria de peso
function calculateBMI() {
    // Solicita ao usuário para digitar o peso em kg
    const weight = parseFloat(prompt('Digite o peso em kg: ')) // Lê e converte a entrada do usuário para um número decimal
    
    // Solicita ao usuário para digitar a altura em metros
    const height = parseFloat(prompt('Digite a altura em metros: ')) // Lê e converte a entrada do usuário para um número decimal

    // Calcula o IMC usando a fórmula IMC = peso / (altura * altura)
    const bmi = weight / (height * height) // Fórmula do IMC

    // Classifica o IMC em categorias de peso
    if (bmi < 18.5) {
        console.log('Baixo peso') // Imprime 'Baixo peso' se o IMC for menor que 18.5
    } else if (bmi >= 18.5 && bmi < 24.9) {
        console.log('Peso normal') // Imprime 'Peso normal' se o IMC estiver entre 18.5 e 24.9
    } else if (bmi >= 25 && bmi < 29.9) {
        console.log('Sobrepeso') // Imprime 'Sobrepeso' se o IMC estiver entre 25 e 29.9
    } else {
        console.log('Obesidade') // Imprime 'Obesidade' se o IMC for 30 ou mais
    }
}

// Chama a função para executar o código
calculateBMI()

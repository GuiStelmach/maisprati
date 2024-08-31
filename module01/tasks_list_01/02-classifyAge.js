// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para classificar a idade
function classifyAge() {
    // Solicita ao usuário para digitar a idade
    const idade = parseInt(prompt('Digite a sua idade: ')) // Lê e converte a entrada do usuário para um número inteiro

    // Verifica a faixa etária e classifica a idade
    if (idade >= 0 && idade <= 12) {
        console.log('Criança') // Imprime 'Criança' se a idade estiver entre 0 e 12 anos
    } else if (idade >= 13 && idade <= 17) {
        console.log('Adolescente') // Imprime 'Adolescente' se a idade estiver entre 13 e 17 anos
    } else if (idade >= 18 && idade <= 64) {
        console.log('Adulto') // Imprime 'Adulto' se a idade estiver entre 18 e 64 anos
    } else if (idade >= 65) {
        console.log('Idoso') // Imprime 'Idoso' se a idade for 65 anos ou mais
    } else {
        console.log('Idade inválida') // Imprime 'Idade inválida' para entradas negativas
    }
}

// Chama a função para executar o código
classifyAge()

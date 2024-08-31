// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para classificar a nota
function classifyGrade() {
    // Solicita ao usuário para digitar a nota
    const nota = parseFloat(prompt('Digite a nota (0 a 10): ')) // Lê e converte a entrada do usuário para um número decimal

    // Verifica a nota e classifica o resultado
    if (nota >= 7 && nota <= 10) {
        console.log('Aprovado') // Imprime 'Aprovado' se a nota estiver entre 7 e 10
    } else if (nota >= 4 && nota < 7) {
        console.log('Recuperação') // Imprime 'Recuperação' se a nota estiver entre 4 e menos de 7
    } else if (nota >= 0 && nota < 4) {
        console.log('Reprovado') // Imprime 'Reprovado' se a nota estiver entre 0 e menos de 4
    } else {
        console.log('Nota inválida') // Imprime 'Nota inválida' para notas fora do intervalo 0 a 10
    }
}

// Chama a função para executar o código
classifyGrade()

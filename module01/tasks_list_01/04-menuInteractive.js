// Importa a biblioteca prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

// Define a função para exibir o menu e tratar a escolha do usuário
function showMenu() {
    // Exibe o menu para o usuário
    console.log('Escolha uma opção:')
    console.log('1. Opção 1')
    console.log('2. Opção 2')
    console.log('3. Opção 3')

    // Solicita ao usuário para digitar a escolha
    const escolha = parseInt(prompt('Digite o número da opção desejada: ')) // Lê e converte a entrada do usuário para um número inteiro

    // Usa a estrutura switch-case para tratar a escolha do usuário
    switch (escolha) {
        case 1:
            console.log('Você escolheu a Opção 1') // Imprime mensagem para a Opção 1
            break // Termina o bloco do case 1
        case 2:
            console.log('Você escolheu a Opção 2') // Imprime mensagem para a Opção 2
            break // Termina o bloco do case 2
        case 3:
            console.log('Você escolheu a Opção 3') // Imprime mensagem para a Opção 3
            break // Termina o bloco do case 3
        default:
            console.log('Opção inválida') // Imprime mensagem para opções fora do intervalo 1-3
    }
}

// Chama a função para executar o código
showMenu()

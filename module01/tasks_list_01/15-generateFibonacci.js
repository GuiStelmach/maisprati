// Define a função para gerar e imprimir os primeiros 10 números da sequência de Fibonacci
function generateFibonacci() {
    let num1 = 0 // Inicializa o primeiro número da sequência
    let num2 = 1 // Inicializa o segundo número da sequência

    console.log(num1) // Imprime o primeiro número da sequência
    console.log(num2) // Imprime o segundo número da sequência

    // Usa um loop for para gerar os próximos 8 números da sequência de Fibonacci
    for (let i = 3; i <= 10; i++) {
        let nextNum = num1 + num2 // Calcula o próximo número da sequência
        console.log(nextNum) // Imprime o próximo número da sequência

        num1 = num2 // Atualiza num1 para o valor de num2
        num2 = nextNum // Atualiza num2 para o valor de nextNum
    }
}

// Chama a função para executar o código
generateFibonacci()

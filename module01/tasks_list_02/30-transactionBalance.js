// Criando um array de objetos transacoes, cada um com tipo (entrada ou saída) e valor
const transacoes = [
    { tipo: 'entrada', valor: 1000 },
    { tipo: 'saida', valor: 300 },
    { tipo: 'entrada', valor: 500 },
    { tipo: 'saida', valor: 150 },
    { tipo: 'entrada', valor: 700 }
]

// Inicializando o saldo final em 0
let saldoFinal = 0

// Usando forEach para iterar sobre cada transação
transacoes.forEach(transacao => {
    // Verificando o tipo de transação e ajustando o saldo final
    if (transacao.tipo === 'entrada') {
        saldoFinal += transacao.valor // Somando o valor se for entrada
    } else if (transacao.tipo === 'saida') {
        saldoFinal -= transacao.valor // Subtraindo o valor se for saída
    }
})

// Exibindo o saldo final no console
console.log(`O saldo final é: R$ ${saldoFinal}`)

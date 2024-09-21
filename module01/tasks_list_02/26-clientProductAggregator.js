// Cria um array de objetos pedidos com cliente, produto e quantidade
let pedidos = [
    { cliente: 'Edu', produto: 'Carregador', quantidade: 1 },
    { cliente: 'Maria', produto: 'Mousepad', quantidade: 2 },
    { cliente: 'Edu', produto: 'Headset', quantidade: 1 },
    { cliente: 'Pedro', produto: 'Headset', quantidade: 3 },
    { cliente: 'Maria', produto: 'Teclado', quantidade: 1 }
]

// Cria um objeto vazio para agrupar as quantidades por cliente
let totalPorCliente = {}

// Usa forEach para iterar sobre o array de pedidos
pedidos.forEach(pedido => {
    // Se o cliente já existe no objeto totalPorCliente, soma a quantidade
    if (totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] += pedido.quantidade
    } else {
        // Se o cliente não existe, cria uma nova entrada no objeto
        totalPorCliente[pedido.cliente] = pedido.quantidade
    }
})

// Exibe o objeto totalPorCliente no console
console.log(totalPorCliente)

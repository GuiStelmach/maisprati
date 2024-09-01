// Função para criar e exibir as propriedades de um carro
function mostrarPropriedadesCarro() {
    // Cria um objeto carro com propriedades marca, modelo, ano e cor
    let carro = {
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2020,
        cor: 'Prata'
    }

    // Itera sobre as propriedades do objeto carro
    for (let propriedade in carro) {
        // Exibe o valor de cada propriedade no console
        console.log(`${propriedade}: ${carro[propriedade]}`)
    }
}

// Chama a função para executar o código
mostrarPropriedadesCarro()

// Importa a biblioteca prompt-sync para receber entrada do usuário
const prompt = require('prompt-sync')()

// Função para filtrar propriedades de um objeto com base em um valor mínimo
function filtrarPropriedades(produto, valorMinimo) {
    // Cria um novo objeto para armazenar as propriedades filtradas
    let propriedadesFiltradas = {}

    // Itera sobre as propriedades do objeto produto
    for (let propriedade in produto) {
        // Verifica se o valor da propriedade é maior que o valor mínimo especificado
        if (produto[propriedade] > valorMinimo) {
            // Adiciona a propriedade ao novo objeto, se a condição for verdadeira
            propriedadesFiltradas[propriedade] = produto[propriedade]
        }
    }

    // Retorna o novo objeto contendo apenas as propriedades filtradas
    return propriedadesFiltradas
}

// Exemplo de uso:
// Cria um objeto produto com várias propriedades
let produto = {
    nome: 'Notebook',
    preco: 3500,
    garantia: 2,
    peso: 2.5,
    estoque: 50
}

// Define um valor mínimo para filtrar as propriedades
let valorMinimo = parseFloat(prompt('Digite o valor mínimo para filtrar as propriedades: '))

// Chama a função para filtrar as propriedades do objeto produto
let resultado = filtrarPropriedades(produto, valorMinimo)

// Exibe o objeto com as propriedades filtradas
console.log('Propriedades filtradas:', resultado)

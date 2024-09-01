// Função para criar e verificar as propriedades de um livro
function verificarEAdicionarPropriedade() {
    // Cria um objeto livro com propriedades titulo, autor, anoPublicacao e genero
    let livro = {
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        anoPublicacao: 1954,
        genero: 'Fantasia'
    }

    // Inicializa uma variável para verificar a existência da propriedade editora
    let temEditora = false

    // Itera sobre as propriedades do objeto livro
    for (let propriedade in livro) {
        // Verifica se a propriedade atual é 'editora'
        if (propriedade === 'editora') {
            temEditora = true // Define como verdadeiro se a propriedade existir
        }
    }

    // Verifica se a propriedade 'editora' não foi encontrada
    if (!temEditora) {
        // Adiciona a propriedade 'editora' ao objeto livro
        livro.editora = 'HarperCollins'
    }

    // Exibe o objeto livro completo com a nova propriedade, se adicionada
    console.log(livro)
}

// Chama a função para executar o código
verificarEAdicionarPropriedade()

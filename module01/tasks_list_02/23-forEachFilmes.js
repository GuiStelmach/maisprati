// Criação de um array de objetos, onde cada objeto representa um filme com título, diretor e ano de lançamento
let filmes = [
    { titulo: "Guerra ao Terror", diretor: "Kathryn Bigelow", anoLancamento: 2008 },
    { titulo: "Tropa de Elite", diretor: "José Padilha", anoLancamento: 2007 },
    { titulo: "Um Contratempo", diretor: "Oriol Paulo", anoLancamento: 2016 },
    { titulo: "Toy Story 3", diretor: "Lee Unkrich", anoLancamento: 2010 }
]

// Inicializa um array vazio para armazenar os títulos dos filmes
let titulos = []

// Utiliza o método forEach para iterar sobre cada filme no array 'filmes'
filmes.forEach(filme => {
    // Adiciona o título do filme atual ao array 'titulos'
    titulos.push(filme.titulo)
})

// Exibe o array 'titulos' contendo apenas os títulos dos filmes
console.log(titulos)
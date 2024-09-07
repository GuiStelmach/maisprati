// Define um objeto chamado "curso"
let curso = {
    // Propriedade "disciplina" que armazena o nome da disciplina
    disciplina: "Programação Web", 
    // Propriedade "turma" que contém outro objeto, representando os alunos
    turma: {
        // Definição de aluno0 com suas notas
        aluno0: {
            nome: "Jaques",  // Nome do aluno
            nota1: 10,       // Primeira nota do aluno
            nota2: 7         // Segunda nota do aluno
        },
        // Definição de aluno1 com suas notas
        aluno1: {
            nome: "Hyago",   // Nome do aluno
            nota1: 8,        // Primeira nota do aluno
            nota2: 8         // Segunda nota do aluno
        },
        // Definição de aluno2 com suas notas
        aluno2: {
            nome: "Edu",     // Nome do aluno
            nota1: 7,        // Primeira nota do aluno
            nota2: 10        // Segunda nota do aluno
        }
    }
}

// Cria um array vazio para armazenar as médias dos alunos
let medias = []

// Cria um array "alunos" que armazena os objetos referentes a cada aluno
let alunos = [curso.turma.aluno0, curso.turma.aluno1, curso.turma.aluno2]

// Itera sobre o array "alunos" utilizando um loop "for...of"
for (let aluno of alunos) {
    // Calcula a soma das notas de cada aluno
    let soma = aluno.nota1 + aluno.nota2
    // Calcula a média das notas
    let media = soma / 2
    // Adiciona um objeto ao array "medias" com o nome do aluno e a média calculada
    medias.push({nome: aluno.nome, media: media})
}

// Itera sobre o array "medias" para exibir o resultado no console
for (let resultado of medias) {
    // Exibe no console a mensagem com o nome do aluno e sua média
    console.log(`O aluno ${resultado.nome} teve nota média de ${resultado.media}!`)
}
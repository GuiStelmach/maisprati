// Define um objeto "empresa" que contém as informações da empresa e seus funcionários
let empresa = {
    nome: "Zallpy", // Propriedade "nome" que define o nome da empresa
    funcionarios: { // Propriedade "funcionarios", que é um objeto contendo vários funcionários
        funcionario0: { // Objeto "funcionario0" que representa um funcionário
            nome: "Guilherme", // Nome do funcionário
            cargo: "Dev Fullstack JR", // Cargo do funcionário
            salario: 2500 // Salário do funcionário
        },
        funcionario1: { // Objeto "funcionario1" que representa outro funcionário
            nome: "Eduardo", // Nome do funcionário
            cargo: "Dev Frontend Trainee", // Cargo do funcionário
            salario: 1000 // Salário do funcionário
        },
        funcionario2: { // Objeto "funcionario2" que representa outro funcionário
            nome: "Andre", // Nome do funcionário
            cargo: "Product Owner", // Cargo do funcionário
            salario: 10000 // Salário do funcionário
        }
    }
}

// Cria um array "funcionarios" que contém os funcionários da empresa extraídos do objeto "empresa"
let funcionarios = [empresa.funcionarios.funcionario0, empresa.funcionarios.funcionario1, empresa.funcionarios.funcionario2]

// Define um valor de salário mínimo para o filtro
let salarioMinimo = 3000

// Loop "for...of" que percorre cada objeto funcionário no array "funcionarios"
for (let funcionario of funcionarios) {
    // Verifica se o salário do funcionário é maior que o valor do "salarioMinimo"
    if (funcionario.salario > salarioMinimo) {
        // Formata o salário para o formato de moeda brasileira
        let salarioFormatado = funcionario.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        
        // Exibe o nome, cargo e salário formatado do funcionário no console
        console.log(`Funcionário: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${salarioFormatado}`)
    }
}
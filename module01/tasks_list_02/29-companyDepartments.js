// Criando o objeto empresa com uma propriedade departamentos, que é um array de objetos
const empresa = {
    departamentos: [
        {
            nome: 'Tecnologia',
            funcionarios: ['Edu', 'Hyago', 'Jaques']
        },
        {
            nome: 'Recursos Humanos',
            funcionarios: ['Ana', 'Ricardo', 'Fernanda']
        },
        {
            nome: 'Financeiro',
            funcionarios: ['João', 'Paula', 'Roberto']
        }
    ]
}

// Usando for in para iterar sobre os departamentos da empresa
for (let index in empresa.departamentos) {
    const departamento = empresa.departamentos[index]
    
    // Usando for of para iterar sobre os funcionários de cada departamento
    for (let funcionario of departamento.funcionarios) {
        // Exibindo o nome do funcionário e o departamento correspondente
        console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nome}`)
    }
}

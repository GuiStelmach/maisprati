document.getElementById('adicionarBtn').addEventListener('click', adicionarTarefa)
document.getElementById('filtrarBtn').addEventListener('click', filtrarTarefas)

let tarefas = []

function adicionarTarefa() {
    const input = document.getElementById('novaTarefa')
    const titulo = input.value.trim()
    if (titulo === '') return

    const novaTarefa = {
        id: Date.now(),
        titulo: titulo,
        concluida: false,
        editando: false
    }
    
    tarefas.push(novaTarefa)
    input.value = ''
    renderizarTarefas()
}

function renderizarTarefas() {
    const lista = document.getElementById('listaTarefas')
    lista.innerHTML = ''
    
    tarefas.forEach(tarefa => {
        const li = document.createElement('li')
        li.className = 'tarefa'
        if (tarefa.concluida) li.classList.add('tarefaConcluida')
        
        if (tarefa.editando) {
            const inputEdit = document.createElement('input')
            inputEdit.type = 'text'
            inputEdit.value = tarefa.titulo
            inputEdit.addEventListener('blur', () => finalizarEdicao(tarefa.id, inputEdit.value))
            li.appendChild(inputEdit)
            inputEdit.focus()
        } else {
            const span = document.createElement('span')
            span.textContent = tarefa.titulo
            li.appendChild(span)
        }

        const botoesDiv = document.createElement('div')
        botoesDiv.className = 'botoesTarefa'

        const concluirBtn = document.createElement('button')
        concluirBtn.textContent = tarefa.concluida ? 'Desmarcar' : 'Concluir'
        concluirBtn.className = 'botaoConcluir'
        concluirBtn.addEventListener('click', () => concluirTarefa(tarefa.id))

        const editarBtn = document.createElement('button')
        editarBtn.textContent = 'Editar'
        editarBtn.className = 'botaoEditar'
        editarBtn.addEventListener('click', () => editarTarefa(tarefa.id))

        const deletarBtn = document.createElement('button')
        deletarBtn.textContent = 'Deletar'
        deletarBtn.className = 'botaoDeletar'
        deletarBtn.addEventListener('click', () => deletarTarefa(tarefa.id))

        botoesDiv.appendChild(concluirBtn)
        botoesDiv.appendChild(editarBtn)
        botoesDiv.appendChild(deletarBtn)
        li.appendChild(botoesDiv)
        lista.appendChild(li)
    })
}

function editarTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id)
    if (tarefa) {
        tarefa.editando = true
        renderizarTarefas()
    }
}

function finalizarEdicao(id, novoTitulo) {
    const tarefa = tarefas.find(t => t.id === id)
    if (tarefa) {
        tarefa.titulo = novoTitulo
        tarefa.editando = false
        renderizarTarefas()
    }
}

function concluirTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id)
    if (tarefa) {
        tarefa.concluida = !tarefa.concluida
        renderizarTarefas()
    }
}

function deletarTarefa(id) {
    tarefas = tarefas.filter(t => t.id !== id)
    renderizarTarefas()
}

function filtrarTarefas() {
    const filtro = document.getElementById('filtro').value
    let tarefasFiltradas = []

    if (filtro === 'todas') {
        tarefasFiltradas = tarefas
    } else if (filtro === 'concluidas') {
        tarefasFiltradas = tarefas.filter(t => t.concluida)
    } else if (filtro === 'pendentes') {
        tarefasFiltradas = tarefas.filter(t => !t.concluida)
    }

    const lista = document.getElementById('listaTarefas')
    lista.innerHTML = ''
    
    tarefasFiltradas.forEach(tarefa => {
        const li = document.createElement('li')
        li.className = 'tarefa'
        if (tarefa.concluida) li.classList.add('tarefaConcluida')
        
        const span = document.createElement('span')
        span.textContent = tarefa.titulo
        li.appendChild(span)

        const botoesDiv = document.createElement('div')
        botoesDiv.className = 'botoesTarefa'

        const concluirBtn = document.createElement('button')
        concluirBtn.textContent = tarefa.concluida ? 'Desmarcar' : 'Concluir'
        concluirBtn.className = 'botaoConcluir'
        concluirBtn.addEventListener('click', () => concluirTarefa(tarefa.id))

        const editarBtn = document.createElement('button')
        editarBtn.textContent = 'Editar'
        editarBtn.className = 'botaoEditar'
        editarBtn.addEventListener('click', () => editarTarefa(tarefa.id))

        const deletarBtn = document.createElement('button')
        deletarBtn.textContent = 'Deletar'
        deletarBtn.className = 'botaoDeletar'
        deletarBtn.addEventListener('click', () => deletarTarefa(tarefa.id))

        botoesDiv.appendChild(concluirBtn)
        botoesDiv.appendChild(editarBtn)
        botoesDiv.appendChild(deletarBtn)
        li.appendChild(botoesDiv)
        lista.appendChild(li)
    })
}

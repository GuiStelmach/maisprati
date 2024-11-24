let titulo = document.getElementById('titulo')
let botaoAdicionarItem = document.getElementById('adicionarItem')
let botaoRemoverItem = document.getElementById('removerItem')
let lista = document.getElementById('lista')
let nomeItemInput = document.getElementById('nomeItem')


function adicionarItem() {
    let nomeItem = nomeItemInput.value.trim()

    if (nomeItem === "") {
        titulo.innerHTML = '⚠️ Por favor, insira um nome para a tarefa!'
        titulo.style.color = 'orange'
        return
    }

    let novoItem = document.createElement('li')

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.style.marginRight = '10px'

    novoItem.appendChild(checkbox)
    novoItem.appendChild(document.createTextNode(nomeItem))

    lista.appendChild(novoItem)

    titulo.innerHTML = '✅ Nova tarefa adicionada!'
    titulo.style.color = 'green'

    nomeItemInput.value = ''
}


function removerItem() {
    let itens = lista.children
    let removido = false

    for (let i = itens.length - 1; i >= 0; i--) {
        let checkbox = itens[i].querySelector('input[type="checkbox"]')

        if (checkbox && checkbox.checked) {
            lista.removeChild(itens[i]) 
            removido = true
            titulo.innerHTML = '🗑️ Tarefa concluída removida!'
            titulo.style.color = 'red'
            break 
        }
    }

    
    if (!removido) {
        titulo.innerHTML = '🛑 Nenhuma tarefa marcada para remoção!!'
        titulo.style.color = 'gray'
    }
}

botaoAdicionarItem.addEventListener('click', adicionarItem)
botaoRemoverItem.addEventListener('click', removerItem)

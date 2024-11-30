import React, { useState } from 'react';
import './TodoList.css'; // Importa o CSS

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showPending, setShowPending] = useState(false);
  const [notification, setNotification] = useState(''); // Estado para notificações

  // Função para exibir notificações temporárias
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000); // Limpa a notificação após 3 segundos
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
      showNotification('Tarefa Adicionada'); // Mostra a notificação
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    showNotification('Tarefa Deletada'); // Mostra a notificação
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
    const task = tasks[index];
    showNotification(
      task && task.completed ? 'Tarefa Desmarcada' : 'Tarefa Concluída'
    ); // Mostra a notificação com base no estado atual
  };

  const filteredTasks = showPending
    ? tasks.filter((task) => !task.completed)
    : tasks;

  return (
    <div className="todo-container">
      <h1>Lista de Tarefas</h1>

      {/* Notificação */}
      {notification && <div className="notification">{notification}</div>}

      {/* Entrada para nova tarefa */}
      <div className="todo-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma tarefa"
          className="todo-input"
        />
        <button onClick={addTask} className="add-task-button">
          Adicionar
        </button>
      </div>

      {/* Botão para alternar filtro */}
      <button
        onClick={() => setShowPending(!showPending)}
        className={`filter-button ${showPending ? 'show-all' : 'show-pending'}`}
      >
        {showPending ? 'Mostrar Todas' : 'Mostrar Pendentes'}
      </button>

      {/* Lista de tarefas */}
      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? 'completed' : ''}`}
          >
            <span>{task.text}</span>
            <div className="task-actions">
              <button
                onClick={() => toggleTaskCompletion(index)}
                className={`toggle-button ${
                  task.completed ? 'unmark' : 'mark'
                }`}
              >
                {task.completed ? 'Desmarcar' : 'Concluir'}
              </button>
              <button
                onClick={() => removeTask(index)}
                className="remove-button"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Mensagem para lista vazia */}
      {filteredTasks.length === 0 && (
        <p className="no-tasks-message">
          {showPending
            ? 'Nenhuma tarefa pendente.'
            : 'Nenhuma tarefa adicionada ainda.'}
        </p>
      )}
    </div>
  );
};

export default TodoList;

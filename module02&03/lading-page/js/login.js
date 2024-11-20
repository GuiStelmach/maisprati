function showNotification(message, type = 'success', duration = 4000) {
    // Cria o elemento da notificação
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;

    // Adiciona a notificação ao container
    const container = document.getElementById('notification-container');
    container.appendChild(notification);

    // Remove a notificação após o tempo especificado
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s forwards';
        notification.addEventListener('animationend', () => notification.remove());
    }, duration);
}

function validateEmail() {
    const email = document.getElementById('emailInput').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        // Substitui o alerta por uma notificação de erro
        showNotification("Por favor, insira um endereço de e-mail válido.", 'error');
        return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ email: email }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        // Exibe uma notificação de sucesso
        showNotification("Validação de e-mail bem-sucedida!");
        console.log(data);
    })
    .catch(error => {
        // Exibe uma notificação de erro
        showNotification("Ocorreu um erro. Por favor, tente novamente.", 'error');
        console.error('Error:', error);
    });
}

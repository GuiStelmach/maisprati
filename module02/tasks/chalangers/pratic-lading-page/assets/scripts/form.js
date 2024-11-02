emailjs.init("qAS8xczFNN4SsklOM");

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação do formulário
    if (!nome || !email || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else if (!email.includes("@")) {
        alert('Por favor, insira um e-mail válido.');
    } else if (!/^\d{10,11}$/.test(telefone)) {
        alert('Por favor, insira um número de telefone válido com DDD.');
    } else {
        enviarEmail(nome, email, telefone, mensagem);
    }
});

function enviarEmail(nome, email, telefone, mensagem) {
    emailjs.send("service_n1uu3ig", "template_ynvy0si", {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    }, "qAS8xczFNN4SsklOM")
    .then(function(response) {
        console.log('Email enviado com sucesso!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');
        document.getElementById('meuFormulario').reset();
    }, function(error) {
        console.log('Erro ao enviar o email:', error);
        alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
    });
}

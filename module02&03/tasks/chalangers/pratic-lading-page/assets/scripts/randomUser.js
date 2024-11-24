const depoimentosContainer = document.getElementById('depoimentos-container');

async function carregarDepoimentos() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        const data = await response.json();
        const users = data.results;

        users.forEach((user, index) => {
            depoimentosContainer.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 text-center">
                        <img src="${user.picture.large}" class="card-img-top rounded-circle mx-auto mt-3"
                            alt="Foto de ${user.name.first}" style="width: 80px; height: 80px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">${user.name.first}</h5>
                            <p class="card-text">"${gerarTextoDepoimento(index)}"</p>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error("Erro ao carregar depoimentos:", error);
        depoimentosContainer.innerHTML = "<p>Não foi possível carregar os depoimentos.</p>";
    }
}

function gerarTextoDepoimento(index) {
    const depoimentos = [
        "O atendimento foi incrível e superou todas as minhas expectativas!",
        "Serviço de qualidade e uma equipe super atenciosa. Recomendo!",
        "A experiência foi ótima do início ao fim. Com certeza voltarei!"
    ];
    return depoimentos[index] || "Depoimento excelente!";
}

document.addEventListener('DOMContentLoaded', carregarDepoimentos);

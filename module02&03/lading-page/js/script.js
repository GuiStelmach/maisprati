// Seleciona todos os botões de compra com a classe 'square-button'
const buyButtons = document.querySelectorAll(".square-button");

// Seleciona os elementos do modal
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const closeModalButton = document.querySelector("#close-modal");

// Verifica se os elementos do modal existem
if (modal && fade && closeModalButton) {
    // Função para abrir o modal
    const openModal = () => {
        modal.classList.remove("hide");
        fade.classList.remove("hide");
        modal.setAttribute("aria-hidden", "false");
        fade.setAttribute("aria-hidden", "false");
        modal.focus(); // Foca no modal para acessibilidade
    };

    // Função para fechar o modal
    const closeModal = () => {
        modal.classList.add("hide");
        fade.classList.add("hide");
        modal.setAttribute("aria-hidden", "true");
        fade.setAttribute("aria-hidden", "true");
        // Retorna o foco ao botão que abriu o modal
        const lastFocusedButton = document.activeElement;
        if (lastFocusedButton && lastFocusedButton.classList.contains("square-button")) {
            lastFocusedButton.focus();
        }
    };

    // Adiciona o evento de clique para todos os botões de compra
    buyButtons.forEach((button) => {
        button.addEventListener("click", openModal);
    });

    // Adiciona o evento de clique para fechar o modal (botão e fundo)
    [closeModalButton, fade].forEach((element) => {
        element.addEventListener("click", closeModal);
    });

    // Fecha o modal ao pressionar a tecla Esc
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.classList.contains("hide")) {
            closeModal();
        }
    });

    // Previne o fechamento ao clicar dentro do modal
    modal.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}

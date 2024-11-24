function toggleMenu() {
    // Selecionando os elementos
    const menuButton = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav');
    
    // Alternando a visibilidade do menu e a classe do botão hambúrguer
    navList.classList.toggle('active');
    menuButton.classList.toggle('active');
    
    // Alterando o atributo aria-expanded para indicar o estado do menu
    const isMenuOpen = navList.classList.contains('active');
    menuButton.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');
}
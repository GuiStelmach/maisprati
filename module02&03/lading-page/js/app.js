document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o carrossel/slider usando a biblioteca Swiper
    const initSwiper = () => {
        const swiperElement = document.querySelector('.swiper');
        if (!swiperElement) return; // Verifica se o elemento do swiper existe

        const swiper = new Swiper(swiperElement, {
            direction: 'horizontal',
            loop: false,
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });

        // Adiciona navegação por teclado
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowLeft') swiper.slidePrev();
            if (event.key === 'ArrowRight') swiper.slideNext();
        });
    };

    // Lógica do menu hambúrguer
    const initMobileMenu = () => {
        const mobileMenu = document.querySelector('.mobile-menu');
        const sidebar = document.querySelector('.sidebar');

        if (!mobileMenu || !sidebar) return; // Verifica se os elementos existem

        mobileMenu.addEventListener('click', () => {
            const isActive = sidebar.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            sidebar.setAttribute('aria-hidden', !isActive);
            mobileMenu.setAttribute('aria-expanded', isActive);
        });
    };

    // Inicialização de funcionalidades
    initSwiper();
    initMobileMenu();
});

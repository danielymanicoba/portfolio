document.querySelectorAll('.header-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Ativa a rolagem suave
                block: 'start' // Define o alinhamento da seção
            });
        }
    });
});
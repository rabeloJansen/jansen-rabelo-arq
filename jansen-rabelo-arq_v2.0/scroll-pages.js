document.addEventListener('DOMContentLoaded', function () {
    // Botão "next" da primeira página
    const nextBtn1 = document.querySelector('#first-page .page-buttons-row#next-page .page-button');
    // Botão "prev" da segunda página
    const prevBtn2 = document.querySelector('#second-page .page-buttons-row#prev-page .page-button');
    // Botão "next" da segunda página
    const nextBtn2 = document.querySelector('#second-page .page-buttons-row#next-page .page-button');
    // Botão "prev" da terceira página
    const prevBtn3 = document.querySelector('#third-page .page-buttons-row#prev-page .page-button');
    // Botão "next" da terceira página
    const nextBtn3 = document.querySelector('#third-page .page-buttons-row#next-page .page-button');

    // Vai para a segunda página
    if (nextBtn1) {
        nextBtn1.addEventListener('click', function () {
            const section = document.getElementById('second-page');
            if (section) {
                window.scrollTo({ left: section.offsetLeft, behavior: 'smooth' });
            }
        });
    }
    
    // Volta para a primeira página
    if (prevBtn2) {
        prevBtn2.addEventListener('click', function () {
            const section = document.getElementById('first-page');
            if (section) {
                window.scrollTo({ left: section.offsetLeft, behavior: 'smooth' });
            }
        });
    }

    // Vai para a terceira página
    if (nextBtn2) {
        nextBtn2.addEventListener('click', function () {
            const section = document.getElementById('third-page');
            if (section) {
                window.scrollTo({ left: section.offsetLeft, behavior: 'smooth' });
            }
        });
    }

    // Volta para a segunda página
    if (prevBtn3) {
        prevBtn3.addEventListener('click', function () {
            const section = document.getElementById('second-page');
            if (section) {
                window.scrollTo({ left: section.offsetLeft, behavior: 'smooth' });
            }
        });
    }

    // Exemplo para rolar para a próxima página (caso tenha mais páginas)
    if (nextBtn3) {
        // Adicione aqui o scroll para a próxima seção, se existir
    }
});

// Scroll suave para a seção "Sobre Mim"
document.querySelector('a[href="#aboutme"]').addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.getElementById('second-page');
    if (section) {
        const left = section.offsetLeft;
        window.scrollTo({ left, behavior: 'smooth' });
    }
});

// Scroll suave para a seção "Início"
document.querySelector('a[href="home.html"]').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ left: 0, behavior: 'smooth' });
});
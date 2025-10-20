window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('preloader').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
            // O fadeIn do body já será ativado pelo CSS
        }, 400); // tempo do transition do preloader
    }, 2000); // 1 segundo de preloader
});
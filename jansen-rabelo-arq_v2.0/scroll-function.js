document.addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
        event.preventDefault();
        window.scrollBy({
            left: event.deltaY,
        });
    }
}, { passive: false }); // Necessário para permitir preventDefault
document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const secondPageOffset = window.innerWidth; // Largura da primeira página
    if (window.scrollX >= 0.5) {
    // if (window.scrollX >= secondPageOffset) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
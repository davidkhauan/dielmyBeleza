document.getElementById("switch").addEventListener("click", () => {
    var switchIcon = document.getElementById("btn-switch");

    if (switchIcon.classList.contains('bi-toggle2-off')) {
        switchIcon.classList.remove('bi-toggle2-off', 'icon-black');
        switchIcon.classList.add('bi-toggle2-on', 'icon-white', 'icon-switch');
    } else {
        switchIcon.classList.remove('bi-toggle2-on', 'icon-white');
        switchIcon.classList.add('bi-toggle2-off', 'icon-black', 'icon-switch');
    }

    // Remove a transformação de escala após a duração da transição
    setTimeout(() => {
        switchIcon.classList.remove('icon-switch');
    }, 300); // Duração da transição em milissegundos
});

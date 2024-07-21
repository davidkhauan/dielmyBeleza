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

const feedbacks = [
    {
        text: "Lorem ipsum, dolor s quo, numquam deserunis dicta totam.",
        author: 'David Khauan',
        location: 'Fortaleza-CE'
    },
    {
        text: "Lorem ipsum, dolor s quo, numquam deserunis dicta totam.",
        author: 'Maria da Silva',
        location: 'Fortaleza-CE'
    },
    {
        text: "Lorem ipsum, dolor s quo, numquam deserunis dicta totam.",
        author: 'Marcus Antônio',
        location: 'Fortaleza-CE'
    },
    {
        text: "Lorem ipsum, dolor s quo, numquam deserunis dicta totam.",
        author: 'Gustavo Lima',
        location: 'Fortaleza-CE'
    }
]

let feedbackAtual = 0

function showFeedback (index) {
    const feedbackTexto = document.querySelector ('.feedback-texto')
    const autorNome = document.querySelector ('.autor-nome')
    const autorLocal = document.querySelector ('.autor-local')

    feedbackTexto.textContent = feedbacks [index].text
    autorNome.textContent = feedbacks [index].author
    autorLocal.textContent = feedbacks [index].location
}

function showPrevFeedback() {
    feedbackAtual = 
        (feedbackAtual - 1 + feedbacks.length) % feedbacks.length
    showFeedback (feedbackAtual)
}

function showNextFeedback() {
    feedbackAtual = 
        (feedbackAtual + 1) % feedbacks.length
    showFeedback (feedbackAtual)
}

document.addEventListener ("DOMContentLoaded", () => {
    showFeedback (feedbackAtual)
})
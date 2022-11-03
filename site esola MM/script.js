const ler_mais = document.getElementById('ler_mais');
const link_ler_mais = document.getElementById('ler')

function toggle_ler_mais() {
    ler_mais.classList.toggle('ler_mais_texto')
    link_ler_mais.classList.toggle('ocultar_ler_mais')
}
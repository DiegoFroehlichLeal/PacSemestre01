function toggleSolucao(idSolucao) {
    const solucaoDiv = document.getElementById(idSolucao);
    if (solucaoDiv) {
        if (solucaoDiv.style.display === "none" || solucaoDiv.style.display === "") {
            solucaoDiv.style.display = "block";
            // Encontrar o botão associado para mudar o texto (opcional)
            // Supondo que o botão seja o elemento anterior ao div da solução ou tenha uma relação próxima
            // Este é um exemplo simples, pode precisar de ajuste dependendo da estrutura exata do HTML
            const botao = solucaoDiv.previousElementSibling;
            if (botao && botao.classList.contains('botao-solucao')) {
                // botao.textContent = "Ocultar Solução";
            }
        } else {
            solucaoDiv.style.display = "none";
            const botao = solucaoDiv.previousElementSibling;
            if (botao && botao.classList.contains('botao-solucao')) {
                // botao.textContent = "Mostrar Solução";
            }
        }
    } else {
        console.error("Elemento com ID '" + idSolucao + "' não encontrado.");
    }
}

// Adicionar listeners se não usar onclick direto no HTML
// document.addEventListener('DOMContentLoaded', function() {
//     const botoes = document.querySelectorAll('.botao-solucao');
//     botoes.forEach(function(botao) {
//         botao.addEventListener('click', function() {
//             const targetId = this.getAttribute('data-solution-id'); // precisaria de um atributo data-solution-id no botão
//             if (targetId) {
//                 toggleSolucao(targetId);
//             }
//         });
//     });
// });
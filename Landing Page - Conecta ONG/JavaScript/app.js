document.addEventListener("DOMContentLoaded", function () {
    // Captura o formulário
    const form = document.querySelector("form");
    
    // Adiciona um evento de envio ao formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Coleta os dados do formulário
        const formData = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            motivo: document.getElementById("motivo").value,
        };

        // Envia os dados para a API
        fetch("https://sua-api-url.com/endpoint", { // Substitua pela URL da sua API
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // Converte o objeto em JSON
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao enviar os dados.");
            }
            return response.json(); // Converte a resposta em JSON
        })
        .then(data => {
            // Mostra uma mensagem de sucesso
            alert("Dados enviados com sucesso!");
            console.log(data); // Para depuração
            form.reset(); // Limpa o formulário
        })
        .catch(error => {
            // Mostra uma mensagem de erro
            alert("Erro ao enviar os dados.");
            console.error("Erro:", error);
        });
    });
});

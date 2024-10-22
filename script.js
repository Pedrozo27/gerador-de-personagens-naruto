document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("gerarButton").addEventListener("click", gerarPersonagem);
});

// Array de personagens
const personagens = [
    { name: "Garra", image: "imagens/gaara.jpg" },
    { name: "Hinata", image: "himagens/hinata.jpg" },
    { name: "Itachi", image: "imagens/itachi.jpg" },
    { name: "Sasuke", image: "imagens/sasuke.jpg" },
    { name: "Naruto", image: "imagens/naruto.jpg" },
    { name: "Jiraiya", image: "imagens/jiraiya.jpg" },
    { name: "Sakura", image: "imagens/sakura.jpg" },
    { name: "Kakashi", image: "imagens/kakashi.jpg" },
];

// Função para gerar personagem
async function gerarPersonagem() {
    var nomeTitular = document.getElementById("nomeTitular").value;
    var numeroCartao = document.getElementById("numeroCartao").value;
    var codigoSeguranca = document.getElementById("codigoSeguranca").value;

    // Validação do nome do titular
    if (nomeTitular.trim() === "") {
        document.getElementById("resultado").innerHTML = "Por favor, insira o nome do titular.";
        return;
    }

    // Validação do número do cartão
    if (numeroCartao.length !== 16 || isNaN(numeroCartao)) {
        document.getElementById("resultado").innerHTML = "Número do cartão inválido! Deve ter 16 dígitos.";
        return;
    }

    // Validação do código de segurança (CVV)
    if (codigoSeguranca.length !== 3 || isNaN(codigoSeguranca)) {
        document.getElementById("resultado").innerHTML = "Código de segurança inválido! Deve ter 3 dígitos.";
        return;
    }

    // Gerar valores baseados nos primeiros 4 dígitos do número do cartão
    var index = parseInt(numeroCartao[0]) % personagens.length;
    var personagem = personagens[index];
    var cla = personagem.name.split(" ")[1] || "N/A"; // Extrai o sobrenome para o clã, se existir
    var habilidade = "Habilidade Exemplo"; // Pode adicionar mais lógica para habilidades
    var rank = "Ninja Genin"; // Exemplo de rank

    // Exibir o resultado
    var resultado = `
        <h2>Seu Personagem</h2>
        <p><strong>Nome do Titular:</strong> ${nomeTitular}</p>
        <p><strong>Nome:</strong> ${personagem.name}</p>
        <p><strong>Clã:</strong> ${cla}</p>
        <p><strong>Habilidade:</strong> ${habilidade}</p>
        <p><strong>Rank Ninja:</strong> ${rank}</p>
        <img src="${personagem.image}" alt="${personagem.name}">
        <p><strong>Número do Cartão:</strong> ${numeroCartao}</p>
        <p><strong>Código de Segurança:</strong> ${codigoSeguranca}</p>
    `;
    document.getElementById("resultado").innerHTML = resultado;
}

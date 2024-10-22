document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("gerarButton").addEventListener("click", gerarPersonagem);
});

// Array de personagens
const personagens = [
    { name: "Garra", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnNmHIeqbZBDDukjX7PX4I-305JqcAOagTA&s" },
    { name: "Hinata", image: "https://criticalhits.com.br/wp-content/uploads/2021/11/Hinata.jpg" },
    { name: "Itachi", image: "https://i.pinimg.com/736x/26/1e/9e/261e9e461b7e09537fed22e4d04cc19c.jpg" },
    { name: "Sasuke", image: "https://tm.ibxk.com.br/2021/11/10/10131909652318.jpg?ims=1200x675" },
    { name: "Naruto", image: "https://s2-techtudo.glbimg.com/88a4QNHTzEa2Pwm0NmiFtvja-5I=/0x0:1200x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/6/Z/BtyF8UT5aeLFwmccA9CQ/fotonaruto2.jpg" },
    { name: "Jiraiya", image: "https://criticalhits.com.br/wp-content/uploads/2023/11/Naruto-Jiraiya-tributo-Critical-Hits.jpg" },
    { name: "Sakura", image: "https://static.wikia.nocookie.net/naruto/images/c/cf/Sakura_%28Naruto_Cl%C3%A1ssico%29.png/revision/latest/scale-to-width/360?cb=20180211141243&path-prefix=pt-br" },
    { name: "Kakashi", image: "https://criticalhits.com.br/wp-content/uploads/2022/04/kakashi-Sharingan-910x512.jpg" },
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

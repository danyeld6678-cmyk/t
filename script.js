const desafios = [
    "Mande uma mensagem para alguém de quem você gosta. ❤️",
    "Faça um elogio sincero para alguém. 😊",
    "Aprenda algo novo hoje. 🧠",
    "Passe 10 minutos longe do celular. 📵",
    "Ajude alguém sem esperar nada em troca. 🤝",
    "Escute uma música que você gosta. 🎵",
    "Escreva uma coisa pela qual você é grato. ✨",
    "Faça alguém sorrir hoje. 😄",
    "Leia algumas páginas de um livro. 📚",
    "Faça algo que você está adiando. 💪"
];

let pontos = 0;

const botao = document.getElementById("botaoDesafio");
const texto = document.getElementById("textoDesafio");
const contador = document.getElementById("pontos");

botao.addEventListener("click", function() {

    const numeroAleatorio = Math.floor(
        Math.random() * desafios.length
    );

    texto.textContent = desafios[numeroAleatorio];

    pontos += 10;

    contador.textContent = pontos;
});
const jogadores = [
    { nome: "Ronaldo", imagem: "imagens/764_ronaldo.jpg" },
    { nome: "Van Nistelrooy", imagem: "imagens/van-nistelrooy.jpg" },
    { nome: "Peter Crouch", imagem: "imagens/peter-crouch.jpg" },
    { nome: "Luis Suárez", imagem: "imagens/luis-suarez.jpg" },
    { nome: "Ronaldinho Gaúcho", imagem: "imagens/ronaldinho-gaucho.jpg" },
    { nome: "Cristiano Ronaldo", imagem: "imagens/cr7.jpg" },
    { nome: "Lionel Messi", imagem: "imagens/Lionel_Messi.JPG" },
    { nome: "Roberto Baggio", imagem: "imagens/roberto-baggio.jpg" },
    { nome: "Gerd Müller", imagem: "imagens/gerd-muller.jpg" },
    { nome: "Pele", imagem: "imagens/Pelé_1960.jpg" },
    { nome: "Maradona", imagem: "imagens/maradona.jpg" },
    { nome: "Romário", imagem: "imagens/romario.jpg" },
    
    // Para adicionar mais jogadores, só adicionar aquí
];

// 🔀 Mistura o array ao iniciar
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

embaralhar(jogadores); // ¡Embarlhar!

let atual = jogadores[0]; // Primeiro jogador
let indice = 1; // Posição do próximo jogador

function renderizar() {
    const oponente = jogadores[indice];
    document.querySelector(".conteudo").innerHTML = `
        <img src="${atual.imagem}" class="img jogador-esquerda" data-jogador="esquerda">
        <span class="x">X</span>
        <img src="${oponente.imagem}" class="img jogador-direita" data-jogador="direita">
    `;

    // Adiciona evenrtos de clic a cada imagem
    document.querySelector(".jogador-esquerda").addEventListener("click", () => selecionar("esquerda"));
    document.querySelector(".jogador-direita").addEventListener("click", () => selecionar("direita"));
}

function selecionar(lado) {
    const esquerda = document.querySelector(".jogador-esquerda");
    const direita = document.querySelector(".jogador-direita");

    // Limpiar cualquier selección previa
    esquerda.style.border = "";
    direita.style.border = "";

    // Mostrar bordes verdes claros
    if (lado === "esquerda") {
        esquerda.style.border = "5px solid #00ff7f";
        escolherVencedor(atual);
    } else {
        direita.style.border = "5px solid #00ff7f";
        escolherVencedor(jogadores[indice]);
    }
}



function escolherVencedor(vencedor) {
    atual = vencedor;
    indice++;

    if (indice >= jogadores.length) {
        mostrarWinner(vencedor);
    } else {
        renderizar();
    }
}

function mostrarWinner(jogador) {
    document.body.innerHTML = `
        <h1 id="titulo">🏆 WINNER</h1>
        <div class="container">
            <img src="${jogador.imagem}" class="img" style="width: 300px; height: 300px;">
            <h2 style="color:white;">${jogador.nome}</h2>
        </div>
    `;
}

// 🏁 Iniciar el torneo
renderizar();

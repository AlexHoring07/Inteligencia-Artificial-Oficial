const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como se escreve Gato na língua Inglesa?",
        alternativas: [
            {
                texto: "Cat",
                afirmacao: "A língua Inglesa e a Programação, geralmente andam junto, pois muitas linguagens de programação são escritas em inglês e ter uma noção básica de Inglês é essencial para se tornar um grande programador no futuro. Por isso que é muito cobrado estudar Inglês, não só por ser nossa segunda língua mas também pois para diversas áreas de trabalho, é dado um ênfase para quem tem noção básica de Inglês pois geralmente se destacam e vão melhor. Esse site é para te mostrar que o Inglês e a Programação são áreas excelentes de trabalho e que sim, podem e andam juntos."
            },
            {
                texto: "Dog",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Como se fala *Lar-Doce-Lar* em inglês?",
        alternativas: [
            {
                texto: "House Sweet House",
                afirmacao: ""
            },
            {
                texto: "Home Sweet Home",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "O que é *Good Morning* traduzido para o Poruguês?",
        alternativas: [
            {
                texto: "Boa Noite",
                afirmacao: ""
            },
            {
                texto: "Bom Dia",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "The Teacher Rafael (Buiu) is teacher of the how matter?",
        alternativas: [
            {
                texto: "Programmation",
                afirmacao: ""
            },
            {
                texto: "Robotics",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é a melhor turma do professor Buiu?",
        alternativas: [
            {
                texto: "3° Ano E",
                afirmacao: ""
            },
            {
                texto: "3° Ano E",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre tudo isso...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

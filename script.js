const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas 
        alternativas: [
            "Isso é assustador!"
            "Isso é maravilhoso!"
        ]
    },
    {
        enunciado: "pergunta 2 ", 
        alternativas: [
            "alternativas 1",
            "alternativas 2 "
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
mostraPergunta();

function mostraAlternativas() {
    for (const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas =
        document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}




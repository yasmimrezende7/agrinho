let perguntas = [
  {
    pergunta: "De onde vem o leite que consumimos na cidade?",
    opcoes: ["Do supermercado", "Da fazenda", "Da fábrica"],
    correta: 1
  },
  {
    pergunta: "Qual desses produtos geralmente vem do campo?",
    opcoes: ["Celular", "Arroz", "Tênis"],
    correta: 1
  },
  {
    pergunta: "Qual é um benefício de comprar alimentos de produtores locais?",
    opcoes: ["Menos poluição no transporte", "Comida importada", "Preço mais alto"],
    correta: 0
  },
  {
    pergunta: "O que pode aproximar o campo da cidade?",
    opcoes: ["Internet rural", "Isolamento", "Falta de estradas"],
    correta: 0
  }
];

let perguntaAtual = 0;
let pontos = 0;
let quizFinalizado = false;

function setup() {
  createCanvas(700, 400);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(220);

  if (quizFinalizado) {
    fill(0, 150, 0);
    textSize(28);
    text("Quiz Finalizado!", width / 2, height / 2 - 40);
    textSize(22);
    text("Sua pontuação: " + pontos + " de " + perguntas.length, width / 2, height / 2 + 10);
    return;
  }

  mostrarPergunta(perguntas[perguntaAtual]);
}

function mostrarPergunta(p) {
  fill(0);
  textSize(22);
  text(p.pergunta, width / 2, 50);

  for (let i = 0; i < p.opcoes.length; i++) {
    let y = 120 + i * 60;
    fill(200);
    rect(width / 2 - 150, y, 300, 40, 10);
    fill(0);
    text(p.opcoes[i], width / 2, y + 20);
  }
}

function mousePressed() {
  if (quizFinalizado) return;

  let opcoes = perguntas[perguntaAtual].opcoes;

  for (let i = 0; i < opcoes.length; i++) {
    let y = 120 + i * 60;
    if (
      mouseX > width / 2 - 150 &&
      mouseX < width / 2 + 150 &&
      mouseY > y &&
      mouseY < y + 40
    ) {
      if (i === perguntas[perguntaAtual].correta) {
        pontos++;
      }

      perguntaAtual++;
      if (perguntaAtual >= perguntas.length) {
        quizFinalizado = true;
      }
    }
  }
}

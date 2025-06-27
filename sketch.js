let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h1", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("rgb(23,49,102)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
  
  fill(color(250, 250, 250));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "A Fantástica Fábrica de Chocolate";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "A Fantástica Fábrica de Chocolate";          
        } else{
         return "Harry Potter e o Cálice de Fogo";
        }
      } else {
        if (gostaDeFantasia) {
          return "Como Treinar Seu Dragão";
        } else {
          return "Minecraft";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "O Estranho Mundo de Jack";
    } else {
      return "Meu Malvado Favorito";
    }
  }
}

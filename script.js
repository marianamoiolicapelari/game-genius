let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 vermelho
// 2 - amarelo 
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//cria a ordem aleatória de cores
let shufflerOrder = () => {
  let colorOrder = Math.floor(Math.randon() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i])
    ligthColor(elementColor, Number(i) + 1);
  }
}

//acende a próxima cor
let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, tempo -250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botôes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
  for(let i in clickedOrder){
      if(clickedOrder[i] !=order[i]){
        gameOver();
        break;
      }
  }
  if(clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}

//função para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  },250)
}

//função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
      return green;
    } else if(color == 1) {
      return red;
    } else if(color == 2) {
      return yellow;
    } else if (color == 3) {
      return blue;
    }
}

//função para próximo nível do jogo
let nextLevel = () => {
  score++;
  shufflerOrder();
}

//função game over
let gameOver = () => {
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
  order = [];
  clickedOrder = [];

  playGame();
}

//função de inicio de jogo
let playGame = () => {
  alert('Bem vindo ao Gênius! Iniciando novo jogo!')
  score = 0;

  nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//início do jogo
playGame();
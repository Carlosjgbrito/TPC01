const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "X";

let fromIndex = null;

let players = {
  'X': {clicks: 0},
  'O': {clicks: 0},
}

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let allowedMoves = {
  1: [2,4,5],
  2: [3,5,1],
  3: [2,5,6],
  4: [1,5,7],
  5: [1,2,3,4,6,7,8,9],
  6: [3,5,9],
  7: [4,5,8],
  8: [5,7,9],
  9: [5,6,8],
}

function init() {
  selected = [];

  currentPlayer.innerHTML = `GOSY É BU VES: ${player}`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function change(action, toIndex, fromIndex) {
  if (fromIndex != null && fromIndex != undefined) {
    const btn = document.querySelector('button[data-i="'+fromIndex+'"');
    btn.innerHTML = "";
    selected[fromIndex] = "";
  }

  action.innerHTML = player;
  //action.removeEventListener("click", newMove);
  selected[toIndex] = player;
  players[player].clicks += 1;
  setTimeout(() => {
    check();
  }, [100]);

  player = player === "X" ? "O" : "X";
  currentPlayer.innerHTML = `GOSY É BU VES: ${player}`;

}

function newMove(e) {
  const action = e.target;
  const index = +action.getAttribute("data-i");
  if(players[player].clicks < 3) {
    change(action, index);
  } else {
    console.log(fromIndex);
    if (fromIndex == null) {
      console.log("a", action.innerHTML, player)
      if (action.innerHTML == player) {
        fromIndex = +index;
      }
    } else {
      if (fromIndex != index && action.innerHTML == "") {
         console.log(fromIndex)
        if (allowedMoves[fromIndex].includes(index)) {
          change(action, index, fromIndex);
          fromIndex = null;
        }
      }
    }
  }
  console.log(players);
}

function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("EBAAAAA '" + playerLastMove + "' DJA BU GANHA!");
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("DJA NHOS EMPATA!");
    init();
    return;
  }
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual é o seu nome? ', (nome) => {
  console.log(`Olá, ${nome}!`);
  rl.close();
});

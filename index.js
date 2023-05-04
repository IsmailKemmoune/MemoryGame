const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");

let cards;
let interval;
let firstCard = false;
let secondCard = false;

//Items array
const items = [
  {
    name: "the-chamber-of-secrets",
    image: "images/the-chamber-of-secrets.jpg",
  },
  { name: "the-complete-collection", image: "images/the-complete-collection" },
  { name: "the-deathly-hallows", image: "images/the-deathly-hallows" },
  { name: "the-goblet-of-fire", image: "images/the-goblet-of-fire" },
  { name: "the-half-blood-prince", image: "images/the-half-blood-prince" },
  {
    name: "the-order-of-the-phoenix",
    image: ".images/the-order-of-the-phoenix",
  },
  { name: "the-philosopher-s-stone", image: "images/the-philosopher-s-stone" },
  { name: "the-prisoner-of-azkaban", image: "images/the-prisoner-of-azkaban" },
];

//Initial Time
let seconds = 0,
  minutes = 0;
//Initial moves and win count
let movesCount = 0,
  winCount = 0;

//For calculating time
const timeGenerator = () => {
  seconds += 1;
  //minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //format time before displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

//For calculating moves
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

//Pick random objects from the items array
const generateRandom = (size = 4) => {
  //temporary array
  let tempArray = [...items];
  //initializes cardValues array
  let cardValues = [];
  //size should be double (4*4 matrix)/2 since pairs of objects would exist
  size = (size * size) / 2;
  //Random object selection
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    //once selected remove the object from temp array
    tempArray.splice(randomIndex, 1);
  }

  console.log(size, "size");
  //   console.log(tempArray, "tempArray");
  console.log(cardValues, "cardValues");
  return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  //simple shuffle
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    /*
          Create Cards
          before => front side (contains question mark)
          after => back side (contains actual image);
          data-card-values is a custom attribute which stores the names of the cards to match later
        */
    gameContainer.innerHTML += `
       <div class="card-container" data-card-value="${cardValues[i].name}">
          <div class="card-before">?</div>
          <div class="card-after">
          <img src="${cardValues[i].image}" class="image"/></div>
       </div>
       `;
  }
  //Grid
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;
};

matrixGenerator(generateRandom());

generateRandom();
movesCounter();
timeGenerator();

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
    image: ".images/the-chamber-of-secrets.jpg",
  },
  { name: "the-complete-collection", image: ".images/the-complete-collection" },
  { name: "the-deathly-hallows", image: ".images/the-deathly-hallows" },
  { name: "the-goblet-of-fire", image: ".images/the-goblet-of-fire" },
  { name: "the-half-blood-prince", image: ".images/the-half-blood-prince" },
  {
    name: "the-order-of-the-phoenix",
    image: ".images/the-order-of-the-phoenix",
  },
  { name: "the-philosopher-s-stone", image: ".images/the-philosopher-s-stone" },
  { name: "the-prisoner-of-azkaban", image: ".images/the-prisoner-of-azkaban" },
];

//Initial Time
let seconds = 0,
  minutes = 0;
//Initial moves and win count
let movesCount = 0,
  winCount = 0;

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

timeGenerator();

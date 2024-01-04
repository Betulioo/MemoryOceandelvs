
let oceanCards = [
  {
    id: 1,
    name: "marine1",
    img: "public/assets/memoryGame/marine1.png",
  },
  {
    id: 2,
    name: "marine2",
    img: "public/assets/memoryGame/marine2.png",
  },
  {
    id: 3,
    name: "marine3",
    img: "public/assets/memoryGame/marine3.png",
  },
  {
    id: 4,
    name: "marine4",
    img: "public/assets/memoryGame/marine4.png",
  },
  {
    id: 5,
    name: "marine5",
    img: "public/assets/memoryGame/marine5.png",
  },
  {
    id: 6,
    name: "marine6",
    img: "public/assets/memoryGame/marine6.png",
  },
  {
    id: 7,
    name: "marine7",
    img: "public/assets/memoryGame/marine7.png",
  },
  {
    id: 8,
    name: "marine8",
    img: "public/assets/memoryGame/marine8.png",
  },
  {
    id: 9,
    name: "marine9",
    img: "public/assets/memoryGame/marine9.png",
  },
  {
    id: 10,
    name: "marine10",
    img: "public/assets/memoryGame/marine10.png",
  },
  {
    id: 11,
    name: "marine11",
    img: "public/assets/memoryGame/marine11.png",
  },
  {
    id: 12,
    name: "marine12",
    img: "public/assets/memoryGame/marine12.png",
  }
];
let oceanCards6=[
  {
    id: 1,
    name: "marine1",
    img: "public/assets/memoryGame/marine1.png",
  },
  {
    id: 2,
    name: "marine2",
    img: "public/assets/memoryGame/marine2.png",
  },
  // {
  //   id: 3,
  //   name: "marine3",
  //   img: "public/assets/memoryGame/marine3.png",
  // },
  // {
  //   id: 4,
  //   name: "marine4",
  //   img: "public/assets/memoryGame/marine4.png",
  // },
  // {
  //   id: 5,
  //   name: "marine5",
  //   img: "public/assets/memoryGame/marine5.png",
  // },
  // {
  //   id: 6,
  //   name: "marine6",
  //   img: "public/assets/memoryGame/marine6.png",
  // }
]

const gridDiv$$ = document.querySelector('[data-function="grid"]');
const main$$ = document.querySelector("main");
// we concat the array to duplicate it
// let totalOceanCards = oceanCards.concat(oceanCards);
let totalOceanCards = oceanCards6.concat(oceanCards6)

//create an array cardsPicked to save the cards picked
let cardsPicked= [];
let cardsMatched=[];

//create a count for the attemps
let count = 0;
let score = 0;
// this variables are for the chronometer and endGame
let minutos = 0;
let segundos = 0;

//chronometer
let intervalId;
let chronoDiv$$ = document.querySelector('[data-function="chronometer"]');

// navbar
const divCount2$$ =  document.querySelector('[data-function="score"]');

//compare card

//contador
const divCount$$ =  document.querySelector('[data-function="attempts"]');
const score$$ = document.querySelector('[data-function="score"]');


//restart
const restartButton$$ = document.querySelector('[data-function="restartButton"]');
const pauseButton$$ = document.querySelector('[data-function="pauseButton"]');
const startButton$$ = document.querySelector('[data-function="startButton"]');
const newGameButton$$ = document.querySelector('[data-function="newGameButton"]');
const startLi$$ = document.querySelector('[data-function="startLi"]');
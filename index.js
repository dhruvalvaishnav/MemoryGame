const cards = document.querySelectorAll(".card");
// console.log(cards);

const score = document.querySelector("#score");

//variables
var isFlipped = false;
var firstCard;
var secondCard;
var scoreCount = 0;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  // console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    // console.log(firstCard);
    // console.log(secondCard);

    checkIt();
  }

  if (isAllFlipped()) {
    console.log("You are a winner");
  }
}

const checkIt = () => {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
};

const success = () => {
  //   console.log("Success");
  scoreCount = scoreCount + 1;
  console.log(scoreCount);
  score.innerHTML = `Score : ${scoreCount}`;

  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
};

const fail = () => {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
};

const reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
};

const isAllFlipped = () => {};

//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();

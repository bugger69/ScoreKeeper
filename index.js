let p1 = 0;
let p2 = 0;
let max = 1;

let dropdown = document.querySelector("#dropDown");
for (let i = 0; i != 10; i++) {
  let option = document.createElement("option");
  option.innerText = `${i + 1}`;
  dropdown.append(option);
}

dropdown.addEventListener("input", () => {
  max = dropdown.value;
  updateScore();
});

const score1 = document.querySelector(".p1");
const score2 = document.querySelector(".p2");

const score = document.querySelector(".scorecard");

const span1 = document.querySelector("#player1");
const span2 = document.querySelector("#player2");

function updateScore() {
  span1.innerText = `${p1}`;
  span2.innerText = `${p2}`;
  if (p1 == max) {
    span1.classList.add("green");
    span2.classList.add("red");
  } else {
    span1.classList.remove("green");
    span2.classList.remove("red");
  }
  if (p2 == max) {
    span1.classList.add("red");
    span2.classList.add("green");
  } else {
    span1.classList.remove("red");
    span2.classList.remove("green");
  }
}

score1.addEventListener("click", () => {
  if (p1 < max && p2 < max) {
    p1++;
    updateScore();
  }
});

score2.addEventListener("click", () => {
  if (p2 < max && p1 < max) {
    p2++;
    updateScore();
  }
});

const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  p1 = 0;
  p2 = 0;
  updateScore();
});

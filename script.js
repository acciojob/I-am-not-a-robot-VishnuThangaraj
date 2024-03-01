//your code here
const images = ["img1", "img2", "img3", "img4", "img5"];
const imageDiv = [...document.getElementsByClassName("images")];
let selectedBtn = [];
const verifyBtn = document.getElementById(`verify_btn`);
const resetBtn = document.getElementById(`reset_btn`);
const result = document.getElementById("para");

function random(repeat) {
  let temp = [...images, `img${repeat}`];

  function shuffleArray(temp) {
    for (let i = temp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
  }

  shuffleArray(temp);
  let index = 0;

  imageDiv.forEach((button) => {
    button.classList.add(temp[index++]);
  });
}

// Function to validate the images selected
function verifySelected() {
  verifyBtn.innerHTML = "";
  if (selectedBtn[0].classList[1] == selectedBtn[1].classList[1]) {
    result.innerHTML = "You are a human. Congratulations!";
  } else {
    result.innerHTML =
      "We can't verify you as a human. You selected the non-identical tiles.";
  }
}

// Function to add verify button
function addVerifyBtn() {
  verifyBtn.innerHTML = `<button id="verify" onclick="verifySelected()">verify</button>`;
}
// Function to add Reset button
function addResetBtn() {
  resetBtn.innerHTML = `<button id="reset" onclick="resetSelected()">Reset</button>`;
}

// Reset selected item
function resetSelected() {
  selectedBtn.forEach((button) => {
    button.classList.remove("selected");
  });
  selectedBtn = [];
  resetBtn.innerHTML = "";
  verifyBtn.innerHTML = "";
  result.innerHTML = "";
}

imageDiv.forEach((button) => {
  button.addEventListener("click", function () {
    if (selectedBtn.length >= 2) {
      return;
    }
    button.classList.add("selected");
    selectedBtn.push(button);
    if (selectedBtn.length == 1) addResetBtn();
    else if (selectedBtn.length == 2) addVerifyBtn();
  });
});

random(Math.floor(Math.random() * 4) + 1);

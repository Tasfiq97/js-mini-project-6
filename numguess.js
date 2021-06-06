let inputNum = document.getElementById("input-num");

let startGame = document.getElementById("start-btn");

let resetGame = document.getElementById("reset-btn");

let numCorr = document.getElementById("input-corr");

let numShow = document.getElementById("input-show");

let numGuess = Math.floor(Math.random() * 100);

startGame.addEventListener("click", function () {
  // console.log("click")
  
  let getVal = inputNum.value;
 if(getVal==""){
   alert("guess number first")
 }else{
  let alertNum = document.createElement("p");
  numCorr.appendChild(alertNum);

  if (getVal == numGuess) {
    alertNum.innerHTML = "awesome!!! you got the number 🌟";
  } else if (getVal > numGuess) {
    alertNum.innerHTML = "You are too high..keep trying 💪";
  } else {
    alertNum.innerHTML = "You are too low...keep trying 💪";
  }
  let numberHis = document.createElement("h3");

  numShow.appendChild(numberHis);

  numberHis.innerHTML = "you guessed" + " " + getVal;

  setTimeout(() => {
    numCorr.removeChild(alertNum);
  }, 2000);

  resetGame.addEventListener("click", function () {
    // console.log("click")
    inputNum.value = "";
    numberHis.innerHTML = "";
  });
 }
});

//the random number function//

randomNum = () => {
  //   console.log(numGuess)
};
randomNum();

/// function for reset all//

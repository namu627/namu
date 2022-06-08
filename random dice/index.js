function getRandomnumber() {
  return Math.floor(Math.random() * 6 + 1);
}

randomnum1 = Math.floor(Math.random() * 6 + 1);
randomnum2 = getRandomnumber();

var diceimg1src = "dice" + randomnum1 + ".png";
var diceimg2src = "dice" + randomnum2 + ".png";

var diceimg1 = document.querySelectorAll("img")[0];
var diceimg2 = document.querySelectorAll("img")[1];

diceimg1.setAttribute("src", diceimg1src);
diceimg2.setAttribute("src", diceimg2src);

if (randomnum1 > randomnum2)
  document.querySelector("h1").innerHTML = "승자는 player 1 !!";
else if (randomnum1 < randomnum2)
  document.querySelector("h1").innerHTML = "승자는 player 2 !!";
else if (randomnum1 == randomnum2)
  document.querySelector("h1").innerHTML = "비겼습니다!";

window.onload = function () {
  var btn = document.getElementById("btn");
  btn.onclick = function () {
    window.location.reload();
    btn.onclick = null;
  };
};

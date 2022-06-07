var lotto = [];
for (var i = 0; i < 6; i++) {
  var num = Math.floor(Math.random() * 44) + 1;
  for (var j in lotto) {
    if (num == lotto[j]) {
      num = Math.floor(Math.random() * 44) + 1;
    }
  }
  lotto.push(num);
}

lotto.sort(function (a, b) {
  return a - b;
});


document.querySelector("#num1").innerHTML = lotto[0];
document.querySelector("#num2").innerHTML = lotto[1];
document.querySelector("#num3").innerHTML = lotto[2];
document.querySelector("#num4").innerHTML = lotto[3];
document.querySelector("#num5").innerHTML = lotto[4];
document.querySelector("#num6").innerHTML = lotto[5];

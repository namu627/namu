function cal() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var ans1;
    var ans2;
    ans1=(-b+Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a)
    ans2=(-b-Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a)
    
    document.getElementById("ans1").value = ans1;
    document.getElementById("ans2").value = ans2;
}

window.onload = function () {
    var btn = document.getElementById("btn");
    btn.onclick = function () {
      window.location.reload();
      btn.onclick = null;
    };
  };
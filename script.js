function hideall(contcount) {
  if (contcount != 1) {
    cont1.style.display = "none";
  }
  if (contcount != 2) {
    cont2.style.display = "none";
  }
  if (contcount != 3) {
    cont3.style.display = "none";
  }
}
let cont1 = document.getElementById("cont1");
let cont2 = document.getElementById("cont2");
let cont3 = document.getElementById("cont3");
let product = document.getElementsByClassName("fas")
function hlw() {
  hideall(1);
  if (cont1.style.display == "none") {
    cont1.style.display = "flex";
  } else {
    cont1.style.display = "none";
  }
}
function hlw1() {
  hideall(2);
  if (cont2.style.display == "none") {
    cont2.style.display = "flex";
  } else {
    cont2.style.display = "none";
  }
}
function hlw2() {
  hideall(3);
  if (cont3.style.display == "none") {
    cont3.style.display = "flex";
  } else {
    cont3.style.display = "none";
  }
}



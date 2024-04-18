// ! Diclarations Area
let tasks = [];

// ! Functions Area

// ! Set Elements Area
let txt = document.getElementById("input");
let btn = document.getElementById("add");
let success = document.getElementById("success");
let fail = document.getElementById("fail");

// ! Events Area
btn.addEventListener("click", function () {
  if (txt.value == false) {
    success.style.display = "none";
    fail.style.display = "block";
  } else {
    tasks.push(txt.value);
    success.style.display = "block";
    fail.style.display = "none";

    txt.value = "";
  }
});
console.log(tasks);

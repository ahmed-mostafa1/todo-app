// ! Functions Area

// ! Set Elements Area
let txt = document.getElementById("input");
let btn = document.getElementById("add");

// ! Events Area
btn.addEventListener("click", function () {
  if (txt.value == false) {
    alert("Please Enter a task!");
  } else {
    console.log(txt.value);
    txt.value = "";
  }
});

// * Diclarations
let tasks = [];

// * Set Elements
let txt = document.getElementById("input");
let btn = document.getElementById("add");
let success = document.getElementById("success");
let fail = document.getElementById("fail");
let list = document.getElementById("list");
let show = document.getElementById("show");
// * Adding Tasks
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

//* Showing Tasks
show.addEventListener("click", function () {
  // tasks.forEach((task) => {
  let li = document.createElement("li");
  let text = document.createElement("span");
  let del = document.createElement("button");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  del.classList.add("btn", "btn-danger");
  del.textContent = "Delete";

  li.appendChild(text);
  li.appendChild(del);

  document.getElementById("list").appendChild(li);
});
// });
//*-----------------------------
console.log(tasks);

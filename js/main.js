// * Set Elements
let txt = document.getElementById("input");
let btn = document.getElementById("add");
let success = document.getElementById("success");
let fail = document.getElementById("fail");
let list = document.getElementById("list");
let show = document.getElementById("show");

// *Declarations
let tasks = [];
let item = {};
if (!localStorage.getItem("strtasks")) {
  localStorage.setItem("strtasks", JSON.stringify(tasks));
}
// *Starting functions
ShowTasks();

// *functions
//! Add task
function AddTask() {
  // * Alarms
  if (txt.value == false) {
    success.style.display = "none";
    fail.style.display = "block";
  } else {
    let item = {
      id: Date.now(),
      text: txt.value,
      stat: false,
    };
    tasks = JSON.parse(localStorage.getItem("strtasks"));
    tasks.push(item);
    localStorage.setItem("strtasks", JSON.stringify(tasks));
    txt.value = "";
    fail.style.display = "none";
    success.style.display = "block";
  }
}
// ! Show Tasks
function ShowTasks() {
  list.innerHTML = "";
  tasks = JSON.parse(localStorage.getItem("strtasks"));
  tasks.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item.text;
    li.className = "list-group-item";
    li.classList.add("list-group-item-action");
    li.setAttribute("id", item.id);
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("float-right", "btn", "btn-danger");
    li.appendChild(del);
    list.appendChild(li);
    // ! Delete button
    del.addEventListener("click", function () {
      del.parentNode.remove();
      let ed = this.parentNode.id;
      tasks = tasks.filter((item) => item.id != ed);
      localStorage.setItem("strtasks", JSON.stringify(tasks));
    });
  });
}

// ! Add button
btn.addEventListener("click", function () {
  AddTask(item);
  if (tasks.length > 0) {
    ShowTasks();
  }
});

// !------------------------------------------------------------

// * Set Elements
let txt = document.getElementById("input");
let btn = document.getElementById("add");
let success = document.getElementById("success");
let fail = document.getElementById("fail");
let list = document.getElementById("list");
let show = document.getElementById("show");

// * Functions
function ShowTasks() {
  // ! remove All --> li
  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    let lis = document.getElementsByTagName("li");
    lis.forEach((li) => {
      console.log(li);
      // lis[j].innerHTML = "";
    });

    let retasks = JSON.parse(localStorage.getItem("tasks"));
    let i = 0;
    i <= retasks.length;
    retasks.forEach((task) => {
      let li = document.createElement("li");
      li.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );
      li.setAttribute("id", i);
      let del = document.createElement("button");
      del.setAttribute("id", i);

      li.innerText = task;
      del.classList.add("btn", "btn-danger");
      del.textContent = "Delete";
      li.appendChild(del);
      document.getElementById("list").appendChild(li);

      //! Delete btn
      del.addEventListener("click", function () {
        let id = retasks.indexOf(li.innerText);
        retasks.splice(id, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        ShowTasks();
      });
      i++;
    });
  }
}
// * Diclarations
let tasks = [];
ShowTasks();

// * Adding Tasks
txt.focus();
btn.addEventListener("click", function () {
  if (txt.value == false) {
    success.style.display = "none";
    fail.style.display = "block";
  } else {
    tasks.push(txt.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    txt.value = "";
    fail.style.display = "none";
    success.style.display = "block";

    //* Showing Tasks
    ShowTasks();
  }
}); // end of add task btn

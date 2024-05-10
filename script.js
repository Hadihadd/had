function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.onclick = function () {
            li.classList.toggle("checked");
        };

        var taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = taskInput.value;

        li.appendChild(checkbox);
        li.appendChild(taskText);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

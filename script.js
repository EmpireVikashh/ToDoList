let inputBox = document.getElementById("task-input");
let task = document.getElementById("mytasks");

function addTask() {
    let inputValue = inputBox.value;
    // console.log(inputBox.value);
    if (inputBox.value == '') {
        alert("Please write your task");
        // console.log();
    }

    else {
        task.innerHTML = `<div id="all-task">
                          <input type="text" value="${inputValue}" class="text result-field" readonly>
                          <button class="edit">Edit</button>
                          <button class="delet">Delet</button>
                          </div>` + task.innerHTML;
                          saveData();
        //    console.log(task.innerHTML);
        
    }
    inputBox.value = "";
}

  task.addEventListener('click', function (event) {
    if (event.target.classList.contains('delet')) {
      const taskContainer = event.target.parentNode;
      taskContainer.remove();
      console.log("Task deleted");
      saveData();
    }
  
    if (event.target.classList.contains('edit')) {
      const taskContainer = event.target.parentNode;
      const taskInput = taskContainer.querySelector('.text');
  
    //   console.log(taskContainer);
    //   console.log(taskInput);

      if (taskInput.readOnly) {
        taskInput.readOnly = false;
        event.target.textContent = 'Save';
      } else {
        taskInput.readOnly = true;
        event.target.textContent = 'Edit';
      }
      saveData()
    }
  });

  function saveData(){
    localStorage.setItem("data",task.innerHTML);
  }
  function getData(){
    task.innerHTML = localStorage.getItem("data");
  }
  getData();
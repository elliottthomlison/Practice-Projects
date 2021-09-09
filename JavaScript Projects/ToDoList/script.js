function addToList(event) {
// to prevent the form from submitting
  event.preventDefault();

// grab the form and div that will hold the new todo tasks
  let taskName = document.getElementById("taskName").value;
  let toDoDiv = document.getElementById("myToDo");

//create a new div for each item where the todoname and deletebtn will be held by
  let newToDoItem = document.createElement("div");

//create the li that will be named what is entered into the form
  let toDoName = document.createElement("li");
  toDoName.innerHTML = taskName;

//create the delete button by adding the classes to the classlist of the li
  let deleteBtn = document.createElement("i");
  deleteBtn.classList.add("far");
  deleteBtn.classList.add("fa-trash-alt");

//add both the li and trash can inside of the div
  newToDoItem.appendChild(toDoName);
  newToDoItem.appendChild(deleteBtn);

//add it all to the div that holds the new tasks
  toDoDiv.appendChild(newToDoItem);
  resetForm();
}

let toDoDiv = document.getElementById("myToDo");
toDoDiv.addEventListener('click', deleteItem)

function deleteItem(e) {
//grab the trashcan and remove the item if so
    const element = e.target
    if (element.classList[0] === 'far') {
        element.parentElement.remove()
    }
}

function resetForm() {
    document.getElementById("myForm").reset();
  }

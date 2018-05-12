//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //Add Task event
  form.addEventListener('submit', addTask);
  //remove task event
  form.addEventListener('click', removeTask);
}



function addTask(e) {
  if(taskInput.value === '') {
    alert('add a task');
    e.preventDefault();
  }

  const li = document.createElement('li');

  li.className = 'collection-item';

  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement('a');

  link.className = 'delete-item secondary-content';

  link.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);

  taskList.appendChild(li);

  taskInput.value = '';


  e.preventDefault();

}

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    console.log(e.target);
  }
}


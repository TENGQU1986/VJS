

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
  //dom load event
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add Task event
  form.addEventListener('submit', addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);
  //clear task event
  clearBtn.addEventListener('click', clearTasks);
  //filter
  filter.addEventListener('keyup', filtertasks);
}

//get tasks from LS
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task) => {
    const li = document.createElement('li');

  li.className = 'collection-item';

  li.appendChild(document.createTextNode(task));

  const link = document.createElement('a');

  link.className = 'delete-item secondary-content';

  link.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);

  taskList.appendChild(li);
  });
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
  //store in LS
  storeTaskInLocalStorage(taskInput.value);

  taskInput.value = '';


  e.preventDefault();

}

function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};  



function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.splice(tasks.indexOf(e.target.parentElement.parentElement.textContent), 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

function clearTasks(e) {
  if(e.target.classList.contains('clear-tasks')) {
    document.querySelectorAll('ul.collection .collection-item').forEach((item) => item.remove());
    localStorage.clear();
  }
}

function filtertasks(e) {
  const text = e.target.value;
  const listItemsArr = Array.from(document.querySelectorAll('ul.collection .collection-item'));
  listItemsArr.forEach((task) => {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}


function load() {
  var mydata = JSON.parse(data);
  alert(mydata[0].name);
  console.log(mydata[0].age);
}

load();
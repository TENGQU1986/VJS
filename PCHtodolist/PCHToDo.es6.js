function LoadList(e) {
  const xhr = new XMLHttpRequest();

  

  xhr.open('GET', 'PCHToDo.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      const listItems = JSON.parse(this.responseText);
      let output = '';
      listItems.data.forEach((listItem) => {
        output += `
          <ul class="todolist">
            <li>${listItem.taskName}</li>
          </ul>
        `;
      });
      document.querySelector('.list').innerHTML = output;
      
    }
  }

  xhr.send();
}

const list = new LoadList();

const addNew = function(e) {
  e.preventDefault();
  const thing = e.target.previousElementSibling.value;
  const newItem = document.createElement('li');
  newItem.textContent = thing;

  document.querySelector('.todolist').appendChild(newItem);

}
const form = document.querySelector('#add-new').addEventListener('click', addNew);



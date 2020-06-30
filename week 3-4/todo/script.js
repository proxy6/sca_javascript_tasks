// array to hold the list
let todoItems = [];

// creating a new todo
function addTodo(text) {
    const todo = {
      text,
      checked: false,
      id: Date.now(),
    };
  
    todoItems.push(todo);
    renderTodo(todo);
  }

//function to toggle the completed todo
    function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;
    const item = document.querySelector(`[data-key='${key}']`);
    if (todoItems[index].checked) {
      item.classList.add('done');
    } else {
      item.classList.remove('done');
    }
  }

  //function to delete todo
  function deleteTodo(key) {
    todoItems = todoItems.filter(item => item.id !== Number(key));
    const item = document.querySelector(`[data-key='${key}']`);
    item.remove();
  }

    //listening for input
    const form = document.querySelector('.js-form');
    form.addEventListener('submit', event => {
   // preventing page refresh on form submission
   event.preventDefault();
  // selecting the text input
  const input = document.querySelector('.js-todo-input');

  // Geting the value of the input and removing whitespace
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});


//function to render the todo array to the page
function renderTodo(todo) {
    const list = document.querySelector('.js-todo-list');
    list.insertAdjacentHTML('beforeend', `
      <li class="todo-item" data-key="${todo.id}">
        <input id="${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.text}</span>
       
          <i class=" delete-todo js-delete-todo fa fa-trash"></i>
     
      </li>
    `);
  }
  
  //performing toggle operattion when todo is completed
  const list = document.querySelector('.js-todo-list');
  list.addEventListener('click', event => {
    if (event.target.classList.contains('js-tick')) {
      const itemKey = event.target.parentElement.dataset.key;
      toggleDone(itemKey);
    }
  
    // performing delete todo to delete todo
    if (event.target.classList.contains('js-delete-todo')) {
      const itemKey = event.target.parentElement.dataset.key;
      deleteTodo(itemKey);
    }
  });




  
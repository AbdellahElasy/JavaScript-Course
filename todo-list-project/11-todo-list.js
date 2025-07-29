const toDoList = [{
  name: 'make dinner ' ,
  dueDate: '2022-12-22'
},{
    name : 'wash dishes',
  dueDate: '2022-12-22'
  }];

renderTodoList();


function renderTodoList(){

let toDoListHtml = '';


toDoList.forEach((todoObject,index) =>{
 const {name,dueDate} = todoObject;
 const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    </p>
    `; 
toDoListHtml += html;

});

document.querySelector('.js-todo-list')
.innerHTML = toDoListHtml;
document.querySelectorAll('.js-delete-todo-button')
 .forEach((deleteButton , index) =>{
  deleteButton.addEventListener('click' , () => {
              toDoList.splice(index , 1);
              renderTodoList();
  });
 } );


}
document.querySelector('.js-add.todo.button')
.addEventListener('click' , () => {
  addTodo();
});

function addTodo(){
const Element1 = document.querySelector('.js-name-input');
const name  =   Element1.value;

const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value;
toDoList.push({
  name,
dueDate  });

Element1.value = '';
renderTodoList();


}
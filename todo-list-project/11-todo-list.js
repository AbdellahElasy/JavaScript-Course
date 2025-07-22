const toDoList = [{
  name: 'make dinner ' ,
  dueDate: '2022-12-22'
},{
    name : 'wash dishes',
  dueDate: '2022-12-22'
  }];

renderTodoList();


function renderTodoList(){

let toDoListHtml = ' ';

for(let i = 0; i < toDoList.length;i++ ){
 const todoObject = toDoList[i];
 const {name,dueDate} = todoObject;
 const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button onclick="
      toDoList.splice(${i} , 1);
      renderTodoList();
    " class = "delete-todo-button">Delete</button>
    </p>
    `; 
toDoListHtml += html;

}

document.querySelector('.js-todo-list')
.innerHTML = toDoListHtml;




}

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
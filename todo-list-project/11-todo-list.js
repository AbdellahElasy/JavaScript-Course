const toDoList = ['make dinner ' , ' wash dishes'];
function renderTodoList(){

let toDoListHtml = ' ';

for(let i = 0; i < toDoList.length;i++ ){
 const todo = toDoList[i];
 const html = `<p>${todo}</p>`;
toDoListHtml += html;

}
console.log(toDoListHtml);
document.querySelector('.js-todo-list')
.innerHTML = toDoListHtml;




}

function addTodo(){
const Element1 = document.querySelector('.js-name-input');
const name  =   Element1.value;

toDoList.push(name);
console.log(toDoList);
Element1.value = '';
renderTodoList();


}
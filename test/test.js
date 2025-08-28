const names = ['abde' , 'morad' , 'nour'];
todoListHtml();

function todoListHtml(){
  let inputTextHtml = '';
  for(let i = 0; i < names.length;i++){
  const todo = names[i];
  const html = `<p>${todo}</p>`;
  inputTextHtml += html;
  }
  document.querySelector('.js-input-names')
  .innerHTML = inputTextHtml;
}


function todoListInput(){
const inputElement = document.querySelector('.js-input-button');
const name = inputElement.value;
names.push(name);
inputElement.value = '';

todoListHtml();



}
function getLastValue(array){
 const lastIndex = array.length -1;
 return array[lastIndex];

}
console.log(getLastValue([13, 12,2]));


const todoProps = {
    todoText: '',
    todoDate: '',
    todoButton: '',
    parent: '',
    delButton: '',
    newElement: '',
    index: 0
}
todoProps.todoText = document.querySelector('.todo-text');
todoProps.todoDate = document.querySelector('.todo-date');
todoProps.todoButton = document.querySelector('.btn');
todoProps.parent = document.querySelector('.list');
todoProps.todoButton.addEventListener('click', ()=>{

    if(todoProps.todoText.value && todoProps.todoDate.value){
    todoProps.delButton = document.createElement('button');
    todoProps.delButton.textContent = 'Delete ToDo';
    todoProps.delButton.setAttribute('del-index', todoProps.index);
    todoProps.delButton.classList.add('btn', 'btn-secondary', 'delete-btn');
    todoProps.newElement = document.createElement('li');
    const text = document.createElement('p');
    text.textContent = `${todoProps.todoText.value} ${todoProps.todoDate.value}`;
    todoProps.newElement.appendChild(text);
    todoProps.newElement.appendChild(todoProps.delButton);
    todoProps.newElement.classList.add('newLi');

    todoProps.newElement.setAttribute('li-index', todoProps.index);
    todoProps.index ++;
    todoProps.parent.appendChild(todoProps.newElement);
    }
    todoProps.todoText.value = '';
    todoProps.todoDate.value = '';

//Creating event for delete button

todoProps.newElement.addEventListener('click', (e)=> {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});
});

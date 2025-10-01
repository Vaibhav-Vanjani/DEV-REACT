const submitTodoBtn = document.querySelector('#todo-add-btn-id');
const todoText = document.querySelector('#todo-text-id');
const todoList = document.querySelector('#todo-list-container-box-list-todo');
const todoListBox = document.querySelector('#todo-list-container-box');
let edittedElement = '';
const MODE_SUBMIT = "SUBMIT";
const MODE_EDIT = "EDIT";
todoText.focus();

// basic todo

function submitTodo(){
    if(!todoText || todoText.value.trim() === ""){
        todoText.value='';
        return alert("invalid");
    }

    if(submitTodoBtn?.getAttribute('data-mode')?.toUpperCase() == MODE_SUBMIT){
        const currentTodo = document.createElement('li');
        const currentTodoContent = document.createElement('p');
        const deleteCurrentTodo = document.createElement('button');
        const editCurrentTodo = document.createElement('button');
        
        currentTodoContent.innerText = todoText.value;
        currentTodoContent.setAttribute('data-todo','Text');
        deleteCurrentTodo.innerText = "Delete";
        deleteCurrentTodo.setAttribute('data-todo','Delete');
        editCurrentTodo.innerText = "Edit";
        editCurrentTodo.setAttribute('data-todo','Edit');
        
        currentTodo.appendChild(currentTodoContent);
        currentTodo.appendChild(deleteCurrentTodo);
        currentTodo.appendChild(editCurrentTodo);
        
        todoList.append(currentTodo);
        todoText.value='';
    }
    
    if(submitTodoBtn?.getAttribute('data-mode')?.toUpperCase() == MODE_EDIT){
        edittedElement.innerText = todoText.value;
        submitTodoBtn.innerText = 'Submit';
        submitTodoBtn.setAttribute('data-mode',MODE_SUBMIT);
        todoText.value='';
    }
}

function handleTodoBtn(event){

    console.log("inside handleTodoBtn",event.target.tagName);
    console.log("inside handleTodoBtn",event.target.dataset?.todo);

    if(event.target.tagName == 'BUTTON' && event.target.dataset?.todo?.toUpperCase() == MODE_EDIT){
        console.log('edit button is clicked');
        todoText.focus();
        todoText.innerText='';
        submitTodoBtn.innerText = 'Edit';
        submitTodoBtn.setAttribute('data-mode',MODE_EDIT);
        let currentTodoElement = event.target.parentNode.children;
        console.log(currentTodoElement);
        for(let child of Array.from(currentTodoElement)){
           
            if(child?.getAttribute('data-todo')?.toUpperCase().includes('TEXT')){
                edittedElement = child;
                 console.log('edittedElement',edittedElement);
                break;
            }
        }

        if(!edittedElement){
            return alert("invalid todo !!");
        }
        else{
             todoText.value=edittedElement.textContent;
        }
    }
    else if(event.target.tagName == 'BUTTON' && event.target.dataset?.todo == 'Delete'){
         console.log('delete button is clicked');
        event.target.parentNode.remove();
    }
}


submitTodoBtn.addEventListener('click',submitTodo);
todoListBox.addEventListener('click',handleTodoBtn);

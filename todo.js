const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
let toDos = [];

if ( savedTodos !== null){
    const parsedTodos = savedTodos;
    parsedTodos.forEach(paintToDo);
    toDos = parsedTodos;
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const Button = document.createElement("Button");
    li.appendChild(span);
    li.appendChild(Button);
    span.innerText = newTodoObj.text;
    Button.innerText = "X";
    Button.addEventListener("click",ClickDeleteButton);
    todoList.appendChild(li);
}

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodos(li){
    toDos = toDos.filter((toDos) => parseInt(toDos.id) === parseInt(li.id) ? false : true );
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function ClickDeleteButton(event){
    const li = event.target.parentElement;
    const deleteObj = li.id;
    deleteTodos(li);
    li.remove();
}

function handleToDoSubmit(event) {
    event.preventDefault();

    if (todoInput.value != ""){
        const newTodo = todoInput.value;
        const newTodoObj = {
            text:newTodo,
            id:Date.now()
        }
        todoInput.value = "";
        toDos.push(newTodoObj);;
        saveTodos();
        paintToDo(newTodoObj);
    }else{    }
}

todoForm.addEventListener("submit", handleToDoSubmit);


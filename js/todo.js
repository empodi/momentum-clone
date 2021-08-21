const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoItem = todoForm.querySelector("input");

let todoArray = [];
const TODOS_KEY = "todos";

function deleteToDoItem(event) {

    const li = event.target.parentElement.parentElement;

    console.log(li);

    li.classList.remove("todo-appear");
    li.classList.add("todo-disappear");

    setTimeout(function() {li.remove()}, 350);
    todoArray = todoArray.filter(elem => parseInt(li.id) !== elem.id);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
}

function addLine(event) {

    const item = event.target.parentElement.parentElement.querySelector("span");

    if (item.classList.contains("make-line")) {
        item.classList.remove("make-line");
    } else {
        item.classList.add("make-line");
    }
}

function makeToDoList(item) {

    const div = document.createElement("div");
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = item.text;
    li.id = item.id;

    const button = document.createElement("button");
    const checker = document.createElement("button");
    button.innerText = "X";
    checker.innerText = "O";
    button.addEventListener("click", deleteToDoItem);
    checker.addEventListener("click", addLine);

    div.classList.add("todo-buttons");
    checker.classList.add("check-button");
    button.classList.add("delete-button");
    li.classList.add("todo-appear");
    
    li.appendChild(span);
    div.appendChild(checker);
    div.appendChild(button);
    li.appendChild(div);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {

    event.preventDefault();

    const todoObj = {
        text:todoItem.value,
        id: Date.now()
    }

    makeToDoList(todoObj);
    todoArray.push(todoObj);
    todoItem.value = "";

    localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {

    const parseToDos = JSON.parse(savedToDos);
    todoArray = parseToDos;
    parseToDos.forEach(makeToDoList);
}

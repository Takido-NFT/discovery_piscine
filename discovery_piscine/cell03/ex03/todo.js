let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("ft_list");
let toDos = [];

window.onload = function() {
    loadToDoList();
};
function loadToDoList() {
    if (document.cookie) {
        let savedToDos = JSON.parse(document.cookie);
        savedToDos.forEach(todo => {
            addTodoToContainer(todo.id, todo.text);
        });
    }
}
function addTodoToContainer(id, todoText) {
    var paragraph = document.createElement("p");
    paragraph.innerText = todoText;
    paragraph.classList.add("paragraph-styling");
    paragraph.setAttribute("data-id", id);
    toDoContainer.appendChild(paragraph);

    paragraph.addEventListener("click", function() {
        if (window.confirm("Did you really want to erase the task?")) {
            toDoContainer.removeChild(paragraph);
            toDos = toDos.filter(todo => getTodoId(todo) !== id);
            updateCookies();
        }
    });
    toDos.push({ id, text: todoText });
    updateCookies();
}
function updateCookies() {
    document.cookie = JSON.stringify(toDos);
}
function getTodoId(todo) {
    return todo.id;
}
addToDoButton.addEventListener(
    "click",
    function() {
        var newTodo = prompt("Enter a new task:");
        if (newTodo) {
            let newTodoId = new Date().getTime().toString();
            addTodoToContainer(newTodoId, newTodo);
        }
    }
);
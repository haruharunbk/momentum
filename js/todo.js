const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
	const parentLi = event.target.parentElement;
	parentLi.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(parentLi.id));
	saveToDos();
}

function handleCheck(event) {
	const input = event.target;
	const div = input.parentNode;
	div.classList.toggle("checked");
}

function paintToDo(newToDo){
	const li = document.createElement("li");
	li.id = newToDo.id;
	li.setAttribute("class", "new_todo");
	const div = document.createElement("div");
	div.setAttribute("class", "input_box");
	const input = document.createElement("input");
	input.setAttribute("id", "checkbox");
	input.setAttribute("type", "checkbox");
	input.addEventListener("click", handleCheck);
	const span = document.createElement("span");
	span.innerText = newToDo.text;
	const btn = document.createElement("button");
	btn.setAttribute("class", "delete");
	btn.classList.add("hide");
	btn.innerText = "❌";
	li.addEventListener("mouseover", () => {
		btn.classList.remove("hide");
	});
	li.addEventListener("mouseout", () => {
		btn.classList.add("hide");
	});

	btn.addEventListener("click", deleteToDo);

	li.appendChild(div);
	div.appendChild(input);
	div.appendChild(span);
	li.appendChild(btn);
	toDoList.appendChild(li);
}

function toDoSubmit(e){
	e.preventDefault();
	const newToDo = toDoInput.value; 
	toDoInput.value = ""; 
	const newToDoObj = {
		text: newToDo,
		id: Date.now(),
	};
	toDos.push(newToDoObj); 
	paintToDo(newToDoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}

const inputItem = document.querySelectorAll(".input_box input");
inputItem.forEach(item => {
		item.addEventListener("click", function () {
		this.nextSibling.classList.toggle("line");
	});
})
const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todos";

let toDos = []; //여기에서 toDos는 항상 빈 array로 시작한다. 

function saveToDos(){
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
	const parentLi = event.target.parentElement;
	parentLi.remove();
	// console.log(typeof parentLi.id)
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(parentLi.id) );
	saveToDos(); // toDos를 다시 다시 설정해서 저장하는 것
	// 이 toDo는 toDos DB에 있는 요소중 하나이다. 
	// 그래서 이 함수는 DB에 있는 모든 것과 모든 것과 함께 실행된다.
	// 우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶다.
	// 적용이 안되면, 변수의 타입때문이댜.
	// id는 number지만, li.id를 console.log로 보면
	// console.log(typeof parentLi.id) 이렇게 확인하면 
	// li.id는 string타입이고, toDo.id는 number타입이다.
	// 따라서 이 둘이 다르게 되니깐 아무것도 지워지지 않게 되는 것이다.
	// 고치는건 간단한게 parseInt(parentLi.id) 문자열을 숫자로 바꿔주면 된다.
	// 이제는 toDos DB에서 todo를 지운뒤에 
	// saveToDos를 한번 더 불러와야 하는걸 잊지 말아야 한다. 
}

function paintToDo(newToDo){
	const li = document.createElement("li");
	li.id = newToDo.id
	const span = document.createElement("span");
	span.innerText = newToDo.text;
	const btn = document.createElement("button");
	btn.innerText = "❌";

	btn.addEventListener("click", deleteToDo);

	li.appendChild(span);
	li.appendChild(btn);
	toDoList.appendChild(li);
}

function toDoSubmit(e){
	e.preventDefault();
	const newToDo = toDoInput.value; 
	toDoInput.value = ""; 
	const newToDoObj = {
		text : newToDo,
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
	toDos = parsedToDos; // toDos에 parsedToDos를 넣어서 전에 있던 toDos들을 복원할 것이다. 
	parsedToDos.forEach(paintToDo);
}

//////////////////////////////////////////////////////////////////////////////////////////
// 우리가 배운걸 알고 있으면 쉽게 todos를 지울 수 있다. 
// 왜냐면 내가 이것들을 지울떄마다 다른 id를 얻는다는 걸 알고있다.
// 이제 내가 할 일은 이 id가 있는 todo를 지우는거다. 
// 그래서 filter function이 새array를 주는걸 기억하는게 아주 중요하다.
// array에는 실제로 작업하지 않지만, filter function은 새 array를 준다. 

// 이제 해야될 일은 예를 들어 특정한 id를 제외하고 array를 만들거다. 
// 그리고 todos array를 업데이트 해야된다. 
// 왜냐하면 todos가 localStorage에 저장되어 있으니깐
// function saveToDos(){localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));}
// 이걸 업데이트해서 유지해야한다는 걸 알고 있다. 

// toDos = parsedToDos;
// 여기서 우리가 찾은 걸 localStorage에 업데이트한다 

// function deleteToDo(event){
// 	const parentLi = event.target.parentElement;
// 	console.log(parentLi.id)
// 	parentLi.remove();
// }
// 이거랑 똑같이 삭제할 떄도 업데이트를 해줘야 한다. 

// 우리가 할일은 toDos = toDos.filter()
// 이걸 위해 코드를 적어보자
// 클릭했던 id를 갖고있는 toDo를 지우고 싶어.
// 그 말은 toDo의 li의 id와 다른걸 남기고 싶다. 
// toDos = toDos.filter((toDo) => toDo.id !== li.id );
// 이 toDo는 toDos DB에 있는 요소중 하나이다. 

// 우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶다.
// 적용이 안되면, 변수의 타입때문이댜.
// id는 number지만, li.id를 console.log로 보면
// console.log(typeof parentLi.id) 이렇게 확인하면 
// li.id는 string타입이고, toDo.id는 number타입이다.
// 따라서 이 둘이 다르게 되니깐 아무것도 지워지지 않게 되는 것이다.
// 고치는건 간단한게 parseInt(parentLi.id) 문자열을 숫자로 바꿔주면 된다.




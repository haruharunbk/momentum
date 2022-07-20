const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todos";

let toDos = []; //여기에서 toDos는 항상 빈 arrau로 시작한다. 

function saveToDos(){
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
	const parentLi = event.target.parentElement;
	console.log(parentLi.id)
	parentLi.remove();
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

// function sexyFilter(){return }

// [1,2,3,4].filter(sexyFilter)

////////////////////////////////////////////////////////////////////////////////////////
// array에서 어떻게 element를 삭제하는지 알기 위해서 paintToDo에서 어떤일이 일어나는지 이해해야된다.
// forEach함수는 이 paintToDo를 parsedToDos 배열이 요소마다 실행한다.
// 기억해야 할게 뭐냐면 forEach는 paintToDo를 기본적으로 실행한다.
// forEach는 각각의 item을 주고, 이젠 item이 object가 되는거다.
// 이따가 forEach와 비슷한 작업인 filter를 할것이다.
// 만약 array에서 뭔가를 삭제할 때, 실제로 array에서 그걸 지우는게 아니다. 
// 진짜 일어나는 일은 지우고 싶은 item을 뺴고 새 array를 만든다.
// item을 지우는게 아니라 item을 제외하는거다. 
// 그래서 예전 array는 여전히 있고, 지우고 싶은 item을 제외하고 새 array를 만드는거다.
// 따라서 지우고 싶은 item을 제외하는 것이다.!!!!!!
// 이건 filter함수를 사용하면 된다.

// filter 함수는 어떻게 사용할까?
// [1,2,3,4] array가 이렇게 있으면 filter는 filter함수가 필요하다고 우리한테 요청한다.
// filter함수를 만들어보자.
// filter는 forEach랑 비슷하다.
// filter는 sexyFilter를 부르고 
// 1,2,3,4에 sexyFilter가 차례대로 실행될 것이다. 
// 다시, filter는 sexyFilter에 1,2,3,4를 넣어서 부를것이다.

// sexyFilter의 역할이 뭘까?
// sexyFilter함수는 반드시 true를 리턴해야한다. 
// 만약 새 array에서 이 [1,2,3,4]를 포함하고 싶으면, 
// 즉, 만약 새 array에서 이 object를 유지하고 싶으면, 
// 만약, false를 리턴하면 그 item은 새 array에 포함되지 않을거다. 
// [1,2,3,4].filter(sexyFilter) 이뜻은 javascript가 sexyFilter를 4번 부르는것이다.
// 하지만 매번 숫자는 
// sexyFilter(1) = 1 // 그리고 true를 리턴하면 javascript를 1을 유지할거다.
// sexyFilter(2) = 2 // 2, 3, 4도 true면 유지된다.
// sexyFilter(3) = 3 
// sexyFilter(4) = 4
// 이런식으로 달라질 것이다.
// 새로 만들어지는 array안에 1,2,3,4,가 있다. 
// 하지만 3번째단계에서 false를 리턴하면, javascript는 3을 빼고 1,2,4만 유지할 것이다. 
// array의 item을 유지하고 싶으면 true를 리턴해야하는것을 기억해야한다. 

// 이제 array의 모든 element를 유지하는 함수를 만들어보자.
// function sexyFilter(){return true}
// [1,2,3,4,5].fliter(sexyFilter)
// item을 저장할 변수도 안만들었다. 

// 예를들어 3번을 지우고 싶다고 가정해보자 
// sexyFilter는 item이 3이 아니면 true을 리턴해야된다 
// sexyFilter의 argument의 이름은 item이 아니라 뭐가 되어도 상관은 없다.
// 그런데 sexyFiltersms 1,2,3,4 각각의 item을 부르게 된다. 
// 그래서 item을 저장할 공간을 ()에 만들어 줘야 한다. 
// function sexyFilter(item){return item !== 3}
// 우리가 여기서 한건 item이 3이 아니면 true를 리턴해!
// [1,2,3,4].fliter
// =[1,2,4,5]

// sexyFilter함수가 할 일은 질문을 던지는거나 혹은 item을 제외할지다.

// 예시 한개더
// const arr = [123, 3456, 325, 234, 12345, 654, 7654]
// 이제 1000 보다 큰수를 지워보자.
// function sexyFilter(item){return item <= 1000}
// 우리는 1000보다 큰 수들을 지우고 싶으니깐 질문으로 item는 1000보다 작거나 같아야 한다. 
// arr.filter(sexyFilter) -> [123, 325, 234, 654]

// toDos DB가 어떻게 생겼는지 생각해보자
// [{"text":"a","id":1658290474042},{"text":"b","id":1658290474540},{"text":"c","id":1658290475048},{"text":"d","id":1658290476170},{"text":"e","id":1658290477263}]
// 이런식으로 생겼다.
// object가 있고, id도 있다. 
// 이 object를 console에 복붙하고, 저걸 toDos라고 하자.
// const todos = [{"text":"a","id":1658290474042},{"text":"b","id":1658290474540},{"text":"c","id":1658290475048},{"text":"d","id":1658290476170},{"text":"e","id":1658290477263}]
// function sexyFilter(todo){return todo.id !== 658290474042}
// todo의 id가 이것과 다른지 물어보고, 만약 다르면 array에 남아있고, 다르면 삭제된다.
// todos.filter(sexyfilter)

// 물론 todo를 text로 삭제하고 싶으면 그것도 가능하다.

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
	parentLi.remove();
}

function paintToDo(newToDo){
	const li = document.createElement("li");
	const span = document.createElement("span");
	span.innerText = newToDo;
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
	toDos.push(newToDo); 
	paintToDo(newToDo);
	saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
	const parsedToDos = JSON.parse(savedToDos);
	// parsedToDos.forEach((item) => console.log("Hello", item));
	toDos = parsedToDos; // toDos에 parsedToDos를 넣어서 전에 있던 toDos들을 복원할 것이다. 
	// 새로운 toDo값을 입력해주면, 더이상 toDos array는 더이상 빈 값이 아니니깐 
	// toDos를 저장하면 더이상 한개의 값을 가지게 된 빈 array를 저장하는게 아니고,
	// 이전의 모든 element들을 가지고 있는 array를 저장하게 된다. 
	parsedToDos.forEach(paintToDo);
}



// 이제 원하는건 , parsedToDos array 내부의 item들을 가지고 그 item을 나타내고 싶다 
// 다행스럽게 이미 item을 화면에 그려주는 paintToDo function을 가지고 있다. 
// li와 span, button 및 eventListener 등 모든 걸 생성하는 function이 있다. 
// 이 function이 필요로 하는건 newToDo 하나밖에 없다. 
// 따라서 parsedToDos.forEach((item) => console.log("Hello", item));
// 이건 쉽게 바꿀수 있다는 거다. 
// 여기있는 item들은 사실은 우리가 보내기 원하는 텍스트들이다. 
// 따라서 parsedToDos.forEach((item) => console.log("Hello", item)); 이런 복잡한 일을 할 필요가 없다. 
// parsedToDos.forEach(paintToDo);
// 그저 paintToDo 를 호춯라기만 하면 된다. 
// 왜냐면 paintToDo는 텍스트를 받는데, javascript는 그 텍스트를 paintToDo에게 전달해준다. 
// 다시 말하면, javascript는 paintToDo에 "a","b","c","d"를 넣어주기 때문이다.
// 그것들은 우리 array에 있는 각각의 item이다. 
// 그래서 javascript는 이것("a")을 paintToDo 할거고 array에 있는 각각의 item들을 화면에 출력했다.
// 하지만 추가를 하면  localStorage에 추가가 제대로 안되고 새로 저장만 되고, 이전것은 없어지는게 문제다.
// 이전것과 새로운 것을 모두 유지하고 싶다. 

// 이런일이 벌어진 이유를 보면, application이 시작될때를 보면 
// const toDos = []; 가 이렇게 항상 비어있기 때문이다. 
// 그리고 newToDo를 작성하고 form을 submit할 때마다 
// newToDo를 toDos array(빈 array)에 그냥 push하게 된다. 
// 그리고 그 toDo를 저장할 때 새로운 toDo들만 포함하고 있는 array를 저장하는 거다. 
// 이전에 있던 toDo들은 localStorage에 들어있으니깐
// 이 array는 이전의 toDo들은 가지고 있지 않다. 
// 새로운 toDo 들은 사용자가 입력하는 것들이고, 
// 지금은 단지 newToDo들만 toDos array에 추가해서 단지 newToDo들만 localStorage에 저장하고 있다. 
// 무슨 뜻이냐 하면, 우리가 갖고있던 toDos의 이전 복사본을 잊어버리고 있다는 말이다. 
// application이 시작될때 , toDos array를 빈값으로 시작하는 대신에
// const를 let으로 바꿔서 업데이트가 가능하도록 만들고,
// localStorage에 toDo들이 있으면 
// toDos = parsedToDos;
// toDos에 parsedToDos를 넣어서 전에 있던 toDos들을 복원할 것이다. 

// let toDos = []; //여기에서 toDos는 항상 빈 arrau로 시작한다. 
// 하지만 나는 그렇게 하는것을 원하지 않고, 내가 원하는건
// toDos array를 시작할 때, localStroge에서 발견되는 이전의 toDo들로 하고싶은거다. 
// 다시 해보면 예전의 것도 보관하고 있다. 
// 다시말하자면, 이건 단지 우리의 toDos가 빈값으로 시작했었기 때문이다.
// 그리고 toDo를 submit할 때마다 newTodo를 빈 array였던 toDos array에 push했던거다. 
// saveToDos(); 호출을 하고, 그러면 빈 array였다가 이제는 "a" 하나만을 가지고 있는 array를 저장하는 것이다. 
// 우리가 원하는건 복원해주는 것이니깐 toDos array를 가지고 와서 toDos array에 복원해주었다.
// 새로운 toDo값을 입력해주면, 더이상 toDos array는 더이상 빈 값이 아니니깐 
// localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// toDos를 저장하면 더이상 한개의 값을 가지게 된 빈 array를 저장하는게 아니고, 
// 이전의 모든 element들을 가지고 있는 array를 저장하게 된다. 

// 하지만 문제!
// 삭제한후에 새로고침하면 다시 생겨난다!
// 화면에서는 삭제했지만 localStorge에서는 지우지 않았기 떄문이다.



const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todos";

const toDos = [];

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

// function sayHello(item){
// 	console.log("Hello", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos); // 이건 string
if(savedToDos !== null){
	const parsedToDos = JSON.parse(savedToDos);
	// console.log(parsedToDos); // 이건 array
	// parsedToDos.forEach(sayHello);
	parsedToDos.forEach((item) => console.log("Hello", item));
}


// 하지만 아직도 새로고침을 할때마다 저 toDos가 localStorage에는 남아있지만
// 화면에는 나타나진 않는다. -> 이걸 고쳐볼 예정
// 우리에겐 선택지가 있는데 예를들면 array에 stringify를 하는거다. 
// JSON.stringify([1,2,3,4]) -> "[1,2,3,4]"
// 값을 string으로 저장하고 싶을 때는 이걸 많이 사용할 것이다. 

// 또 다른 선택지가 있는데  "[1,2,3,4]" 이 단순한 string을 가지고, 
// 살아있는 javascript object로 만들어 줄수 있다는 거다. 
// JSON.parse("[1,2,3,4]") -> [1,2,3,4]

// 따라서 JSON.stringify([1,2,3,4]) -> "[1,2,3,4]"
// 멋진 array를 가지고 단순한 string으로 바꿀수 있고, 
// 그리고 나서 이 단순한 string을 가지고, 
// JSON.parse("[1,2,3,4]") -> [1,2,3,4]
// javascript가 이해할 수 있는 살아있는 array로 만들수 있다. 

// JSON.parse(localStorage.getItem("todos"))
// 이러면 array를 얻을 수 있다.!!

// 처음 localStorage에 갖고 있던 건 단순한 string이었다. 
// 이 string을 JSON.parse안에 넣으면 실제로 무언가 할 수 있는 배열을 얻게 되는거다.

// 이건 맨 마지막줄에서 해줄 것이다. 
// 그 정에 있는게 addEventListener이든 뭐든 이게 다 된후에
// 우리가 해볼 것은 저 toDos를 localStorage에서 가지고 오는거다. 
// 그리고 이 단순한 string을 살아있는 array로 변환할 것이다. 

// 이제, 물론 어쩔 때는 savedToDos가 null이 될 때도 있다는 걸 안다. 
// 왜냐면 localStorage를 지우고서 savedToDos를 console.log해보면
// console.log(savedToDos) -> null값이 나온다.
// 왜냐하면 localStorage에 아무것도 없기 때문이다. 

// 만약 savedToDos가 localStorage에 존재한다면
// parsedToDos라는 variable을 하나 만들거다. 
// parsedToDos가 하는 일은 localStorage에서 온 string을 가지고 
// 살아있는 javascript object로 변하게 할 것이다. 
// JSON.parse(savedToDos)를 하면 된다. 
// array는 실제로 굉장히 똑똑하고, javascript에서 정말 중요한 Data Structure다. 

// 대부분의 경우, array를 가지고 여기 toDo들 (각각의 item)을 가지고 무언가를 하고싶을거다. 
// 즉, array에 있는 각각의 item에 대해 너는 function을 실행하고 싶을 거다. 
// 화면에 뿌려줄수도, 텍스트를 변형하고 싶을수도, 아니면 다른걸 하고싶을 수도 있다. 
// 하지만 핵심은! 이 array에 있는 각각의 item에 대해서 function을 실행하는 것이다. 
// javascript는 array에 있는 각각이 item에 대해 function을 실행할 수 있게 해준다. 

// 자 여기 parseToDos는 이게 array라서 forEach라는걸 갖고있다. 
// 그리고 forEach는 function을 실행하게 해주는데 
// 그 array에 있는 각각의 item에 대해서 실행해준다.
// array.forEach(element => {}) 이게 그 기능을 쓰는 멋진방법
// 하지만 우리가 늘 하던방식으로 function을 작성해줄 것이다. 

// 이제 javascript에게 말해준다. 
// parseToDos가 가지고 있는 각각의 item에 대해 sayHello function을 실행해줘 라고
// 이제 console을 보면 item의 갯수만큼 "hello"가 찍혀있는것을 볼 수 있다. 
// 하지만 이건 이 array의 item들에 대해 한개의 function만 실행할 수 있게 해준다. 

// 지금 하고 싶음 말의 핵심은!
// 지금 내가 어떤 item을 사용하고 있는지 모른다면 완전 무용지물이 된다는 말이다.
// submit eventListener가 event(argument)를 그냥 제공해주는 것처럼
// javascript는 지금 처리되고있는 item또한 그냥 제공해준다.

// 따라서, javascript가 해주는건, 문자그대로 sayHello를 가지고
// javascript는 array를 보면서 sayHello("a")를 하는거다. 
// 그다음 sayHello("b"), 그다음 c... 모두 다하면 끝
// parsedToDos.forEach(sayHello);
// 이걸 다시보면 , forEach는 array의 각 item에 대해 function을 실행하게 해준다. 
// 그리고 우리는 그 item을 공짜로 넘겨주는거다. 

// 이런일을 하는 새로운 방법도 있다.
// shortcut(단축키) 같은건데 이런 sayHello() 같은 function을 많이 만들지 않아도 된다.
// sayHello나 또다른 function을 만드는 대신에 이부분 item을 가지고 
// forEach안에 그대로 넣어줄 수 있다.
// parsedToDos.forEach((item) => console.log("Hello", item));
// 결과는 동일하지만 이게 function을 작성할 때 더 짧게 쓰는 방법이다. 
// 함수의 이름도 필요없고, function을 사용할 필요도 없기 때문이다. 
// 하지만 이게 나타내는 것은 parsedToDos에 있는 각각의 item에 대해서 
// console.log를 할 거라는 거다. 각각의 item을!
// => 이렇게 쓰는것을 arrow function(화살표 함수)라고 한다.

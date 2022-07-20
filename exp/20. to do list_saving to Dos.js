const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

const toDos = [];

function saveToDos(){
	localStorage.setItem("todos", JSON.stringify(toDos));
	// 이시점, 즉 saveToDos function이 호출되는 시점에는 newTodo는 array에 들어있다.
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
	toDos.push(newToDo); //이제 newTodo가 그려질 때마다 그 텍스트를 array에 push하고 싶다!
	paintToDo(newToDo);
	saveToDos(); //toDos array를 localStorage에 집어넣는 일
}

toDoForm.addEventListener("submit", toDoSubmit);


// 이제는 실제로 toDo들을 저장해 볼거다. 
// 지금은 새로고침하면 사라지기 떄문에 저장해줄 필요성을 느낀다.
// 브라우저에 저장하는 방법은? localStorage를 이용하면 된다.
// 단계별로 진행하지면 
// 우선 toDo들을 저장하고 싶다
// 그다음 toDo들을 불러오고 싶다.
// 무슨의미냐면, 만약 내가 a,b,c를 입력하면, 먼저 이것들을 localStorage에 저장하고, 
// localStorage에서 그것들을 불러와서 화면에 그려주고 싶다는거다.

// 이제 내가 하고싶은건 우선 array를 만드는거다. 
// toDo들을 담아줄 array!
// 그리고 이제 newTodo가 그려질 때마다 그 텍스트를 array에 push하고 싶다!
// 그래서, newTodo를 그리기 전에, toDos인 array를 가지고와서 newTodo를 push할거다.

// 그 다음 목표는 이제 array에 있는 걸 localStorage에 넣는거다.
// 하지만 문제는 localStorage에 array는 저장할 수가 없다.
// localStorage네는 오직 text만 저장할 수 있다. 
// 한번 시도해보기 위해서 이제 함수 saveToDos를 하나 더 만들어준다. 
// saveToDos()가 하는일은 단 한가지!
// toDos array의 내용을 localStorage에 넣는 것이다. 

// toDos가 잘 저장되는것을 확인
// 하지만 새로고침을 하면 화면에 나타나지는 않는다.
// 하지만 localStorage에는 존재한다. 
// 하지만 또 한가지 문제가 발생
// 새로고침하고 다시 입력하면 그 전에 입력값들이 사라지고 처음부터 다시 입력됨

// 문제는 위에 말했던 것처럼, 기존에 있던 toDo들을 화면에 나타내 주지 않는다는것
// 먼저 toDo들을 그려보자. 그 후에 복제와 다른 모든 것들에 대해 이야기 해보자.
// 하지만 나는 이렇게 toDo들을 a,b,c,d 이런 텍스트로 저장하고 싶지는 않다.
// 왜냐하면 저건 단순하게 텍스트가 아니기 때문이다.
// ["a","b","c","d"] 이렇게 array로 저장했으면 좋겠는데 이렇게 할수는 없다.
// 하지만 localStorage에서는 value를 직접수정할 수 있다. 
// 하지만 그건 그냥 텍스트일 뿐이고, 실제 array가 아닌 string이다.
// 나는 단순 텍스트로 저장되는걸 원하지 않는다. 

// 따라서 나는 브라우저가 가지고 있는 어떤기능을 이용할 것이다. 
// javascript object나 array나 어떤 것들이든 string으로 바꿔주는 기능이다.
// 예를들면 name으로 bokyung을 가진 player(object)가 있다고 해보자
// const player = {name :"bokyung"};
// 이걸 string으로 바꾸고 싶다면, 
// player(object)를 JSON,stringify()안에 넣기만 하면 되는거다.

// JSON,stringify()는 javascript object나 array 또는 어떤 javascript 코드건 간에
// 그걸 string으로 만들어 준다. 
// 따라서 toDos를 stringify()하면 된다. -> localStorage.setItem("todos", JSON.stringify(toDos));
// 이렇게 해주면 array모양으로 저장이 된다.








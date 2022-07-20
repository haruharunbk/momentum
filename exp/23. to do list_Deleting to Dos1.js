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


/////////////////////////////////////////////////////////////////////////////////////////////////
// toDo를 지울 때마다 localStorage에 업데이트를 하지 않는다는것이 문제이다.
// localStorage를 데이터베이스라고 생각해보자
// console에서 toDos array를 보면 ['a', 'b', 'c', 'd', 'e'] 이게 데이터베이스다. 
// localStorage는 이 toDos array를 복사해둔 곳이다. 
// toDos array가 localStorage와 같지 않다는것을 생각해야 한다. 
// 시작할 때 toDos array가 지워졌지만 여전히 ['a', 'b', 'c', 'd', 'e'] 이 item을 갖고있고
// 이것을 바꾸고 싶은데 어떤 item을 지워야 할 지 알수가 없다.

// javascript, HTML의 입장에서는 deleteToDo는 화면에서 어떤 HTML의 element를 지워야 하는지 알고있다.
// 그렇지만 어떤 todo text를 데이터베이스에서 지워야 하는지는 모른다.
// 데이터 베이스에서는 이렇게 글자를 얻을 수는 없다.
// 왜냐면 만약 같은 text a가 2개면 어떻게 될까?
// 만약 첫번째 a를 지우면 어떤걸 지웠는지 알수 있을까?
// 따라서 더 좋은 방법이 필요하다.
// toDos를 더 좋은 방법으로 만들어야 한다. 
// 그래서 어떤걸 나눌껀데, ['a', 'b', 'c', 'd', 'e'] 이렇게 toDos를 만들고 싶지 않다.
// 이 방식은 정말 별로다. 

// 내가 하고 싶은 방식은 todo들에게 ID같은 것을 주고싶다.
// text 대신에 object를 만들고 싶은거다. 
// [{id:121212, text:"a"}]
// array, object 안에 id가 있고 text는 이렇게 되어있는 형태말이다. 
// to do의 내용은 text에 있고, 랜덤한 ID도 필요하다.

// 랜덤한 ID를 만드는 방법
// 랜덤이 완전히 랜덤이 아니고 element가 만들어질때 이 ID를 갖게 될 거다. 
// Date.now()는 밀리초(1000분의 1초)를 주는 함수이다. 
// 이 초들은 거의 랜덤처럼 보인다. 이건 랜덤숫자를 제공해줄 것이다.
// 그럼 데이터베이스에 TO DO 내용을 추가하는 곳으로 가보면 
// toDos.push(newToDo); 
// 여기서 데이터베이스로 매번 사용자가 적어둔 text를 push한다. 
// 하지만 이젠 text의 push를 원하지 않고, object를 push하고 싶다.
// 따라서 toDos.push({newToDo}); 이렇게 해도되고,
// text는 newToDo를 갖고 id는 Date.now()갖는 새 object를 만들어도 된다. 
// 그리고 이 newToDoObj를 toDos array에 넣을 것이다. 

// 이제 id를 사용해보자. 이 id를 HTMl에 두고싶다. 
// paintToDo(newToDoObj); 여길보면 paintToDo가 있는데 
// paintToDo는 오직 text인 newTodo만 가지고 있다. 
// 이걸 object로 바꿀 것이다. 
// paintToDo(newToDoObj);
// 그래서 paintToDo에 string으로 newTodo를 주는것 대신에 newToDoObj을 줄것이다. 
// paintToDo는 text를 받았지만 이제는 object를 받는다 .
// 그말은 object를 보면 text와 id를 가지고 있다. 
// 따라서 span.innerText = newToDo.text; 되어야지 오류가 발생하지 않는다. 

// id로 각각의 li item 구별하기 
// paintToDo는 toDoInput.value에서 온 newToDo와 함께 call했지만
// 이제는 object와 함께 call되고 있다. 
// 그리고 li.id = newToDo.id를 추가해준다. 

// 이젠 user가 어떤 id를 지우길 원하는지 알려줘야한다. 
// 여전히 멋지게 삭제되고 있지는 않다 .

// savedToDos에서 to do를 받으면 
// const parsedToDos = JSON.parse(savedToDos);
// to do를 localStorage에서 받으면 이걸 forEach한다. 
// forEach가 실행되면 이걸 paintToDo를 부른다. 
// 자세히 적어보면 paintToDo({text:"a", id:121212}) 이렇게 부른다. 
// parsedToDos.forEach(paintToDo); 이줄에서 이렇게 일어났을 것이다. 
// 문제 없이 잘 작동은 되지만 아직 아무것도 삭제하지 않았다. 
// 그치만 데이터베이스에게 id를 저장하는 옵션을 줬다. 
// 굉장히 중요하지만 id를 줄수 있다면 이제 삭제할 수도 있다는 이야기다.
// 예를들어 id가 여기있는데 이걸 하기전에 필요한건 우리가 누를 X의 버튼 id값을 얻어야 한다는 것이다. 

// deleteToDo에서 예전에는 이렇게 했었는데
// const parentLi = event.target.parentElement;
// 이러면 화면에서 li를 삭제하기 전에 li를 얻게된다.  
// 따라서 화면에서 삭제하기 전에 li의 id도 얻는다 .
// 따라서 여기서 a를 적고 삭제하면 li의 id를 얻는다. 이건 완전 유용하다.

// 다음에서 array에서 item을 지우는 법을 이야기 할 것이다. 
// 우리는 push로 item을 추가할 수 있는 것을 보았다 .
// 다음 영상에서는 array에서 item을 삭제하는것을 배울 것이다.




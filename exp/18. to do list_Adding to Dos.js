const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

function paintToDo(newToDo){
	// console.log("I will paint", newToDo);
	const li = document.createElement("li");
	const span = document.createElement("span");
	li.appendChild(span);
	span.innerText = newToDo;
	// console.log(li);
	toDoList.appendChild(li);

}


function toDoSubmit(e){
	e.preventDefault();
	const newToDo = toDoInput.value; 
	toDoInput.value = ""; 
	// console.log(newToDo, toDoInput.value);
	paintToDo(newToDo);
}

toDoForm.addEventListener("submit", toDoSubmit);


// 첫번째 setup을 끝낸다음 그 다름으로 , function을 만들것이다. 
// paintToDo()는 toDo를 그리는 역할을 담당할거다 .
// 하지만 지금은 뭘그려야 될지 모르니깐 이 function에 newToDo라는 인자를 줄것이다.
// newTodo는 물론 text가 될 것이다.
// 이제 toDoSubmit function이 paintToDo()를 사용하게 되는거다.
// 따라서 toDoSubmit()안에서 paintToDo()를 호출하고 그리고 newToDo를 보내는거다.
// 자 이변수 newToDo는 input의 value를 비우기 전의 값을 나타내는 string이다.
// 그런 다음 그 입력값을  paintToDo()에 넣어서 호출하려는 거다. 
// input에서 value를 얻어서 paintToDo라는 새로운 function에 그 값을 보내는 거다. 

// paintToDo가 하는 일은 기본적으로 <li>이런걸 만들어주는 역할을 한다.
// 이 경우에는 li를 만들어서 ul에 추가할 거다. 
// 하지만 실제로는 li안에 span을 이용해서 input.value값을 넣고 싶다.
// 따라서 li, span의 해당하는 변수값을 만들어 준다음 
// li의 안에 span을 자식요소로 가지게 하고 span.innerText에 newTodo를 넣는다. 
// 그러면 span의 텍스트는 toDoSubmit에서 온 newTodo텍스트가 되는거다. 

// 이제 해야할 건, 이 새로운 li를 list(toDoList에 추가하는 것이다. )

// 문제점 
// 1) 새로고침하면 날아감
// 2) 삭제하고 싶은데 삭제가 안됨
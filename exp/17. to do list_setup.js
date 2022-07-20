// 이번 섹션에서는 todo리스트를 해볼것이다. 
// 우선 우리에게 뭐가 필요한지 생각해 봐야한다. 
// 첫번째로는 form이 필요하다. 
// 왜냐하면 사용자가 todo를 입력해야하고, list도 필요하다. 
// 사용자가 todo를 나열할 수 있어야 하기 때문이다.
// todo 목록에서 todo들을 확인할 수 있어야 한다. 
// 그 다음은 todo-list라는 id를 가진 ul을 만드는데 그안에는 아무것도 추가하지 않을 것이다. 
// javascript로 li를 추가할 예정이다. HTML에는 아무것도 쓰지 않을 거다.

// 우선 form과 ul을 HTML에서 javascript로 가져가보자.
const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input"); //그안에 input밖에 없기때문에 이렇게 쓰는게 가능
const toDoList = document.getElementById("todo_list");

function toDoSubmit(e){
	e.preventDefault();
	const newToDo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사하는것
	toDoInput.value = ""; // empty상태로 만들어준다.
	console.log(newToDo, toDoInput.value);
}

toDoForm.addEventListener("submit", toDoSubmit);

// form은 submit이벤트를 가진다. 
// 따라서 function을 만들고 , 그 이벤트의 기본동작을 막을거다.
// 다음으로, 여기에 있는 input의 value를 얻고싶다.
// toDoInput.value가 나오는지 확인한 후 할일은 input을 비우는 일이다. 
// 그러니깐 enter를 누르면 입력한 모든 값이 사라지는 거다.
// 어떻게 하냐면, toDoInput의 value에 빈 값을("")넣는거다. 
// 하지만 input value를 비우기 전에 그 값을 저장해보자.
// 중요한건 oDoInput.value를 비웠다고 해서 newToDo가 비워지는게 아니라는거다!!!
// const newToDo = toDoInput.value; 이건 input의 value를 새로운 변수에 복사하는 것이기 때문에 
// 그 후의 input의 value를 가지고 무엇을 하던지 newToDo에는 아무런 영향이 없다. 


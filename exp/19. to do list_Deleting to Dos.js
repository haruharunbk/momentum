const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

function deleteToDo(event){
	// console.log("dd");
	const parentLi = event.target.parentElement; // 우리가 삭제하고 싶은 li
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
	paintToDo(newToDo);
}

toDoForm.addEventListener("submit", toDoSubmit);

// 이제 하고 싶은건 toDo를 삭제하는 button을 추가하는 거다.
// button은 당연히 javascript에서 만들어 질거다. 

// 모든 것들이 어떻게 보일지 디자인을 해야되는데
// 우선 li를 가지고 있고, span이 있고, 이게 toDo 텍스트이다. 
// 그리고 나서 button을 갖게될건데, 이모티콘 X를 넣은 이 버튼은 event를 수신하고 있어야해
// 가장 중요한건, button이 click event를 기다리고 있어야 한다는거다!
// 왜냐하면 그게 누군가가 무언가를 클릭했을때 알수있는 유일한 방법이기 때문이다. 

// 자 이제 모든것을 append하기전에  button을 생성한다. 
// 그다음 button.innerText에 X모양 이모지를 넣는다. 
// 이제 button을 li에 추가하고 싶다.
// 그럼 li.appendChild(span); 뒤에 똑같이 적어주면 차례대로 append된다. 
// !!!!명심하고 기억해! append는 맨마지막에 놓여야 한다!!!
// button은 span뒤에 있게 될 것이다. 그 다음에 li를 toDoList에 추가하는 거다.

// 뭔가가 클랙되었다는것을 버튼에 eventListener를 줘서 알수 있게 한다. 
// 물론 click했을떄 function을 하나 만들어줘야 하는데 아 function은 toDo를 삭제할거다.
// 하나 문제가 있다면 button을 클릭했을 때 작동은 잘하지만 어떤 button을 클릭해서 작동을 했다는건지는 모른다.
// 생성된 li의 아무 button을 눌러도 console.log는 작동한다. 
// 우리는 button이 클릭되었다는건 알지만 어떤 li를 제거해야되는지를 알지 못한다. 

// 우리는 smbmit event에 대한 정보를 가졌던 것처럼 click event에 대한 정보가 있다.
// 그러니깐 이제 event를 console.log해서 살펴보자.
// function deleteToDo(event){함수에도 인자를 넣고 console.log(event);}
// 클릭된 button이 어떤건지에 대한 단서를 얻을 수 있는지 해보자
// a, b,c 를 차례로 넣으면 모두 거의 똑같아 보이는걸 알 수 있다. 
// event는 property를 가지는데 어떤 button이 클릭되었는지를 알려준다.
// console.dir(event.target);로 button안을 들여다 보면 누가 button의 parentNode인지 알수 있다는 거다.
// 우리는 클릭한 parentNode 또는 parentElement를 얻고싶은거다 

// 우리는 event에 대한 유용한 정보를 얻고있다.
// 하지만 이번경우에는 event는 많은 정보를 주지않아서 event.target을 살펴봐야한다. 
// target은 클릭된 HTML element이다. 
// 그리고 모든 HTML element에는 하나이상의 property가 있다.
// parentElement는 클릭된 element의 부모이다. 
// 부모는 이 li고 이제 우리는 누구를 삭제해야 되는지 알수가 있다. 

// li를 만들고 나면, X버튼을 클릭할때, event를 얻게된다.
// event는 target을 주겠지? -> 누가 click된거지?
// target은 button이고, 그 button은 부모를 가지고 있어
// 우리는 그 button의 부모에 접근할 수 있고, button의 부모가 결국 li가 되는거다. 
// 그 li를 제거할것이다. 


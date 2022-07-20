// javascript를 사용하여 javascript가 특정한 class name만 변경하도록 했다.
// 여기서는 handleTitleClick function초점을 맞출 것이다. 
// style변경은 css에서 해줄 것이다. 

const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);

//	function handleTitleClick()	{
//		const clickedClass = "clicked"
//		if	(h1.className === clickedClass)	{ // 같은 string을 두번이나 사용하면 error의 위험이 높아진다. 
//			h1.className = "";
//		} else {
//			h1.className = clickedClass;
//		}
//	}

// raw value 개발자가 이렇게 적겠다고 선택 -> 실수할 가능성 있다
// 이 raw string들을 사용하는 대신에, constant를 사용해준다.
// 이 중복 string을 변수에 저장하는 것은 매우 유용하다!


/////////////////////////////////////////////////////////////////////////////

// className - 이전에 class들은 상관하지 않고, 그냥 모든것을 교체해버린다. 
// classList - class들의 목록으로 작업할 수 있게끔 허용해준다. 
// classList 중에 contain이라는 function
// 이 function은 우리가 명시한 class가 HTML element의 class에 포함되어있는지 말해준다.

//	function handleTitleClick()	{
//		const clickedClass = "clicked"
//		if	(h1.classList.contains(clickedClass))	{ // 만약에 이 clickedclass가 h1의 classList에 포함되어 있다면,
//			h1.classList.remove(clickedClass);
//		} else {
//			h1.classList.add(clickedClass);
//		}
//	}
//	
//	h1.addEventListener("click", handleTitleClick);

// 여기서 우리가 하는건, HTML element가 가지고 있는 또하나의 요소를 사용하는 거다.
// 이 classList에 element의 class내용물을 조작하는 것을 허용한다 라고 되어있다. 
// 이제 우리는 classList가 clicked를 포함하고 있는지만 확인하는 거다.


/////////////////////////////////////////////////////////////////////////////
// toggle function
// toggle function은 class name이 존재하는지 확인한다. 
// 만약 class name이 존재한다면, class name을 제거를 할것이고
// 만약 class name이 존재하지 않는다면, class name을 추가를 할것이다
// toggle 코드는 기본적으로 if else를 구현하는 거라 코드가 훨씬 단순화 해진다. 

function handleTitleClick()	{
	// const clickedClass = "clicked"
	h1.classList.toggle("clicked");
	// 이 경우엔, 우리는 이 "clicked"을 한번만 사용하기 때문에 변수를 사용안하고 이렇게 한번만 적어줘도 된다. 
	// 우리가 이 string을 반복하는 순간이 constant를 생성할 순간이다. 
}

h1.addEventListener("click", handleTitleClick);
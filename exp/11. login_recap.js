// form과 h1은 공통점은 hidden이라는 class를 가지고 있고, 요소를 숨기는 역할을 한다. 
// 자바스크립트를 불러오기 전에는 두 요소는 숨겨져 있다. 
// 이제 자바스크립트가 들어와서 제일먼저 local storage를 확인할 것이다. 


const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username"

function onLoginBtnSubmit(e) { 
	e.preventDefault(); // 1. 원래 하는 기본동작 막아주기
	loginForm.classList.add(HIDDEN_CLASSNAME); // 2. form에 class hidden 더해줘서 모습 감추기
	// const typedUsername = loginInput.value; // 3. 변수 값설정. input의 value값 //변수 두변사용 싫어서 합쳐줌
	//username이 헷살려서 typedUsername로 바꿔줌
	// 이 변수는 유저가 input에 입력한 유저명이고 이걸 local storage에 저장하고 있고, 그 동시에 paintGreetings함수의 인자로 사용하고 있다.
	localStorage.setItem(USERNAME_KEY, loginInput.value) // 4. username값을 typedUsername이라는 key와 함께 local storage에 저장
	paintGreetings(); // 5. 함수 호출 
	// paintGreetings 함수는 하나의 인자를 받고 있다. 
	// 지금 같은 경우에는 유저가 form 안에 있는 input에 입력한 유저명을 받고 있다. 
}

function paintGreetings(){ 
	// 이함수는 username이라는 인자를 하나 받고 있고 이함수가 하는 일은 
	const typedUsername = localStorage.getItem(USERNAME_KEY); 
	// 함수 안에 변수를 만들고, local storage에 있는 username을 찾도록 작성해줄거야.
	// 그럼 이제 저 위의  onLoginBtnSubmit함수의 paintGreetings에서 아무것도 보내지 않아도 된다는 뜻이다.
	// local storage에 뭔가를 저장하면 paintGreetings를 호출하는 순간에 그 유저정보는 이미 local storage에 저장되어 있을거다.
	greeting.innerText = `Hello ${typedUsername}!`; // 비어있는 h1 요소안에 텍스트를 추가해주는 것이다.
	greeting.classList.remove(HIDDEN_CLASSNAME); // 그 다음에는 h1요소로부터 hidden이라는 클래스명을 제거해주는거다.
}

// 하지만!! 
// 사실 생각해보면, local storage에 유저정보가 존재하는걸 알고있기에 paintGreetings 함수는 따로 인자를 받을 필요가 없다. 
// 


const savedUsername = localStorage.getItem(USERNAME_KEY); // 1. 첫번째 단계, 자바스크립트가 local storage를 확인하는것

if(savedUsername === null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginBtnSubmit); 
	// loginForm을 addEventListener를 더하고, submit을 기다리는 것
	// 그리고 submit event가 발생하면 onLoginSubmit 함수가 실행될 거다.
}else{
	paintGreetings();
	// 위의 조건이 거짓임으로 paintGreeting 함수로 직행할거고, 이함수는 역시 string을 인자로 받을 것이다. 
	// 이 경우에는 paintGreetings 함수가 local storage에 저장된 값을 인자로 받게 되고
	// 이전에 했던 작업이 반복될 것이다.

	// 하나 헷갈리만한 점은 paintGreetings 함수를 호출할 때, 다른이름의 인자를 넣고있다는 것이다.
	// 우리가 paintGreetings으로 하는건 화면에 텍스트가 출력되게 하는게 전부다.
	// 이때 텍스트를 보내줘야 겠지
	// paintGreetings(savedUsername);에서는 유저정보가 local storage로부터 오고있다.
	// 하지만 여기 onLoginSubmit 함수에서는 유저정보가 input으로부터 오고있다.
}
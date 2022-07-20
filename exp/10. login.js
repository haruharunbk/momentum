//	<form id="login_form" class="hidden">
//		<input required maxlength="15" type="text" placeholder="What is your name?" />
//		<input type="submit" value="Log In" />
//	</form>
//	<h1 id="greeting" class="hidden"></h1>
//	<!-- <a href="https://nomadcoders.co">Go to courses</a> -->
//	<script defer src="10. login.js"></script>

// 우리는 우선 user에 질문한다.
// 당신은 누구입니까? 당신의 이름은 무엇인가요?
// 그 다음, 그 정보들을 어떻게 받을지에 대해 배울거다. 
// 그러고나면 받은 정보를 화면에 표시할 것이다. 

// JS에는 사실 value를 기억하게 하는 아주 쉬운 방법이 있다.
// user의 이름을 기억하는 것처럼
// 하지만 모든것은 HTML에서 시작되어야한다. 
// 우선 HTML을 작성한 다음, 거기에 있는 element들을 끌고오는 것이다. 
// 그런 다음 JS에서 이런저런 작업들을 해주는 것이다. 

// const loginForm = document.getElementById("login_form");
// querySeletor()를 사용할 때에는 대상이 id인지 명확히 해줘야한다. 
// getElementById()를 사용할 떄는 JS가 내가 이미 id를 찾고 있다는 걸 알고 있기 떄문에 #을 써줄 필요가 없다. 

// input, button을 불러오는데 두가지 옵션이 있다.
// 그중 하나를 보자면
// const loginInput을 작성한 다음 document에서 찾는 대신에 
// 위에서 작성한 loginForm에서 검색을 하는 것이다.
// 1)
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 2) document또는 하나의 element를 통해서 검색이 가능하다.
//const loginForm = document.getElementById("login_form");
// const loginInput = document.querySelector("#login_form input");
// const loginButton = document.querySelector("#login_form button");

// loginButton은 click event와 연결되어야 한다. 
//	function onLoginBtnClick() {
//		const username = loginInput.value; // 매번 loginInput.value을 적어주는것 대신에 변수로 작성
//		if(username === ""){
//			alert("Please write your name!");
//		}else if( username.length > 15 ){ //length를 붙여줌으로써 string의 길이를 구할 수 있다. 
//			alert("Your name is too long");
//		}else{
//			console.log(username);
//		}
//	}
//	loginButton.addEventListener("click", onLoginBtnClick);

// value는 기본적으로 내 input안에 있는 텍스트이다.
// HTML에서 value값을 미리 입력해줄수도 있다. 
// 그다음 새로고침을 하면 input에 value가 선입력이 되어있을 것이다.
// 따라서 input의 내용을 가져오려면 property값인 value를 가지고 오면 된다. 

// 어떤 string 뒤에 length를 붙이면 string의 길이를 구할 수 있다. 
// const hello = "lsdfihelsdijg"
// hello.length -> 13개로 나온다.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// HTML의 도움을 활용하고 싶다면 input을 form 안에 위치 시켜야 한다. 
// 우리가 form 안에서 enter를 누르고 input이 더이상 존재하지 않다면 자동으로 submit된다
// 또는 form 안에 있는 버튼을 눌렀을 때, 이때도 form 이 자동으로 submit 된다. 
// input을 form안에 넣었을 경우에는 우리가 enter를 누를 때마다 form은 자동적으로 submit되고 있다. -> 우리가 원하는게 아님 -> submit 될때마다 새로고침하기 때문
// 따라서 더이상 click에 신경을 쓸 필요가 없다. 이제 우리의 관심사는 form을 submit하는 것이다. 
// 새로고침이 일어나는 건 form submit의 기본동작이다. 
// 이순간에 우리는 브라우저가 새로고침을 하지않고 user의 정보를 저장하도록 하고싶은 것이다.

// const loginForm = document.querySelector("#login_form");
// const loginInput = document.querySelector("#login_form input");
// const greeting = document.querySelector("#greeting");
// 
// const HIDDEN_CLASSNAME = "hidden"; // 중복사용 방지
// HIDDEN_CLASSNAME 대문자 사용이유 : 일반적으로 string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 떄 사용한다. 
// 그리고, loginForm이나 loginInput처럼 중요한 정보를 담은게 아니라서 대문자로 작성한 것이다. 

// function onLoginBtnSubmit(e) { // onLoginBtnSubmit()은 즉시 실행한다는건데 인수를 넣어서 방해를 한다. () 이안에서 너한테 정보를 주고 있다.
// 	// 브라우저는 브라우저 내에서 event로부터 정보를 잡아내서 함수의 실행버튼을 누르고 있는 것이다. 
// 	// 모든 EventListener function의 첫번쩨 argument는 항상 지금 막 벌어진 일들에 대한 정보를 줄 것이다.  
// 
// 	e.preventDefault(); // preventDefault() 어떤 event의 기본 행동이든지 발생되지 않도록 막는 것이다. // 브라우저의 기본동작을 막아줄 것이다.
// 	console.log(e); //현재 form에 대한 설명들이 나와있다. 
// 	
// 	//const username = loginInput.value; // 매번 loginInput.value을 적어주는것 대신에 변수로 작성
// 	//console.log(username); // 하지만 지금 새로고침은 못 막고 있다!!
// 	loginForm.classList.add(HIDDEN_CLASSNAME);
// 	const username = loginInput.value;
// 	console.log(username);
// 	localStorage.setItem("username", username)
// 	// greeting.innerText = "Hello " + username +"!";
// 	greeting.innerText = `Hello ${username}!`; // 변수를 써줄때 ``안에 ${}만 써주면된다. 이게 좀더 새로운 방식이다.
// 	greeting.classList.remove(HIDDEN_CLASSNAME);
// }
// 
// loginForm.addEventListener("submit", onLoginBtnSubmit); // 누군가 form을 submit하면  js가 function을 호출하도록 하고있다. 
// submit이라는 event가 발생하는 걸 아예 막거나 중간에 개입해서 submit event가 발생했다는 걸 파악하고 싶다. 
// 우리가 지금 필요한 건 login-form 그 자체이다. 
// 이제는 click말고 submit을 감지해야되고 우리는 submit event가 있다. 
// submit은 enter를 누르거나 버튼을 클릭할 때 발생한다는 사실을 기억하도록 해야한다!

// preventDefault() 어떤 event의 기본 행동이든지 발생되지 않도록 막는 것이다. 
// 브라우저의 기본동작을 막아줄 것이다.


// loginForm.addEventListener("submit", onLoginBtnSubmit) 
// form은 지금 submit을 기다린다. -> submit을 하게되면 많은 일들이 벌어질 것이다. 
// e.preventDefault(); 
// 첫번째, 브라우저의 기본동작을 막게된다. -> 브라우저가 submit할떄 원래하는 동작을 안하게 된다는 거다. 
// 대신 그 기본동작을 멈추고 우리가 원하는 대로 할수 있게 된다는 거다. 
// loginForm.classList.add(HIDDEN_CLASSNAME);
// 두번째, form에 hidden이라는 class를 추가하는 거다. 
// const username = loginInput.value; 여기서 loginInput의 값을 변수에 저장하고
// greeting.innerText = `Hello ${username}!`;
// 그다음에 기본적으로 비어있는 h1인 greeting을 가져다가 "hello username"이라는 텍스트를 넣어주는 거다.
// 이떄 `${}`를 활용해서 string안에 변수값을 넣고
// greeting.classList.remove(HIDDEN_CLASSNAME);
// 그다음 h1에서 hidden이라는 class을 삭제해주는 거다.
// 그러면 hidden class명을 갖고 있는건 form뿐이겠지?

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 우리가 하고싶은건 유저가 이름을 제출하면 , form 자체를 없애고 싶다. 
// 첫번째 방법은 이걸 구현하기 위해서는 HTML요소 자체를 없애는 것이다. 
// 두번째 방법은 CSS를 이용해서 숨기는 방법이 있다. 

// 유저가 이름을 form을 통해서 제출했을때, 기본동작은 막아주고
// 이제 할 일은 form을 숨겨주고, h1은 표시되도록 하는 것이다. // 하지만 h1에 표시할 텍스트가 있을 떄만 표시되도록 할거다.
// 유저의 이름을 변수로 저장해주고, 그 이름은 h1안에 넣어줄 것이다. 


// 'string ${변수} string'; 이방식에는 두가지 규칙이 존재한다. 
// 첫번째는 , 만약 변수와 string을 결합하고 싶거나 또는 변수를 string 안에 집어넣고 싶다면 ${변수명} 이렇게 표현하면 된다. 
// 그 뒤에 뭘 추가 해도 상관없고 ${변수명}이 부분만 JS가 변수값으로 바꿔줄 것이다. 
// 두번째 가장 중요한 규칙은 ``(백틱기호) 이 기호로 시작해야 한다는 것이다. 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 이제는 value를 저장하는 방법을 배울거다. -> user에게 매번 질문하기에는 번거로우니깐
// 유저의 이름이 뭐가 되었던 간데 뭔가를 저장하는건 아주 자주 사용되는 기능이다. 
// 예를들면, 우리가 유튜브를 볼때 볼륨을 조절하고 새로고침을 하면 유튜브가 그 볼륨값을 기억하겠지?
// 우리의 경우에는 user의 이름을 기억하고 싶고, user가 누구인지 기억하고 싶다. 
// 우리의 브라우저에 공짜로 뭔가를 기억하게 있게 해주는 기능이 존재한다.
// 그 API의 이름은 local storage이다. 
// 콘솔에 localStorage라고 입력하면 볼 수 있는데 보시다시피 이미 정의 되어 있다. 
// 우리가 아직 모르는 Storage라는걸 반환하고 있는데 중요한건 local storage가 존재한다는 것이다. 
// local storage는 우리가 브라우저에 뭔가를 저장할 수 있게 해주고 나중에 가져다 쓸 수 있게 해준다. 
// local storage에 뭐가 들어있는지 보고 싶다면 개발자 도구를 이용하면 된다.
// application - 왼쪽에 local storage가 있을거다.
// 지금은 저장한게 없어서 비어있지만 추후에 이것저것 저장하기 시작하면 여기가 바뀌는걸 보게 될 것이다. 
// local storage API를 살펴보면 다양한 method가 있는데 그중 하나가 setItem 이다. 
// setItem을 활용하면 local storage에 정보를 저장할 수 있다.
// local storage.setItem('우리가 저장할 값의 이름 : 에) username', '저장할 값: 예) nico");
// 위의 한줄의 코드를 실행하면 이제 우리의 DB에는 새로운 항목이 있게된다.
// 이제는 우리가 원하는 값을 저장할 수 있게 되었다. -> 값을 저장하고 난 다음에는 당연히 그 값을 불러올 수도 있다.
// localStorage.getItem("username") 작성하면 값을 불러올 수 있다.
// localStorage.removeItem("username")물론 필요한 경우 저장된 값을 지울 수도 있다.
// localStorage 뒤에 .removeItem, .getItem, .setItem 이거면 끝이다. 
// 마치 작은 미니 DB같은거다. 우리는 key와 value만 준비하면 된다. 

// 우리가 할일은 유저가 이름을 제출할 때 그걸 저장해주면 되는 것이다. 

// 이제 새로고침을 해도 username은 기억하지만 form은 새로고침하면 나온다.

// 우리는 우선 local storage에 username이 존재하는지 확인하고, 존재하면 바로 h1에 표시하고, form을 표시하지 않을 것이다. 
// local storage에 유저 정보가 없다면 form이 먼저 표시되도록 할 것이다. 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 이제 할건 form을 보여주기 전에, addEventListener를 하기전에 확인을 해줘야 한다. 
// 이때, local storage가 비어있으면 form부터 보여주면서 지금까지 해오던걸 하면된다.
// 하지만 local storage에 유저정보가 있으면 form을 보여주면 안되고, 우리는  h1 요소를 보여줘야 한다.
// 이제 우리가 할 일은 local storage에 유저정보 유무를 확인하는 것이다. 
// 유저정보가 없다면 지금까지 해왔던 대로 하면 된다. 
// 우선, 유저정보의 유무를 확인하는 방법은  localStorage.getItem("username")을 쳤을때  null이 나오면 값이 없는것이다. 
// localStorage.getItem("username") : null -> 유저 정보가 없다
// 문제는 지금 이 if 구문과 상관없이 form이 표시되니깐 html에서 form과 greeting을 모두 숨긴채로 시작해야한다. 


const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username"

function onLoginBtnSubmit(e) { 
	e.preventDefault(); 
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username)
	// greeting.innerText = `Hello ${username}!`;
	// greeting.classList.remove(HIDDEN_CLASSNAME);
	paintGreetings(username);
}

function paintGreetings(username){ // username을 인자로 받는 함수를 만들었다 
	// 하지만 우리가 함수흐 호출하는 위치에 따라 유저정보는 다른 곳에서 오게 될것이다.
	greeting.innerText = `Hello ${username}!`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 저장된 내 키값!
// console.log(savedUsername);
// 예를 들면 local storage에 유저정보가 있으면 거기서 유저 정보를 받아서 인자로 넣어줄거다. 
	
if(savedUsername === null){ // savedUsername값이 null인 경우에는 form을 보여주도록 할 것이다. 
	// show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginBtnSubmit); // form을 보내주는 거니깐 
	// 만약 local storage에 유저정보가 없다면, 우리는 form의 submit을 기다리고
	// form이 submit되면 우리는 input으로부터 유저정보를 받고, 
	// input에서 받은 user를 가진 paintGreetings를 호출할 것이다.
}else{
	//show the greeting
	//greeting.innerText = `Hello ${savedUsername}!`; // 변수 바꿔주는것이 중요!
	//greeting.classList.remove(HIDDEN_CLASSNAME);
	paintGreetings(savedUsername);
}

// 허지만 우리는 greeting에서 같은 동작을 반복하고 있다. 





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// <a href="https://nomadcoders.co">Go to courses</a>
// const link = document.querySelector("a");
// function linkClick(e){
// 	e.preventDefault(); // 이러면 기본동작을 막고있기 때문에 더이상 사이트 이동을 하지 않는다. 
// 	console.dir(e);
// 	alert("clicked!"); // alert는 특이해서 모든 동작들을 막게된다.
// }
// link.addEventListener("click", linkClick);

// alert는 특이해서 모든 동작들을 막게된다.
// 모든것들이 막혀있다가 ok를 누르면 다시 기본 동작이 실행된다. 

// 가끔 우리는 기본동작들을 막아야 할 필요가 있다. 
// 가끔은 뭐가 클릭이 됐는지 어디가 클릭됐는지 등 정보를 알고 싶을 때가 있다. 
// 그럴때 JS는 단순히 함수를 실행시키기만 하는게 아니라, 
// JS는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어줄거다. 
// 그리고 그 object에는 방금 일어난 event에 대한 여러정보가 담겨있다. 
// 방금 일어난 event에 대한 정보를 담은 이 object는 function을 위한 
// EventListener 함수의 첫번째 인자로 주어지게 될거다! -> 우리는 공간만 만들고 받기만 하면 된다.
// 계산기를 만들었을 때처럼 우리는 argument를 받아줘야 한다. 

// submitEvent/ pointEvent이렇게 event의 종류는 다양하고
// 다시, 가장 중요한건, addEventListener 안에 있는 함수는 직접 실행하지 않는다는 것이다!
// 우리가 하는게 아니라 브라우저가 하는것이다
// 	<body>
// 		<h1 autofocus class="hi" id="title">Grab me!</h1>
// 		<div class="hello"><h1>Grab me1!</h1></div>
// 		<div class="hello"><h1>Grab me2!</h1></div>
// 		<div class="hello"><h1>Grab me3!</h1></div>
// 		<h1 class="hello">Grab me4!</h1>
// 		<h1 class="hello">Grab me5!</h1>
// 		<p id="hello">hi</p>
// 		<script defer src="6. document.js"></script>
// 	</body>

// document는 브라우저에 이미 존재하는 정말 많은 것들이 들어있는 object이다. 
// document는 HTML을 뜻한다. 
// 우리들이 접근할 수 있는 HTML을 가리키는 객체이다.
// console.dir(document)를 호출해보면, document는 보다시피 그저 object일 뿐이다.
// Javascript는 HTML을 읽어오는 것이다. 
// document가 모든 것들의 시작점이고, 우리들의 web site를 의미한다. 

// document.title = "여기다기 쓰면 ";
// 브라우저 타이틀이 알아서 바뀜

// document.title = "bogongE"; // 새로운 값을 저장하는 것

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// element를 더 자세하게 보여주는 console.dir()
// Javascript는 HTML의 element를 가지고 오지만, HTML의 자체는 보여주지 않는다.
//

const title = document.getElementById("title"); // 여기서 element의 id를 써야하는데 string이여야 한다. 

console.dir(title);
title.innerText = "Got you!"

// HTML에서 항목들을 가지고 와서, Javascript를 통해 항목들을 변경할꺼야.
// 1. document에서 항목을 가지고 오는것
// 2. document의 항목들을 변경하는것

//console.log(title.id);
console.log(title.className);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// searching for elements
const hellos = document.getElementsByClassName("hello"); 
// 클래스 이름 같은 것 가지고 오는 것
console.log(hellos);
// 이건 array이고, hellos.으로 뭔가를 가지고 올수가 없다. 
// 이건 많은 h1이 들어있는 array이기 때문이다.
// 가끔 많은 element를 한꺼번에 가지고 와야하는 경우에 사용한다. 

// document.getElementsByTagName
// 하나만 가지고 오는 것!

const helloh1 = document.querySelector(".hello:nth-child(3) h1");
console.log(helloh1);
// querySelector는 element를 css방식으로 검색할 수 있다.
// hello란 css 내부에 있는 h1을 가지고 올 수 있다는 것을 의미한다. 
// querySeletor는 오직 첫번째 단하나의 element를 return해준다. 
// 찾지 못했다면 null라고 응답할거다. 

const helloh1s = document.querySelectorAll(".hello h1");
console.log(helloh1s);
// querySelectorAll은 같은 요소를 모두 가지고 오고 싶을 떄 사용한다.
// querySelectorAll은 세개의 h1이 들어있는 array를 가져다 줄것이다. 
// querySelectorAll은  이 selector안의 조건에 부합하는 모든 element를 가져다 줄것이다.

const id1 = document.querySelector("#hello"); //더 하위의 개념을 쉽게 가지고 올 수 있다.
const id2 = document.getElementById("hello");
console.log(id1, id2);
// 위 두개의 코드는 같은 일을 한다고 보면 된다. 
id1.innerText = "hello7!";
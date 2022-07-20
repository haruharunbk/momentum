//	<div class="hello"><h1>Grab me1!</h1></div>
//	<div class="hello"><h1>Grab me2!</h1></div>
//	<div class="hello"><h1>Grab me3!</h1></div>

// 우리가 js파일을 import했기 때문에 javascript를 통해 
// HTML의 내용을 가지고 올수 있다는 것이다. 
// 우리가 js파일을 import하지 않았다면, 당연히 document는 
// 여기 javascript에 존재 할 수도 없었겠지
// 포인트는, document가 HTML이 js를 load하기 때문에 존재하는 것이라는 거다.
// 그다음에 browser가 우리가 document에 접근할 수 있게 해준다.

const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

h1.style.color = "blue";
// style을 javascript에서 변경할 수 있다.
// javascript의 object 내부에 style에 있는 object이고, element.object명으로 해서 접근한다.
// 안을 보면 이 element의 style을 볼 수 있는데, javascript 형식으로 작성되어있다.
// 예를 들면, color는 object 내부에 들어있는 property일 뿐이다. 
// color 항목을 찾기 위해서는 해당 element를 찾고, 다음에 style을 찾아야한다는 것을 알고 있다.
// h1.style.그리고 property들 사이에서 color를 찾으면 된다. 


// on- 으로 시작하는 애들은 전부 event객체이다.
// 우리가 javascript에서 대부분 작업해야 할 일은, event를 listen하는 것이다.
// 내가 click을 하는 것이 바로 event이다.
// 태그 위로 마우스가 올라가도 event이고, 
// 내가 입력을 끝내거나, 내 이름을 적거나, enter를 누르는것! 그런게 event이다. 
// event는 내가 wifi에서 접속이 해제될 경우, 그런것들이 event가 될수 있다.

// 이 모든 event들을 javascript는 listen할 수 있다. 
// 우리가 배울 event는 다름아닌 click event다!
// 이론상으로는 우리는 어디든지 클릭할 수 있다. 
// h1에 eventListenler를 추가해줘야한다. 
// eventListener는 말그대로, event를 listen하는 것이고, 
// javascript에 무슨 event를 listen하고 싶은지 알려줘야한다. 
// 우리는 모든 event에 대해서 알고 싶은 것이 아니고, 단 하나의 event만 알아보고 싶기 떄문이다. 

function handleTitleClick(){
	h1.style.color = "green";
}

h1.addEventListener("click", handleTitleClick); //function을 여기에 두번째 인수로 전달! //두번째 인수를 함수로 전달할 때 바로 실행되면 안돼서 절대 ()를 붙여주면 안된다.
//title.onclick = handleTitleClick; //위에처럼 써도 되고, 이렇게 써도 된다.
// 여기서는 나는 click event에 대해서만 listen하고 싶은거다. 
// 이렇게 하는 것만으로도, javascript에서는 title을 지켜보다가 누군가가 title을 click하는 것을 listen할거야!
// 따라서 누군가가 title을 click했을 때 무언가를 해줘야되기 위해서 여기에 handleTitleClick이라는 function을 정의해 줄것이다. 
// 따라서, title element를 찾을 방법을 배웠고, 찾아왔다
// 그래서 여기에 eventListener를 추가해줬고, 여기서 click event를 listen해주고, 
// 이 click event가 발생하면, 이 handTitleClick이라는 function이 동작하길 원한다. 
// 여기서 이 function을 실행하지 않게 하는 것이 굉장히 중요하다.
// 나는 이 function을 곧바로 실행시키고 싶지 않고 유저가 click을 했을때 javascript가 실행버튼을 대신 눌러주길 바란다. 
// 내가 직접 실행버튼을 누르지 않고, javascript에 이 function의 이름을 넘겨줘서,
// 유저가 title을 click할 경우에, javascript가 나 대신 실행버튼을 눌러주게 하는거다. 
// 함수에서 () 이 두 괄호를 추가함으로써 실행버튼을 누를 수 있는 거다.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 우리들이 listen하고 싶은 event를 찾는 가장 좋은 방법은, 구ㄷ글에 'h1 html element mdn(mozilla developer network인 MDN)'에 검색해보면
// 우린 링크에 Web APIs라는 문장이 포함된 페이지를 찾는다. 
// 왜냐하면 이건 javascript관점의 HTML Heading Element란 의미이기 때문이다. 하지
// 하지만 사이트를 하나씩 보는건 매우 지루하니깐 저 사이트를 들여다 보고 싶지 않다면,
// console.dir을 사용하여 element를 console에 출력을 시키면, 많은 property를 출력하게 될텐데
// 사용이 가능한 event는 대부분 property 이름앞에 on이 붙어 있다면 그게 바로 event listener이다.
// 만약 event를 사용할때는 onabort 대신에 abort로 사용해야한다(중요) 

// 마우스로 특정한 할수있는 이벤트를 listen해보자 
// 마우스가 우리의 title위에 올라갈 때, click은 하지않고, 그냥 위에 위치할 때의 이벤트!

function handleMouse1(){
	h1.innerText = "Mouse is here!";
}

function handleMouse2(){
	h1.innerText = "Mouse is gone!";
}

h1.addEventListener("mouseenter", handleMouse1);
//h1.onmouseenter = handleMouse1;

h1.addEventListener("mouseleave", handleMouse2);
//h1.onmouseleave = handleMouse2;

// javascript에서 이론적으로는 css style 변경이 가능하지만, style을 변경하는건 css가 하는게 옳다.
// 대부분의 경우에는 style은 css를 통해서 변경이 되어야 한다.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// event내부를 살펴보고, event를 listening하는 또다른 방법을 배워볼 것이다. 
// event들은 그저 click이라거나 마우스가 enter, leave하는 정도만 처리하는것이 아니다. -> 더 많은 것을 할 수 있다. 
// window의 interface 또는 object
// 여기서 window라는건 , 기본적으로 window다!
// window는 기본적으로 제공되는 것 -> document가 javascript에서 기본적으로 제공되듯이 window도 기본적으로 제공한다. 


// addEventListener()를 통해서 event들을 listen 할 수도 있고, oneventname property에 event listener를 할달함으로써 event를 listen할 수 있다. 
// oneventname은 onclick아니 onmouseenter 같은 거랑 비슷하다.

// 하지만 addEventListener를 더 선호하는 이유는 나중에
// removeEventListener를 통해서 event listener를 제거 할 수 있기 때문이다.

// devicemotion이란 event 이건 모바일이 움직이거나 할 때 발생하는 event
// resize라는 event 화면 크기가 바뀜 window의 body를 상대로 resize를 하는 것이다. 
function handleWindowResize(){
	document.body.style.backgroundColor = "tomato";
	// 우선 document호출하고, document가 body에 접근할 수 있게 하는 걸 안다. 
	// body 부분이 꽤 중요하며, h1처럼 document 밑으로는 가져올 수 없다. 

}
window.addEventListener("resize", handleWindowResize);

// clipboard events
// copy 해당 event는 유저가 copy 행위를 했을 때 발생한다.
function handWinddowCopy(){
	alert("copier!");
}
window.addEventListener("copy", handWinddowCopy);

// connection events
// 우리가 wifi에 연결 돼있는지 브라우저가 알수 있다는거
//offline
function handleWindowOffline(){
	alert("SOS no WIFI");
}
window.addEventListener("offline", handleWindowOffline);

//online
function handleWindowOnline(){
	alert("ALL GOOOD!")
}
window.addEventListener("online", handleWindowOnline);
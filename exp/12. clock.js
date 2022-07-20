// clock
// 섹션을 새로 시작하기전에 폴더로 나눠준다.
// 모든 파일을 하나에 관리하면 너무 과하기도 해서, 서로 다른 기능들에 대해서 하나씩 다른 파일로 분리시킨다. 
// 세분화해서 관리하는방식(divide and conquer)-> 코드가 더 짧아지기도 한다. 


const clock = document.querySelector("h2#clock");

// interval이 무엇이냐? 
// interval은 '매번' 일어나야 하는 무언가를 말한다. 
// 예를들어, '매 2초' 라고 하면 이게 interval이라는 거다. 
// 그러니깐 매 2초마다 니가 무슨일이 일어나게 하고 싶을 때 쓰는것이 interval이다. 
// 함수를 만들어 보자면 

function sayHello(){ // 내가 하고싶은건 이함수를 매 2초마다 실행하는 것이다. 
	console.log("Hello");
}

// setInterval(sayHello, 2000) // sayHello 함수를 매 2000ms, 즉 2초마다 호출되도록한다. 
// setInterval은 두개의 argument를 받는다.
// 첫번째 argument는 네가 실행하고자 하는 function이고, 
// 두번째 argument는 호출되는 function 간격을 몇 ms(milliseconds)로 할지 쓰면 된다.
// 처음에는 console에서 hello가 보이지 않지만, 2초가 지나면 console에서 첫번째 hello를 볼수 있다. 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// timeout -> setTimeout
// 이번에 보여주고 싶은건 function을 딱 한번만 호출하는건데, 일정한 시간이 흐른뒤에 호출하는 것이다. 

// sayHello(); // javascript가 이라인을 보자마자 실행될거라는걸 알 수 있다.
// javascriptsms 곧바로 이 function을 실행할거다. 하지만 바로 실행되길 바라지 않는다면?
// 기다렸다가 나오길 바란다면?

setTimeout(sayHello, 3000);
// setTimeout은 setInterval과 비슷하게 생겼지만 동작하는건 완전히 다르다.
// 먼저 호출하려고 하는 function을 넣어준다.
// 그리고 얼마나 기다릴지 ms 단위로 넣어주면 된다.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// javascript가 가지고 있는 Date object라는 멋진 tool을 사용해서 시간이랑 분을 보여줄 것이다.
// new Date(); // 이런식으로 쓸수 있고 오늘의 날짜를 가져온다.
// new Date object는 현재 날짜, 시간, 분, 초에 대한 정보를 가지고 있다.
const date = new Date();

console.log(date.getDate());
// date.getDate() : 현재 날짜를 가져옴

console.log(date.getDay());
// date.getDay() : 요일을 가져온다. 일요일 부터 0으로 가져온다.

console.log(date.getFullYear());
// getFullYear() : 현재 연도를 가져온다.

console.log(date.getHours());
// date.getHours() : 현재 시간에서 시를 가져옴

console.log(date.getMinutes());
// date.getMinutes() : 현재 시간에서 분을 가져옴

console.log(date.getSeconds());
// date.getSeconds() : 현재 시간에서 초를 가져옴

//매초마다 하고 초를 업데이트 하고 싶다면?
// interval을 사용해야 한다. 

//	function getClock(){
//		const date = new Date();
//		clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
//	}
// 아직 여기서 문제가 있는게 console에서 새로고침을 하면 시간을 바로보여주지않고 1초를 기다려야 한다.
// 그래서 getClock을 호출할건데
// website가 load되자마자 getClock()을 실행하고 또 매초마다 다시 실행되도록 해줄것이다.

// getClock(); // 여기서 함수 호출하고, 그리고 나서 매초마다 getClock을 다시 실행하고 있다.
// 따라서 이걸 지워버리면 1초동안은 00:00:00표시하고, 그뒤에 시간이 갱신 될 것이다.
// 다시 여기서 getClock을 한번 호출하면 바로 시간을 볼 수 있다.
// 따라서 함수를 한번 실행한 뒤에 다음 fucntion들이 실행되도록 짜준것이다.
// setInterval(getClock, 1000); //매초마다 진행 1000ms

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// clock 숫자 bug수정
// 지금부터 우리가 할건 string문자를 두개로 채우는 거다.
// 우리가 javascript에 요구하는건 string이 항상 적어도 최소한 2개의 문자를 가지고 있어야 한다는 것이다.
// 예를 들면 만약에 javascript가 "1"이런 string을 만난다면
// "01" 이런식으로 0을 앞에 추가했으면 하는거다.
// 하지만 string이 "23" 이런 모양이면 더 할 필요가 없는 거다.

// padStart()는 string에 쓸수 있는 function이다. 
// 예를 들면, "1".padStart(2, "0")
// 길이가 1인 문자가 있다고 하자. 여기 있는 string의 길이를 2로 만드는데, 
// 2가 아니라면 앞에 "0"을 추가하도록 할 수 있다.
// padSTart()는 string 길이가 몇인지 말해주는며, 
// 조건이 그렇지 않다면 여기에 있는 문자로 채워서 길이를 만들어 달라는 것이다.

// padEnd()도 있는데 이것도 같은거지만 뒤쪽에 문자를 추가하는 것이다.

function getClock(){
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minntes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	clock.innerText = `${hours} : ${minntes} : ${seconds}`;
}
getClock();
setInterval(getClock, 1000);
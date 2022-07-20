
// conditionnals(조건문)
// 조건문은 true인지 false인지 알려주기 때문에 아주 중요하다
// 무언가를 확인해야 할 때 거의 대부분을 사용할 것이다. 

// prompt는 사용자에게 창을 띄울 수 있게 해준다.
// prompt는 2개의 인수를 받는데, 하나는 message(문자) 이것은 string이다, 다른하나는 default 값이다. 

const age1 = prompt("How old are you1?");

parseInt(age1);
console.log(age1, parseInt(age1));

// prompt에 숫자로 입력해도 이건 숫자가 아니고, type을 확인해야된다. 
// value의 type읠 확인하려면 typeof라는 키워드를 사용해야 한다. 
// typeof하고, 한칸띄우고, 변수를 적으면 새로고침하면 변수의 타입을 알수있다. 

// 어떻게 string을 number로 바꿀 수 있을까?
// parseInt() 라는 함수를 사용하면 된다. string을 number로 변환해준다.
// 문자를 parseInt()하면 NaN(Not a Number)숫자가 아님을 알 수 있다.

const age2 = parseInt( prompt("How old are you2?") );
//console.log(isNaN(age2));
// 함수를 이렇게 바꾸면 바로바로 숫자인지 문자인지 확인이 가능해진다.


// 무언가가 NaN인지 판별하는 방법
// isNaN() 이라는 함수를 사용한다. 
// 이 function을 사용하면 boolean의 값으로 retrun(반환)한다.
// true라는 것은 is NaN이 true라는 거고, number가 아닌것(NaN)이 맞다는 소리 즛 문자라는 뜻이다. string
// false라는 것은 number가 아닌것(NaN)이 아니라는 소리 즛 숫자라는 뜻이다. number


// if문
// if를 적고, 조건을 적고, 그 조건이 참일 때 실행할 코드를 적으면 된다. 
// else 블록에는 condition이 false일떄 조건이 false(거짓)이면 실행될 코드를 적어주면 된다.
// else 블록은 굳이 없어도 되서 지워줘도 된다. (한가지 조건일 때만 설정하면 된다.) 
// -> 이 조건이 true라면 이 코드를 실행할 것이고, 그렇지 않다면 아무것도 하지 않으면 된다. 
// *condition은 boolean으로 판별 가능해야 한다. 
// true거나 false거나 오직 두가지 옵션 뿐이다. 

// 많은 경우에는 if가 하나 이상 필요할 수 있다. 따라서 else를 하는 대신에,
// else if로 연결을 해보자
// else if는 else와 비슷한데 거기에 if를 더한 개념이다. 
// if가 false일 때 한가지 condition을 더 사용할 수 있게 해준다. 

if(isNaN(age2) || age2 < 0){//condition
	// or연산자에서는 둘다 false가 되야지 조건이 false가 된다. 
	// codition === true
	// 조건이 참이면 여기의 코드가 실행될 것이다. 
	console.log("Please write a real positive number");
	// 여기가 false가 되어야지 아래 else if문이 실행이 된다.
}else if(age2 < 18){
	console.log("You are too young");
}else if(age2 >= 18 && age2 <= 50){
	console.log("You can drink.");
}else if(age2 >50 && age2 <= 80){
	console.log("You should exercise.");
}else if(age2 === 100){
	console.log("Wow, you are wise");
}else if(age2 > 80){
	console.log("You can do whatever you want.");
}


// && and는 앞도 TRUE, 뒤도 true여야지 결과가 true가 된다.
true && true === true
false && true === false
true && false === false
false && false === false

// || or 연산자 / 둘중 하나만 true인지 확인하는 것, 둘다 true여도 true이다. 
true || true === true
false || true === true
true || false === true
false || false === false

// 한개의 =는 value를 할당하는 것 
// const age2 = parseInt( prompt("How old are you2?") ); // age2는 여기의 parseInt한 value와 같다는 뜻이다. 
// === 같음을 확인하는 방법
// age2 === 100 // age2가 100이라면?을 확인하는 것 // age2가 100인가? 알겠니?
// !== 무언가가 아님을 확인할 때 사용한다.
// age2 !== 100 
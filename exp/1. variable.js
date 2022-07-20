console.log(325245);

// 많은 사람들이 기본적으로 const를 사용하고, 
//variable을 업데이트를 하고 싶다면, let을 사용하는게 맞다.
//모든 변수를 업데이트 하는 경우는 거의 없다. 
//프로그램에서 몇몇 중요한 부분만 업데이트 해주면 된다. 
//그래서 우리는 대부분을 const로 만들어주고, 필요할 때만 let으로 사용해준다. 

//constant(상수) : 바뀌지 않는값 (계속 유지되는 값)
//값이 바뀔수 없음!!
//const는 값 업데이트를 하면 에러가 생김

const a = 5; //a가 5라는 값을 가지고 있다
const b = 2; // a,b는 바뀌지 않을 값

//let 새로운 것을 생성할 떄 사용하는 변수
let myName = "bokyung";  // myname은 바뀔수도 있는 값

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log("hello " + myName + "!");

myName = "bogungE"; //myname이 한번생기고 나면 다시 let을 선언해주지 않아도 업데이트 하고 싶을 떄 업데이트 해주면 됨
console.log("hello your new name is " + myName + "!");

///////////////////////////////////////////////////////////////////////////////////////////////////

//boolean은 true or false
// 0(off)꺼져있음 1(on)켜져있음
const amIFat = null; //"true"로 적으면 문자가 된다.
console.log(amIFat);

//null은 여기에 아무것도 없다는 것을 의미 false랑 전혀 다른 의미
//false는 값이 다르다는 거지만 null은 값이 아예 존재하지 않는것
//변수로 null을 적으면 비어있다기보다는 아무것도 없는상태로 저장을 한것이다.
//null은 절대 자연적으로 발생되지 않는다.
//null은 우리가 변수안에 어떠한 것이 "없다"는 것을 확실히 하기 위해 사용하는 것
//메모리에도 존재하고, 값이 주어졌는데, 그 값이 "비어있음"이라는 것

//undefined 존재하지 않는, 뭔가가 없는 어떤 데이터타입도 아닌 그런것
let something; //이렇게 정의해주지 않으면 undifined라고 생긴다.
console.log(something);
//내가 something이라는 변수를 만들어서 변수는 존재하는데, 값이 정의 되지 않는 상태를 의미
//따라서 컴퓨터 메모리 안에는 존재해서 공간은 있는데, 값이 들어가지 않은 상태
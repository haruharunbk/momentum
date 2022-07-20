// function
// function은 너가 계속 반복해서 사용할 수 있는 코드 조각이라고 생각하면 된다.
// function은 어떤 코드를 캡슐화해서, 실행을 여러번 할 수 있게 해준다.
// function은 ()가 필요하다. 
// function은 실행하게 될 코드블록이 필요하다.
// ()은 function을 실행하는 방법이다.

function sayHello(nameOfPerson, age){
	// 내가 여기 작성하는 것이 sayHello를 실행할 때마다 실행되는 거다.
	console.log("hello! my name is " +nameOfPerson+ " and I am "+age);
}

sayHello("bbo" , 10);
sayHello("taeng", 23);
sayHello("gangbong", 21);

// 이름을 A,B,C 여기서 A,B,C는 argument라는 인수인데
// argument는 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법이다.

function plus(a, b){
	console.log( a + b);
}

plus(2, 3);
plus(4, 5);
plus(5, 80);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 계산기
//NaN not a number 숫자가 아님
// 첫번째 변수인 a에는 첫번째 인수의 데이터가 전달되고, 
// 두번째 변수인 b에는 두번째 인수의 데이터가 전달된다.
function plus(a, b){
	// 여기 a, b는 함수 plus안에서만 존재하고 함수 밖에서는 존재하지 않는다. 
	console.log(a + b);
}
function divide(a, b){
	// 여기 a, b는 함수 divide안에서만 존재하고 함수 밖에서는 존재하지 않는다. 
	console.log(a / b);
}
plus(3, 4);
divide(98, 5);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const player2 = {
	name : "tangGu",
	sayHello : function(otherPersonName){
		console.log("hello! " + otherPersonName + " nice to meet you!");
	},
};

console.log(player2.name);
player2.sayHello("lynn"); //함수를 실행시켜줄수 있다. console.log()와 비슷한 형태
//우리만의 object와 function이다. 
player2.sayHello("bogogogogo");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const calculator = {
	plus: function(a, b){
		return a + b;
		// return대신 console.log를 사용하면 잘 작동하는 것처럼 보이지만
		// plusResult는 작동하지 많는다. 
		// 만약에 function을 변수에 할당하면 그 변수는 plus function의 결과 type를 가지게 될꺼야.
		// console.log의 plus는 무언가를 console.log만 할 뿐 return값을 주지 않는다. 우리가 원하는 상황이 아니다. 
		// 우리는 value를 도출해내고 싶은 것이다. return을 사용하지 않는것은 값은 보여지는데
		// 값을 꺼내지 못하고 사용하지는 못하는 것
	},
	minus : function(a, b){
		return a - b;
	},
	times : function(a, b){
		return a * b;
	},
	divide : function(a, b){
		return a / b;
	},
	power : function(a, b){
		return a ** b
	},
};

const plusResult = calculator.plus(2, 3); //5
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult); // 이 코드는 지금 상호의존적이다.
const divideResult = calculator.divide(timesResult, plusResult);  
const powerResult = calculator.power(divideResult, minusResult); 
// 따라서 변수에 function을 할당하면, 이 변수는 function의 return value를 가지게 되는 것이다. 
// 중요한 개념이지만 한번 return을 하면 함수는 끝난다. 
// return을 하면, function은 작동을 멈추고 결과값을 return하고 끝나버린다. 
// 앞에서 return을 해버리면 뒤에 작성한 코드는 실행되지 않고 함수가 끝나버린다.


console.log(plusResult);
//console.log(minusResult);
//console.log(timesResult);
//console.log(divideResult);
//console.log(powerResult);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const age = 96;
function calculateKrAge (ageOfForeigner){
	return ageOfForeigner + 2;
	// function안에서 무언가를  return하면 
	// 누군가가 function을 실행할 때, calculateKrAge(age)이것을 대체할 거다 
	// calculateKrAge(age)이 부분을 결과로 대체하는 것이다. 
}

const krAge = calculateKrAge(age); //96이라는 argument가 age자리로 대체되고, 
		//	= calulateKrAte(96);
		//  = function calulateKrAte(96){
		//		return (96 + 2);
		//    }
		//	= 98
console.log(krAge);
// function이 function의 밖과 소통하는 방법은 return을 사용하는 방법이다. 
// 다시말해서 무언가를 return하면 계산을 담당하는 function의 코드는 
// 그 function이 return하는 값과 같아질 것이다.

// cunction 내부에서 console.log 하는 것과는 큰차이가 있다. 
// function의 외부에서 값을 얻은 다음 그 값으로 우리가 원하는 모든 것을 할 수 있다. 